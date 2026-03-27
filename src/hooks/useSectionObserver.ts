"use client";

import { useState, useEffect } from "react";

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
export function useSectionObserver(
  ids: string[],
  rootMargin = "-30% 0px -60% 0px"
): string {
  const [active, setActive] = useState(ids[0] ?? "");

  const idsKey = ids.join(",");

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
  }, [idsKey, rootMargin]); // idsKey is a stable primitive derived from ids

  return active;
}
