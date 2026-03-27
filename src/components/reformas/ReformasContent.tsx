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

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

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
        <h4 className="m-0 mb-1 font-display text-[length:var(--text-lg)] leading-[1.3] text-text-primary">
          {reforma.subtitle}
        </h4>
      </div>

      {/* ANTES / AHORA */}
      <div className="space-y-3 px-5 pb-4">
        <BeforeAfterPanel type="before">{reforma.antes}</BeforeAfterPanel>
        <BeforeAfterPanel type="after">{reforma.ahora}</BeforeAfterPanel>

        {/* Impact stats */}
        {reforma.impactStats.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {reforma.impactStats.map((s) => (
              <div
                key={s.label}
                className="surface-card rounded-full px-3 py-1.5"
              >
                <span className="font-accent text-[length:var(--text-xs)] font-bold text-gold">
                  {s.val}
                </span>{" "}
                <span className="text-[length:var(--text-xs)] text-text-tertiary">
                  {s.label}
                </span>
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
        <div className="prose-body">{reforma.impactText}</div>
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

            <div className="grid gap-5 md:grid-cols-2">
              {blockReformas.map((r) => (
                <ReformCard key={r.num} reforma={r} />
              ))}
            </div>
          </SectionArticle>
        );
      })}
    </SidebarLayout>
  );
}
