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
 * RAF id stored in ref so in-flight animation can be cancelled on unmount.
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
