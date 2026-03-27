import { Card } from "@/components/ui/Card";
import type { Pillar } from "@/data/vision";

interface PillarGridProps {
  items: Pillar[];
}

export function PillarGrid({ items }: PillarGridProps) {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-3">
      {items.map((p) => (
        <Card key={p.title} className="p-5 text-center">
          <div className="mb-2 text-[2rem]">{p.icon}</div>
          <h4 className="chapter-title m-0 mb-2 text-[length:var(--text-base)]">
            {p.title}
          </h4>
          <p className="prose-body m-0">{p.desc}</p>
        </Card>
      ))}
    </div>
  );
}
