import type { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS Grid container for mixed-size bento layouts.
 *
 * Children can use these CSS classes for sizing:
 * - `bento-hero`  — spans 2 columns (featured item)
 * - `bento-wide`  — spans 2 columns
 * - `bento-tall`  — spans 2 rows
 * - (default)     — 1×1 cell
 *
 * On mobile (<640px), collapses to single column.
 */
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={`bento-grid${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
