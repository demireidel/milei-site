"use client";

import type { Entrevista } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Pullquote } from "@/components/ui/Pullquote";

/** Rich hero block for the featured entrevista */
function EntrevistaHero({ e }: { e: Entrevista }) {
  return (
    <ScrollReveal variant="fade-up">
      <article className="mb-12">
        {/* Badge row */}
        <div className="mb-4 flex items-center gap-3">
          <span className="badge-text !mb-0">{e.date}</span>
          {e.duration && (
            <span className="text-xs text-text-tertiary">{e.duration}</span>
          )}
        </div>

        {/* Big title */}
        <h3 className="mb-2 font-display text-2xl leading-snug text-text-primary md:text-3xl">
          {e.outlet}
        </h3>
        {e.journalist && (
          <p className="prose-body mb-6 text-text-secondary">Con {e.journalist}</p>
        )}

        {/* Video embed — full width */}
        {e.videoId && (
          <div className="mb-8">
            <YouTubeEmbed videoId={e.videoId} title={e.outlet} />
          </div>
        )}

        {/* Impact metric — big and bold */}
        {e.impact && (
          <div className="mb-6 inline-block rounded-xl bg-[color-mix(in_oklch,var(--color-gold-light),transparent_88%)] px-6 py-3">
            <span className="stat-number text-2xl text-gold">{e.impact}</span>
          </div>
        )}

        {/* Narrative */}
        <div className="max-w-[52rem]">
          <p className="text-base leading-relaxed text-text-secondary">{e.desc}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function EntrevistasSection({ entrevistas }: { entrevistas: Entrevista[] }) {
  const [hero, ...rest] = entrevistas;

  return (
    <SectionArticle id="entrevistas">
      <ChapterHeader numeral="II" title="Entrevistas" />
      <SectionKicker>Audiencias de cientos de millones</SectionKicker>

      {/* Hero — full-width rich block */}
      <EntrevistaHero e={hero} />

      {/* Rest — bento grid with video-first cards */}
      <BentoGrid>
        {rest.map((e, i) => (
          <ScrollReveal key={`${e.date}-${e.outlet}`} variant="fade-up" delay={i * 80} className={e.highlight ? "bento-wide" : ""}>
            <Card
              accent={e.highlight}
              className="overflow-hidden"
            >
              {/* Video at top — visual-first */}
              {e.videoId && (
                <YouTubeEmbed videoId={e.videoId} title={e.outlet} />
              )}

              <div className="p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="card-label !mb-0 !text-gold inline">
                    {e.date}
                  </span>
                  {e.duration && (
                    <span className="text-xs text-text-tertiary">
                      {e.duration}
                    </span>
                  )}
                </div>
                <h4 className="m-0 mb-1 font-display text-base text-text-primary">
                  {e.outlet}
                </h4>
                {e.journalist && (
                  <p className="card-body mb-0">
                    Con {e.journalist}
                  </p>
                )}

                {/* Impact metric — prominent */}
                {e.impact && (
                  <div className="mt-3">
                    <span className="inline-block rounded-lg bg-[color-mix(in_oklch,var(--color-gold-light),transparent_88%)] px-3 py-1.5 font-accent text-sm font-bold text-gold">
                      {e.impact}
                    </span>
                  </div>
                )}
              </div>

              {/* Expandable description */}
              <ExpandableSection label="Leer más" labelExpanded="Cerrar">
                <p className="card-body m-0">
                  {e.desc}
                </p>
              </ExpandableSection>
            </Card>
          </ScrollReveal>
        ))}
      </BentoGrid>
    </SectionArticle>
  );
}
