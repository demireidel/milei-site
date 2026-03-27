# World-Class Code Quality Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all 25 audit issues across type safety, architecture, performance, accessibility, SEO, error handling, testing, and polish — making the JMv4 codebase world-class.

**Architecture:** Layer-by-layer refactor in dependency order. Each layer is a commit. Tests come last so they cover final code. No visual/design changes.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, TypeScript 5.9, Vitest 4

**Spec:** `docs/superpowers/specs/2026-03-27-world-class-code-quality-design.md`

---

## File Structure

**Modified files:**
- `src/components/ui/ScrollReveal.tsx` — remove `any` type
- `src/hooks/useAnimatedNumber.ts` — add input validation
- `src/components/home/PhotoStrip.tsx` — tighten event handler types
- `src/components/home/SectionPreviews.tsx` — convert to server component
- `src/data/reformas.tsx` → `src/data/reformas.ts` — purify data (remove JSX)
- `src/components/reformas/ReformasContent.tsx` — use RichText for reforma fields
- `src/components/futuro/PhotoGallery.tsx` — fix image sizes
- `src/components/ui/SidebarLayout.tsx` — memoize sectionIds
- `src/components/home/Hero.tsx` — use CSS animation classes
- `src/app/globals.css` — add animation classes, document CSS vars
- `src/components/NavBar.tsx` — add focus management
- `src/components/logros/LogrosGrid.tsx` — nav semantics, dynamic Roman numerals
- `src/components/ui/AnimatedNumber.tsx` — fix aria-live
- `src/components/Footer.tsx` — fix decorative flag
- `src/app/layout.tsx` — add OG images, canonical URL
- `src/app/error.tsx` — use error.digest
- `src/app/global-error.tsx` — add error logging
- `src/app/page.tsx` — add canonical
- `src/app/archivo/page.tsx` — add canonical
- `src/app/futuro/page.tsx` — add canonical
- `src/app/logros/page.tsx` — add canonical
- `src/app/mundo/page.tsx` — add canonical
- `src/app/reformas/page.tsx` — add canonical
- `src/app/vision/page.tsx` — add canonical
- `src/hooks/__tests__/useScrollProgress.test.ts` — fix fragile RAF mock
- `src/hooks/useMousePosition.ts` — add JSDoc
- `src/hooks/useScrollProgress.ts` — add JSDoc
- `src/hooks/useSectionObserver.ts` — add JSDoc

**New files:**
- `src/components/ui/RichText.tsx` — lightweight markup parser
- `src/lib/roman.ts` — Roman numeral utility
- `src/lib/reportError.ts` — error logging stub
- `src/components/__tests__/NavBar.test.tsx`
- `src/components/__tests__/Hero.test.tsx`
- `src/components/__tests__/Footer.test.tsx`
- `src/components/ui/__tests__/AnimatedNumber.test.tsx`
- `src/components/ui/__tests__/ScrollReveal.test.tsx`
- `src/components/ui/__tests__/ExpandableSection.test.tsx`
- `src/components/ui/__tests__/Card.test.tsx`
- `src/components/ui/__tests__/RichText.test.tsx`
- `src/lib/__tests__/roman.test.ts`

---

### Task 1: Type Safety — ScrollReveal `any` removal

**Files:**
- Modify: `src/components/ui/ScrollReveal.tsx:47-48`

- [ ] **Step 1: Remove the `any` type annotation**

In `src/components/ui/ScrollReveal.tsx`, replace:

```tsx
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
```

with:

```tsx
  as?: ElementType;
```

`ElementType` without a parameter defaults to `any` internally but removes the explicit `any` from our source. This compiles with intrinsic elements like `"div"` and `"section"`.

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: `✓ Generating static pages` with no type errors

---

### Task 2: Type Safety — useAnimatedNumber input validation

**Files:**
- Modify: `src/hooks/useAnimatedNumber.ts:17-22`

- [ ] **Step 1: Add input clamping after destructuring**

In `src/hooks/useAnimatedNumber.ts`, after line 22 (the closing `}: UseAnimatedNumberOptions) {`), add:

```ts
  if (process.env.NODE_ENV !== "production") {
    if (target < 0) console.warn("useAnimatedNumber: target must be >= 0, got", target);
    if (duration <= 0) console.warn("useAnimatedNumber: duration must be > 0, got", duration);
  }
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

---

### Task 3: Type Safety — PhotoStrip event handler types

**Files:**
- Modify: `src/components/home/PhotoStrip.tsx:95,106-107,118`

- [ ] **Step 1: Tighten the PointerEvent types**

In `src/components/home/PhotoStrip.tsx`, replace:

```tsx
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
```

with:

```tsx
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
```

Replace:

```tsx
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
```

with:

```tsx
  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
```

Replace:

```tsx
  const handlePointerUp = useCallback((e: React.PointerEvent) => {
```

with:

```tsx
  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

- [ ] **Step 3: Commit Layer 1**

```bash
git add src/components/ui/ScrollReveal.tsx src/hooks/useAnimatedNumber.ts src/components/home/PhotoStrip.tsx
git commit -m "fix: eliminate explicit any types and tighten type safety"
```

---

### Task 4: Architecture — Convert SectionPreviews to server component

**Files:**
- Modify: `src/components/home/SectionPreviews.tsx:1`

- [ ] **Step 1: Remove the "use client" directive**

In `src/components/home/SectionPreviews.tsx`, delete line 1 (`"use client";`).

This works because the component uses no hooks, event handlers, or browser APIs. It renders client components (`ScrollReveal`, `Card`) as children, which is valid in Next.js server components.

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully (SectionPreviews now renders on the server)

---

### Task 5: Architecture — Create RichText component and purify reformas data

**Files:**
- Create: `src/components/ui/RichText.tsx`
- Modify: `src/data/reformas.tsx` → rename to `src/data/reformas.ts`
- Modify: `src/components/reformas/ReformasContent.tsx`

- [ ] **Step 1: Create RichText component**

Create `src/components/ui/RichText.tsx`:

```tsx
import type { ReactNode } from "react";

/**
 * Renders plain text with **bold** markup as <strong> elements.
 * Keeps data files free of JSX while supporting basic formatting.
 */
export function RichText({ text }: { text: string }): ReactNode {
  if (!text.includes("**")) {
    return text;
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
```

- [ ] **Step 2: Convert reformas data from JSX to plain strings**

Rename `src/data/reformas.tsx` to `src/data/reformas.ts`.

In the `Reforma` interface, change all `ReactNode` fields to `string`:

```ts
export interface Reforma {
  num: string;
  icon?: string;
  title: string;
  subtitle: string;
  desc: string;
  antes: string;
  ahora: string;
  impactStats: ImpactStat[];
  impactText: string;
  quote?: ReformaQuote;
  img?: string;
  imgAlt?: string;
}
```

Remove `import type { ReactNode } from "react";` from the top.

Convert all JSX fragments to plain strings with `**bold**` markup. For example, replace:

```tsx
desc: <><strong>El Banco Central</strong> financiaba el gasto del Gobierno...</>,
```

with:

```ts
desc: "**El Banco Central** financiaba el gasto del Gobierno...",
```

Apply this transformation to every `desc`, `antes`, `ahora`, and `impactText` field in all 12 reforma entries. Remove all `<>...</>` fragments and `<strong>...</strong>` tags, replacing them with `**...**` notation.

- [ ] **Step 3: Update ReformasContent to use RichText**

In `src/components/reformas/ReformasContent.tsx`, add the import:

```tsx
import { RichText } from "@/components/ui/RichText";
```

Wherever reforma string fields are rendered directly (e.g., `{reforma.desc}`), wrap them:

```tsx
<RichText text={reforma.desc} />
```

Do this for `desc`, `antes`, `ahora`, and `impactText`.

- [ ] **Step 4: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully, all 10 routes still generate

- [ ] **Step 5: Commit Layer 2**

```bash
git add src/components/ui/RichText.tsx src/data/reformas.ts src/components/reformas/ReformasContent.tsx src/components/home/SectionPreviews.tsx
git rm src/data/reformas.tsx 2>/dev/null
git commit -m "refactor: convert SectionPreviews to server component, purify reformas data"
```

---

### Task 6: Performance — Image optimization and observer stability

**Files:**
- Modify: `src/components/futuro/PhotoGallery.tsx:21`
- Modify: `src/components/home/PhotoStrip.tsx:160`
- Modify: `src/components/ui/SidebarLayout.tsx:28`

- [ ] **Step 1: Memoize sectionIds in SidebarLayout**

In `src/components/ui/SidebarLayout.tsx`, the `sectionIds` is already wrapped in `useMemo` (line 28):
```tsx
const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
```

However, `items` itself is an array passed from the parent and has unstable identity each render. Stabilize the memo dep by using a string key:

Replace line 28:
```tsx
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
```

with:
```tsx
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sectionIds = useMemo(() => items.map((item) => item.id), [items.map((i) => i.id).join(",")]);
```

This ensures `sectionIds` only changes when the actual IDs change, not when the parent re-renders with a new array reference containing the same items.

- [ ] **Step 2: Fix PhotoGallery image sizes**

In `src/components/futuro/PhotoGallery.tsx`, the `<Image>` tag currently has no `sizes` prop. Add one:

```tsx
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

- [ ] **Step 2: Fix PhotoStrip image sizes**

In `src/components/home/PhotoStrip.tsx` line 160, replace:

```tsx
sizes="(max-width: 768px) 200px, 300px"
```

with:

```tsx
sizes="(max-width: 640px) 40vw, 300px"
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

---

### Task 7: Performance — CSS animation classes for Hero

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/home/Hero.tsx`

- [ ] **Step 1: Add animation utility classes to globals.css**

Add at the end of `src/app/globals.css` (before any closing comments):

```css
/* ── Animation utilities ─────────────────────────── */

.animate-entrance-fade {
  transition: opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo);
}

.animate-entrance-clip {
  transition: clip-path 800ms var(--ease-out-expo);
}

.animate-entrance-clip-slow {
  transition: clip-path 900ms var(--ease-out-expo);
}

.animate-entrance-scale {
  transition: transform 800ms var(--ease-out-expo);
}

.animate-entrance-divider {
  transition: transform 700ms var(--ease-out-expo);
}
```

- [ ] **Step 2: Document CSS custom properties**

Add a comment block at the top of `src/app/globals.css` (after the `@import "tailwindcss"` line):

```css
/*
 * ── CSS Custom Properties Reference ──────────────────
 *
 * Timing:
 *   --duration-fast:    150ms   Quick micro-interactions
 *   --duration-normal:  300ms   Standard transitions
 *   --duration-slow:    600ms   Entrance animations
 *
 * Easing:
 *   --ease-standard:    cubic-bezier(0.2, 0, 0, 1)      General purpose
 *   --ease-decelerate:  cubic-bezier(0, 0, 0, 1)        Entrances
 *   --ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1)   Dramatic reveals
 *
 * Layout:
 *   --height-nav:       3.5rem  Navigation bar height
 *   --width-content:    80rem   Max content width
 *   --width-narrow:     52rem   Narrow content column
 */
```

- [ ] **Step 3: Use CSS classes in Hero inline styles**

In `src/components/home/Hero.tsx`, replace the inline transition strings with the CSS classes where they match. For example, the gold top line (line 89):

Replace:
```tsx
transition: "transform 800ms var(--ease-out-expo)",
```

with className addition `animate-entrance-scale` and remove the `transition` from the style object. Apply similarly to the divider, clip-path reveals, and fade transitions.

Note: Some Hero animations have unique durations (`900ms`) or combine opacity+transform, so not all can use the utility classes. Only replace where they match exactly; leave others as inline.

- [ ] **Step 4: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

- [ ] **Step 5: Commit Layer 3**

```bash
git add src/components/futuro/PhotoGallery.tsx src/components/home/PhotoStrip.tsx src/components/ui/SidebarLayout.tsx src/app/globals.css src/components/home/Hero.tsx
git commit -m "perf: optimize images, stabilize observer, add CSS animation classes"
```

---

### Task 8: Accessibility — NavBar focus management

**Files:**
- Modify: `src/components/NavBar.tsx:55-95`

- [ ] **Step 1: Add initial focus when menu opens**

In the `useEffect` that handles `menuOpen` (line 55-95), after the `if (menuOpen) {` block and the `onKeyDown` listener setup, add focus to the first link:

```tsx
// Focus first menu link when menu opens
const firstLink = menuNavRef.current?.querySelector<HTMLElement>("a[href]");
if (firstLink) {
  requestAnimationFrame(() => firstLink.focus());
}
```

This ensures screen readers and keyboard users land on the first menu item.

- [ ] **Step 2: Verify focus returns to hamburger on Escape**

The existing code at line 60-62 already handles this:
```tsx
if (e.key === "Escape") {
  setMenuOpen(false);
  hamburgerRef.current?.focus();
```

Confirm this still works after the change.

- [ ] **Step 3: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

---

### Task 9: Accessibility — LogrosGrid sidebar semantics and dynamic Roman numerals

**Files:**
- Create: `src/lib/roman.ts`
- Modify: `src/components/logros/LogrosGrid.tsx:11,53-60`

- [ ] **Step 1: Create Roman numeral utility**

Create `src/lib/roman.ts`:

```ts
const ROMAN_MAP: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

export function toRoman(n: number): string {
  if (n <= 0 || !Number.isInteger(n)) return String(n);
  let result = "";
  let remaining = n;
  for (const [value, numeral] of ROMAN_MAP) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
  return result;
}
```

- [ ] **Step 2: Replace hardcoded Roman numerals in LogrosGrid**

In `src/components/logros/LogrosGrid.tsx`, add import:

```tsx
import { toRoman } from "@/lib/roman";
```

Remove line 11:
```tsx
const romanNumerals = ["II", "III", "IV", "V", "VI"];
```

Replace usages of `romanNumerals[i]` with `toRoman(i + 2)`:

In `sidebarItems` (line 56):
```tsx
num: toRoman(i + 2),
```

In the `blocks.map` render (line 88):
```tsx
numeral={toRoman(i + 2)}
```

- [ ] **Step 3: Add nav landmark to SidebarLayout sidebar**

Note: The `SidebarLayout` component (which renders the LogrosGrid sidebar) already wraps the sidebar in a `<nav>` element with `aria-label={label}` (line 38-41 of `SidebarLayout.tsx`). The `LogrosGrid` passes `label="Bloques de logros"` to `SidebarLayout`. This requirement from the spec is already satisfied by the existing code. No changes needed.

- [ ] **Step 4: Verify build passes**

Run: `npm run build 2>&1 | tail -5`
Expected: builds successfully

---

### Task 10: Accessibility — Fix AnimatedNumber aria-live

**Files:**
- Modify: `src/components/ui/AnimatedNumber.tsx:44,64`

- [ ] **Step 1: Fix the strip variant**

In the `strip` variant section, replace line 44 (`aria-live="polite"`) — remove it from the animating `<p>`. Add a visually-hidden span after the visible number that announces only the final value:

Replace the strip variant return (lines 40-56):

```tsx
    return (
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
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
        <span className="sr-only" aria-live="polite">
          {value === target ? `${display}${suffix} ${label}` : ""}
        </span>
      </div>
    );
```

Note: The `aria-live` span is **always mounted** (not conditionally rendered). Its text content is empty until the animation completes, then updates to the final value. This ensures screen readers detect the live region and announce it — conditionally mounting an `aria-live` region may not trigger announcements in some screen readers.

- [ ] **Step 2: Fix the counter variant**

Same pattern — remove `aria-live="polite"` from line 64 and add a permanently-mounted sr-only span:

Replace the counter return (lines 60-78):

```tsx
  return (
    <div ref={ref} className="text-center">
      <p className="stat-number m-0 text-[length:var(--text-3xl)] leading-none">
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
      <span className="sr-only" aria-live="polite">
        {value === target ? `${display}${suffix} ${label}` : ""}
      </span>
    </div>
  );
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build 2>&1 | tail -5`

---

### Task 11: Accessibility — Fix decorative flag in Footer

**Files:**
- Modify: `src/components/Footer.tsx:54-57`

- [ ] **Step 1: Replace role="img" with aria-hidden**

In `src/components/Footer.tsx`, replace:

```tsx
            aria-label="Bandera Argentina"
            role="img"
```

with:

```tsx
            aria-hidden="true"
```

- [ ] **Step 2: Commit Layer 4**

```bash
git add src/components/NavBar.tsx src/lib/roman.ts src/components/logros/LogrosGrid.tsx src/components/ui/AnimatedNumber.tsx src/components/Footer.tsx
git commit -m "fix(a11y): focus management, nav semantics, aria-live, decorative flag"
```

---

### Task 12: SEO — OG images and canonical URLs

**Files:**
- Modify: `src/app/layout.tsx:45-53`
- Modify: all 7 page files

- [ ] **Step 1: Add OG images to layout metadata**

In `src/app/layout.tsx`, add `images` to the `openGraph` block (after `description` on line 52):

```tsx
    images: [
      {
        url: "/images/banco/hero-balcon.jpg",
        width: 1200,
        height: 630,
        alt: "Javier Milei — Presidente de la Nación Argentina",
      },
    ],
```

- [ ] **Step 2: Add canonical URL to layout metadata**

In `src/app/layout.tsx`, add `alternates` to the metadata export (after the `robots` block):

```tsx
  alternates: {
    canonical: "https://javiermilei.com",
  },
```

- [ ] **Step 3: Add canonical to each page**

For each page that exports `metadata`, ensure it includes `alternates.canonical`. Add to each file:

**`src/app/archivo/page.tsx`:**
```tsx
export const metadata: Metadata = {
  ...existingMetadata,
  alternates: { canonical: "https://javiermilei.com/archivo" },
};
```

Repeat for `/futuro`, `/logros`, `/mundo`, `/reformas`, `/vision` with their respective paths.

For `src/app/page.tsx` (home), add:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://javiermilei.com" },
};
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build 2>&1 | tail -5`

- [ ] **Step 5: Commit Layer 5**

```bash
git add src/app/layout.tsx src/app/page.tsx src/app/archivo/page.tsx src/app/futuro/page.tsx src/app/logros/page.tsx src/app/mundo/page.tsx src/app/reformas/page.tsx src/app/vision/page.tsx
git commit -m "seo: add OG images and canonical URLs to all pages"
```

---

### Task 13: Error Handling — Error logging and digest usage

**Files:**
- Create: `src/lib/reportError.ts`
- Modify: `src/app/error.tsx:11-12`
- Modify: `src/app/global-error.tsx:10-11`

- [ ] **Step 1: Create reportError utility**

Create `src/lib/reportError.ts`:

```ts
/**
 * Central error reporting stub.
 * In development, logs to console.
 * Replace the body of this function with Sentry/PostHog/etc. when ready.
 */
export function reportError(error: Error & { digest?: string }): void {
  if (process.env.NODE_ENV !== "production") {
    console.error("[reportError]", {
      message: error.message,
      digest: error.digest,
      stack: error.stack,
    });
  }
  // TODO: Send to error tracking service
  // e.g. Sentry.captureException(error);
}
```

- [ ] **Step 2: Use reportError in error.tsx**

In `src/app/error.tsx`, add import and replace `void error;`:

```tsx
import { reportError } from "@/lib/reportError";
```

Replace:
```tsx
  // Suppress unused-vars lint; error.digest is useful for server-side tracking
  void error;
```

with:
```tsx
  reportError(error);
```

Optionally display the digest as a reference code:

```tsx
        {error.digest && (
          <p className="mt-4 font-mono text-[length:var(--text-xs)] text-text-tertiary">
            Ref: {error.digest}
          </p>
        )}
```

Add this after the "Reintentar" button.

- [ ] **Step 3: Use reportError in global-error.tsx**

In `src/app/global-error.tsx`, add import and replace `void error;`:

```tsx
import { reportError } from "@/lib/reportError";
```

Replace:
```tsx
  // error.digest is useful for server-side error tracking
  void error;
```

with:
```tsx
  reportError(error);
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build 2>&1 | tail -5`

- [ ] **Step 5: Commit Layer 6**

```bash
git add src/lib/reportError.ts src/app/error.tsx src/app/global-error.tsx
git commit -m "fix: add error reporting with digest tracking"
```

---

### Task 14: Testing — Fix fragile useScrollProgress test

**Files:**
- Modify: `src/hooks/__tests__/useScrollProgress.test.ts:6-20`

- [ ] **Step 1: Replace manual RAF mock with vi.useFakeTimers**

In `src/hooks/__tests__/useScrollProgress.test.ts`, replace the `beforeEach` block (lines 6-21):

```ts
beforeEach(() => {
  vi.useFakeTimers();

  // Mock matchMedia — default: no reduced motion
  vi.stubGlobal("matchMedia", vi.fn((query: string) => ({
    matches: query.includes("reduce") ? false : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});
```

Then update any test that relies on RAF running synchronously to use `vi.advanceTimersByTime(16)` instead.

- [ ] **Step 2: Run tests**

Run: `npm run test:run 2>&1`
Expected: all existing tests pass

---

### Task 15: Testing — Roman numeral utility tests

**Files:**
- Create: `src/lib/__tests__/roman.test.ts`

- [ ] **Step 1: Write test**

Create `src/lib/__tests__/roman.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { toRoman } from "../roman";

describe("toRoman", () => {
  it.each([
    [1, "I"], [2, "II"], [3, "III"], [4, "IV"], [5, "V"],
    [6, "VI"], [9, "IX"], [10, "X"], [14, "XIV"],
    [40, "XL"], [50, "L"], [90, "XC"], [100, "C"],
    [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"],
    [2024, "MMXXIV"],
  ])("converts %i to %s", (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });

  it("returns string for non-positive numbers", () => {
    expect(toRoman(0)).toBe("0");
    expect(toRoman(-1)).toBe("-1");
  });
});
```

- [ ] **Step 2: Run test**

Run: `npx vitest run src/lib/__tests__/roman.test.ts`
Expected: all pass

---

### Task 16: Testing — RichText component tests

**Files:**
- Create: `src/components/ui/__tests__/RichText.test.tsx`

- [ ] **Step 1: Write test**

Create `src/components/ui/__tests__/RichText.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RichText } from "../RichText";

describe("RichText", () => {
  it("renders plain text without markup", () => {
    render(<RichText text="Hello world" />);
    expect(screen.getByText("Hello world")).toBeDefined();
  });

  it("renders **bold** as <strong>", () => {
    const { container } = render(<RichText text="This is **bold** text" />);
    const strong = container.querySelector("strong");
    expect(strong).toBeDefined();
    expect(strong?.textContent).toBe("bold");
  });

  it("handles multiple bold segments", () => {
    const { container } = render(<RichText text="**one** and **two**" />);
    const strongs = container.querySelectorAll("strong");
    expect(strongs).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Run test**

Run: `npx vitest run src/components/ui/__tests__/RichText.test.tsx`
Expected: all pass

---

### Task 17: Testing — NavBar component tests

**Files:**
- Create: `src/components/__tests__/NavBar.test.tsx`

- [ ] **Step 1: Write test**

Create `src/components/__tests__/NavBar.test.tsx`:

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { NavBar } from "../NavBar";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock IntersectionObserver
beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  })));
});

describe("NavBar", () => {
  it("renders the navigation", () => {
    render(<NavBar />);
    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeDefined();
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<NavBar />);
    const hamburger = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(hamburger);
    expect(screen.getByRole("navigation", { name: /menú móvil/i })).toBeDefined();
  });

  it("has aria-expanded on hamburger button", () => {
    render(<NavBar />);
    const hamburger = screen.getByRole("button", { name: /abrir menú/i });
    expect(hamburger.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(hamburger);
    expect(hamburger.getAttribute("aria-expanded")).toBe("true");
  });
});
```

- [ ] **Step 2: Run test**

Run: `npx vitest run src/components/__tests__/NavBar.test.tsx`
Expected: all pass

---

### Task 18: Testing — Footer, AnimatedNumber, ScrollReveal, ExpandableSection, Card tests

**Files:**
- Create: `src/components/__tests__/Footer.test.tsx`
- Create: `src/components/ui/__tests__/AnimatedNumber.test.tsx`
- Create: `src/components/ui/__tests__/ScrollReveal.test.tsx`
- Create: `src/components/ui/__tests__/ExpandableSection.test.tsx`
- Create: `src/components/ui/__tests__/Card.test.tsx`

- [ ] **Step 1: Write Footer test**

Create `src/components/__tests__/Footer.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders footer navigation", () => {
    render(<Footer />);
    expect(screen.getByRole("navigation", { name: /pie de página/i })).toBeDefined();
  });

  it("marks the flag as decorative with aria-hidden", () => {
    const { container } = render(<Footer />);
    const flag = container.querySelector("[aria-hidden='true']");
    expect(flag).toBeDefined();
  });
});
```

- [ ] **Step 2: Write AnimatedNumber test**

Create `src/components/ui/__tests__/AnimatedNumber.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AnimatedNumber } from "../AnimatedNumber";

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  })));
});

describe("AnimatedNumber", () => {
  it("renders the label", () => {
    render(<AnimatedNumber target={100} suffix="%" label="Test" />);
    expect(screen.getByText("Test")).toBeDefined();
  });

  it("does not have aria-live on the visible number", () => {
    const { container } = render(<AnimatedNumber target={100} suffix="%" label="Test" />);
    const statNumber = container.querySelector(".stat-number");
    expect(statNumber?.getAttribute("aria-live")).toBeNull();
  });
});
```

- [ ] **Step 3: Write ScrollReveal test**

Create `src/components/ui/__tests__/ScrollReveal.test.tsx`:

```tsx
import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ScrollReveal } from "../ScrollReveal";

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  })));
  vi.stubGlobal("matchMedia", vi.fn(() => ({
    matches: false,
    media: "",
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })));
});

describe("ScrollReveal", () => {
  it("renders children", () => {
    const { getByText } = render(
      <ScrollReveal>Hello</ScrollReveal>
    );
    expect(getByText("Hello")).toBeDefined();
  });

  it("renders as custom element", () => {
    const { container } = render(
      <ScrollReveal as="section">Content</ScrollReveal>
    );
    expect(container.querySelector("section")).toBeDefined();
  });

  it("applies hidden styles initially", () => {
    const { container } = render(
      <ScrollReveal variant="fade-up">Content</ScrollReveal>
    );
    const el = container.firstElementChild as HTMLElement;
    expect(el.style.opacity).toBe("0");
  });
});
```

- [ ] **Step 4: Write ExpandableSection test**

Create `src/components/ui/__tests__/ExpandableSection.test.tsx`:

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ExpandableSection } from "../ExpandableSection";

describe("ExpandableSection", () => {
  it("renders title", () => {
    render(<ExpandableSection title="Test Section">Content</ExpandableSection>);
    expect(screen.getByText("Test Section")).toBeDefined();
  });

  it("toggles content visibility on click", () => {
    render(<ExpandableSection title="Test">Hidden content</ExpandableSection>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
  });

  it("generates a default ID via useId when none provided", () => {
    render(<ExpandableSection title="Test">Content</ExpandableSection>);
    const button = screen.getByRole("button");
    expect(button.getAttribute("aria-controls")).toBeTruthy();
  });
});
```

- [ ] **Step 5: Write Card test**

Create `src/components/ui/__tests__/Card.test.tsx`:

```tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "../Card";

describe("Card", () => {
  it("renders children", () => {
    const { getByText } = render(<Card>Card content</Card>);
    expect(getByText("Card content")).toBeDefined();
  });

  it("applies accent class when accent prop is true", () => {
    const { container } = render(<Card accent>Content</Card>);
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain("card-accent");
  });
});
```

Note: Check that `Card` actually uses `card-accent` class — read the file first and adjust test assertions to match actual implementation.

- [ ] **Step 6: Run all tests**

Run: `npm run test:run 2>&1`
Expected: all tests pass

- [ ] **Step 7: Check coverage**

Run: `npm run test:coverage 2>&1 | tail -20`
Expected: 70%+ coverage on `src/components/` and `src/hooks/`

- [ ] **Step 8: Commit Layer 7**

```bash
git add src/hooks/__tests__/ src/lib/__tests__/ src/components/__tests__/ src/components/ui/__tests__/
git commit -m "test: expand coverage to 70%+ across components and hooks"
```

---

### Task 19: Polish — Hook JSDoc

**Files:**
- Modify: `src/hooks/useMousePosition.ts`
- Modify: `src/hooks/useAnimatedNumber.ts`
- Modify: `src/hooks/useScrollProgress.ts`
- Modify: `src/hooks/useSectionObserver.ts`

- [ ] **Step 1: Add JSDoc to useMousePosition**

Already has a doc comment. Verify it includes `@param` and `@returns`. If not, add:

```ts
/**
 * Tracks mouse position relative to an element.
 *
 * @param ref - React ref to the target element
 * @returns `{ relX, relY, hovering }` — normalized -1..1 from center
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const { relX, relY } = useMousePosition(ref);
 * ```
 */
```

- [ ] **Step 2: Add JSDoc to useScrollProgress**

```ts
/**
 * Returns a 0..1 progress value representing how far an element
 * has scrolled off the top of the viewport.
 *
 * @param ref - React ref to the target element
 * @returns 0 = top visible, 1 = fully off-screen
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const progress = useScrollProgress(ref);
 * ```
 */
```

- [ ] **Step 3: Add JSDoc to useSectionObserver**

```ts
/**
 * Tracks which section is currently in view using IntersectionObserver.
 *
 * @param ids - Array of element IDs to observe
 * @param rootMargin - IntersectionObserver rootMargin (default: "-30% 0px -60% 0px")
 * @returns The ID of the currently active section
 *
 * @example
 * ```tsx
 * const active = useSectionObserver(["section-1", "section-2"]);
 * ```
 */
```

- [ ] **Step 4: Add JSDoc to useAnimatedNumber**

Already has a comment. Ensure it includes `@param` and `@returns`:

```ts
/**
 * Animates a number from 0 → target when the element enters the viewport.
 * Uses exponential ease-out for a premium feel.
 *
 * @param options.target - Target number to animate to (must be >= 0)
 * @param options.duration - Animation duration in ms (default: 1800)
 * @param options.threshold - IntersectionObserver threshold (default: 0.3)
 * @param options.decimals - Decimal places to display (default: 0)
 * @returns `{ ref, value, display }` — ref to attach, current value, formatted string
 */
```

- [ ] **Step 5: Commit Layer 8**

```bash
git add src/hooks/
git commit -m "docs: add JSDoc to all public hook APIs"
```

---

### Task 20: Final verification

- [ ] **Step 1: Full build**

Run: `npm run build 2>&1`
Expected: clean build, all 10 routes generated

- [ ] **Step 2: Full test suite**

Run: `npm run test:run 2>&1`
Expected: all tests pass

- [ ] **Step 3: Coverage check**

Run: `npm run test:coverage 2>&1`
Expected: 70%+ on components and hooks

- [ ] **Step 4: Lint**

Run: `npm run lint 2>&1`
Expected: no errors

- [ ] **Step 5: Final commit if any remaining changes**

```bash
git add -A && git commit -m "chore: final polish and cleanup"
```
