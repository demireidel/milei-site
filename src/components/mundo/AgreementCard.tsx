import { Card } from "@/components/ui/Card";
import type { TradeAgreement } from "@/data/mundo";

interface AgreementCardProps {
  ta: Pick<TradeAgreement, "tag" | "title" | "description" | "keyFacts">;
}

function factColor(color: "gold" | "blue" | "green") {
  if (color === "gold") return "text-gold";
  if (color === "blue") return "text-celeste";
  return "text-success";
}

export function AgreementCard({ ta }: AgreementCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <span className="badge-text mb-2 block">{ta.tag}</span>
        <h3 className="chapter-title m-0 mb-3">{ta.title}</h3>
        <p className="prose-body m-0 mb-4">{ta.description}</p>
        <div className="flex flex-wrap gap-2">
          {ta.keyFacts.map((f, i) => (
            <span
              key={i}
              className={`rounded-full border border-border bg-surface-2 px-3 py-1 text-[length:var(--text-xs)] ${factColor(f.color)}`}
            >
              {f.text}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
