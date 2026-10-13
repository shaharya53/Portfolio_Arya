# Arya Shah — Developer Portfolio

A developer portfolio and technical showcase engineered with React, Vite, Tailwind CSS, and React Router, closely reproducing the distinctive design language, typography, floating pill navigation, 3D flip card, sticky stacked cards, and responsive behaviors inspired by https://henil.momley.in/.

## 🛠️ Tech Stack

- **Frontend Library:** React 18
- **Build Tool:** Vite 6
- **Routing:** React Router v6
- **Styling:** Tailwind CSS with custom theme extensions
- **Icons:** Lucide React
- **Typography:** Antonio (Display/Headings) & Inter (Body/UI) via Google Fonts
- **Theme:** Dark mode default with vibrant neon lime (`#d0ff71`) accents and custom pill toggle

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ or v22+)
- npm (v9+)

### Installation

```bash
# Clone or navigate to the repository
cd d:/Portfoliyo_Arya

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will run locally at **http://localhost:3000/**.

### Production Build

```bash
# Generate optimized production assets
npm run build

# Preview the production build locally
npm run preview
```

---

## 🧭 Implemented Routes

| Route | Description |
|---|---|
| `/` | **Homepage**: Hero split layout with interactive 3D card, What I Can Do accordion, Featured Projects sticky stack, Engineering Highlights, FAQs, Recent Blogs, Contact section |
| `/about` | **About Page**: Interactive tabbed showcase on desktop (About Me, What I Can Do, My Journey timeline, Tech Stack) & responsive stacked layout on mobile |
| `/projects` | **Projects Directory**: Sticky featured projects stack + 2-column filterable grid (All, Full-Stack, AI & ML, Systems & Cloud) |
| `/projects/civicfix-ai-reporting` | **CivicFix Case Study**: AI-powered civic issue reporting platform with PyTorch multimodal duplicate detection & PGvector |
| `/projects/real-estate-web-app` | **Real Estate Web App**: Full-stack property listings platform with MongoDB indexing & JWT authentication |
| `/projects/news-summary-ai` | **News Summary AI**: AI news aggregation and summarization with BeautifulSoup, Gemini AI & Django |
| `/projects/multiott-admin` | **Multi-OTT Admin**: High-throughput multi-tenant streaming administration powerhouse |
| `/projects/florese-jewels` | **Florese Jewels**: Bespoke fine jewelry e-commerce & customer intelligence platform |
| `/projects/bicab-ride-sharing` | **BiCab**: Urban ride-sharing platform with WebSocket live tracking |
| `/projects/momley-pharma` | **Momley Pharmaceuticals**: Corporate pharmaceutical portal & dynamic CMS |
| `/projects/vibhuti-insurance` | **Vibhuti Insurance**: Enterprise insurance broker underwriting & claims ERP |
| `/projects/ptks-connect` | **PTKS Connect**: Digital sports media network & custom HTML5 video engine |
| `/projects/shree-sai-packaging` | **Shree Sai Packaging**: Industrial packaging portal & B2B sample pipeline |
| `/projects/ipwas-app-store` | **IPWAS App Store**: Multi-sided application marketplace & PWA repository |
| `/projects/netai-streaming` | **NetAI**: Cinematic streaming platform with AI recommendation concierge |
| `/projects/blink-analytics-scraper` | **BL!NK Analytics**: Polyglot streaming intelligence & web scraping telemetry |
| `/blogs` | **Blogs / Insights**: Hero most-viewed article card, category filters, and 2-column responsive article grid |
| `/blogs/react-vs-nextjs-frontend-architecture` | **Article**: React vs Next.js Frontend Architecture deep-dive with code blueprints |
| `/blogs/typescript-vs-javascript-modern-standard` | **Article**: TypeScript vs JavaScript: The Modern Frontend Standard |
| `/blogs/tailwind-css-vs-vanilla-css-speed-vs-flexibility` | **Article**: Tailwind CSS vs Vanilla CSS: Speed vs Flexibility |
| `/blogs/local-storage-vs-session-storage-vs-cookies` | **Article**: Local Storage vs Session Storage vs Cookies |
| `/blogs/server-components-vs-client-components-nextjs` | **Article**: Server Components vs Client Components in Next.js |
| `/blogs/server-vs-client-components-nextjs` | Alias route resolving to Server Components vs Client Components |
| `/blogs/state-management-zustand-redux-context` | **Article**: State Management in 2026: Zustand, Redux, or Context? |
| `/contact` | **Contact Page**: Dedicated route with validated form and FAQ accordion |
| `/*` | **404 Not Found Page**: Custom branded fallback page |

---

## 🎨 Visual Design System

- **Background Palette:**
  - Base Background: `#141415`
  - Cards & Surfaces: `#1a1a1c`, `#1f1f22`, `#252528`, `#181819`
- **Accent Colors:**
  - Primary Accent: Neon Lime `#d0ff71`
  - Hover States: `#bdf354`
  - Subtle Badges: `rgba(208, 255, 113, 0.05)` with `border-[#d0ff71]/40`
- **Typography:**
  - Headings / Display: `Antonio` (bold uppercase condensed styling)
  - Body & UI: `Inter` (300 light to 600 semi-bold weights)
- **Key Interactions:**
  - Floating pill navigation with backdrop blur
  - Interactive 3D flip card with waving hand badge
  - Scroll-driven sticky stacked project cards
  - Accordion expand/collapse for services and FAQs
  - Form validation with accessible error indicators and mailto fallback
  - Bottom-centered theme pill switch
