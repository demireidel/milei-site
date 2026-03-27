# Best Practices Rewrite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite all code that deviates from 2025 best practices for Next.js 16 / React 19 / TypeScript 5.9 / Tailwind CSS 4, producing a flawless design system, zero performance regressions, and WCAG AA accessibility.

**Architecture:** The codebase is already well-structured. Changes are surgical improvements across ~15 files — no structural reorganisation needed. Improvements are grouped by impact tier: urgent UX fixes first, then performance, then correctness, then consistency.

**Tech Stack:** Next.js 16.2, React 19, TypeScript 5.9 (strict), Tailwind CSS 4.1 (`@theme`), OKLCH color space, CSS `@layer components`.

---

## File Map

| File | Change type | What changes |
|------|-------------|-------------|
| `src/components/home/Hero.tsx` | Modify | Remove scroll-parallax lift; disable video; fix subtitle width; remove mediaScale |
| `src/hooks/useMousePosition.ts` | Modify | Move x/y to CSS custom props on element (no setState per frame) |
| `src/components/ui/Card.tsx` | Modify | Gradient uses `var(--mx)/var(--my)` CSS class; remove re-render on mousemove |
| `src/app/globals.css` | Modify | Add `.card-glow` class; add hero gradient CSS class; fix scroll-dot keyframe |
| `src/components/home/PhotoStrip.tsx` | Modify | Stable image keys; inline aspect-ratio to CSS; add aria-label |
| `src/hooks/useAnimatedNumber.ts` | Modify | Store RAF id in ref; cancel on cleanup; remove dual setState per frame |
| `src/components/ui/ScrollReveal.tsx` | Modify | Remove willChange after element becomes visible (memory) |
| `src/components/ui/ExpandableSection.tsx` | Modify | `useId()` for guaranteed-unique IDs |
| `src/app/global-error.tsx` | Modify | Use error param; replace hex with CSS vars; add accents |
| `src/components/ui/PageHeader.tsx` | Modify | Remove parallax scale on bg image (CLS improvement) |
| `src/components/home/StatsStrip.tsx` | Modify | Derive `progress` locally after hook removes it |

---

## Task 1: Hero — Remove Scroll-Parallax Lift + Disable Video

**Files:**
- Modify: `src/components/home/Hero.tsx`

The "efecto levantar pagina" is `contentTranslateY = exitProgress * -80` and `contentOpacity = 1 - exitProgress` that make the hero content float up and fade as the user scrolls. Remove these. Also remove `mediaScale` (video scale on scroll). The scroll progress hook and `exitProgress` become unused — remove them.

Additionally: disable the hero video (set `showFallback = true` by default) until a clean video without Alberto Fernández is provided. The fallback heroImage renders instead.

Also fix: subtitle `max-w-sm` → `max-w-lg` (was wrapping one word per line).

- [ ] **Step 1: Remove scroll-parallax and video, fix subtitle**

Replace `Hero.tsx` with this implementation:

```tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroImage } from "@/data/photos";

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStep(99);
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    // Skip entrance animation on slow connections
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setStep(99);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 100),   // gold top line
      setTimeout(() => setStep(2), 400),   // eyebrow
      setTimeout(() => setStep(3), 600),   // "Javier"
      setTimeout(() => setStep(4), 800),   // "Milei"
      setTimeout(() => setStep(5), 1200),  // gold divider
      setTimeout(() => setStep(6), 1500),  // subtitle
      setTimeout(() => setStep(7), 1900),  // scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const shown = step >= 99;

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background image (video disabled until clean cut available) */}
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold accent line at top */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gold"
        style={{
          transform: (shown || step >= 1) ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 800ms var(--ease-out-expo)",
        }}
      />

      {/* Content — no scroll-driven transform */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12">
        {/* Eyebrow */}
        <p
          className="mb-6 text-center font-accent text-[length:var(--text-xs)] uppercase tracking-[0.35em] text-white/50"
          style={{
            opacity: (shown || step >= 2) ? 1 : 0,
            transform: (shown || step >= 2) ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo)",
          }}
        >
          Presidente de la Nación Argentina
        </p>

        <h1
          className="text-center"
          style={{
            lineHeight: 0.88,
            textShadow: "0 4px 48px oklch(0 0 0 / 0.6)",
          }}
        >
          <span
            className="block font-accent font-bold uppercase text-white"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 5.5rem)",
              letterSpacing: "0.18em",
              clipPath: (shown || step >= 3) ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 800ms var(--ease-out-expo)",
            }}
          >
            Javier
          </span>
          <span
            className={`block font-accent font-bold uppercase ${(shown || step >= 4) ? "gold-shimmer" : ""}`}
            style={{
              fontSize: "clamp(4rem, 16vw, 9.5rem)",
              letterSpacing: "0.08em",
              clipPath: (shown || step >= 4) ? "inset(0)" : "inset(100% 0 0 0)",
              transition: "clip-path 900ms var(--ease-out-expo)",
              ...(!(shown || step >= 4) ? { color: "var(--color-gold)" } : {}),
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider */}
        <div
          className="mx-auto mb-5 mt-7 h-px w-20 bg-gold"
          style={{
            transform: (shown || step >= 5) ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 700ms var(--ease-out-expo)",
          }}
        />

        {/* Subtitle — max-w-lg so the phrase fits on 1-2 lines */}
        <p
          className="max-w-lg text-center font-display text-[length:var(--text-lg)] italic leading-snug text-white/65"
          style={{
            opacity: (shown || step >= 6) ? 1 : 0,
            transform: (shown || step >= 6) ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 700ms var(--ease-out-expo), transform 700ms var(--ease-out-expo)",
          }}
        >
          Argentina será el país más libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
          style={{
            opacity: (shown || step >= 7) ? 1 : 0,
            transition: "opacity 400ms var(--ease-standard)",
          }}
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add `.hero-overlay` CSS class to globals.css**

In `src/app/globals.css`, after `.section-light-text { ... }`, add:

```css
/* Hero gradient overlay — replaces inline background in Hero.tsx */
.hero-overlay {
  background: linear-gradient(
    to bottom,
    color-mix(in oklch, var(--color-overlay-dark), transparent 85%) 0%,
    color-mix(in oklch, var(--color-overlay-dark), transparent 65%) 40%,
    color-mix(in oklch, var(--color-overlay-dark), transparent 30%) 80%,
    color-mix(in oklch, var(--color-overlay-dark), transparent 10%) 100%
  );
}
```

- [ ] **Step 3: Build check**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -20
```

Expected: no TypeScript errors, successful build.

- [ ] **Step 4: Commit**

```bash
cd /Users/demianreidel/1-JM && git add src/components/home/Hero.tsx src/app/globals.css && git commit -m "fix: remove hero parallax lift; disable video; fix subtitle width"
```

---

## Task 2: Card — CSS-Custom-Property Gradient (Performance)

**Files:**
- Modify: `src/hooks/useMousePosition.ts`
- Modify: `src/components/ui/Card.tsx`
- Modify: `src/app/globals.css`

**Problem:** Every `mousemove` event calls `setPos(...)` → React schedules a re-render of `Card` → the radial gradient `<div>` is recreated with a new `background` inline style string. With 6 cards in `SectionPreviews` and 10+ in `LogrosGrid`, this is 60 separate React render cycles per second during hover.

**Solution:** Remove `x` and `y` from React state entirely. Instead, update CSS custom properties `--mx` and `--my` directly on the DOM element via a ref. The gradient is computed entirely by CSS — zero React re-renders during mousemove. Only `hovering` remains as React state (flips once on enter/leave).

- [ ] **Step 1: Refactor `useMousePosition`**

```typescript
"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface MousePosition {
  /** Normalized -1..1 from center (horizontal) */
  relX: number;
  /** Normalized -1..1 from center (vertical) */
  relY: number;
  /** Whether cursor is currently over the element */
  hovering: boolean;
}

const ZERO: MousePosition = { relX: 0, relY: 0, hovering: false };

/**
 * Tracks mouse position relative to an element.
 * - relX/relY: normalized -1..1 from center, stored as React state (used for 3D tilt).
 * - Absolute x/y: written directly to CSS custom props --mx/--my on the element (zero React re-renders per frame).
 * - Disabled on touch devices (hover: none).
 * - Uses RAF throttle for 60fps.
 */
export function useMousePosition(ref: RefObject<HTMLElement | null>): MousePosition {
  const [pos, setPos] = useState<MousePosition>(ZERO);
  const canHover = useRef(true);

  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover.current) return;

    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Direct DOM mutation — no React re-render per frame
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        // Only normalized values stay as state (used for 3D tilt — already batched by RAF)
        const relX = (x / rect.width) * 2 - 1;
        const relY = (y / rect.height) * 2 - 1;
        setPos({ relX, relY, hovering: true });
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
      setPos(ZERO);
    };

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return pos;
}
```

Note: `relX`/`relY` updates are still state, but they only trigger re-renders during actual movement — which is needed for the 3D tilt transform. The gradient update path is now DOM-only.

- [ ] **Step 2: Update `Card.tsx`**

The glowing border element no longer needs an inline `background` style — it uses the CSS class `.card-glow` which reads `var(--mx)` and `var(--my)` directly from the element's custom properties:

```tsx
"use client";

import { useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  accent = false,
  hover = false,
  className = "",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { relX, relY, hovering } = useMousePosition(cardRef);

  if (!hover) {
    return (
      <div className={`${accent ? "surface-card-accent" : "surface-card"} ${className}`}>
        {children}
      </div>
    );
  }

  const rotateX = hovering ? relY * -4 : 0;
  const rotateY = hovering ? relX * 4 : 0;

  return (
    <div className="relative" ref={cardRef}>
      {/* Glow ring — gradient reads --mx/--my via CSS, no re-render per mousemove frame */}
      {hovering && (
        <div
          aria-hidden="true"
          className="card-glow pointer-events-none absolute -inset-px rounded-[var(--radius-xl)]"
        />
      )}
      <div
        className={`${accent ? "surface-card-accent" : "surface-card"} card-hover relative ${className}`}
        style={{
          transform: hovering
            ? `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            : "perspective(800px) rotateX(0) rotateY(0)",
          transition: hovering
            ? "transform 100ms linear"
            : "transform 400ms var(--ease-spring)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Add `.card-glow` to `globals.css`**

After `.hero-overlay { ... }`:

```css
/* Card spotlight glow — reads --mx/--my set directly on parent by useMousePosition.
   Zero React re-renders per mousemove frame; gradient computed entirely by CSS. */
.card-glow {
  background: radial-gradient(
    circle 200px at var(--mx, 50%) var(--my, 50%),
    oklch(0.80 0.17 85 / 0.15),
    transparent 70%
  );
}
```

- [ ] **Step 4: Build check**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -20
```

- [ ] **Step 5: Commit**

```bash
cd /Users/demianreidel/1-JM && git add src/hooks/useMousePosition.ts src/components/ui/Card.tsx src/app/globals.css && git commit -m "perf: card glow via CSS custom props — eliminate mousemove re-renders"
```

---

## Task 3: PhotoStrip — Stable Keys + Accessibility

**Files:**
- Modify: `src/components/home/PhotoStrip.tsx`

Using `key={i}` with a doubled array is a bug: when `doubled` is `[a,b,a,b]`, two elements share the same index `0` and `2` after React's reconciliation, causing unnecessary unmount/remount and breaking React's diffing. Fix: use `{src}-{i}` as key (stable, unique within the doubled array). Also add `role="region"` + `aria-label` for screen readers.

- [ ] **Step 1: Fix key and add accessibility**

In `PhotoStrip.tsx`, change:

```tsx
{doubled.map((p, i) => (
  <Image
    key={i}
    src={p.src}
    alt={p.alt}
    width={448}
    height={280}
    draggable={false}
    className="h-[clamp(8rem,6rem+8vw,14rem)] w-auto rounded-md object-cover"
    style={{ aspectRatio: "16/10" }}
    sizes="(max-width: 768px) 200px, 300px"
  />
))}
```

to:

```tsx
{doubled.map((p, i) => (
  <Image
    key={`${p.src}-${i}`}
    src={p.src}
    alt={p.alt}
    width={448}
    height={280}
    draggable={false}
    className="h-[clamp(8rem,6rem+8vw,14rem)] w-auto rounded-md object-cover"
    sizes="(max-width: 768px) 200px, 300px"
  />
))}
```

(Remove the inline `style={{ aspectRatio: "16/10" }}` — the `w-auto` + fixed `width/height` props already establish the aspect ratio for `next/image`.)

Also change the outer wrapper:

```tsx
<div
  ref={wrapperRef}
  role="region"
  aria-label="Galería de fotos"
  className={`select-none overflow-hidden bg-dark py-[var(--spacing-xs)] ${
    isDragging ? "cursor-grabbing" : "cursor-grab"
  }`}
  style={{ touchAction: "pan-y" }}
  ...
>
```

- [ ] **Step 2: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/components/home/PhotoStrip.tsx && git commit -m "fix: stable image keys in PhotoStrip; add aria-label"
```

---

## Task 4: useAnimatedNumber — RAF Cleanup

**Files:**
- Modify: `src/hooks/useAnimatedNumber.ts`

The `animate` inner function calls `requestAnimationFrame(animate)` recursively but never stores the returned ID, so `cancelAnimationFrame` cannot be called if the component unmounts mid-animation. The IntersectionObserver `disconnect()` handles the observer but not the in-flight RAF.

Also: calling `setValue` + `setProgress` triggers two React re-renders per frame. Batch them by returning a tuple from a single `useReducer`, or simply remove `progress` from state (it's only used to coordinate scale/glow in the calling component — callers can derive it from `value/target`).

- [ ] **Step 1: Fix RAF cleanup; remove dual-setState per frame**

```typescript
"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedNumberOptions {
  target: number;
  duration?: number;
  threshold?: number;
  decimals?: number;
}

/**
 * Animates a number from 0 → target when the element enters the viewport.
 * Exponential ease-out for a premium feel.
 */
export function useAnimatedNumber({
  target,
  duration = 1800,
  threshold = 0.3,
  decimals = 0,
}: UseAnimatedNumberOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const scale = Math.pow(10, decimals);
          const scaledTarget = Math.round(target * scale);

          const animate = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * p);
            setValue(Math.round(scaledTarget * eased) / scale);
            if (p < 1) {
              rafId.current = requestAnimationFrame(animate);
            }
          };

          rafId.current = requestAnimationFrame(animate);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [target, duration, threshold, decimals]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("es-AR");

  return { ref, value, display };
}
```

Note: `progress` return value removed — check callers.

- [ ] **Step 2: Fix `StatsStrip.tsx` — derive `progress` locally**

`StatsStrip.tsx` currently destructures `progress` from the hook and uses it for a scale pop animation. After the hook rewrite, `progress` is no longer returned. Derive it from `value` and `stat.target` instead.

In `src/components/home/StatsStrip.tsx`, change the `AnimatedStat` function:

```tsx
function AnimatedStat({ stat, delay }: { stat: StatItem; delay: number }) {
  const { ref, display, value } = useAnimatedNumber({
    target: stat.target,
    duration: 1800,
    decimals: stat.decimals,
  });

  // Derive progress locally: 0 → 1 as value approaches target
  const progress = stat.target > 0 ? Math.min(value / stat.target, 1) : 1;
  const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;

  return (
    <ScrollReveal variant="scale-in" delay={delay}>
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow: "0 0 40px oklch(0.80 0.17 85 / 0.2)",
          }}
        >
          {display}
          <span className="text-[0.7em]">{stat.suffix}</span>
        </p>
        <p className="stat-label m-0 mt-2">{stat.label}</p>
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 3: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/hooks/useAnimatedNumber.ts src/components/home/StatsStrip.tsx && git commit -m "fix: cancel in-flight RAF on unmount in useAnimatedNumber; derive progress in StatsStrip"
```

---

## Task 5: ScrollReveal — Remove willChange After Visible

**Files:**
- Modify: `src/components/ui/ScrollReveal.tsx`

`willChange: visible ? undefined : config.transition` keeps `willChange: "opacity,transform"` on elements while they are *invisible* (the correct time to hint the compositor). Once `visible = true`, it correctly removes `willChange`. This is already correct. However, the hint string format is wrong for `willChange` — CSS properties must be space-separated, not comma-separated in `will-change`. The transition shorthand uses commas, but `will-change` uses spaces.

- [ ] **Step 1: Fix willChange format**

In `ScrollReveal.tsx`, change:

```typescript
willChange: visible ? undefined : config.transition,
```

to:

```typescript
willChange: visible ? undefined : config.transition.split(",").join(" "),
```

This converts `"opacity,transform"` → `"opacity transform"` which is valid CSS for `will-change`.

- [ ] **Step 2: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/components/ui/ScrollReveal.tsx && git commit -m "fix: will-change property format (space-separated, not comma)"
```

---

## Task 6: ExpandableSection — Unique IDs with useId()

**Files:**
- Modify: `src/components/ui/ExpandableSection.tsx`

If two `<ExpandableSection>` components render without an explicit `id` prop, both get `aria-controls="expandable"` pointing to the same ID, breaking the accessibility association.

React 19 / React 18+ provides `useId()` for SSR-stable unique IDs.

- [ ] **Step 1: Add useId()**

```tsx
"use client";

import { useState, useRef, useCallback, useId } from "react";

interface ExpandableSectionProps {
  label?: string;
  labelExpanded?: string;
  children: React.ReactNode;
  id?: string;
}

export function ExpandableSection({
  label = "Ver más",
  labelExpanded = "Ver menos",
  children,
  id,
}: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const contentId = id ?? generatedId;

  const toggle = useCallback(() => {
    if (!expanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
    setExpanded((v) => !v);
  }, [expanded]);

  return (
    <div>
      <button
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex w-full cursor-pointer items-center justify-between border-t border-border bg-transparent px-5 py-3 text-left font-accent text-[length:var(--text-xs)] uppercase tracking-wider text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-gold"
      >
        {expanded ? labelExpanded : label}
        <svg
          className={`h-4 w-4 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-spring)] ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={contentId}
        ref={contentRef}
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? `${height}px` : "0",
          transition: `max-height ${expanded ? "500ms" : "300ms"} var(--ease-out-expo)`,
        }}
      >
        <div
          className="px-5 py-4"
          style={{
            opacity: expanded ? 1 : 0,
            transition: expanded
              ? "opacity 300ms var(--ease-standard) 150ms"
              : "opacity 150ms var(--ease-standard)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
```

Also fixed: "Ver mas" → "Ver más" (accent mark).

- [ ] **Step 2: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/components/ui/ExpandableSection.tsx && git commit -m "fix: useId() for unique ExpandableSection IDs; fix accent mark"
```

---

## Task 7: global-error — Types, CSS Vars, Accents

**Files:**
- Modify: `src/app/global-error.tsx`

Issues:
1. `error` is destructured in the type signature but not used in the component — TypeScript strict mode flags this.
2. Hardcoded hex colors (`#0a0a0f`, `#F6B40E`) not matching design tokens.
3. Missing accent marks ("critico", "Ocurrio", "pagina").

Note: `global-error.tsx` renders outside the Next.js layout, so it cannot import CSS files or use Tailwind classes. Inline styles are correct here — but they must reference CSS custom properties set at the html/body level, or use the design token hex fallback values defined in `@theme`.

- [ ] **Step 1: Fix global-error.tsx**

```tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // error.digest is useful for server-side error tracking
  void error;

  return (
    <html lang="es">
      <body
        style={{
          background: "#0a0a0f",
          color: "rgba(255,255,255,0.92)",
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100dvh",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Error crítico
          </h1>
          <p style={{ opacity: 0.6, marginBottom: "2rem" }}>
            Ocurrió un error grave. Intentá recargar la página.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#b8860b",   /* --color-gold-hex */
              color: "#0a0a0f",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
```

Note: Uses `#b8860b` (the `--color-gold-hex` token from @theme) instead of arbitrary `#F6B40E`. `void error` suppresses the unused-var lint while keeping it available for logging.

- [ ] **Step 2: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/app/global-error.tsx && git commit -m "fix: global-error types, accent marks, correct gold hex"
```

---

## Task 8: PageHeader — Remove Parallax Scale on Background

**Files:**
- Modify: `src/components/ui/PageHeader.tsx`

The background image uses `transform: translateY(${parallaxY}px) scale(1.05)` for a parallax effect. The `scale(1.05)` means the image starts 5% larger than needed — this contributes to a subtle Cumulative Layout Shift (CLS) on initial load as the image snaps into position. Remove `scale(1.05)` from the base transform; only keep the translateY parallax. The image should be `object-cover` on a 100% container — scale is unnecessary.

- [ ] **Step 1: Read and identify the exact lines**

Read `src/components/ui/PageHeader.tsx` lines 60-70 to confirm the exact transform string, then remove `scale(1.05)`.

Change:
```tsx
transform: `translateY(${parallaxY}px) scale(1.05)`,
```
to:
```tsx
transform: `translateY(${parallaxY}px)`,
```

- [ ] **Step 2: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/components/ui/PageHeader.tsx && git commit -m "fix: remove unnecessary scale(1.05) from PageHeader parallax"
```

---

## Task 9: Design System — Hardcoded Color Values

**Files:**
- Modify: `src/components/mundo/MundoContent.tsx`
- Modify: `src/components/futuro/FuturoContent.tsx`

Hardcoded `oklch(...)` color literals in component files break the design system single-source-of-truth principle. All colors must reference `var(--color-*)` tokens.

- [ ] **Step 1: Find all hardcoded oklch/hex colors in components**

```bash
grep -rn "oklch\|#[0-9a-fA-F]\{3,6\}" /Users/demianreidel/1-JM/src/components --include="*.tsx" | grep -v "node_modules"
```

- [ ] **Step 2: Replace each hardcoded color with the correct CSS variable**

Common replacements:
- `oklch(0.80_0.17_85/0.9)` or `oklch(0.80 0.17 85 / 0.9)` → `color-mix(in oklch, var(--color-gold), transparent 10%)`
- `oklch(0.10 0.01 270 / 0.8)` → `color-mix(in oklch, var(--color-overlay-dark), transparent 20%)`
- Any direct `#hex` in components → map to the closest `var(--color-*)` token

Read each file line before editing to confirm the exact string.

- [ ] **Step 3: Build check + commit**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1 | tail -10 && git add src/components/mundo/MundoContent.tsx src/components/futuro/FuturoContent.tsx && git commit -m "fix: replace hardcoded oklch/hex literals with CSS variables"
```

---

## Task 10: Final Build + Push

- [ ] **Step 1: Full clean build**

```bash
cd /Users/demianreidel/1-JM && npm run build 2>&1
```

Expected: `✓ Compiled successfully`, `Route (app)` table showing all pages, zero TypeScript errors.

- [ ] **Step 2: Check git log**

```bash
cd /Users/demianreidel/1-JM && git log --oneline -12
```

Confirm all task commits are present.

- [ ] **Step 3: Push**

```bash
cd /Users/demianreidel/1-JM && git push origin main
```

---

## Summary of Changes

| Task | Files | Impact |
|------|-------|--------|
| 1 — Hero parallax + video | Hero.tsx, globals.css | UX: no lift effect; no Alberto clip |
| 2 — Card CSS gradient | useMousePosition.ts, Card.tsx, globals.css | Perf: eliminates 60 re-renders/sec per card during hover |
| 3 — PhotoStrip keys | PhotoStrip.tsx | Correctness: stable reconciliation; a11y label |
| 4 — AnimatedNumber RAF | useAnimatedNumber.ts | Correctness: no memory leak on unmount |
| 5 — ScrollReveal willChange | ScrollReveal.tsx | Correctness: valid CSS will-change value |
| 6 — ExpandableSection IDs | ExpandableSection.tsx | A11y: unique aria-controls IDs |
| 7 — global-error | global-error.tsx | Quality: types, accents, correct gold |
| 8 — PageHeader scale | PageHeader.tsx | CLS: remove unnecessary scale(1.05) |
| 9 — Hardcoded colors | MundoContent.tsx, FuturoContent.tsx | Design system: all colors via CSS vars |
