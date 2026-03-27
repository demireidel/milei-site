import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pullquote } from "@/components/ui/Pullquote";
import {
  futuroHeader,
  siliconValley,
  galleryPhotos,
  stargate,
  nuclear,
  vacaMuerta,
  futuroClosing,
} from "@/data/futuro";
import { FuturoContent } from "@/components/futuro/FuturoContent";

export const metadata: Metadata = {
  title: "Futuro",
  description:
    "Proyectos estratégicos: Silicon Valley, Stargate AI, energía nuclear y Vaca Muerta.",
};

export default function FuturoPage() {
  return (
    <>
      <PageHeader
        eyebrow={futuroHeader.sectionTitle}
        title="El Futuro de Argentina"
      >
        <Pullquote>{futuroHeader.introQuote}</Pullquote>
        <p className="prose-body max-w-[44rem]">{futuroHeader.introText}</p>
      </PageHeader>

      <FuturoContent
        siliconValley={siliconValley}
        galleryPhotos={galleryPhotos}
        stargate={stargate}
        nuclear={nuclear}
        vacaMuerta={vacaMuerta}
        closing={futuroClosing}
      />
    </>
  );
}
