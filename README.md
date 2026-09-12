<div align="center">

<img src="public/logos/algorynlog.png" alt="Algoryn" height="60" />

# Algoryn

**The Modern Technical Interview Preparation Platform**

<p>
  <a href="https://www.algoryn.me"><strong>Explore Live Platform (algoryn.me)</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="https://github.com/neutron420/CodeCraft/issues"><strong>Report Bug</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="https://github.com/neutron420/CodeCraft/issues"><strong>Request Feature</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js_16-000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/Neon_PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Firebase_Auth-DD2C00?style=flat-square&logo=firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

</div>

---

## ⚡ About Algoryn

**Algoryn** is a high-performance interview preparation platform designed for software engineers targeting top tech companies. Instead of practicing randomly, Algoryn organizes **1,000+ real interview problems** across **100+ tier-1 companies** into **18 industry categories** — spanning FAANG, High-Frequency Trading (HFT), AI/ML, FinTech, and Cybersecurity.

Live at [**algoryn.me**](https://www.algoryn.me).

---

## ✨ Key Features

- **Company Problem Explorer**: Browse company-specific questions with real-time filters for difficulty (Easy / Medium / Hard), timeframe, source, and topic tags.
- **18 Industry Categories**: Drilldown navigation through FAANG, Quant/HFT, FinTech, Cloud, AI & Machine Learning, E-Commerce, and more.
- **Instant Two-Way Bookmarks**: Save problems with one click; bidirectional URL synchronization (`/dashboard?status=BOOKMARKED`) and cloud sync across devices.
- **System Design Tracks**: Dedicated roadmaps for Low-Level Design (LLD) and High-Level Design (HLD).
- **Community Hub**: Integrated sections for community Discussions, verified Interview Experiences, and global solver Leaderboards.
- **Multi-Tier Caching Pipeline**: Sub-millisecond in-memory server cache and Upstash Redis integration with hover prefetching for instantaneous page transitions.
- **Secure Authentication**: Google & GitHub OAuth powered by Firebase with 7-day session persistence and Neon PostgreSQL user sync.

---

## 🛠️ Tech Stack

<table>
  <tr>
    <th align="center" width="120">Frontend</th>
    <th align="center" width="120">Backend & DB</th>
    <th align="center" width="120">Authentication</th>
    <th align="center" width="120">Infrastructure</th>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn.simpleicons.org/nextdotjs/white" width="30" /><br /><sub>Next.js 16</sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="30" /><br /><sub>PostgreSQL</sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" width="30" /><br /><sub>Firebase Auth</sub>
    </td>
    <td align="center">
      <img src="https://cdn.simpleicons.org/vercel/white" width="30" /><br /><sub>Vercel</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" /><br /><sub>React 19</sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" width="30" /><br /><sub>Prisma ORM</sub>
    </td>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="30" /><br /><sub>Google OAuth</sub>
    </td>
    <td align="center">
      <img src="https://cdn.simpleicons.org/upstash" width="30" /><br /><sub>Upstash Redis</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30" /><br /><sub>TypeScript 5</sub>
    </td>
    <td align="center">
      <img src="https://cdn.simpleicons.org/neon" width="30" /><br /><sub>Neon DB</sub>
    </td>
    <td align="center">
      <img src="https://cdn.simpleicons.org/github/white" width="30" /><br /><sub>GitHub OAuth</sub>
    </td>
    <td align="center">
      <img src="https://cdn.simpleicons.org/bun" width="30" /><br /><sub>Bun &middot; npm</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="30" /><br /><sub>Tailwind CSS 4</sub>
    </td>
    <td align="center" colspan="3">
      <sub><b>UI & Utilities:</b> Radix UI &middot; Lucide Icons &middot; Sonner &middot; Motion &middot; Recharts</sub>
    </td>
  </tr>
</table>

---

## 🗄️ Database Architecture

```
Company ──────┐
              ├── CompanyProblem ──┐
Problem ──────┘                    │
  │                                │
  ├── ProblemTopic ── Topic        │
  │                                │
  └── UserSolvedProblem ──┐        │
                          │        │
User ─────────────────────┤        │
     ├── UserBookmark ────┤        │
     └── UserTargetCompany┘        │
                                   │
CommunityProblem ──────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** or **Bun 1.0+**
- **PostgreSQL** database (e.g., [Neon](https://neon.tech))
- **Firebase** project with Authentication enabled

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/neutron420/CodeCraft.git
cd CodeCraft

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local

# 4. Initialize Prisma client & database schema
npx prisma generate
npx prisma migrate deploy

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Configuration

Create a `.env.local` file in the project root:

```env
# Database (Neon Serverless PostgreSQL)
DATABASE_URL="postgresql://user:password@ep-host.region.neon.tech/neondb?sslmode=require"

# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"

# Optional: Upstash Redis (In-memory fallback runs automatically if omitted)
UPSTASH_REDIS_REST_URL="https://your-upstash-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-upstash-token"
```

---

## 📂 Project Structure

```
algoryn/
├── app/
│   ├── api/                    # API routes (auth, bookmarks, companies, problems)
│   ├── dashboard/              # Main dashboard (sidebar + problems explorer)
│   ├── login/                  # OAuth authentication page
│   ├── layout.tsx              # Root layout with SEO & metadata
│   └── page.tsx                # Landing page
├── components/
│   ├── company-problem-grid    # Question cards, filtering, sort, and pagination
│   ├── kodeprep-sidebar        # Category drilldown, community, & bookmarks
│   ├── kodeprep-logo           # Algoryn brand identity
│   ├── target-companies-bar    # Pinned target companies quick ribbon
│   └── ui/                     # UI components
├── lib/
│   ├── context/                # Auth & app context providers
│   ├── hooks/                  # React hooks (useBookmarks, useSolvedProblems)
│   ├── redis.ts                # Multi-tier caching pipeline
│   └── prisma.ts               # Prisma database client
└── public/
    └── logos/algorynlog.png    # Official Algoryn brand asset
```

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Compile optimized production build |
| `npm run lint` | Run ESLint validation |
| `npx prisma generate` | Regenerate Prisma client |
| `npx prisma migrate deploy` | Apply pending database migrations |
| `npx prisma studio` | Open Prisma Studio database browser |

---

## 🌐 Production Domains

- **Primary**: [https://www.algoryn.me](https://www.algoryn.me)
- **Apex**: [https://algoryn.me](https://algoryn.me)

---

## 📄 License

Open source under the [MIT License](LICENSE).

<div align="center">
  <sub>Designed & engineered by <a href="https://github.com/neutron420">neutron420</a></sub>
</div>
