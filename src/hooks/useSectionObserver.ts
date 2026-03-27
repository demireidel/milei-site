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
