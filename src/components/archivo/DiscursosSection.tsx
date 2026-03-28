"use client";

import type { Discurso } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { InsightCallout } from "@/components/ui/InsightCallout";
import { Pullquote } from "@/components/ui/Pullquote";

/** Rich hero block for the lead discurso — matches PobrezaBlock visual weight */
function DiscursoHero({ d }: { d: Discurso }) {
  return (
    <ScrollReveal variant="fade-up">
      <article className="mb-12">
        {/* Badge row */}
        <div className="mb-4 flex items-center gap-3">
          <span className="badge-text !mb-0">{d.date}</span>
          <span className="rounded-full bg-[color-mix(in_oklch,var(--color-gold-light),transparent_85%)] px-2.5 py-0.5 text-xs font-semibold text-gold">
            Keynote
          </span>
          {d.duration && (
            <span className="text-xs text-text-tertiary">{d.duration}</span>
          )}
        </div>

        {/* Big title */}
        <h3 className="mb-2 font-display text-2xl leading-snug text-text-primary md:text-3xl">
          {d.title}
        </h3>
        <p className="prose-body mb-6 text-text-secondary">{d.location}</p>

        {/* Video embed — full width */}
        {d.videoId && (
          <div className="mb-8">
            <YouTubeEmbed videoId={d.videoId} title={d.title} />
          </div>
        )}

        {/* Pullquote */}
        {d.frase && (
          <Pullquote>{d.frase}</Pullquote>
        )}

        {/* Theme tags */}
        {d.themes && d.themes.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {d.themes.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-tertiary"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Narrative */}
        <div className="max-w-[52rem]">
          <p className="text-base leading-relaxed text-text-secondary">{d.desc}</p>
        </div>
      </article>
    </ScrollReveal>
  );
}

/** Regular discurso card */
function DiscursoCard({ d, i }: { d: Discurso; i: number }) {
  return (
    <ScrollReveal variant="fade-up" delay={i * 80} className={d.keynote ? "bento-wide" : ""}>
      <Card
        accent={d.keynote}
        className={`overflow-hidden${d.keynote ? " !border-l-3 !border-l-gold" : ""}`}
      >
        {/* Video at top — visual-first like BeforeAfterCard banner */}
        {d.videoId && (
          <YouTubeEmbed videoId={d.videoId} title={d.title} />
        )}

        <div className="p-5">
          {/* Date + badges */}
          <div className="mb-2 flex items-center gap-3">
            <span className="card-label !mb-0 !text-gold inline">
              {d.date}
            </span>
            {d.keynote && (
              <span className="rounded-full bg-[color-mix(in_oklch,var(--color-gold-light),transparent_85%)] px-2 py-0.5 text-xs text-gold">
                Keynote
              </span>
            )}
            {d.duration && (
              <span className="text-xs text-text-tertiary">
                {d.duration}
              </span>
            )}
          </div>

          {/* Title + location */}
          <h4 className="m-0 mb-1 font-display text-base text-text-primary">
            {d.title}
          </h4>
          <p className="card-body mb-0">
            {d.location}
          </p>

          {/* Quote if present */}
          {d.frase && (
            <p className="pullquote m-0 mt-3 text-sm">
              &laquo;{d.frase}&raquo;
            </p>
          )}

          {/* Theme tags */}
          {d.themes && d.themes.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {d.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 text-xs text-text-tertiary"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Expandable description */}
        <ExpandableSection label="Leer más" labelExpanded="Cerrar">
          <p className="card-body m-0">
            {d.desc}
          </p>
        </ExpandableSection>
      </Card>
    </ScrollReveal>
  );
}

export function DiscursosSection({ discursos }: { discursos: Discurso[] }) {
  const [hero, ...rest] = discursos;

  return (
    <SectionArticle id="discursos">
      <ChapterHeader numeral="I" title="Discursos" />
      <SectionKicker>Discursos que redefinieron el debate global</SectionKicker>

      {/* Hero — full-width rich block */}
      <DiscursoHero d={hero} />

      {/* Rest — bento grid */}
      <BentoGrid>
        {rest.map((d, i) => (
          <DiscursoCard key={d.title} d={d} i={i} />
        ))}
      </BentoGrid>

      <InsightCallout icon="🎤">
        De Davos a la ONU: 11 discursos en foros globales en dos años de presidencia. Ningún líder latinoamericano había logrado tres Special Addresses consecutivos en el WEF.
      </InsightCallout>
    </SectionArticle>
  );
}
