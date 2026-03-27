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
 * - Absolute x/y: written directly to CSS custom props --mx/--my on the element ref —
 *   zero React re-renders per mousemove frame; gradient computed entirely by CSS.
 * - Disabled on touch devices (hover: none) to avoid performance cost.
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
        // Direct DOM mutation — no React re-render per mousemove frame
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        // Normalized values stay as state (used for 3D tilt)
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
