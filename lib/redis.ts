import { Redis } from "@upstash/redis";

let redisClient: Redis | null = null;
let isRedisWarnLogged = false;
interface MemoryCacheEntry {
  data: unknown;
  expiresAt: number;
}

const memoryCache = new Map<string, MemoryCacheEntry>();
const MAX_MEMORY_CACHE_ENTRIES = 500;

function pruneMemoryCacheIfNeeded() {
  if (memoryCache.size > MAX_MEMORY_CACHE_ENTRIES) {
    const now = Date.now();
    for (const [k, v] of memoryCache.entries()) {
      if (v.expiresAt <= now) {
        memoryCache.delete(k);
      }
    }
    if (memoryCache.size > MAX_MEMORY_CACHE_ENTRIES) {
      let removed = 0;
      for (const k of memoryCache.keys()) {
        memoryCache.delete(k);
        removed++;
        if (removed >= 100) break;
      }
    }
  }
}

export function getRedisClient(): Redis | null {
  if (redisClient) return redisClient;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    if (!isRedisWarnLogged) {
      isRedisWarnLogged = true;
      console.info("[Cache] Upstash Redis credentials not detected; using high-speed in-memory server cache.");
    }
    return null;
  }

  try {
    redisClient = new Redis({
      url,
      token,
    });
    return redisClient;
  } catch (err) {
    console.error("[Redis] Failed to initialize Upstash Redis client:", err);
    return null;
  }
}

function isDynamicServerError(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "digest" in err &&
    typeof (err as { digest: unknown }).digest === "string" &&
    (err as { digest: string }).digest.includes("DYNAMIC_SERVER_USAGE")
  );
}

export async function getOrSetCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds = 3600
): Promise<T> {
  const now = Date.now();

  // 1. FASTEST TIER: In-Memory Cache (<0.1ms)
  const memoryHit = memoryCache.get(key);
  if (memoryHit && memoryHit.expiresAt > now) {
    return memoryHit.data as T;
  }

  const redis = getRedisClient();

  // 2. SECOND TIER: Upstash Redis (if configured)
  if (redis) {
    try {
      const cached = await redis.get<T>(key);
      if (cached !== null && cached !== undefined) {
        pruneMemoryCacheIfNeeded();
        memoryCache.set(key, {
          data: cached,
          expiresAt: now + Math.min(ttlSeconds, 300) * 1000, // 5 min local memory retention
        });
        return cached;
      }
    } catch (err) {
      if (isDynamicServerError(err)) {
        throw err;
      }
      console.warn(`[Redis] Cache read failed for key "${key}":`, err);
    }
  }

  // 3. DATABASE TIER: Fetch fresh data
  const freshData = await fetcher();

  if (freshData !== null && freshData !== undefined) {
    // Populate In-Memory Cache immediately
    pruneMemoryCacheIfNeeded();
    memoryCache.set(key, {
      data: freshData,
      expiresAt: now + ttlSeconds * 1000,
    });

    // Populate Redis
    if (redis) {
      try {
        await redis.set(key, freshData, { ex: ttlSeconds });
      } catch (err) {
        if (isDynamicServerError(err)) {
          throw err;
        }
        console.warn(`[Redis] Cache write failed for key "${key}":`, err);
      }
    }
  }

  return freshData;
}

export async function invalidateCache(...keys: string[]): Promise<void> {
  if (!keys.length) return;
  for (const k of keys) {
    memoryCache.delete(k);
  }
  const redis = getRedisClient();
  if (!redis) return;

  try {
    await redis.del(...keys);
  } catch (err) {
    console.warn(`[Redis] Cache delete failed for keys [${keys.join(", ")}]:`, err);
  }
}

export async function invalidatePattern(pattern: string): Promise<void> {
  const regex = new RegExp("^" + pattern.replace(/\*/g, ".*") + "$");
  for (const k of memoryCache.keys()) {
    if (regex.test(k)) {
      memoryCache.delete(k);
    }
  }

  const redis = getRedisClient();
  if (!redis) return;

  try {
    const matchingKeys = await redis.keys(pattern);
    if (matchingKeys && matchingKeys.length > 0) {
      await redis.del(...matchingKeys);
    }
  } catch (err) {
    console.warn(`[Redis] Cache pattern invalidation failed for pattern "${pattern}":`, err);
  }
}
