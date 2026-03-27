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
 * Uses exponential ease-out for a premium feel.
 *
 * @param options.target - Target number to animate to (must be >= 0)
 * @param options.duration - Animation duration in ms (default: 1800)
 * @param options.threshold - IntersectionObserver threshold (default: 0.3)
 * @param options.decimals - Decimal places to display (default: 0)
 * @returns `{ ref, value, display }` — ref to attach, current value, formatted string
 */
export function useAnimatedNumber({
  target,
  duration = 1800,
  threshold = 0.3,
  decimals = 0,
}: UseAnimatedNumberOptions) {
  if (process.env.NODE_ENV !== "production") {
    if (target < 0) console.warn("useAnimatedNumber: target must be >= 0, got", target);
    if (duration <= 0) console.warn("useAnimatedNumber: duration must be > 0, got", duration);
  }
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          if (reducedMotion) {
            setValue(target);
            return;
          }

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
