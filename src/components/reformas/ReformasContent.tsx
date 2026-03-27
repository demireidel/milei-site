"use client";

import Image from "next/image";
import type { ReformBlock, Reforma } from "@/data/reformas";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { BeforeAfterPanel } from "@/components/ui/BeforeAfterPanel";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { Pullquote } from "@/components/ui/Pullquote";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { RichText } from "@/components/ui/RichText";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { InsightCallout } from "@/components/ui/InsightCallout";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const blockInsights: { icon: string; text: string }[] = [
  { icon: "💰", text: "Ajuste fiscal de 15 puntos del PIB, inflación del 211% al nivel más bajo en 8 años, y unificación cambiaria — los tres exámenes aprobados en tiempo récord." },
  { icon: "📋", text: "14.500 desregulaciones ejecutadas — de la economía más regulada de Sudamérica a la más libre del continente." },
  { icon: "⚖️", text: "Primera reforma laboral de la democracia, nuevo Código de Comercio y régimen RIGI para atraer inversiones de gran escala." },
  { icon: "🛡️", text: "Tasa de homicidios en caída, régimen penal juvenil y protocolo antiterrorismo — sin orden no hay libertad posible." },
];

function toId(title: string) {
  return `bloque-${title.replace(/\s+/g, "-").toLowerCase()}`;
}

function cleanTitle(title: string) {
  return title.replace(/^BLOQUE\s+[IVX]+\s*—\s*/i, "");
}

function ReformCard({ reforma }: { reforma: Reforma }) {
  return (
    <Card className="overflow-hidden">
      {/* Banner image */}
      {reforma.img && (
        <Image
          src={reforma.img}
          alt={reforma.imgAlt ?? reforma.title}
          width={600}
          height={240}
          className="aspect-[5/2] w-full object-cover"
          loading="lazy"
        />
      )}
      {/* Header */}
      <div className="border-b border-border px-5 py-3">
        <span className="badge-text">{reforma.num} — {reforma.title}</span>
      </div>

      <div className="px-5 pb-3 pt-4">
        <h4 className="m-0 mb-1 font-display text-lg leading-[1.3] text-text-primary">
          {reforma.subtitle}
        </h4>
      </div>

      {/* ANTES / AHORA */}
      <div className="space-y-3 px-5 pb-4">
        <BeforeAfterPanel type="before"><RichText text={reforma.antes} /></BeforeAfterPanel>
        <BeforeAfterPanel type="after"><RichText text={reforma.ahora} /></BeforeAfterPanel>

        {/* Impact stats */}
        {reforma.impactStats.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2">
            {reforma.impactStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="stat-number">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Expandable impact text */}
      <ExpandableSection
        label="Impacto"
        labelExpanded="Cerrar"
        id={`reforma-detail-${reforma.num}`}
      >
        <div className="prose-body"><RichText text={reforma.impactText} /></div>
        {reforma.quote && (
          <Pullquote cite={`— ${reforma.quote.cite}`}>
            {reforma.quote.text}
          </Pullquote>
        )}
      </ExpandableSection>
    </Card>
  );
}

export function ReformasContent({
  blocks,
  reformas,
}: {
  blocks: ReformBlock[];
  reformas: Reforma[];
}) {
  const sidebarItems = blocks.map((b, i) => ({
    id: toId(b.title),
    num: romanNumerals[i],
    title: cleanTitle(b.title),
  }));

  return (
    <SidebarLayout
      label="Bloques de reforma"
      count="12 reformas"
      items={sidebarItems}
      variant="navy"
    >
      {blocks.map((block, i) => {
        const id = toId(block.title);
        const blockReformas = reformas.slice(block.range[0], block.range[1]);

        return (
          <SectionArticle key={block.title} id={id} last={i === blocks.length - 1}>
            <ChapterHeader
              numeral={romanNumerals[i]}
              title={cleanTitle(block.title)}
              subtitle={block.subtitle}
            />

            <BentoGrid>
              {blockReformas.map((r, idx) => (
                <div key={r.num} className={idx === 0 ? "bento-hero" : ""}>
                  <ReformCard reforma={r} />
                </div>
              ))}
            </BentoGrid>
            {blockInsights[i] && (
              <InsightCallout icon={blockInsights[i].icon}>{blockInsights[i].text}</InsightCallout>
            )}
          </SectionArticle>
        );
      })}
    </SidebarLayout>
  );
}
