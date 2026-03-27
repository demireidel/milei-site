import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import {
  reformasHero,
  heroCounters,
  reformBlocks,
  reformas,
} from "@/data/reformas";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatCard } from "@/components/ui/StatCard";
import { ReformasContent } from "@/components/reformas/ReformasContent";

export const metadata: Metadata = {
  title: "Reformas",
  description:
    "Las 12 reformas estructurales del gobierno: estabilización, desregulación, legislación y seguridad.",
  alternates: { canonical: "https://javiermilei.com/reformas" },
};

export default function ReformasPage() {
  return (
    <>
      <BreadcrumbSchema name="Reformas" path="/reformas" />
      <PageHeader
        eyebrow={reformasHero.eyebrow}
        title={reformasHero.title}
        subtitle={reformasHero.desc}
      >
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {heroCounters.map((c) => (
            <StatCard key={c.label} value={c.num} label={c.label} />
          ))}
        </div>
      </PageHeader>

      <ReformasContent blocks={reformBlocks} reformas={reformas} />
    </>
  );
}
