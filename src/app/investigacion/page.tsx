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
        title="Minimum Viable Scale"
        subtitle="¿Por qué algunas economías se quedan atrapadas en la pobreza mientras otras, con los mismos recursos, prosperan? ¿Por qué las reformas a veces no funcionan? Este paper demuestra que la respuesta está en la geometría de los rendimientos crecientes a escala."
      />
      <InvestigacionContent />
    </>
  );
}
