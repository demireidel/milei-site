"use client";

import type { Leader, TimelineEvent, MegaStat, TradeAgreement } from "@/data/mundo";
import { financialSupport, cooperationGrid, cooperacionHeader, forumAppearances, forosHeader } from "@/data/mundo";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { ContentGrid } from "@/components/ui/ContentGrid";
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
        <div className="grid grid-cols-2 gap-4">
          {megaStats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <p className="stat-number m-0">{stat.value}</p>
              <p className="card-label !text-text-primary m-0 mt-2">
                {stat.label}
              </p>
              <p className="card-body mt-1 m-0">
                {stat.detail}
              </p>
            </Card>
          ))}
        </div>
      </SectionArticle>

      {/* II — Forums */}
      <SectionArticle id="foros">
        <ChapterHeader
          numeral="II"
          title="Foros internacionales"
          subtitle={forosHeader.sectionIntro}
        />
        <ContentGrid cols={2}>
          {forumAppearances.map((forum) => (
            <ForumCard key={forum.title} forum={forum} />
          ))}
        </ContentGrid>
      </SectionArticle>

      {/* III — Leaders */}
      <SectionArticle id="aliados">
        <ChapterHeader numeral="III" title="Aliados y socios estratégicos" />
        <ContentGrid cols={3}>
          {leaders.map((l) => (
            <Card key={l.name} className="flex items-center gap-3 px-4 py-3">
              <span className="text-2xl">{l.flag}</span>
              <div>
                <p className="m-0 text-[length:var(--text-sm)] font-semibold text-text-primary">
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
        <div className="space-y-4">
          {timeline.map((event, i) => (
            <Card key={i} className="flex gap-4 p-4">
              <div className="shrink-0 min-w-[5rem] pt-0.5 font-accent text-[length:var(--text-xs)] uppercase tracking-[0.05em] text-gold">
                {event.date}
              </div>
              <div>
                <h4 className="card-heading m-0 mb-1">{event.title}</h4>
                <p className="card-body m-0">{event.desc}</p>
              </div>
            </Card>
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
