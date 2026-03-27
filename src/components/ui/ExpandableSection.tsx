"use client";

import { useState, useCallback, useId } from "react";

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
  const generatedId = useId();
  const contentId = id ?? generatedId;

  const toggle = useCallback(() => {
    setExpanded((v) => !v);
  }, []);

  return (
    <div>
      <button
        onClick={toggle}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex w-full cursor-pointer items-center justify-between border-t border-border bg-transparent px-5 py-3 text-left font-accent text-xs uppercase tracking-wider text-text-secondary transition-colors duration-fast hover:text-gold"
      >
        {expanded ? labelExpanded : label}
        <svg
          className={`h-4 w-4 transition-transform duration-normal ease-spring ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={contentId}
        className="expandable-content"
        data-expanded={expanded}
      >
        <div className="px-5 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
