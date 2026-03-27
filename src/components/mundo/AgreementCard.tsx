import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { TradeAgreement } from "@/data/mundo";

interface AgreementCardProps {
  ta: Pick<TradeAgreement, "tag" | "title" | "description" | "keyFacts"> &
    Partial<Pick<TradeAgreement, "image" | "imageAlt" | "badge" | "reverse">>;
}

function factColor(color: "gold" | "blue" | "green") {
  if (color === "gold") return "text-gold";
  if (color === "blue") return "text-celeste";
  return "text-success";
}

export function AgreementCard({ ta }: AgreementCardProps) {
  const hasImage = !!(ta as TradeAgreement).image;

  return (
    <Card className="overflow-hidden">
      <div className={hasImage ? `flex flex-col sm:flex-row${(ta as TradeAgreement).reverse ? " sm:flex-row-reverse" : ""}` : ""}>
        {hasImage && (
          <div className="relative h-48 sm:h-auto sm:w-64 shrink-0">
            <Image
              src={(ta as TradeAgreement).image}
              alt={(ta as TradeAgreement).imageAlt || ta.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 256px"
            />
            {(ta as TradeAgreement).badge && (
              <span className="absolute top-3 left-3 rounded-full bg-gold/90 px-2.5 py-0.5 text-xs font-bold text-white">
                {(ta as TradeAgreement).badge}
              </span>
            )}
          </div>
        )}
        <div className="p-6">
          <span className="badge-text mb-2 block">{ta.tag}</span>
          <h3 className="chapter-title m-0 mb-3">{ta.title}</h3>
          <p className="prose-body m-0 mb-4">{ta.description}</p>
          <div className="flex flex-wrap gap-2">
            {ta.keyFacts.map((f) => (
              <span
                key={f.text}
                className={`rounded-full border border-border bg-surface-2 px-3 py-1 text-xs ${factColor(f.color)}`}
              >
                {f.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
