import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PageHeader } from "@/components/ui/PageHeader";
import { InvestigacionContent } from "@/components/investigacion/InvestigacionContent";
import { researchPapers } from "@/data/archivo";

export const metadata: Metadata = {
  title: "Investigación Milei-Reidel",
  description:
    "Papers académicos de Javier Milei y Demian Reidel: escala mínima viable, rendimientos crecientes y regulación que fragmenta escala.",
  alternates: { canonical: "https://javiermilei.com/investigacion" },
};

export default function InvestigacionPage() {
  return (
    <>
      <BreadcrumbSchema name="Investigación" path="/investigacion" />
      <PageHeader
        eyebrow="INVESTIGACIÓN"
        title="Papers Milei-Reidel"
        subtitle="Dos papers que formalizan matemáticamente por qué la intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir. Presentados en el Foro Económico Mundial de Davos, enero 2026."
      />

      <InvestigacionContent papers={researchPapers} />
    </>
  );
}
