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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
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
