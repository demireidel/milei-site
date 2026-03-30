"use client";

import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathProps {
  /** LaTeX expression */
  tex: string;
  /** Display mode (block) vs inline */
  display?: boolean;
  className?: string;
}

export function Math({ tex, display = false, className = "" }: MathProps) {
  const html = useMemo(
    () => katex.renderToString(tex, { displayMode: display, throwOnError: false, trust: true }),
    [tex, display]
  );

  if (display) {
    return (
      <div
        className={`my-4 overflow-x-auto text-center ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
