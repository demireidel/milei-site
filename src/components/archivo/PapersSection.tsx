import type { Paper } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";

export function PapersSection({ papers }: { papers: Paper[] }) {
  return (
    <SectionArticle id="papers">
      <ChapterHeader numeral="IV" title="Papers académicos" />
      <ContentGrid cols={2}>
        {papers.map((p, i) => (
          <Card key={i} className="p-4">
            <span className="card-label !text-celeste">
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
              <p className="card-body mt-1">
                {p.desc}
              </p>
            )}
          </Card>
        ))}
      </ContentGrid>
    </SectionArticle>
  );
}
