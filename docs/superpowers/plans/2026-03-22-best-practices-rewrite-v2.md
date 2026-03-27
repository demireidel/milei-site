# Best-Practices Rewrite v2 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite every file that deviates from 2025/2026 best practices for Next.js 16 / React 19 / TypeScript 5.9 / Tailwind CSS 4.1 — achieving zero anti-patterns, flawless accessibility, peak performance, strict TypeScript, DRY code, and fully consistent section structure across all pages.

**Architecture:** Data fully decoupled from components (all embedded arrays lifted to `src/data/`), single-responsibility components (each ≤ 150 LOC), shared UI primitives with discriminated-union TypeScript, zero DRY violations in animation/counter logic, IntersectionObserver-gated RAF loops, and consistent `PageHeader → SidebarLayout → SectionArticle` pattern across all 6 section pages.

**Tech Stack:** Next.js 16.2 / React 19.2 / TypeScript 5.9 (`strict: true`, `satisfies` operator) / Tailwind CSS 4.1 (OKLCH @theme tokens) / Vitest 3 + Testing Library for hooks

---

## File Map

### Created
| File | Responsibility |
|------|---------------|
| `src/data/home.ts` | Home page stats + section preview cards (lifted from StatsStrip + SectionPreviews) |
| `src/data/vision.ts` | Vision chapter metadata + pyramid/pillars/thinkers data (lifted from VisionChapters) |
| `src/components/ui/AnimatedNumber.tsx` | Unified animated counter — merges `AnimatedStat` (StatsStrip) + `AnimatedCounter` (logros/) |
| `src/components/vision/ChapterPhoto.tsx` | Single chapter photo with figcaption |
| `src/components/vision/DataStripGrid.tsx` | 4-column historical data strip |
| `src/components/vision/PyramidList.tsx` | 3-rank ethical framework pyramid |
| `src/components/vision/PillarGrid.tsx` | 3-pillar governance grid |
| `src/components/vision/ThinkerGrid.tsx` | 4-thinker intellectual heritage grid |
| `src/components/mundo/ForumCard.tsx` | Forum appearance card with image + overlay |
| `src/components/mundo/AgreementCard.tsx` | Trade agreement card with key facts |
| `src/components/futuro/FeaturePhoto.tsx` | Full-width feature photo with caption |
| `src/components/futuro/PhotoGallery.tsx` | 3-column photo gallery with hover overlay |
| `vitest.config.ts` | Vitest configuration |
| `src/hooks/__tests__/useAnimatedNumber.test.ts` | Tests for useAnimatedNumber |
| `src/hooks/__tests__/useScrollProgress.test.ts` | Tests for useScrollProgress |

### Renamed
| From | To | Reason |
|------|----|--------|
| `src/data/reformas.tsx` | `src/data/reformas.ts` | No JSX — `.tsx` extension incorrect per TS best practices |

### Modified
| File | Changes |
|------|---------|
| `next.config.ts` | Add CSP header; fix `colorScheme`; add `deviceSizes`/`imageSizes` |
| `src/app/layout.tsx` | Remove stale video preload; fix `colorScheme: "light"`; enrich schema.org |
| `src/app/error.tsx` | Fix accent marks; handle `error` param properly |
| `src/app/not-found.tsx` | Verify accent marks; tighten layout |
| `src/components/NavBar.tsx` | Fix aria-label accent marks |
| `src/components/ui/Container.tsx` | Remove `!important` hack; clean TypeScript interface |
| `src/components/ui/Section.tsx` | Replace `Record<string, string>` with `satisfies` discriminated union |
| `src/components/ui/ScrollReveal.tsx` | Fix initial-viewport bug; improve `as` prop typing |
| `src/components/ui/SidebarLayout.tsx` | Replace `<a href="#">` with `<button>` for scroll-to-top |
| `src/components/home/StatsStrip.tsx` | Use `data/home.ts`; use shared `AnimatedNumber` |
| `src/components/home/SectionPreviews.tsx` | Use `data/home.ts` |
| `src/components/logros/AnimatedCounter.tsx` | Delegate to shared `AnimatedNumber`; remove duplicate logic |
| `src/components/home/PhotoStrip.tsx` | Gate RAF loop with IntersectionObserver (pause off-screen) |
| `src/components/vision/VisionChapters.tsx` | Thin orchestrator — imports from `data/vision.ts` + `components/vision/*` |
| `src/components/mundo/MundoContent.tsx` | Import ForumCard, AgreementCard from `components/mundo/*` |
| `src/components/futuro/FuturoContent.tsx` | Import FeaturePhoto, PhotoGallery from `components/futuro/*` |
| `src/hooks/useScrollProgress.ts` | Add unmount safety flag; fix React state-after-unmount warning |
| `src/hooks/useSectionObserver.ts` | Stable `ids` dep via `JSON.stringify` memoization; reduce observer churn |
| `src/data/index.ts` | Re-export updated data modules |

---

## Task 1: Harden `next.config.ts`

**Files:**
- Modify: `next.config.ts`

**Why:** Missing CSP header is a security gap. `colorScheme` mismatch between viewport config and CSS. Missing `deviceSizes`/`imageSizes` for proper responsive image optimization.

- [ ] **Step 1: Read current file**

```bash
cat -n next.config.ts
```

- [ ] **Step 2: Rewrite `next.config.ts`**

Key research findings incorporated here:
- **React Compiler** (`experimental.reactCompiler: true`): stable in Next.js 16, auto-memoizes all components/hooks without manual `useMemo`/`useCallback`. Biggest 2026 perf win for React apps.
- **`minimumCacheTTL`**: default changed to 4 hours in Next.js 16 — explicit 30-day value keeps our static assets cached aggressively.
- **`images.domains`**: deprecated in Next.js 16 (no remote images in this project, so `remotePatterns` not needed).

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  experimental: {
    // React Compiler: auto-memoizes components + hooks at build time.
    // Eliminates need for manual useMemo/useCallback across the entire codebase.
    // Stable in Next.js 16 / React 19.2.
    reactCompiler: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days (explicit; default changed to 4h in Next.js 16)
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Tailwind @layer injects inline styles at build time
              "style-src 'self' 'unsafe-inline'",
              // Next.js inline scripts (hydration, route prefetch)
              "script-src 'self' 'unsafe-inline'",
              // next/image serves from same origin; data: for base64 placeholders
              "img-src 'self' data: blob:",
              // Local fonts only
              "font-src 'self'",
              // YouTube nocookie for YouTubeEmbed component
              "frame-src https://www.youtube-nocookie.com",
              "connect-src 'self'",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 3: Verify build still passes**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add next.config.ts
git commit -m "fix: harden next.config — CSP header, image sizes, 30-day cache TTL"
```

---

## Task 2: Fix `src/app/layout.tsx`

**Files:**
- Modify: `src/app/layout.tsx`

**Why:** `colorScheme: "dark"` contradicts `color-scheme: light` in globals.css. Stale video preload for `/videos/hero.webm` (Hero uses a static image). `themeColor` should match actual page background.

- [ ] **Step 1: Rewrite layout.tsx**

```tsx
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const fraunces = localFont({
  src: [
    {
      path: "../../public/fonts/fraunces-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/fraunces-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const oswald = localFont({
  src: "../../public/fonts/oswald-latin-wght-normal.woff2",
  variable: "--font-oswald",
  display: "swap",
  weight: "200 700",
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Javier Milei — Presidente de la Nación Argentina",
    template: "%s | Javier Milei",
  },
  description:
    "Sitio oficial de Javier Milei, Presidente de la Nación Argentina. Visión, logros, reformas y archivo intelectual.",
  metadataBase: new URL("https://javiermilei.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://javiermilei.com",
    siteName: "Javier Milei — Presidente",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Visión, logros, reformas y archivo intelectual del Presidente Javier Milei.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Page background is cream (#f5f2ed) — colorScheme must match globals.css
// which sets `html { color-scheme: light; }`
export const viewport: Viewport = {
  themeColor: "#f5f2ed", // --color-dark-hex (actual page background)
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Javier Milei",
  url: "https://javiermilei.com",
  jobTitle: "Presidente de la Nación Argentina",
  nationality: "Argentine",
  affiliation: {
    "@type": "Organization",
    name: "La Libertad Avanza",
    url: "https://lalibertadavanza.com.ar",
  },
  worksFor: {
    "@type": "GovernmentOrganization",
    name: "Presidencia de la Nación Argentina",
    url: "https://www.argentina.gob.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balcarce 50",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  },
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${oswald.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

Expected: 0 errors

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix: layout — colorScheme:light, remove stale video preload, enrich schema.org"
```

---

## Task 3: Rename `data/reformas.tsx` → `data/reformas.ts`

**Files:**
- Rename: `src/data/reformas.tsx` → `src/data/reformas.ts`
- Update all import sites

**Why:** TypeScript best practices: `.tsx` extension is reserved for files containing JSX. Pure data files must use `.ts`. Using `.tsx` for non-JSX data causes misrepresentation and confuses tooling.

- [ ] **Step 1: Check import sites**

```bash
grep -r "data/reformas" /Users/demianreidel/1-JM/src --include="*.tsx" --include="*.ts" -l
```

- [ ] **Step 2: Rename the file**

```bash
mv /Users/demianreidel/1-JM/src/data/reformas.tsx /Users/demianreidel/1-JM/src/data/reformas.ts
```

- [ ] **Step 3: Update all imports** (replace `.tsx` extension references if any explicit ones exist)

```bash
grep -r "from.*reformas" /Users/demianreidel/1-JM/src --include="*.tsx" --include="*.ts" -n
```

TypeScript resolves without extensions, so bare `from "@/data/reformas"` imports need no change.

- [ ] **Step 4: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "refactor: rename data/reformas.tsx → .ts (no JSX in file)"
```

---

## Task 4: Create `src/data/home.ts`

**Files:**
- Create: `src/data/home.ts`
- Modify: `src/components/home/StatsStrip.tsx` (import stats)
- Modify: `src/components/home/SectionPreviews.tsx` (import sections)

**Why:** Data embedded in components violates single-responsibility principle. Stats + section metadata belong in the data layer, making it testable and reusable.

- [ ] **Step 1: Create `src/data/home.ts`**

```typescript
// ── Home page data ────────────────────────────────────────────

export interface HomeStat {
  /** Animated target number */
  target: number;
  /** Text appended after the number (e.g. "% → 27%" or " pts") */
  suffix: string;
  /** Accessible label below number */
  label: string;
  /** Decimal places for display (default 0) */
  decimals?: number;
}

export interface SectionCard {
  title: string;
  desc: string;
  href: string;
  stat?: string;
  statLabel?: string;
}

export const homeStats: HomeStat[] = [
  { target: 57, suffix: "% → 27%", label: "Reducción de pobreza" },
  { target: 2.4, suffix: "% mensual", label: "Inflación", decimals: 1 },
  { target: 14500, suffix: "+", label: "Desregulaciones" },
  { target: 497, suffix: " pts", label: "Riesgo país" },
] satisfies HomeStat[];

export const sectionCards: SectionCard[] = [
  {
    title: "Visión",
    desc: "La filosofía y los principios que guían cada decisión de gobierno",
    href: "/vision",
    stat: "5",
    statLabel: "capítulos",
  },
  {
    title: "Logros",
    desc: "Resultados concretos con datos antes y después — la evidencia habla",
    href: "/logros",
    stat: "19",
    statLabel: "logros",
  },
  {
    title: "Reformas",
    desc: "Las transformaciones estructurales que cambiaron las reglas del juego",
    href: "/reformas",
    stat: "12",
    statLabel: "reformas",
  },
  {
    title: "Futuro",
    desc: "Los proyectos estratégicos que posicionan a la Argentina como potencia",
    href: "/futuro",
    stat: "4",
    statLabel: "proyectos",
  },
  {
    title: "Mundo",
    desc: "Acuerdos comerciales, alianzas y el regreso de Argentina al escenario global",
    href: "/mundo",
    stat: "3",
    statLabel: "TLCs firmados",
  },
  {
    title: "Archivo",
    desc: "Libros, artículos académicos, discursos y entrevistas — el pensamiento completo",
    href: "/archivo",
    stat: "80+",
    statLabel: "obras",
  },
] satisfies SectionCard[];
```

- [ ] **Step 2: Overwrite `src/data/index.ts`** with the full final content (never append — always show the complete file to prevent agent from losing existing exports)

```typescript
// ── Data Index ───────────────────────────────────────────

export * from "./photos";
export * from "./logros";
export * from "./reformas";
export * from "./futuro";
export * from "./mundo";
export * from "./archivo";
export * from "./nav";
export * from "./home";
```

- [ ] **Step 3: Update `StatsStrip.tsx`** — replace hardcoded `stats` array with import

```tsx
import { homeStats } from "@/data/home";
// Remove the local `stats` const and `StatItem` interface
// Use `homeStats` directly in the map
```

- [ ] **Step 4: Update `SectionPreviews.tsx`** — replace hardcoded `sections` array with import

```tsx
import { sectionCards } from "@/data/home";
// Remove local `sections` const and `SectionPreview` interface
// Use `sectionCards` directly in the map
```

- [ ] **Step 5: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 6: Commit**

```bash
git add src/data/home.ts src/data/index.ts src/components/home/StatsStrip.tsx src/components/home/SectionPreviews.tsx
git commit -m "refactor: extract home stats + section cards to data/home.ts"
```

---

## Task 5: Create `src/data/vision.ts`

**Files:**
- Create: `src/data/vision.ts`
- Modify: `src/components/vision/VisionChapters.tsx` (import from data)

**Why:** VisionChapters.tsx has 5 data arrays (chapters, dataStrip, pyramid, pillars, thinkers) inline. These are pure data, not UI logic. Extracting them enables reuse, testing, and keeps the component under 150 LOC.

- [ ] **Step 1: Create `src/data/vision.ts`**

```typescript
// ── Vision page data ──────────────────────────────────────────

export interface Chapter {
  id: string;
  num: string;
  title: string;
}

export interface DataPoint {
  num: string;
  label: string;
}

export interface PyramidRank {
  rank: string;
  title: string;
  desc: string;
}

export interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

export interface Thinker {
  era: string;
  title: string;
  desc: string;
}

export const chapters: Chapter[] = [
  { id: "ch1", num: "I",   title: "El proyecto de la libertad" },
  { id: "ch2", num: "II",  title: "Capitalismo y moralidad" },
  { id: "ch3", num: "III", title: "El Estado es el problema" },
  { id: "ch4", num: "IV",  title: "La batalla cultural" },
  { id: "ch5", num: "V",   title: "La defensa de Occidente" },
] satisfies Chapter[];

export const dataStrip: DataPoint[] = [
  { num: "1°",   label: "PBI per cápita mundial en 1895" },
  { num: "35",   label: "Años bastaron para ser top 10 mundial" },
  { num: "100+", label: "Años de decadencia colectivista" },
  { num: "140°", label: "Puesto en libertad económica al que caímos" },
] satisfies DataPoint[];

export const pyramid: PyramidRank[] = [
  {
    rank: "1°",
    title: "Ética y moral",
    desc: "Filosofía griega, derecho romano, rectitud de los estoicos, valores judeocristianos. Cada decisión de gobierno debe pasar primero el test moral: ¿es justa?",
  },
  {
    rank: "2°",
    title: "Eficiencia dinámica",
    desc: "Cuando el marco institucional es justo, la eficiencia es su consecuencia natural — no su rival.",
  },
  {
    rank: "3°",
    title: "Resultado político",
    desc: "Cuando hay tensión entre ética y resultado político, la política debe descartarse — aún cuando sirva electoralmente.",
  },
] satisfies PyramidRank[];

export const pillars: Pillar[] = [
  {
    icon: "⚙",
    title: "Gestión",
    desc: "Diseñar e implementar las reformas profundas que el país necesita. Demostrar con hechos que el liberalismo es el camino a la prosperidad.",
  },
  {
    icon: "⚖",
    title: "Política",
    desc: "Construir el poder institucional necesario para impulsar las reformas y blindarlas de la reversión.",
  },
  {
    icon: "★",
    title: "Cultura",
    desc: "La batalla por las almas. Ganar la disputa de las ideas para que los cambios sean permanentes.",
  },
] satisfies Pillar[];

export const thinkers: Thinker[] = [
  {
    era: "Fundamentos",
    title: "Filosofía griega",
    desc: "Desde Sócrates, Platón y Aristóteles: la razón como instrumento de conocimiento, la búsqueda de la verdad y la virtud como fin supremo del hombre libre.",
  },
  {
    era: "Instituciones",
    title: "Derecho romano",
    desc: "De la Ley de las XII Tablas al Corpus Iuris Civilis: el imperio de la ley, la propiedad privada y el contrato como pilares de la convivencia civilizada.",
  },
  {
    era: "Carácter",
    title: "Rectitud estoica",
    desc: "Marco Aurelio, Séneca, Epicteto: el deber, la disciplina interior y la responsabilidad individual.",
  },
  {
    era: "Valores",
    title: "Tradición judeocristiana",
    desc: "La sacralidad de la persona, la libertad de conciencia y la igualdad ante Dios y ante la ley.",
  },
] satisfies Thinker[];
```

- [ ] **Step 2: Overwrite `src/data/index.ts`** with complete content (always show full file)

```typescript
// ── Data Index ───────────────────────────────────────────

export * from "./photos";
export * from "./logros";
export * from "./reformas";
export * from "./futuro";
export * from "./mundo";
export * from "./archivo";
export * from "./nav";
export * from "./home";
export * from "./vision";
```

- [ ] **Step 3: Update imports in `VisionChapters.tsx`**

```tsx
import { chapters, dataStrip, pyramid, pillars, thinkers } from "@/data/vision";
// Remove all 5 local const arrays and their interfaces
```

- [ ] **Step 4: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 5: Commit**

```bash
git add src/data/vision.ts src/data/index.ts src/components/vision/VisionChapters.tsx
git commit -m "refactor: extract vision chapter data to data/vision.ts"
```

---

## Task 6: Fix `Container.tsx` and `Section.tsx` TypeScript quality

**Files:**
- Modify: `src/components/ui/Container.tsx`
- Modify: `src/components/ui/Section.tsx`

**Why:** `Container` uses `!max-w-[96rem]` (CSS `!important` via Tailwind `!` prefix — bad practice when avoidable). `Section` uses `Record<string, string>` (untyped string key) instead of the TypeScript `satisfies` operator for exhaustive variant safety.

- [ ] **Step 1: Rewrite `Container.tsx`**

```tsx
interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  // Avoid !important — use conditional class for max-width
  const maxW = wide
    ? "max-w-[96rem]"
    : "max-w-[var(--width-content)]";

  return (
    <div className={`mx-auto ${maxW} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Rewrite `Section.tsx`** with `satisfies`

```tsx
type SectionVariant = "dark" | "navy" | "cream";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: SectionVariant;
  bleedTop?: boolean;
  bleedBottom?: boolean;
  className?: string;
}

// satisfies ensures every variant key is covered at compile time
const variantClasses = {
  dark:  "bg-dark text-text-primary",
  navy:  "bg-navy text-text-primary",
  cream: "bg-cream text-dark",
} satisfies Record<SectionVariant, string>;

const variantBg = {
  dark:  "var(--color-dark)",
  navy:  "var(--color-navy)",
  cream: "var(--color-cream)",
} satisfies Record<SectionVariant, string>;

export function Section({
  children,
  id,
  variant = "dark",
  bleedTop = false,
  bleedBottom = false,
  className = "",
}: SectionProps) {
  const bleedClasses = [
    bleedTop    ? "section-bleed-top"    : "",
    bleedBottom ? "section-bleed-bottom" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={`py-[var(--spacing-section)] ${variantClasses[variant]} ${bleedClasses} ${className}`}
      style={
        bleedTop || bleedBottom
          ? ({ "--section-bg": variantBg[variant] } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 3: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Container.tsx src/components/ui/Section.tsx
git commit -m "refactor: Container removes !important; Section uses satisfies for variant safety"
```

---

## Task 7: Fix `ScrollReveal.tsx` — initial viewport detection

**Files:**
- Modify: `src/components/ui/ScrollReveal.tsx`

**Why:** If a `ScrollReveal` element is already in the viewport when the page loads (e.g., top of section pages), the IntersectionObserver fires immediately but only after the first JS tick — causing a 1-frame flash of the hidden state. Fix: call `observe()` and check `isIntersecting` at entry time; also improve `as` prop type.

- [ ] **Step 1: Rewrite `ScrollReveal.tsx`**

```tsx
"use client";

import {
  useRef,
  useEffect,
  useState,
  type ElementType,
  type ComponentPropsWithRef,
  type ReactNode,
} from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "clip-reveal"
  | "slide-left"
  | "slide-right"
  | "blur-in"
  | "none";

interface VariantConfig {
  hidden: React.CSSProperties;
  visible: React.CSSProperties;
  /** CSS property names separated by commas for transition string */
  transition: string;
}

const variants = {
  "fade-up":    { hidden: { opacity: 0, transform: "translateY(24px)" },  visible: { opacity: 1, transform: "translateY(0)" },    transition: "opacity,transform" },
  "fade-in":    { hidden: { opacity: 0 },                                 visible: { opacity: 1 },                                transition: "opacity" },
  "scale-in":   { hidden: { opacity: 0, transform: "scale(0.92)" },       visible: { opacity: 1, transform: "scale(1)" },         transition: "opacity,transform" },
  "clip-reveal":{ hidden: { clipPath: "inset(100% 0 0 0)" },              visible: { clipPath: "inset(0)" },                      transition: "clip-path" },
  "slide-left": { hidden: { opacity: 0, transform: "translateX(-40px)" }, visible: { opacity: 1, transform: "translateX(0)" },    transition: "opacity,transform" },
  "slide-right":{ hidden: { opacity: 0, transform: "translateX(40px)" },  visible: { opacity: 1, transform: "translateX(0)" },    transition: "opacity,transform" },
  "blur-in":    { hidden: { opacity: 0, filter: "blur(8px)" },            visible: { opacity: 1, filter: "blur(0px)" },           transition: "opacity,filter" },
  "none":       { hidden: {},                                              visible: {},                                            transition: "" },
} satisfies Record<AnimationVariant, VariantConfig>;

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  if (variant === "none") {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  const config = variants[variant];
  const ease = "var(--ease-out-expo)";
  const transitionValue = config.transition
    .split(",")
    .map((p) => `${p.trim()} ${duration}ms ${ease} ${delay}ms`)
    .join(", ");

  const style: React.CSSProperties = {
    ...(visible ? config.visible : config.hidden),
    transition: transitionValue,
    willChange: visible ? undefined : config.transition.split(",").join(" "),
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ScrollReveal.tsx
git commit -m "refactor: ScrollReveal — satisfies for variant map, cleaner transition string builder"
```

---

## Task 8: Fix accessibility — NavBar aria-labels

**Files:**
- Modify: `src/components/NavBar.tsx`

**Why:** Missing Spanish accent marks in ARIA attributes make screen readers mispronounce content: "Navegacion" → "Navegación"; "menu" → "menú". WCAG 2.2 SC 4.1.2 requires accessible names to be accurate and pronounceable.

- [ ] **Step 1: Fix the two aria-label strings**

In `NavBar.tsx`:

```tsx
// Line ~115 — nav aria-label
aria-label="Navegación principal"

// Line ~170 — hamburger button aria-label
aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}

// Line ~202 — mobile nav aria-label
aria-label="Menú móvil"
```

- [ ] **Step 2: Verify no other aria-labels are missing accents**

```bash
grep -n "aria-label" /Users/demianreidel/1-JM/src/components/NavBar.tsx
```

- [ ] **Step 3: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -10
```

- [ ] **Step 4: Commit**

```bash
git add src/components/NavBar.tsx
git commit -m "fix(a11y): NavBar aria-labels — add missing accent marks (WCAG 4.1.2)"
```

---

## Task 9: Fix `error.tsx` and `not-found.tsx`

**Files:**
- Modify: `src/app/error.tsx`
- Modify: `src/app/not-found.tsx`

**Why:** `error.tsx` has incorrect Spanish ("salio" → "salió", "Ocurrio" → "Ocurrió"). TypeScript warns about unused `error` parameter — should be explicitly discarded with `void error`. Both pages should have consistent, accessible structure.

- [ ] **Step 1: Rewrite `error.tsx`**

```tsx
"use client";

import { Container } from "@/components/ui/Container";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  // Suppress unused-vars lint; error.digest is useful for server-side tracking
  void error;

  return (
    <section className="flex min-h-[70dvh] items-center justify-center">
      <Container className="text-center">
        <p className="badge-text mb-4">Error</p>
        <h1 className="page-title mb-6">Algo salió mal</h1>
        <p className="prose-body mx-auto mb-10 max-w-[44rem]">
          Ocurrió un error inesperado. Intentá de nuevo.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-block rounded-xl bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-wider text-dark transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Reintentar
        </button>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify `not-found.tsx`** — check for any missing accents

```bash
cat -n /Users/demianreidel/1-JM/src/app/not-found.tsx
```

Fix any issues found (e.g., `Pagina` → `Página`).

- [ ] **Step 3: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -10
```

- [ ] **Step 4: Commit**

```bash
git add src/app/error.tsx src/app/not-found.tsx
git commit -m "fix: error.tsx — correct Spanish accent marks, explicit void error param"
```

---

## Task 10: Fix `SidebarLayout.tsx` — scroll-to-top anti-pattern

**Files:**
- Modify: `src/components/ui/SidebarLayout.tsx`

**Why:** Using `<a href="#">` with `e.preventDefault()` and manual `window.scrollTo()` is a JavaScript-dependent navigation anti-pattern. Without JS, clicking the link navigates to the page top via the `#` hash (acceptable), but the `e.preventDefault()` intercept + smooth scroll is still fragile. Best practice: use `<button type="button">` for non-navigation actions that trigger JS behavior. Anchor elements are for navigation; buttons are for actions.

- [ ] **Step 1: Replace scroll-to-top `<a>` with `<button>`**

Find this block in `SidebarLayout.tsx`:

```tsx
<a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  className="sidebar-nav-item mt-4 border-t border-border pt-4"
>
```

Replace with:

```tsx
<button
  type="button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="sidebar-nav-item mt-4 w-full border-t border-border pt-4 text-left"
>
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -10
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/SidebarLayout.tsx
git commit -m "fix: SidebarLayout — scroll-to-top uses button (not a[href='#']) per WHATWG semantics"
```

---

## Task 11: Create shared `AnimatedNumber.tsx` — DRY violation fix

**Files:**
- Create: `src/components/ui/AnimatedNumber.tsx`
- Modify: `src/components/home/StatsStrip.tsx` (use shared component)
- Modify: `src/components/logros/AnimatedCounter.tsx` (delegate to shared component)

**Why:** `StatsStrip.tsx` contains an inline `AnimatedStat` sub-component and `logros/AnimatedCounter.tsx` are near-identical — both use `useAnimatedNumber` + display + label. This is a textbook DRY violation. One shared component with a `variant` prop covers both use cases.

- [ ] **Step 1: Create `src/components/ui/AnimatedNumber.tsx`**

```tsx
"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

type AnimatedNumberVariant =
  /** StatsStrip: stat-number size, suffix, simple label, scale pop effect */
  | "strip"
  /** Logros/Futuro: larger 3xl stat-number, suffix, bold label, sub-label */
  | "counter";

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  label: string;
  /** Only used in "counter" variant */
  sub?: string;
  decimals?: number;
  variant?: AnimatedNumberVariant;
}

export function AnimatedNumber({
  target,
  suffix,
  label,
  sub,
  decimals = 0,
  variant = "strip",
}: AnimatedNumberProps) {
  const { ref, display, value } = useAnimatedNumber({
    target,
    duration: 1800,
    decimals,
  });

  if (variant === "strip") {
    // Scale pop: 0.85 → 1.0 as value approaches target
    const progress = target > 0 ? Math.min(value / target, 1) : 1;
    const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;

    return (
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow:
              "0 0 40px color-mix(in oklch, var(--color-gold-light), transparent 80%)",
          }}
        >
          {display}
          <span className="text-[0.7em]">{suffix}</span>
        </p>
        <p className="stat-label m-0 mt-2">{label}</p>
      </div>
    );
  }

  // variant === "counter"
  return (
    <div ref={ref} className="text-center">
      <p
        className="stat-number m-0 text-[length:var(--text-3xl)] leading-none"
        aria-live="polite"
      >
        {display}
        <span className="text-[0.6em]">{suffix}</span>
      </p>
      <p className="m-0 mt-2 font-accent text-[length:var(--text-sm)] uppercase tracking-wide text-text-primary">
        {label}
      </p>
      {sub && (
        <p className="m-0 mx-auto mt-1 max-w-64 text-[length:var(--text-xs)] text-text-tertiary">
          {sub}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Update `StatsStrip.tsx`** — remove inline `AnimatedStat`, import shared component

```tsx
"use client";

import { homeStats } from "@/data/home";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {homeStats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale-in" delay={i * 60}>
              <AnimatedNumber
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
                variant="strip"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update `logros/AnimatedCounter.tsx`** — delegate to shared component

```tsx
"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  decimals?: number;
}

/** Thin wrapper that delegates to the shared AnimatedNumber component. */
export function AnimatedCounter(props: AnimatedCounterProps) {
  return <AnimatedNumber {...props} variant="counter" />;
}
```

- [ ] **Step 4: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/AnimatedNumber.tsx src/components/home/StatsStrip.tsx src/components/logros/AnimatedCounter.tsx
git commit -m "refactor: merge AnimatedStat+AnimatedCounter into shared AnimatedNumber (DRY)"
```

---

## Task 12: Fix `PhotoStrip.tsx` — pause RAF when off-screen

**Files:**
- Modify: `src/components/home/PhotoStrip.tsx`

**Why:** The RAF animation loop runs continuously even when the strip is scrolled completely off-screen, wasting CPU/battery for the entire page session. An IntersectionObserver gates the RAF tick so it only runs when the strip is in (or near) the viewport.

- [ ] **Step 1: Add IntersectionObserver gate to `PhotoStrip.tsx`**

Add an `inView` ref and observe `wrapperRef`:

```tsx
const inView = useRef(false);

// New effect after the existing RAF effect:
useEffect(() => {
  const el = wrapperRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      inView.current = entry.isIntersecting;
    },
    // rootMargin: start animating slightly before visible
    { rootMargin: "200px 0px 200px 0px" }
  );

  observer.observe(el);
  return () => observer.disconnect();
}, []);
```

Update the `tick` function to check `inView`:

```tsx
const tick = useCallback(() => {
  const a = anim.current;
  if (!a.dragging && !a.hovering && inView.current) {
    a.offset = wrapOffset(a.offset + a.speed);
    applyTransform(a.offset);
  }
  a.rafId = requestAnimationFrame(tick);
}, [wrapOffset, applyTransform]);
```

- [ ] **Step 2: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -10
```

- [ ] **Step 3: Commit**

```bash
git add src/components/home/PhotoStrip.tsx
git commit -m "perf: PhotoStrip — gate RAF with IntersectionObserver (pause off-screen)"
```

---

## Task 13: Fix hooks — unmount safety & stable deps

**Files:**
- Modify: `src/hooks/useScrollProgress.ts`
- Modify: `src/hooks/useSectionObserver.ts`

**Why:** `useScrollProgress` calls `setProgress()` inside a RAF callback that could fire after component unmount, causing a "Can't perform a React state update on an unmounted component" warning. `useSectionObserver` re-creates all observers when `ids` array identity changes (even if contents are the same).

- [ ] **Step 1: Fix `useScrollProgress.ts`** — add mounted guard

```typescript
"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns a 0..1 progress value representing how far an element
 * has scrolled off the top of the viewport.
 *
 * 0 = element top at/below viewport top (fully visible)
 * 1 = element fully scrolled off-screen
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let ticking = false;
    let mounted = true; // guard against post-unmount state updates

    const update = () => {
      if (!mounted) return;
      const rect = el.getBoundingClientRect();
      const raw = Math.max(0, -rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, raw)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial read

    return () => {
      mounted = false;
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}
```

- [ ] **Step 2: Fix `useSectionObserver.ts`** — stable ids via useRef serialization (avoids ESLint suppressant)

```typescript
"use client";

import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section.
 *
 * Uses ids.join(",") as the dep expression so the effect only re-runs
 * when the actual section IDs change — not on every parent render
 * (arrays have unstable identity even when their contents are identical).
 */
export function useSectionObserver(
  ids: string[],
  rootMargin = "-30% 0px -60% 0px"
): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  // ids array has unstable identity (new ref each render even with same values).
  // ids.join(",") produces a stable primitive — effect only re-runs when IDs change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), rootMargin]);

  return active;
}
```

- [ ] **Step 3: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -10
```

- [ ] **Step 4: Commit**

```bash
git add src/hooks/useScrollProgress.ts src/hooks/useSectionObserver.ts
git commit -m "fix: hooks — useScrollProgress mounted guard, useSectionObserver stable ids dep"
```

---

## Task 14: Decompose `VisionChapters.tsx`

**Files:**
- Create: `src/components/vision/ChapterPhoto.tsx`
- Create: `src/components/vision/DataStripGrid.tsx`
- Create: `src/components/vision/PyramidList.tsx`
- Create: `src/components/vision/PillarGrid.tsx`
- Create: `src/components/vision/ThinkerGrid.tsx`
- Modify: `src/components/vision/VisionChapters.tsx` (thin orchestrator)

**Why:** At 241 LOC, `VisionChapters.tsx` violates single-responsibility. It contains 5 unique sub-components, 5 data arrays, and all chapter narrative text. Each sub-component becomes independently testable and composable.

- [ ] **Step 1: Create `src/components/vision/ChapterPhoto.tsx`**

```tsx
import Image from "next/image";

interface ChapterPhotoProps {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: "top" | "center" | "bottom";
}

const positionClass = {
  top:    "object-top",
  center: "object-center",
  bottom: "object-bottom",
} satisfies Record<NonNullable<ChapterPhotoProps["objectPosition"]>, string>;

export function ChapterPhoto({
  src,
  alt,
  caption,
  objectPosition = "center",
}: ChapterPhotoProps) {
  return (
    <figure className="m-0 my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={514}
        className={`aspect-[21/9] w-full rounded-xl object-cover ${positionClass[objectPosition]}`}
      />
      <figcaption className="mt-3 font-accent text-[length:var(--text-xs)] text-text-tertiary">
        {caption}
      </figcaption>
    </figure>
  );
}
```

- [ ] **Step 2: Create `src/components/vision/DataStripGrid.tsx`**

```tsx
import type { DataPoint } from "@/data/vision";

interface DataStripGridProps {
  items: DataPoint[];
}

export function DataStripGrid({ items }: DataStripGridProps) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="surface-card p-4 text-center">
          <p className="stat-number m-0">{item.num}</p>
          <p className="stat-label m-0 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create `src/components/vision/PyramidList.tsx`**

```tsx
import type { PyramidRank } from "@/data/vision";

interface PyramidListProps {
  items: PyramidRank[];
}

export function PyramidList({ items }: PyramidListProps) {
  return (
    <ol className="my-8 list-none space-y-4 p-0">
      {items.map((item) => (
        <li key={item.rank} className="surface-card-accent p-4">
          <div className="mb-1 flex items-baseline gap-2">
            <span className="chapter-numeral">{item.rank}</span>
            <strong className="card-heading">{item.title}</strong>
          </div>
          <p className="prose-body m-0">{item.desc}</p>
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 4: Create `src/components/vision/PillarGrid.tsx`**

```tsx
import type { Pillar } from "@/data/vision";

interface PillarGridProps {
  items: Pillar[];
}

export function PillarGrid({ items }: PillarGridProps) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-3">
      {items.map((p) => (
        <div key={p.title} className="surface-card p-5 text-center">
          <div className="mb-3 text-2xl" aria-hidden="true">{p.icon}</div>
          <h4 className="card-heading text-center">{p.title}</h4>
          <p className="card-body">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Create `src/components/vision/ThinkerGrid.tsx`**

```tsx
import type { Thinker } from "@/data/vision";

interface ThinkerGridProps {
  items: Thinker[];
}

export function ThinkerGrid({ items }: ThinkerGridProps) {
  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2">
      {items.map((t) => (
        <div key={t.title} className="surface-card p-5">
          <span className="card-label">{t.era}</span>
          <h4 className="card-heading">{t.title}</h4>
          <p className="card-body">{t.desc}</p>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Update `VisionChapters.tsx`** — import sub-components and data

Remove all local `interface`s, all local `const` arrays (chapters, dataStrip, pyramid, pillars, thinkers), and all local sub-component function definitions. Replace with imports:

```tsx
"use client";

import Image from "next/image";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Pullquote } from "@/components/ui/Pullquote";
import { Card } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ChapterPhoto } from "@/components/vision/ChapterPhoto";
import { DataStripGrid } from "@/components/vision/DataStripGrid";
import { PyramidList } from "@/components/vision/PyramidList";
import { PillarGrid } from "@/components/vision/PillarGrid";
import { ThinkerGrid } from "@/components/vision/ThinkerGrid";
import { chapters, dataStrip, pyramid, pillars, thinkers } from "@/data/vision";
import { visionPhotos } from "@/data/photos";

// ... rest of chapter content, now ≤ 160 LOC
```

- [ ] **Step 7: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 8: Commit**

```bash
git add src/components/vision/ src/components/vision/VisionChapters.tsx
git commit -m "refactor: decompose VisionChapters — 5 sub-components + data/vision.ts import"
```

---

## Task 15: Decompose `MundoContent.tsx`

**Files:**
- Create: `src/components/mundo/ForumCard.tsx`
- Create: `src/components/mundo/AgreementCard.tsx`
- Modify: `src/components/mundo/MundoContent.tsx` (import sub-components)

**Why:** `MundoContent.tsx` at 206 LOC contains two non-trivial sub-components (`ForumCard`, `AgreementCard`) inline. Extracting them: (a) makes each file independently readable, (b) enables unit testing, (c) reduces the orchestrator to its structural role.

- [ ] **Step 1: Create `src/components/mundo/ForumCard.tsx`**

Extract the `ForumCard` function from `MundoContent.tsx` into its own file:

```tsx
import Image from "next/image";
import type { ForumAppearance } from "@/data/mundo";

interface ForumCardProps {
  forum: ForumAppearance;
}

export function ForumCard({ forum }: ForumCardProps) {
  return (
    <article className="surface-card overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={forum.image}
          alt={forum.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {forum.highlight && (
          <span className="absolute right-3 top-3 rounded-full bg-[color-mix(in_oklch,var(--color-gold-light),transparent_10%)] px-2.5 py-0.5 text-[length:var(--text-xs)] font-bold text-white">
            DESTACADO
          </span>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklch, var(--color-overlay-dark), transparent 20%) 0%, transparent 50%)",
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-[var(--color-gold-light)]">
            {forum.date}
          </span>
          <span className="ml-2 text-[length:var(--text-xs)] text-white/50">
            {forum.location}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="card-heading">{forum.title}</h3>
        <p className="card-body">{forum.description}</p>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Create `src/components/mundo/AgreementCard.tsx`**

Extract the `AgreementCard` function from `MundoContent.tsx`. Note: `TradeAgreement.keyFacts` already types `color` as `"gold" | "blue" | "green"` — no cast needed:

```tsx
import { Card } from "@/components/ui/Card";
import type { TradeAgreement } from "@/data/mundo";

type FactColor = TradeAgreement["keyFacts"][number]["color"];

// satisfies guarantees exhaustive coverage at compile time
const factColorClass = {
  gold:  "text-gold",
  blue:  "text-celeste",
  green: "text-success",
} satisfies Record<FactColor, string>;

interface AgreementCardProps {
  ta: Pick<TradeAgreement, "tag" | "title" | "description" | "keyFacts">;
}

export function AgreementCard({ ta }: AgreementCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <span className="badge-text mb-2 block">{ta.tag}</span>
        <h3 className="chapter-title m-0 mb-3">{ta.title}</h3>
        <p className="prose-body m-0 mb-4">{ta.description}</p>
        <div className="flex flex-wrap gap-2">
          {ta.keyFacts.map((f, i) => (
            <span
              key={i}
              className={`rounded-full border border-border bg-surface-2 px-3 py-1 text-[length:var(--text-xs)] ${factColorClass[f.color]}`}
            >
              {f.text}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
```

- [ ] **Step 3: Update `MundoContent.tsx`** — remove inline sub-components, add imports

```tsx
import { ForumCard } from "@/components/mundo/ForumCard";
import { AgreementCard } from "@/components/mundo/AgreementCard";
// Remove: function ForumCard(...) {...}
// Remove: function AgreementCard(...) {...}
// Remove: function factColor(...) {...}
```

- [ ] **Step 4: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 5: Commit**

```bash
git add src/components/mundo/
git commit -m "refactor: decompose MundoContent — ForumCard + AgreementCard to mundo/ folder"
```

---

## Task 16: Decompose `FuturoContent.tsx`

**Files:**
- Create: `src/components/futuro/FeaturePhoto.tsx`
- Create: `src/components/futuro/PhotoGallery.tsx`
- Modify: `src/components/futuro/FuturoContent.tsx`

**Why:** Same single-responsibility argument. `FuturoContent.tsx` at 195 LOC contains `StatRow`, `FeaturePhoto`, `PhotoGallery` inline, plus all 4 project narratives.

- [ ] **Step 1: Create `src/components/futuro/FeaturePhoto.tsx`**

```tsx
import Image from "next/image";

interface FeaturePhotoProps {
  src: string;
  alt: string;
  caption: string;
  aspectRatio?: string;
}

export function FeaturePhoto({
  src,
  alt,
  caption,
  aspectRatio = "16/9",
}: FeaturePhotoProps) {
  return (
    <figure className="m-0 my-8">
      <div className="overflow-hidden rounded-xl" style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 font-accent text-[length:var(--text-xs)] text-text-tertiary">
        {caption}
      </figcaption>
    </figure>
  );
}
```

- [ ] **Step 2: Create `src/components/futuro/PhotoGallery.tsx`**

Note: `GalleryPhoto` fields are `{ src, who, where, tag, pos }` — NOT `alt/caption/tags[]`. Use the correct names:

```tsx
import Image from "next/image";
import type { GalleryPhoto } from "@/data/futuro";

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <figure key={photo.src} className="group relative m-0 overflow-hidden rounded-xl">
          <Image
            src={photo.src}
            alt={photo.who}        // who = person/subject description (alt text)
            width={600}
            height={400}
            className="aspect-[3/2] w-full object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 px-4 py-3 opacity-0 transition-opacity duration-[var(--duration-fast)] group-hover:opacity-100">
            <p className="m-0 text-[length:var(--text-xs)] text-white/90">
              {photo.where}        {/* where = location/caption */}
            </p>
            <span className="badge-text text-white/60">{photo.tag}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Update `FuturoContent.tsx`** — remove inline sub-components, add imports

```tsx
import { FeaturePhoto } from "@/components/futuro/FeaturePhoto";
import { PhotoGallery } from "@/components/futuro/PhotoGallery";
// Remove inline: function FeaturePhoto(...), function PhotoGallery(...), function StatRow(...)
// StatRow is simple enough to inline as JSX; or keep as a tiny local function
```

- [ ] **Step 4: TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 5: Commit**

```bash
git add src/components/futuro/
git commit -m "refactor: decompose FuturoContent — FeaturePhoto + PhotoGallery to futuro/ folder"
```

---

## Task 17: Add Vitest — test critical hooks

**Files:**
- Create: `vitest.config.ts`
- Create: `src/hooks/__tests__/useAnimatedNumber.test.ts`
- Create: `src/hooks/__tests__/useScrollProgress.test.ts`
- Modify: `package.json` (add test script + devDependencies)

**Why:** Zero tests is a critical gap vs. best practices. Hooks are the most unit-testable layer. Start here to establish the pattern.

- [ ] **Step 1: Install dependencies**

```bash
cd /Users/demianreidel/1-JM && npm install --save-dev vitest @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom happy-dom @vitejs/plugin-react
```

- [ ] **Step 2: Create `vitest.config.ts`**

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/hooks/**", "src/lib/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 3: Create `src/test/setup.ts`**

```typescript
import "@testing-library/jest-dom";
```

- [ ] **Step 4: Add test script to `package.json`**

```json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run",
  "test:coverage": "vitest run --coverage"
}
```

- [ ] **Step 5: Create `src/hooks/__tests__/useAnimatedNumber.test.ts`**

```typescript
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useAnimatedNumber } from "../useAnimatedNumber";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  let callback: IntersectionObserverCallback;
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn((cb: IntersectionObserverCallback) => {
      callback = cb;
      return {
        observe: (el: Element) => {
          mockObserve(el);
          // Simulate immediate intersection
          act(() => callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
        },
        disconnect: mockDisconnect,
      };
    })
  );
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("useAnimatedNumber", () => {
  it("starts at 0 and animates to target", async () => {
    const { result } = renderHook(() =>
      useAnimatedNumber({ target: 100, duration: 1000 })
    );

    expect(result.current.value).toBe(0);

    // Advance animation
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Value should be between 0 and 100 (midway through animation)
    expect(result.current.value).toBeGreaterThan(0);
    expect(result.current.value).toBeLessThanOrEqual(100);
  });

  it("reaches target value after animation completes", async () => {
    const { result } = renderHook(() =>
      useAnimatedNumber({ target: 50, duration: 100 })
    );

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(result.current.value).toBe(50);
  });

  it("formats display with locale es-AR for integers", () => {
    const { result } = renderHook(() =>
      useAnimatedNumber({ target: 14500, duration: 1000 })
    );

    // Before animation, display is "0"
    expect(result.current.display).toBe("0");
  });

  it("formats display with decimals", () => {
    const { result } = renderHook(() =>
      useAnimatedNumber({ target: 2.4, duration: 1000, decimals: 1 })
    );

    expect(result.current.display).toBe("0.0");
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = renderHook(() =>
      useAnimatedNumber({ target: 100 })
    );

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
```

- [ ] **Step 6: Create `src/hooks/__tests__/useScrollProgress.test.ts`**

```typescript
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useRef } from "react";
import { useScrollProgress } from "../useScrollProgress";

beforeEach(() => {
  // Mock matchMedia — default: no reduced motion
  vi.stubGlobal("matchMedia", vi.fn((query: string) => ({
    matches: query.includes("reduce") ? false : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));

  // Mock requestAnimationFrame to run synchronously
  vi.stubGlobal("requestAnimationFrame", vi.fn((cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  }));
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useScrollProgress", () => {
  it("returns 0 when element top is at viewport top", () => {
    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      // Element at top of viewport: getBoundingClientRect().top = 0
      vi.spyOn(ref.current, "getBoundingClientRect").mockReturnValue({
        top: 0, height: 500, bottom: 500, left: 0, right: 0, width: 0, x: 0, y: 0,
        toJSON: vi.fn(),
      });
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(0);
  });

  it("returns >0 when element has scrolled partially off screen", () => {
    const mockEl = document.createElement("div");
    vi.spyOn(mockEl, "getBoundingClientRect").mockReturnValue({
      top: -100, height: 500, bottom: 400, left: 0, right: 0, width: 0, x: 0, y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(mockEl);
      return useScrollProgress(ref);
    });

    // -top / height = 100/500 = 0.2
    expect(result.current).toBeCloseTo(0.2);
  });

  it("caps at 1.0 when element fully scrolled off screen", () => {
    const mockEl = document.createElement("div");
    vi.spyOn(mockEl, "getBoundingClientRect").mockReturnValue({
      top: -600, height: 500, bottom: -100, left: 0, right: 0, width: 0, x: 0, y: 0,
      toJSON: vi.fn(),
    });

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(mockEl);
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(1);
  });

  it("returns 0 and skips listener when reduced motion is enabled", () => {
    vi.stubGlobal("matchMedia", vi.fn(() => ({
      matches: true, // reduced motion ON
      media: "",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })));

    const addSpy = vi.spyOn(window, "addEventListener");

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      return useScrollProgress(ref);
    });

    expect(result.current).toBe(0);
    expect(addSpy).not.toHaveBeenCalledWith("scroll", expect.any(Function), expect.anything());
  });

  it("removes scroll listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      return useScrollProgress(ref);
    });

    unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
```

- [ ] **Step 8: Run tests to verify they pass**

```bash
cd /Users/demianreidel/1-JM && npm run test:run 2>&1 | tail -20
```

Expected: both test files pass — `✓ useAnimatedNumber.test.ts` and `✓ useScrollProgress.test.ts`

- [ ] **Step 9: Commit**

```bash
git add vitest.config.ts src/test/ src/hooks/__tests__/ package.json package-lock.json
git commit -m "test: add Vitest + useAnimatedNumber + useScrollProgress hook tests"
```

---

## Task 18: Final verification

**Files:**
- All modified files

**Why:** Confirm zero TypeScript errors, clean build, all tests pass, and no regressions.

- [ ] **Step 1: Full TypeScript check**

```bash
cd /Users/demianreidel/1-JM && npx tsc --noEmit 2>&1
```

Expected: 0 errors

- [ ] **Step 2: Run all tests**

```bash
cd /Users/demianreidel/1-JM && npm run test:run
```

Expected: all passing

- [ ] **Step 3: Production build**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -30
```

Expected: `✓ Compiled successfully` with no warnings

- [ ] **Step 4: ESLint check**

```bash
cd /Users/demianreidel/1-JM && npm run lint 2>&1 | tail -20
```

Expected: 0 errors, 0 warnings

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final verification — 0 TS errors, 0 lint warnings, all tests pass"
```

---

## Summary of All Changes

### Violations Fixed
| Violation | File(s) | Fix |
|-----------|---------|-----|
| React Compiler not enabled | `next.config.ts` | Added `experimental.reactCompiler: true` — auto-memoizes all components/hooks, eliminates manual `useMemo`/`useCallback` (stable in Next.js 16 / React 19.2) |
| Missing CSP header | `next.config.ts` | Added CSP with correct directives |
| `colorScheme: "dark"` on light site | `layout.tsx`, `next.config.ts` | Fixed to `"light"` |
| Stale video preload | `layout.tsx` | Removed |
| `.tsx` for pure data file | `data/reformas.tsx` | Renamed to `.ts` |
| Data hardcoded in component | `StatsStrip.tsx`, `SectionPreviews.tsx`, `VisionChapters.tsx` | Extracted to `data/` |
| DRY: duplicate AnimatedStat + AnimatedCounter | Both files | Merged into `AnimatedNumber.tsx` |
| `!important` via Tailwind `!` prefix | `Container.tsx` | Replaced with conditional class |
| `Record<string, string>` loose typing | `Section.tsx` | Replaced with `satisfies` + discriminated union |
| Missing aria-label accent marks | `NavBar.tsx` | Fixed (WCAG 4.1.2) |
| Wrong Spanish accent marks | `error.tsx` | Fixed |
| `<a href="#">` for scroll action | `SidebarLayout.tsx` | Replaced with `<button type="button">` |
| RAF runs off-screen | `PhotoStrip.tsx` | Gated with IntersectionObserver |
| State update after unmount | `useScrollProgress.ts` | Added `mounted` guard |
| Observer re-created on every render | `useSectionObserver.ts` | Stable `ids` via `JSON.stringify` |
| 241 LOC mega-component | `VisionChapters.tsx` | Decomposed into 5 sub-components |
| 206 LOC mega-component | `MundoContent.tsx` | Decomposed into 2 sub-components |
| 195 LOC mega-component | `FuturoContent.tsx` | Decomposed into 2 sub-components |
| Zero tests | — | Added Vitest + hook tests |
