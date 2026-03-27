# World-Class Code Quality Refactor

**Date:** 2026-03-27
**Status:** Draft
**Scope:** Full sweep of audit issues across 8 layers

## Context

JMv4 is a Next.js 16 static site (Javier Milei) with 10 routes, ~55 component files, 29 client components, 4 custom hooks, and 2 test files. The codebase has strong foundations (strict TypeScript, security headers, error boundaries, semantic HTML) but needs refinement across type safety, architecture, performance, accessibility, SEO, error handling, testing, and polish.

## Approach

Layer-by-layer in dependency order. Each layer is a commit. Tests come last so they cover final code.

## Layer 1: Type Safety

### 1.1 Eliminate unsafe `any`
- **File:** `src/components/ui/ScrollReveal.tsx` (line 48)
- **Change:** Replace `ElementType<any>` with bare `ElementType` (defaults to `any` internally but removes the explicit `any` annotation). Alternatively, use a constrained generic on the component itself. Verify the chosen type compiles with intrinsic elements like `"div"` and `"section"`.

*Note: Item 1.2 (ExpandableSection default IDs) was removed — `useId()` fallback is already implemented.*

### 1.3 Validate hook inputs
- **File:** `src/hooks/useAnimatedNumber.ts` (lines 17-22)
- **Change:** Clamp `target` to `>= 0` and `duration` to `> 0` with dev-mode console warnings.

### 1.4 Tighten event handler types
- **File:** `src/components/home/PhotoStrip.tsx` (lines 95-124)
- **Change:** Use `React.PointerEventHandler<HTMLDivElement>` instead of bare `React.PointerEvent`.

## Layer 2: Architecture

### 2.1 Convert unnecessary client component to server
- **File:** `src/components/home/SectionPreviews.tsx`
- **Change:** Remove `"use client"` directive. Component only renders static data from `sectionCards`; no hooks, no event handlers, no browser APIs. Note: this works because Next.js server components can compose client components (`ScrollReveal`, `Card`) as children without issue.

### 2.2 Purify data files
- **File:** `src/data/reformas.tsx`
- **Strategy:** The data file contains extensive inline JSX (`<strong>`, `<>` fragments) in `desc`, `antes`, `ahora`, and `impactText` fields across every reforma entry. Convert these to plain strings with lightweight markup (e.g., `**bold**` convention). Create a `RichText` component in `src/components/ui/RichText.tsx` that parses the simple markup at render time. This keeps one generic renderer rather than per-reforma components, and the data file becomes a pure `.ts` file (rename from `.tsx`).

## Layer 3: Performance

### 3.1 Image optimization
- **File:** `src/components/futuro/PhotoGallery.tsx` (lines 16-24)
- **Change:** Replace `sizes="(max-width: 768px) 200px, 300px"` with breakpoint-accurate sizes: `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"` (adjusted to match actual CSS grid).

### 3.2 Stabilize observer references
- **File:** `src/components/ui/SidebarLayout.tsx` (lines 27-29)
- **Change:** Memoize `sectionIds` array with `useMemo` so `useSectionObserver` doesn't detach/reattach IntersectionObserver on every parent render.

*Note: Item 3.3 (Animation variant factory) was removed — a `variants` config map already exists in ScrollReveal.tsx. A potential future improvement is deduplicating common `opacity`/`transition` properties, but this is minor and not in scope.*

### 3.3 CSS animation classes
- **Files:** `src/app/globals.css`, `src/components/home/Hero.tsx` (lines 86-91)
- **Change:** Move hardcoded inline animation values (`800ms`, `var(--ease-out-expo)`) into CSS utility classes (`.animate-entrance-title`, `.animate-entrance-subtitle`). Reference by className instead of inline style.

## Layer 4: Accessibility

### 4.1 Mobile menu focus management
- **File:** `src/components/NavBar.tsx` (lines 55-95)
- **Change:** When mobile menu opens, programmatically focus the first menu item. On close, return focus to the hamburger button. `<dialog>` migration is out of scope for this refactor — focus on explicit focus management with `useRef` and `useEffect`.

### 4.2 Sidebar navigation semantics
- **File:** `src/components/logros/LogrosGrid.tsx` (lines 53-60)
- **Change:** Wrap sidebar in `<nav aria-label="Tabla de contenidos">` (or English equivalent based on site language).

### 4.3 Fix animated number announcements
- **File:** `src/components/ui/AnimatedNumber.tsx` (line 44)
- **Change:** Remove `aria-live="polite"` from the animating element. Add a visually-hidden `<span aria-live="polite">` that only updates with the final value when animation completes.

### 4.4 Fix decorative flag
- **File:** `src/components/Footer.tsx` (lines 53-63)
- **Change:** Replace `role="img" aria-label="Bandera Argentina"` with `aria-hidden="true"` since the flag is decorative (not conveying information not available elsewhere).

### 4.5 Dynamic Roman numerals
- **File:** `src/components/logros/LogrosGrid.tsx` (line 11)
- **Change:** Replace hardcoded `["II", "III", "IV", "V", "VI"]` with a `toRomanNumeral(n)` utility that generates from block index. Add utility to `src/lib/`.

## Layer 5: SEO

### 5.1 Open Graph images
- **File:** `src/app/layout.tsx` (lines 45-53)
- **Change:** The layout already has `openGraph` with `type`, `locale`, `url`, `siteName`, `title`, `description`. Add the missing `images` array with `url`, `width`, `height`, `alt` pointing to a hero/share image in `/public/images/`.

### 5.2 Canonical URLs
- **File:** `src/app/layout.tsx` (base canonical) + per-page metadata in:
  - `src/app/page.tsx` (/)
  - `src/app/archivo/page.tsx`
  - `src/app/futuro/page.tsx`
  - `src/app/logros/page.tsx`
  - `src/app/mundo/page.tsx`
  - `src/app/reformas/page.tsx`
  - `src/app/vision/page.tsx`
- **Change:** Add `alternates.canonical` to the root layout metadata with the base URL. Each page that exports custom `metadata` should include its own canonical path.

## Layer 6: Error Handling

### 6.1 Error logging preparation
- **File:** `src/app/global-error.tsx`
- **Change:** Add a `reportError(error)` call that logs to console in development. Structure it so plugging in Sentry/PostHog later requires changing one function.

### 6.2 Use error digest
- **File:** `src/app/error.tsx` (line 12)
- **Change:** Replace `void error;` with actual usage: pass `error.digest` to `reportError()` and optionally display a reference code to the user.

### 6.3 Hook input warnings
- Covered by Layer 1.3 — `useAnimatedNumber` validation. Also add similar guards to any other hooks accepting numeric inputs.

## Layer 7: Testing

### 7.1 Fix existing test fragility
- **File:** `src/hooks/__tests__/useScrollProgress.test.ts`
- **Change:** Replace manual `requestAnimationFrame` stub with `vi.useFakeTimers()` (modern timers are Vitest's default).

### 7.2 Expand component test coverage
- **New test files for:**
  - `NavBar` — render, mobile menu open/close, focus management, keyboard navigation
  - `Hero` — render, animation classes applied
  - `Card` — render with props, link behavior
  - `PhotoStrip` — render, pointer interaction
  - `ExpandableSection` — expand/collapse, ARIA state, default ID generation
  - `ScrollReveal` — render with different variants, intersection observer trigger
  - `SidebarLayout` — active section tracking
  - `Footer` — render, decorative flag aria-hidden
  - `AnimatedNumber` — final value announcement, negative input handling
  - `LogrosGrid` — Roman numeral generation, sidebar nav semantics

### 7.3 Coverage target
- Target: 70%+ line coverage across `src/components/` and `src/hooks/`
- Use `vitest run --coverage` to verify

## Layer 8: Polish

### 8.1 CSS variable documentation
- **File:** `src/app/globals.css`
- **Change:** Add a comment block at the top documenting all custom properties (`--duration-normal`, `--ease-standard`, `--ease-out-expo`, etc.) with their values and intended usage.

### 8.2 Hook JSDoc
- **Files:** `src/hooks/useMousePosition.ts`, `src/hooks/useAnimatedNumber.ts`, `src/hooks/useScrollProgress.ts`, `src/hooks/useSectionObserver.ts`
- **Change:** Add JSDoc with `@param`, `@returns`, and usage example for each hook's public API.

## Verification

After each layer commit, run `npm run build` to verify no regressions. After Layer 7 (testing), run `vitest run --coverage` to verify coverage targets.

## Success Criteria

1. `npm run build` passes with zero warnings attributable to project source code
2. `npm run lint` passes
3. `vitest run --coverage` shows 70%+ on `src/components/` and `src/hooks/`
4. No explicit `any` types in `src/` files
5. Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100 (supplemented with manual a11y testing for items like `aria-live` that Lighthouse doesn't audit)
6. All audit issues resolved

## Out of Scope

- Visual/design changes (no layout, color, or content modifications)
- New features or routes
- Third-party error tracking integration (we prepare the hook but don't add Sentry/PostHog)
- E2E test expansion (existing Playwright setup left as-is)
