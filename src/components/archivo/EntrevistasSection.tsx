import type { Entrevista } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { SectionArticle } from "@/components/ui/SectionArticle";

export function EntrevistasSection({ entrevistas }: { entrevistas: Entrevista[] }) {
  return (
    <SectionArticle id="entrevistas">
      <ChapterHeader numeral="II" title="Entrevistas" />
      <div className="space-y-6">
        {entrevistas.map((e, i) => (
          <Card key={i} accent={e.highlight} className="p-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="card-label !mb-0 !text-gold inline">
                {e.date}
              </span>
              {e.duration && (
                <span className="text-[length:var(--text-xs)] text-text-tertiary">
                  {e.duration}
                </span>
              )}
            </div>
            <h4 className="m-0 mb-1 font-display text-[length:var(--text-base)] text-text-primary">
              {e.outlet}
            </h4>
            {e.journalist && (
              <p className="card-body mb-2">
                Con {e.journalist}
              </p>
            )}
            {e.videoId && (
              <YouTubeEmbed videoId={e.videoId} title={e.outlet} />
            )}
            <p className="card-body mt-3">
              {e.desc}
            </p>
            {e.impact && (
              <p className="m-0 mt-2 inline-block rounded-md bg-[color-mix(in_oklch,var(--color-gold-light),transparent_90%)] px-3 py-1.5 text-[length:var(--text-xs)] text-gold">
                {e.impact}
              </p>
            )}
          </Card>
        ))}
      </div>
    </SectionArticle>
  );
}
