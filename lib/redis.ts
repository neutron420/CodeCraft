import { Redis } from "@upstash/redis";

let redisClient: Redis | null = null;

export function getRedisClient(): Redis | null {
  if (redisClient) return redisClient;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.warn("[Redis] Upstash Redis credentials not detected; falling back to direct database execution.");
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


export async function getOrSetCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds = 3600
): Promise<T> {
  const redis = getRedisClient();

  if (!redis) {
    return fetcher();
  }

  try {
    const cached = await redis.get<T>(key);
    if (cached !== null && cached !== undefined) {
      return cached;
    }
  } catch (err) {
    console.warn(`[Redis] Cache read failed for key "${key}":`, err);
  }


  const freshData = await fetcher();

  if (freshData !== null && freshData !== undefined) {
    try {
      await redis.set(key, freshData, { ex: ttlSeconds });
    } catch (err) {
      console.warn(`[Redis] Cache write failed for key "${key}":`, err);
    }
  }

  return freshData;
}


export async function invalidateCache(...keys: string[]): Promise<void> {
  if (!keys.length) return;
  const redis = getRedisClient();
  if (!redis) return;

  try {
    await redis.del(...keys);
  } catch (err) {
    console.warn(`[Redis] Cache delete failed for keys [${keys.join(", ")}]:`, err);
  }
}

export async function invalidatePattern(pattern: string): Promise<void> {
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
