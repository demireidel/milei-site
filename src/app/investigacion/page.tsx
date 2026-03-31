import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PageHeader } from "@/components/ui/PageHeader";
import { InvestigacionContent } from "@/components/investigacion/InvestigacionContent";

export const metadata: Metadata = {
  title: "Investigación — Papers Milei-Reidel",
  description:
    "Paper académico de Javier Milei y Demian Reidel: escala mínima viable, rendimientos crecientes, multiplicidad de equilibrios e histéresis. Presentado en el Foro Económico Mundial de Davos, enero 2026.",
  alternates: { canonical: "https://javiermilei.com/investigacion" },
};

export default function InvestigacionPage() {
  return (
    <>
      <BreadcrumbSchema name="Investigación" path="/investigacion" />
      <PageHeader
        eyebrow="INVESTIGACIÓN"
        title="Papers Milei-Reidel"
        subtitle="Dos papers que formalizan matemáticamente por qué la intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir — y construyen el instrumento para impedirlo. Presentados en el Foro Económico Mundial de Davos, enero 2026."
      />
      <InvestigacionContent />
    </>
  );
}
