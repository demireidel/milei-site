"use client";

import type { Paper } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { InsightCallout } from "@/components/ui/InsightCallout";

export function PapersSection({ papers }: { papers: Paper[] }) {
  return (
    <SectionArticle id="papers">
      <ChapterHeader numeral="IV" title="Papers académicos" />
      <SectionKicker color="celeste">7 papers académicos de rigor técnico excepcional</SectionKicker>
      <ContentGrid cols={2}>
        {papers.map((p, i) => (
          <ScrollReveal key={p.title} variant="slide-left" delay={i * 100}>
            <Card hover className="p-4 !border-l-3 !border-l-celeste">
              <span className="mb-2 inline-block rounded-full bg-celeste/10 px-3 py-1 text-xs font-semibold text-celeste">
                {p.topic}
              </span>
              <h4 className="card-heading">
                {p.title}
              </h4>
              {p.coauthors && (
                <p className="card-body">
                  Con {p.coauthors}
                </p>
              )}
              {p.venue && (
                <p className="card-body">
                  {p.venue}
                </p>
              )}
              {p.desc && (
                <ExpandableSection label="Ver abstract" labelExpanded="Cerrar abstract">
                  <p className="card-body m-0">
                    {p.desc}
                  </p>
                </ExpandableSection>
              )}
            </Card>
          </ScrollReveal>
        ))}
      </ContentGrid>
      <InsightCallout icon="📄">
        Paper Milei-Reidel presentado en Davos 2026: demuestra que los rendimientos crecientes a escala no son un teorema de monopolio natural. La intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir.
      </InsightCallout>
    </SectionArticle>
  );
}
