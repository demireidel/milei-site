import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pullquote } from "@/components/ui/Pullquote";
import { visionPhotos } from "@/data/photos";
import { VisionChapters } from "@/components/vision/VisionChapters";

export const metadata: Metadata = {
  title: "Visión y Filosofía",
  description:
    "La visión filosófica y los principios que guían el gobierno del Presidente Javier Milei. Cinco capítulos sobre libertad, capitalismo, Estado, cultura y Occidente.",
};

export default function VisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="La visión"
        title="Argentina será"
        titleEmphasis="el país más libre del mundo"
        subtitle="No vine a administrar decadencia. Vine a refundar la Argentina sobre la libertad, la propiedad privada y la cooperación social voluntaria."
      >
        <Pullquote cite="Alberto Benegas Lynch (h) — Discurso de asunción, diciembre 2023">
          &laquo;El liberalismo es el respeto irrestricto del proyecto de vida del
          prójimo, basado en el principio de no agresión, en defensa del derecho a
          la vida, a la libertad y a la propiedad, donde solo se puede ser exitoso
          sirviendo al prójimo con bienes de mejor calidad a un mejor precio.&raquo;
        </Pullquote>
      </PageHeader>

      <VisionChapters photos={visionPhotos} />
    </>
  );
}
