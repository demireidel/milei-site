import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArchivoContent } from "@/components/archivo/ArchivoContent";
import {
  archivoHeader,
  etapas,
  papers,
  discursos,
  entrevistas,
  reconocimientos,
} from "@/data/archivo";

export const metadata: Metadata = {
  title: "Archivo Intelectual",
  description:
    "Archivo intelectual: libros, artículos académicos, discursos y entrevistas del Presidente Milei.",
};

export default function ArchivoPage() {
  return (
    <>
      <PageHeader
        eyebrow={archivoHeader.sectionTitle}
        title="Obra Intelectual"
        subtitle={archivoHeader.sectionIntro}
      />

      <ArchivoContent
        etapas={etapas}
        papers={papers}
        discursos={discursos}
        entrevistas={entrevistas}
        reconocimientos={reconocimientos}
      />
    </>
  );
}
