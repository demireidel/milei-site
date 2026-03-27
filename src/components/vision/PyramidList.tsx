import { Card } from "@/components/ui/Card";
import type { PyramidRank } from "@/data/vision";

interface PyramidListProps {
  items: PyramidRank[];
}

export function PyramidList({ items }: PyramidListProps) {
  return (
    <div className="my-8 space-y-3">
      {items.map((level) => (
        <Card key={level.title} className="flex gap-4 p-4">
          <span className="stat-number min-w-[2rem]">{level.rank}</span>
          <div>
            <h4 className="chapter-title m-0 mb-1 text-[length:var(--text-base)]">
              {level.title}
            </h4>
            <p className="prose-body m-0">{level.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
