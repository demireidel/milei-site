"use client";

import type { Leader, TimelineEvent, MegaStat, TradeAgreement } from "@/data/mundo";
import { financialSupport, cooperationGrid, cooperacionHeader, forumAppearances, forosHeader } from "@/data/mundo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { ForumCard } from "@/components/mundo/ForumCard";
import { AgreementCard } from "@/components/mundo/AgreementCard";

const sections = [
  { id: "estadisticas", num: "I", title: "Estadísticas clave" },
  { id: "foros", num: "II", title: "Foros internacionales" },
  { id: "aliados", num: "III", title: "Aliados estratégicos" },
  { id: "cronologia", num: "IV", title: "Cronología diplomática" },
  { id: "acuerdos", num: "V", title: "Acuerdos comerciales" },
  { id: "cooperacion", num: "VI", title: "Cooperación" },
];

export function MundoContent({
  leaders,
  timeline,
  megaStats,
  tradeAgreements,
}: {
  leaders: Leader[];
  timeline: TimelineEvent[];
  megaStats: MegaStat[];
  tradeAgreements: TradeAgreement[];
}) {
  return (
    <SidebarLayout label="Secciones" items={sections} variant="navy">
      {/* I — Stats */}
      <SectionArticle id="estadisticas">
        <ChapterHeader numeral="I" title="Estadísticas clave" />
        <BentoGrid>
          {megaStats.map((stat, i) => (
            <Card key={stat.label} className={`p-5${i === 0 ? " bento-hero" : ""}`}>
              <p className="stat-number m-0">{stat.value}</p>
              <p className="card-label !text-text-primary m-0 mt-2">
                {stat.label}
              </p>
              <p className="card-body mt-1 m-0">
                {stat.detail}
              </p>
            </Card>
          ))}
        </BentoGrid>
      </SectionArticle>

      {/* II — Forums */}
      <SectionArticle id="foros">
        <ChapterHeader
          numeral="II"
          title="Foros internacionales"
          subtitle={forosHeader.sectionIntro}
        />
        <BentoGrid>
          {forumAppearances.map((forum) => (
            <ForumCard key={forum.title} forum={forum} className={forum.highlight ? "bento-wide" : ""} />
          ))}
        </BentoGrid>
      </SectionArticle>

      {/* III — Leaders */}
      <SectionArticle id="aliados">
        <ChapterHeader numeral="III" title="Aliados y socios estratégicos" />
        <ContentGrid cols={3}>
          {leaders.map((l) => (
            <Card key={l.name} className="flex items-center gap-3 px-4 py-3">
              <span className="text-2xl">{l.flag}</span>
              <div>
                <p className="m-0 text-sm font-semibold text-text-primary">
                  {l.name}
                </p>
                <p className="card-body m-0">
                  {l.role}
                </p>
              </div>
            </Card>
          ))}
        </ContentGrid>
      </SectionArticle>

      {/* IV — Timeline */}
      <SectionArticle id="cronologia">
        <ChapterHeader numeral="IV" title="Cronología diplomática" />
        <div className="relative ml-6 border-l-2 border-gold pl-8 space-y-4">
          {timeline.map((event) => (
            <div key={`${event.date}-${event.title}`} className="relative">
              <div className="absolute -left-[calc(2rem+5px)] top-2 h-3 w-3 rounded-full bg-gold" />
              <Card className="p-4">
                <span className="badge-text">{event.date}</span>
                <h4 className="card-heading mt-1 m-0 mb-1">{event.title}</h4>
                <p className="card-body m-0">{event.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </SectionArticle>

      {/* V — Trade Agreements */}
      <SectionArticle id="acuerdos">
        <ChapterHeader numeral="V" title="Acuerdos comerciales" />
        <div className="space-y-6">
          {tradeAgreements.map((ta) => (
            <AgreementCard key={ta.title} ta={ta} />
          ))}
          <AgreementCard ta={financialSupport} />
        </div>
      </SectionArticle>

      {/* VI — Cooperation */}
      <SectionArticle id="cooperacion" last>
        <ChapterHeader
          numeral="VI"
          title="Cooperación y financiamiento"
          subtitle={cooperacionHeader.sectionIntro}
        />
        <ContentGrid cols={2}>
          {cooperationGrid.map((item) => (
            <Card key={item.title} className="p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <h4 className="card-label !text-text-primary !mb-0 m-0">
                  {item.title}
                </h4>
              </div>
              <p className="card-body m-0">{item.desc}</p>
            </Card>
          ))}
        </ContentGrid>
      </SectionArticle>
    </SidebarLayout>
  );
}
