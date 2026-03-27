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
