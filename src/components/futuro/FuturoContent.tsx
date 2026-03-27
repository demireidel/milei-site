"use client";

import type {
  SiliconValleyData,
  StargateData,
  NuclearData,
  VacaMuertaData,
  ClosingData,
  FuturoStat,
  GalleryPhoto,
} from "@/data/futuro";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { Pullquote } from "@/components/ui/Pullquote";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { Prose } from "@/components/ui/Prose";
import { FeaturePhoto } from "@/components/futuro/FeaturePhoto";
import { PhotoGallery } from "@/components/futuro/PhotoGallery";
import { InsightCallout } from "@/components/ui/InsightCallout";

const sidebarItems = [
  { id: "silicon-valley", num: "I", title: "Silicon Valley" },
  { id: "stargate", num: "II", title: "Stargate Argentina" },
  { id: "nuclear", num: "III", title: "Energía Nuclear" },
  { id: "vaca-muerta", num: "IV", title: "Vaca Muerta" },
];

function StatRow({ stats }: { stats: FuturoStat[] }) {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="surface-card p-4 border-l-3 border-l-gold">
          <span className="stat-number">{s.val}</span>
          <span className="stat-label mt-1 block">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

interface FuturoContentProps {
  siliconValley: SiliconValleyData;
  galleryPhotos: GalleryPhoto[];
  stargate: StargateData;
  nuclear: NuclearData;
  vacaMuerta: VacaMuertaData;
  closing: ClosingData;
}

export function FuturoContent({
  siliconValley,
  galleryPhotos,
  stargate,
  nuclear,
  vacaMuerta,
  closing,
}: FuturoContentProps) {
  return (
    <SidebarLayout label="Proyectos" items={sidebarItems} variant="navy">
      {/* I — Silicon Valley */}
      <SectionArticle id="silicon-valley">
        <ChapterHeader
          numeral="I"
          title={`${siliconValley.titleLine1} ${siliconValley.titleLine2Em}`}
        />
        <SectionKicker color="celeste">{siliconValley.kicker}</SectionKicker>
        <FeaturePhoto photo={siliconValley.photo} />
        <StatRow stats={siliconValley.stats} />
        <Prose>
          {siliconValley.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </Prose>
        <InsightCallout icon="🏗️">Argentina se posiciona como hub de IA del hemisferio sur — sin regulación hostil, con energía limpia abundante.</InsightCallout>
        <PhotoGallery photos={galleryPhotos} />
      </SectionArticle>

      {/* II — Stargate */}
      <SectionArticle id="stargate">
        <ChapterHeader
          numeral="II"
          title={`${stargate.titleLine1} ${stargate.titleLine2}`}
        />
        <SectionKicker color="celeste">{stargate.kicker}</SectionKicker>
        <FeaturePhoto photo={stargate.photo} />
        <StatRow stats={stargate.stats} />
        <Prose className="mb-8">
          {stargate.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </Prose>
        <InsightCallout icon="⚡">USD 500.000M de inversión global en infraestructura de IA — Argentina compite por una porción significativa.</InsightCallout>
        <Pullquote cite={`— ${stargate.quote.cite}`}>
          {stargate.quote.text}
        </Pullquote>
      </SectionArticle>

      {/* III — Nuclear */}
      <SectionArticle id="nuclear">
        <ChapterHeader
          numeral="III"
          title={`${nuclear.titleLine1} ${nuclear.titleLine2}`}
        />
        <SectionKicker color="celeste">{nuclear.kicker}</SectionKicker>
        <FeaturePhoto photo={nuclear.photo} />
        <StatRow stats={nuclear.stats} />
        <div className="relative mb-8 ml-6 border-l-2 border-gold pl-8 space-y-6">
          {nuclear.phases.map((phase, i) => (
            <div key={phase.label} className="relative">
              <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                {i + 1}
              </div>
              <Card className="p-5">
                <h4 className="font-display text-base text-gold">{phase.label}</h4>
                <p className="prose-body mt-2">{phase.text}</p>
              </Card>
            </div>
          ))}
        </div>
        <InsightCallout icon="☢️">Tres fases para cuadruplicar la capacidad nuclear argentina y posicionarla como exportadora de tecnología.</InsightCallout>
        <Pullquote cite={`— ${nuclear.quote.cite}`}>
          {nuclear.quote.text}
        </Pullquote>
        <p className="prose-body m-0">{nuclear.closingParagraph}</p>
      </SectionArticle>

      {/* IV — Vaca Muerta */}
      <SectionArticle id="vaca-muerta" last>
        <ChapterHeader
          numeral="IV"
          title={`${vacaMuerta.titleLine1} ${vacaMuerta.titleLine2Em}`}
        />
        <SectionKicker color="celeste">{vacaMuerta.kicker}</SectionKicker>
        <FeaturePhoto photo={vacaMuerta.photo} />
        <StatRow stats={vacaMuerta.stats} />
        <Prose>
          {vacaMuerta.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
        </Prose>
        <InsightCallout icon="🛢️">Segunda reserva mundial de gas no convencional — de importar energía a exportar a escala global.</InsightCallout>
      </SectionArticle>

      {/* Closing */}
      <div className="border-t border-border py-12 text-center">
        <blockquote className="m-0 mx-auto max-w-[44rem] font-display text-xl italic text-text-primary">
          {closing.text}
        </blockquote>
        <p className="badge-text mt-4">— {closing.attr}</p>
      </div>
    </SidebarLayout>
  );
}
