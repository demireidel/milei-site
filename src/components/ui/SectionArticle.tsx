"use client";

import { Divider } from "@/components/ui/Divider";

interface SectionArticleProps {
  id: string;
  last?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function SectionArticle({
  id,
  last = false,
  className,
  children,
}: SectionArticleProps) {
  return (
    <article id={id} className={className ?? "mb-20"}>
      {children}
      {!last && <Divider animated className="mt-16" />}
    </article>
  );
}
