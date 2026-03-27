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

const sidebarItems = [
  { id: "silicon-valley", num: "I", title: "Silicon Valley" },
  { id: "stargate", num: "II", title: "Stargate Argentina" },
  { id: "nuclear", num: "III", title: "Energía Nuclear" },
  { id: "vaca-muerta", num: "IV", title: "Vaca Muerta" },
];

function StatRow({ stats }: { stats: FuturoStat[] }) {
  return (
    <div className="mb-8 flex flex-wrap gap-6">
      {stats.map((s) => (
        <div key={s.label}>
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
          {siliconValley.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
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
          {stargate.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
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
        <div className="mb-8 space-y-6">
          {nuclear.phases.map((phase, i) => (
            <Card key={i} className="p-5">
              <h4 className="badge-text m-0 mb-2 !text-gold">{phase.label}</h4>
              <p className="prose-body m-0">{phase.text}</p>
            </Card>
          ))}
        </div>
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
          {vacaMuerta.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </Prose>
      </SectionArticle>

      {/* Closing */}
      <div className="border-t border-border py-12 text-center">
        <blockquote className="m-0 mx-auto max-w-[44rem] font-display text-[length:var(--text-xl)] italic text-text-primary">
          {closing.text}
        </blockquote>
        <p className="badge-text mt-4">— {closing.attr}</p>
      </div>
    </SidebarLayout>
  );
}
