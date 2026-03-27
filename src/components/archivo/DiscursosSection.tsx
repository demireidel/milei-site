import type { Discurso } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { BentoGrid } from "@/components/ui/BentoGrid";

export function DiscursosSection({ discursos }: { discursos: Discurso[] }) {
  return (
    <SectionArticle id="discursos">
      <ChapterHeader numeral="I" title="Discursos" />
      <BentoGrid>
        {discursos.map((d) => (
          <Card key={d.title} accent={d.keynote} className={`p-5${d.keynote ? " bento-wide !border-l-3 !border-l-gold" : ""}`}>
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
            <h4 className="m-0 mb-1 font-display text-base text-text-primary">
              {d.title}
            </h4>
            <p className="card-body mb-2">
              {d.location}
            </p>
            {d.videoId && (
              <YouTubeEmbed videoId={d.videoId} title={d.title} />
            )}
            <p className="card-body mt-3">
              {d.desc}
            </p>
            {d.frase && (
              <p className="pullquote m-0 mt-3 text-sm">
                &laquo;{d.frase}&raquo;
              </p>
            )}
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
          </Card>
        ))}
      </BentoGrid>
    </SectionArticle>
  );
}
