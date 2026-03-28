"use client";

import Image from "next/image";
import type { Etapa } from "@/data/archivo";
import { edicionesNote } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { InsightCallout } from "@/components/ui/InsightCallout";
import { ExpandableSection } from "@/components/ui/ExpandableSection";

export function LibrosSection({ etapas }: { etapas: Etapa[] }) {
  return (
    <SectionArticle id="libros">
      <ChapterHeader numeral="III" title="Libros" />
      <SectionKicker>9 libros, del aula universitaria a bestseller internacional</SectionKicker>
      <div className="space-y-12">
        {etapas.map((etapa) => (
          <div key={etapa.label}>
            <h3 className="badge-text mb-4 !text-gold">
              {etapa.label}{" "}
              <span className="text-text-tertiary">({etapa.desc})</span>
            </h3>
            <BentoGrid>
              {etapa.books.map((book, i) => (
                <ScrollReveal key={book.title} variant="fade-up" delay={i * 80} className={book.highlight ? "bento-wide" : ""}>
                  <Card
                    accent={book.highlight}
                    className={`overflow-hidden${book.highlight ? " !border-l-3 !border-l-gold" : ""}`}
                  >
                    <div className="flex gap-5 p-4">
                      {/* Book cover with zoom hover */}
                      {book.cover && (
                        <div className="img-zoom-hover shrink-0">
                          <Image
                            src={book.cover}
                            alt={book.title}
                            width={130}
                            height={195}
                            className="aspect-[2/3] w-[100px] rounded-md object-cover sm:w-[130px]"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="card-label !mb-1 !text-gold">{book.year}</p>
                        <h4 className="m-0 font-display text-base leading-snug text-text-primary">
                          {book.title}
                        </h4>
                        {book.coauthors && (
                          <p className="card-body mt-1 text-xs">Con {book.coauthors}</p>
                        )}
                        {book.publisher && (
                          <p className="card-body mt-1 text-xs">{book.publisher}</p>
                        )}
                      </div>
                    </div>
                    {/* Description in expandable — keeps cards compact */}
                    {book.desc && (
                      <ExpandableSection label="Ver más" labelExpanded="Cerrar">
                        <p className="card-body m-0">{book.desc}</p>
                      </ExpandableSection>
                    )}
                  </Card>
                </ScrollReveal>
              ))}
            </BentoGrid>
          </div>
        ))}
      </div>
      <InsightCallout icon="🌍">{edicionesNote}</InsightCallout>
    </SectionArticle>
  );
}
