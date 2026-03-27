import type { ReactNode } from "react";

/**
 * Renders plain text with **bold** markup as <strong> elements.
 * Keeps data files free of JSX while supporting basic formatting.
 */
export function RichText({ text }: { text: string }): ReactNode {
  if (!text.includes("**")) {
    return text;
  }

  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
