import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { ForumAppearance } from "@/data/mundo";

interface ForumCardProps {
  forum: ForumAppearance;
  className?: string;
}

export function ForumCard({ forum, className }: ForumCardProps) {
  return (
    <Card className={`overflow-hidden${className ? ` ${className}` : ""}`}>
      <div className="relative h-48 w-full">
        <Image
          src={forum.image}
          alt={forum.imageAlt || forum.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {forum.highlight && (
          <span className="absolute top-3 right-3 rounded-full bg-[color-mix(in_oklch,var(--color-gold-light),transparent_10%)] px-2.5 py-0.5 text-xs font-bold text-white">
            DESTACADO
          </span>
        )}
        <div
          className="forum-card-overlay absolute inset-0"
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-accent text-xs uppercase tracking-[0.1em] text-[var(--color-gold-light)]">
            {forum.date}
          </span>
          <span className="ml-2 text-xs text-white/50">
            {forum.location}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="card-heading m-0 mb-2">{forum.title}</h4>
        <p className="card-body m-0">{forum.desc}</p>
      </div>
    </Card>
  );
}
