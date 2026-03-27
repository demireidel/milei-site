import { Card } from "@/components/ui/Card";
import type { Thinker } from "@/data/vision";

interface ThinkerGridProps {
  items: Thinker[];
}

export function ThinkerGrid({ items }: ThinkerGridProps) {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((t) => (
        <Card key={t.title} className="p-4">
          <span className="card-label">{t.era}</span>
          <h4 className="card-heading">{t.title}</h4>
          <p className="card-body leading-snug text-text-tertiary">{t.desc}</p>
        </Card>
      ))}
    </div>
  );
}
