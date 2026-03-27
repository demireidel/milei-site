import type { Metadata } from "next";
import { pobrezaData, logros, logrosSectionHeader } from "@/data/logros";
import { PageHeader } from "@/components/ui/PageHeader";
import { LogrosGrid } from "@/components/logros/LogrosGrid";

export const metadata: Metadata = {
  title: "Logros",
  description:
    "Los logros concretos del gobierno del Presidente Javier Milei: reducción de pobreza, desinflación, equilibrio fiscal y más.",
};

export default function LogrosPage() {
  return (
    <>
      <PageHeader
        eyebrow={logrosSectionHeader.sectionTitle}
        title="Resultados Concretos"
        subtitle={logrosSectionHeader.sectionIntro}
      />

      <LogrosGrid logros={logros} pobrezaData={pobrezaData} />
    </>
  );
}
