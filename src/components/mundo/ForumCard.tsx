import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { ForumAppearance } from "@/data/mundo";

interface ForumCardProps {
  forum: ForumAppearance;
}

export function ForumCard({ forum }: ForumCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={forum.image}
          alt={forum.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {forum.highlight && (
          <span className="absolute top-3 right-3 rounded-full bg-[color-mix(in_oklch,var(--color-gold-light),transparent_10%)] px-2.5 py-0.5 text-[length:var(--text-xs)] font-bold text-white">
            DESTACADO
          </span>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklch, var(--color-overlay-dark), transparent 20%) 0%, transparent 50%)",
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-accent text-[length:var(--text-xs)] uppercase tracking-[0.1em] text-[var(--color-gold-light)]">
            {forum.date}
          </span>
          <span className="ml-2 text-[length:var(--text-xs)] text-white/50">
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
