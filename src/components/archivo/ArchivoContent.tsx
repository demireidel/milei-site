"use client";

import type {
  Etapa,
  Paper,
  Discurso,
  Entrevista,
} from "@/data/archivo";
import { archivoStats, conversionQuote } from "@/data/archivo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Pullquote } from "@/components/ui/Pullquote";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { LibrosSection } from "./LibrosSection";
import { DiscursosSection } from "./DiscursosSection";
import { EntrevistasSection } from "./EntrevistasSection";
import { PapersSection } from "./PapersSection";
const sections = [
  { id: "discursos", num: "I", title: "Discursos" },
  { id: "entrevistas", num: "II", title: "Entrevistas" },
  { id: "libros", num: "III", title: "Libros" },
  { id: "papers", num: "IV", title: "Papers" },
  { id: "premios", num: "V", title: "Premios" },
];

/* Top-3 awards get bento-wide for visual hierarchy */
const HERO_AWARDS = 3;

export function ArchivoContent({
  etapas,
  papers,
  discursos,
  entrevistas,
  reconocimientos,
}: {
  etapas: Etapa[];
  papers: Paper[];
  discursos: Discurso[];
  entrevistas: Entrevista[];
  reconocimientos: string[];
}) {
  return (
    <SidebarLayout label="Secciones del archivo" items={sections} variant="navy">
      {/* Animated stat counters — like PobrezaBlock */}
      <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {archivoStats.map((s, i) => (
          <ScrollReveal key={s.label} variant="scale-in" delay={i * 120}>
            <AnimatedNumber
              target={s.target}
              suffix={s.suffix}
              label={s.label}
              sub={s.sub}
              variant="counter"
            />
          </ScrollReveal>
        ))}
      </div>

      <DiscursosSection discursos={discursos} />

      <EntrevistasSection entrevistas={entrevistas} />

      <LibrosSection etapas={etapas} />

      <PapersSection papers={papers} />

      {/* V — Premios */}
      <SectionArticle id="premios" last>
        <ChapterHeader numeral="V" title="Premios y reconocimientos" />
        <SectionKicker>Reconocimientos internacionales</SectionKicker>
        <BentoGrid>
          {reconocimientos.map((r, i) => (
            <ScrollReveal key={r.slice(0, 40)} variant="fade-up" delay={i * 80} className={i < HERO_AWARDS ? "bento-wide" : ""}>
              <Card
                accent={i < HERO_AWARDS}
                className={`p-4${i < HERO_AWARDS ? " !border-l-3 !border-l-gold" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span className={`${i < HERO_AWARDS ? "font-display text-base text-text-primary" : "card-body text-sm"}`}>{r}</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </BentoGrid>
      </SectionArticle>

      {/* Closing quote */}
      <ScrollReveal variant="blur-in">
        <div className="border-t border-border py-12 text-center">
          <Pullquote cite={`— ${conversionQuote.cite}`}>
            {conversionQuote.text}
          </Pullquote>
        </div>
      </ScrollReveal>
    </SidebarLayout>
  );
}
