# Content Pages Redesign — Design Spec

## Problem Statement

The 5 content pages (Logros, Reformas, Futuro, Mundo, Archivo) use flat, uniform card grids that look generic. Specific issues:

1. **Before/After panels** use garish red (#ff6b6b) / green (#51cf66) gradients that feel cheap and clash with the cream/gold presidential palette
2. **Card layouts** are uniform 2-column grids with identical sizing — no visual hierarchy
3. **Statistics** are plain text in cards with no visualization or scale context
4. **Timelines** are flat card stacks with no visual flow or milestone markers
5. **Book covers** are 64×96px thumbnails — too small to read
6. **Award lists** use basic diamond bullets with no hierarchy
7. **Forum cards** are repetitive same-height blocks with no size variation
8. **Papers** are pure text with no visual identity

## Design Decisions (User-Approved)

- **Before/After panels**: Muted warm/cool tints (sepia "Antes" → sage "Ahora") replacing red/green
- **Card layouts**: Bento grid with mixed-size cards creating visual hierarchy
- **Scope**: All 5 content pages

---

## Layer 1: New Design Tokens

### New Color Tokens (globals.css @theme)

```css
/* Before/After — Muted warm/cool (replaces red/green) */
--color-tint-before: oklch(0.94 0.03 55);        /* warm sepia wash */
--color-tint-before-accent: oklch(0.92 0.05 55);  /* slightly deeper */
--color-border-before: oklch(0.70 0.06 55 / 0.5); /* warm border */
--color-text-before: oklch(0.45 0.06 55);          /* sepia text */

--color-tint-after: oklch(0.94 0.04 165);          /* sage wash */
--color-tint-after-accent: oklch(0.92 0.06 165);   /* slightly deeper */
--color-border-after: oklch(0.55 0.08 165 / 0.5);  /* sage border */
--color-text-after: oklch(0.38 0.08 165);           /* sage text */
```

### Remove from BeforeAfterPanel only

The `--color-success` and `--color-danger` tokens stay in the theme (they're used by AgreementCard's `factColor()` for green key-fact pills). But `BeforeAfterPanel` stops using them — it switches to the new `text-before` / `text-after` semantic classes.

### New Utility Classes (globals.css @layer components)

```css
.text-before { color: var(--color-text-before); }
.text-after  { color: var(--color-text-after); }
```

### Files Changed

- `src/app/globals.css` — token updates + new component classes

---

## Layer 2: BeforeAfterPanel Redesign

### Current Problem
- Red/green gradients with heavy chroma (0.14-0.16)
- Triangle up/down icons feel like stock charts
- `text-danger` / `text-success` hardcoded colors

### New Design
- Muted sepia/sage flat backgrounds (chroma 0.03-0.04)
- Replace triangle icons with simple "ANTES" / "AHORA" text labels
- Gold arrow (→) between the two panels in inline mode
- Keep panel-before / panel-after CSS class names, just update their styles

### Component Changes

**`src/components/ui/BeforeAfterPanel.tsx`**:
- Remove SVG triangle icons
- Remove `text-danger` / `text-success` color classes
- Use new `text-before` / `text-after` semantic colors
- Label uses `badge-text` with semantic color instead of red/green

**`src/app/globals.css`** — `.panel-before` and `.panel-after`:
```css
.panel-before {
  background: linear-gradient(160deg, var(--color-tint-before) 0%, var(--color-tint-before-accent) 100%);
  border: 1.5px solid var(--color-border-before);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.panel-after {
  background: linear-gradient(160deg, var(--color-tint-after) 0%, var(--color-tint-after-accent) 100%);
  border: 1.5px solid var(--color-border-after);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}
```

### Files Changed

- `src/app/globals.css`
- `src/components/ui/BeforeAfterPanel.tsx`

---

## Layer 3: Bento Grid System

### New Component: `BentoGrid`

A reusable CSS Grid component that supports mixed-size cards.

```tsx
interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}
```

CSS strategy — use CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` as base, with individual cards opting into `col-span-2` or `row-span-2` for hero treatment.

### Card Size Variants

Add a `size` prop to relevant card components:

- **`"hero"`** — `col-span-2 row-span-2` (2×2 cells, featured item)
- **`"wide"`** — `col-span-2` (full width row, 2 cells wide)
- **`"tall"`** — `row-span-2` (2 rows tall, 1 cell wide)
- **`"default"`** — `col-span-1 row-span-1` (standard single cell)

### CSS Classes (globals.css)

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bento-hero { grid-column: span 2; }
.bento-wide { grid-column: span 2; }
.bento-tall { grid-row: span 2; }
```

### Files Changed

- `src/components/ui/BentoGrid.tsx` (new)
- `src/app/globals.css`

---

## Layer 4: Logros Page Redesign

### Current State
- `LogrosGrid` renders PobrezaBlock + 5 blocks of BeforeAfterCards in uniform 2-col grid
- All cards same size, same visual weight
- Red/green panels inside each card

### New Design

**PobrezaBlock** (stays mostly the same — it's already the hero):
- Update `BeforeAfterPanel` colors (automatic via Layer 2)
- Keep animated counters
- Keep pills and narrative

**LogroBlock cards** — convert to bento grid:
- Each block's first logro → `"hero"` size (larger card with bigger stat display)
- Remaining logros → `"default"` size
- Replace 2-col uniform grid with `BentoGrid`
- Update `BeforeAfterPanel` colors (automatic via Layer 2)

**BeforeAfterCard improvements**:
- Hero-sized cards show the stat-number at 3xl scale
- Default cards show stat-number at 2xl (current)
- Add subtle container query: if card is wider than 400px, show before/after side-by-side; if narrower, stack vertically

### Files Changed

- `src/components/logros/LogrosGrid.tsx` — use BentoGrid, assign hero to first logro per block
- `src/components/logros/BeforeAfterCard.tsx` — add `size` prop, responsive stat scaling

---

## Layer 5: Reformas Page Redesign

### Current State
- 4 reform blocks, each with 2-3 ReformCards in 2-col grid
- Red/green before/after panels
- Impact stats as tiny pills

### New Design

**ReformCards** — convert to bento grid:
- First reforma in each block → `"hero"` size
- Remaining reformas → `"default"` size
- Replace 2-col uniform grid with `BentoGrid`

**Impact stats elevation**:
- Current: `flex flex-wrap gap-3` with tiny `rounded-full border px-3 py-1 text-xs` pills
- New: Larger stat callouts with `stat-number` class for the value and `stat-label` for the label
- Display as a small horizontal stat row under the before/after panels

**BeforeAfterPanel** colors update automatically via Layer 2.

### Files Changed

- `src/components/reformas/ReformasContent.tsx` — use BentoGrid, assign hero sizes
- Impact stat styling updates in ReformasContent

---

## Layer 6: Futuro Page Redesign

### Current State
- 4 project sections with prose + feature photo + stat rows
- Stats are plain `flex flex-wrap gap-6` text
- Nuclear phases are plain white cards

### New Design

**Stat rows → stat cards**:
- Wrap each stat in a mini card with `surface-card` background
- Gold left border accent
- Stat value in `stat-number`, label in `stat-label`

**Nuclear phases → numbered timeline**:
- Add phase numbers (1, 2, 3) with gold circles
- Connect with vertical gold line (like the timeline mockup from brainstorming)
- Each phase card gets a left gold border

**Photo gallery**:
- Convert from uniform 3-col to bento: first photo `col-span-2 row-span-2`, rest default
- Gives a featured hero photo with supporting thumbnails

### Files Changed

- `src/components/futuro/FuturoContent.tsx` — stat card styling, phase timeline, bento gallery
- `src/components/futuro/PhotoGallery.tsx` — bento layout for first photo hero

---

## Layer 7: Mundo Page Redesign

### Current State
- Stats: flat 2×2 grid of plain text cards
- Timeline: vertical stack of identical cards
- Leaders: uniform 3-col grid
- Forums: same-height cards
- Agreements: dense text cards (images in data but not rendered)

### New Design

**Stats section → bento hero**:
- First stat (most impactful) → `"hero"` card with animated number
- Remaining stats → `"default"` cards
- Use animated counter where `stat.animated` data exists

**Timeline → visual timeline**:
- Add vertical gold line on left
- Each event: gold dot on the line + content card to the right
- Date in gold badge, title bold, description below
- CSS: `border-left: 2px solid var(--color-gold)` on container, pseudo-elements for dots

**Forum appearances → bento**:
- Highlighted forums → `"hero"` or `"wide"` size
- Regular forums → `"default"`
- Keep existing image overlays and gradient captions

**Trade agreements → full-width cards with images**:
- Render the image data that already exists in the schema
- Side-by-side: image left, content right (or stacked on mobile)
- Key facts pills stay, but larger

**Leaders → keep 3-col** (already looks fine)

**Cooperation → keep 2-col** (already looks fine)

### Files Changed

- `src/components/mundo/MundoContent.tsx` — bento stats, visual timeline, bento forums, agreement images
- `src/components/mundo/AgreementCard.tsx` — render agreement images (currently hidden)

---

## Layer 8: Archivo Page Redesign

### Current State
- Speeches: vertical stack of same-size cards
- Interviews: same pattern
- Books: 64×96 tiny thumbnails in 2-col grid
- Papers: pure text 2-col grid
- Awards: diamond bullet list

### New Design

**Speeches (Discursos)**:
- Keynote speeches → `"wide"` card with larger typography and gold accent border
- Regular speeches → `"default"` cards
- Group in `BentoGrid` instead of `space-y-6`

**Interviews (Entrevistas)**:
- Highlight interviews → `"wide"` card
- Regular interviews → `"default"`
- Impact metric displayed more prominently (stat-number style)

**Books (Libros)**:
- Increase cover size from 64×96 to 120×180 (readable)
- Highlight books → `"hero"` card with cover taking more space
- Keep stage grouping with badge labels

**Papers (Académicos)**:
- Add colored topic badge (use `text-celeste` more prominently as a left border accent)
- Keep 2-col grid

**Awards (Premios)**:
- Replace diamond bullets with gold circle markers
- Add subtle card background per item
- Group by significance if possible

### Files Changed

- `src/components/archivo/DiscursosSection.tsx`
- `src/components/archivo/EntrevistasSection.tsx`
- `src/components/archivo/LibrosSection.tsx`
- `src/components/archivo/PapersSection.tsx`
- `src/components/archivo/ArchivoContent.tsx`

---

## Implementation Order (Dependency Chain)

1. **Layer 1**: Design tokens — all subsequent layers depend on these
2. **Layer 2**: BeforeAfterPanel — used by Logros + Reformas
3. **Layer 3**: BentoGrid component — used by all 5 pages
4. **Layer 4**: Logros page
5. **Layer 5**: Reformas page
6. **Layer 6**: Futuro page
7. **Layer 7**: Mundo page
8. **Layer 8**: Archivo page

Layers 4-8 are independent of each other (can run in parallel after 1-3 complete).

---

## Success Criteria

1. **Zero red/green colors** — all before/after panels use sepia/sage palette
2. **Bento grids** — each page has at least one hero-sized card per section
3. **Visual hierarchy** — flagship stats are visually larger than supporting ones
4. **Build passes** — `npm run build` succeeds with zero errors
5. **Tests pass** — all 49 existing tests still pass
6. **No layout regressions** — mobile responsive behavior preserved
7. **Accessibility maintained** — focus indicators, ARIA labels, touch targets all preserved

---

## Files Affected (Complete List)

### Modified
- `src/app/globals.css`
- `src/components/ui/BeforeAfterPanel.tsx`
- `src/components/logros/LogrosGrid.tsx`
- `src/components/logros/BeforeAfterCard.tsx`
- `src/components/reformas/ReformasContent.tsx`
- `src/components/futuro/FuturoContent.tsx`
- `src/components/futuro/PhotoGallery.tsx`
- `src/components/mundo/MundoContent.tsx`
- `src/components/mundo/AgreementCard.tsx`
- `src/components/archivo/ArchivoContent.tsx`
- `src/components/archivo/DiscursosSection.tsx`
- `src/components/archivo/EntrevistasSection.tsx`
- `src/components/archivo/LibrosSection.tsx`
- `src/components/archivo/PapersSection.tsx`

### New
- `src/components/ui/BentoGrid.tsx`
