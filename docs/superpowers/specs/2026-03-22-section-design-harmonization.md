# Section Design Harmonization

**Date:** 2026-03-22
**Approach:** Option B — Semantic components + token standardization
**Reference page:** Visión (already the most consistent)

---

## Goal

Propagate the editorial feel of the Visión page to all other sections (Logros, Reformas, Futuro, Mundo, Archivo). Achieve visual coherence through standardized spacing tokens, semantic CSS classes, and four lightweight UI components.

---

## 1. CSS Token Standardization (`globals.css`)

### Spacing rules (enforced via classes, not tokens)

| Context | Class | Value |
|---------|-------|-------|
| Article bottom margin | `mb-20` | replaces mixed mb-12/mb-16 (see exception below) |
| Divider spacing (above) | `mt-16` | consistent everywhere |
| Grid gap (2–3 col) | `gap-5` | replaces gap-3/gap-4/gap-5 mix |
| Grid gap (4 col) | `gap-4` | for denser stat grids |
| Card default padding | `p-5` | replaces p-4/p-5/p-6 mix |

**VisionChapters exception:** VisionChapters currently uses `mb-16` on articles and is the reference page. It will NOT be changed to `mb-20`. It will receive SectionArticle but with `mb-16` on its own, keeping spacing identical to today. All other sections use `mb-20`.

### ChapterHeader spacing fix

In `ChapterHeader.tsx`, there are two `mb-2` elements:
- **Outer `<div>` (line 13):** `className="mb-2"` → change to `mb-6`. This controls spacing below the entire header block.
- **Inner numeral-row flex `<div>` (line 14):** `className="mb-2"` → change to `mb-3`. This controls spacing between numeral and title.
- **Subtitle `<p>` (line 16):** `className="prose-body mb-8"` → change to `prose-body mb-10`.

### New semantic CSS classes

All classes go in the `@layer components` block in `globals.css`, written as literal CSS property/value pairs (same format as existing classes like `.badge-text`, `.prose-body`):

```css
.section-kicker {
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  margin-bottom: 0.75rem; /* 12px / mb-3 equivalent */
}

.card-label {
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
  margin-bottom: 0.25rem; /* mb-1 equivalent */
  display: block;
}

.card-heading {
  font-family: var(--font-display);
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  margin: 0 0 0.5rem 0; /* mb-2 equivalent */
  line-height: 1.3;
}

.card-body {
  font-size: var(--text-xs);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

.content-prose {
  max-width: 44rem;
}

.content-prose > p {
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--color-text-secondary);
  margin-bottom: 1.25rem; /* space-y-5 equivalent */
}

.content-prose > p:last-child {
  margin-bottom: 0;
}
```

These replace all `text-[length:var(--text-sm)] font-display text-text-primary` inline patterns currently scattered across 8+ components.

---

## 2. New UI Components

### `src/components/ui/Prose.tsx`

**Must include `"use client"` directive:** No — this is a pure presentational wrapper with no hooks. Can be a Server Component.

Extracted from `VisionChapters.tsx` (where it currently lives as a local component). Wraps prose paragraphs with consistent spacing and max-width.

```tsx
export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="content-prose">{children}</div>;
}
```

Used by: VisionChapters, LogrosContent (narrative blocks), ArchivoContent.

---

### `src/components/ui/SectionArticle.tsx`

**Must include `"use client"` directive:** Yes — it imports `Divider` which is a client component (uses `useRef`, `useEffect`, `useState` for the scroll-triggered animation).

Replaces the manual `<article id="..." className="mb-20">` + `<Divider>` pattern that every section component manages differently today.

```tsx
"use client";

import { Divider } from "@/components/ui/Divider";

interface SectionArticleProps {
  id: string;
  last?: boolean;        // When true, omits the trailing Divider
  className?: string;    // Additional classes (e.g. "mb-16" for VisionChapters)
  children: React.ReactNode;
}

export function SectionArticle({ id, last = false, className, children }: SectionArticleProps) {
  return (
    <article id={id} className={className ?? "mb-20"}>
      {children}
      {!last && <Divider animated className="mt-16" />}
    </article>
  );
}
```

**Divider note:** Uses `animated` prop (renders `divider-animated` class, scroll-triggered). The `mt-16` className adds top margin. The `.divider-animated` class has no built-in bottom margin (unlike `.section-divider` which has `margin: 0 0 3rem`), so no conflict with `mb-0` workaround needed. The `mb-20` on the article itself provides the space below the divider.

Used by: all 6 section components.

---

### `src/components/ui/ContentGrid.tsx`

**Must include `"use client"` directive:** No — pure presentational, no hooks.

Standardizes the 6+ ad-hoc grid layouts into one component with a `cols` prop.

```tsx
interface ContentGridProps {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

const colClasses: Record<number, string> = {
  2: "grid grid-cols-1 sm:grid-cols-2 gap-5",
  3: "grid grid-cols-2 md:grid-cols-3 gap-5",   // md: to match existing codebase pattern
  4: "grid grid-cols-2 md:grid-cols-4 gap-4",
};

export function ContentGrid({ cols = 2, children, className }: ContentGridProps) {
  return (
    <div className={`${colClasses[cols]} ${className ?? ""}`}>
      {children}
    </div>
  );
}
```

**Breakpoints note:** `cols=2` uses `sm:` (640px), `cols=3` and `cols=4` use `md:` (768px). This matches the existing patterns in `VisionChapters.tsx` and `FuturoContent.tsx`.

Used by: MundoContent (5 grids), FuturoContent (2 grids), LogrosContent, ReformasContent.

---

### `src/components/ui/SectionKicker.tsx`

**Must include `"use client"` directive:** No — pure presentational.

Eyebrow text above a content block. Different from `page-eyebrow` (PageHeader) and `badge-text` (card labels).

```tsx
interface SectionKickerProps {
  children: React.ReactNode;
  color?: "gold" | "celeste";   // default: "gold"
}

export function SectionKicker({ children, color = "gold" }: SectionKickerProps) {
  return (
    <p
      className="section-kicker"
      style={color === "celeste" ? { color: "var(--color-celeste)" } : undefined}
    >
      {children}
    </p>
  );
}
```

**Color note:** `FuturoContent.tsx` currently uses `text-celeste` for its kicker. The `SectionKicker` preserves this via the `color="celeste"` prop. Other sections use the default gold.

Used by: FuturoContent (`color="celeste"`), MundoContent (default gold).

---

## 3. Component Migration Plan

### Order (dependencies respected)

1. `globals.css` — add semantic classes, fix ChapterHeader spacing classes (no component imports)
2. `ChapterHeader.tsx` — update spacing (no new component dependencies)
3. Create `ui/Prose.tsx` (no dependencies)
4. Create `ui/SectionArticle.tsx` (depends on Divider — already exists)
5. Create `ui/ContentGrid.tsx` (no dependencies)
6. Create `ui/SectionKicker.tsx` (no dependencies)
7. `VisionChapters.tsx` — extract local Prose → use `ui/Prose`, wrap articles in SectionArticle with `className="mb-16"`
8. `MundoContent.tsx` — most inconsistent; replace all 5 grids with ContentGrid, inline types with card-label/card-heading/card-body
9. `FuturoContent.tsx` — replace kicker with `<SectionKicker color="celeste">`, grids with ContentGrid
10. `ArchivoContent.tsx` + sub-components — see below
11. `LogrosContent.tsx` — minor: SectionArticle wrappers, gap-5 on grids
12. `ReformasContent.tsx` — minor: same as Logros

### ArchivoContent sub-components (step 10)

`ArchivoContent.tsx` delegates to four sub-components that each need individual migration:

| Sub-component file | Changes needed |
|-------------------|---------------|
| `src/components/archivo/DiscursosSection.tsx` | Wrap in SectionArticle, card-label/card-heading/card-body |
| `src/components/archivo/EntrevistasSection.tsx` | Wrap in SectionArticle, card-label/card-heading/card-body |
| `src/components/archivo/LibrosSection.tsx` | Wrap in SectionArticle, card-label/card-heading/card-body |
| `src/components/archivo/PapersSection.tsx` | Wrap in SectionArticle, card-label/card-heading/card-body |
| `ArchivoContent.tsx` itself | Remove manual Divider + spacing, SectionArticle handles it |

### Per-component changes summary

| Component | Changes |
|-----------|---------|
| `ChapterHeader.tsx` | outer div mb-2→mb-6, inner row mb-2→mb-3, subtitle mb-8→mb-10 |
| `VisionChapters.tsx` | Extract Prose→ui/Prose, wrap articles in SectionArticle (mb-16) |
| `MundoContent.tsx` | ContentGrid (×5), card-label/card-heading/card-body throughout |
| `FuturoContent.tsx` | SectionKicker color="celeste" (×3), ContentGrid (×2) |
| `ArchivoContent.tsx` + 4 subs | SectionArticle wrappers, card-label/card-heading/card-body |
| `LogrosContent.tsx` | SectionArticle wrappers, gap-5 on grids |
| `ReformasContent.tsx` | SectionArticle wrappers, gap-5 on grids |

---

## 4. Out of Scope

- `SidebarLayout`, `Card`, `Divider`, `BeforeAfterPanel`, `Pullquote` — no structural changes
- All `/src/data/` files — untouched
- Animations, ScrollReveal, parallax
- `Hero.tsx`, `NavBar.tsx`, `Footer.tsx`, `PageHeader.tsx`
- `StatsStrip`, `SectionPreviews`

---

## 5. Verification

1. `npm run build` — must pass with no errors
2. Visual check on all 6 section pages: consistent article spacing, uniform card padding, no cramped ChapterHeaders
3. Visión page spacing must be pixel-identical to pre-change (uses `mb-16` via `className` prop on SectionArticle)
