"use client";

import type { Logro, PobrezaData } from "@/data/logros";
import { BeforeAfterCard } from "@/components/logros/BeforeAfterCard";
import { PobrezaBlock } from "@/components/logros/PobrezaBlock";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Divider } from "@/components/ui/Divider";
import { SectionArticle } from "@/components/ui/SectionArticle";

const romanNumerals = ["II", "III", "IV", "V", "VI"];

interface LogroBlock {
  id: string;
  title: string;
  subtitle: string;
  nums: string[];
}

const blocks: LogroBlock[] = [
  {
    id: "estabilizacion",
    title: "Estabilización macroeconómica",
    subtitle: "Se evitó la hiperinflación, se pulverizó la inflación, se eliminó el déficit y se levantó el cepo",
    nums: ["02", "04", "05", "10"],
  },
  {
    id: "crecimiento",
    title: "Crecimiento y producción",
    subtitle: "La economía creció, las exportaciones batieron récords, el campo y la minería explotaron",
    nums: ["09", "11", "18", "15"],
  },
  {
    id: "orden",
    title: "Orden y seguridad",
    subtitle: "Se terminaron los piquetes, bajaron los homicidios y se liberó la economía",
    nums: ["03", "07", "08"],
  },
  {
    id: "credibilidad",
    title: "Credibilidad y confianza",
    subtitle: "Argentina volvió al mapa financiero: riesgo país, blanqueo, inversiones y mercados",
    nums: ["06", "17", "19"],
  },
  {
    id: "bolsillo",
    title: "Bolsillo y calidad de vida",
    subtitle: "Salarios reales, crédito hipotecario, menos impuestos, más vuelos y más consumo",
    nums: ["13", "12", "16", "14"],
  },
];

const sidebarItems = [
  { id: "logro-pobreza", num: "I", title: "Reducción de la pobreza" },
  ...blocks.map((b, i) => ({
    id: `logro-${b.id}`,
    num: romanNumerals[i],
    title: b.title,
  })),
];

interface LogrosGridProps {
  logros: Logro[];
  pobrezaData: PobrezaData;
}

export function LogrosGrid({ logros, pobrezaData }: LogrosGridProps) {
  return (
    <SidebarLayout
      label="Bloques de logros"
      count={`${logros.length} logros`}
      items={sidebarItems}
    >
      {/* Pobreza — the biggest achievement */}
      <PobrezaBlock data={pobrezaData} />
      <Divider animated className="my-16" />

      {blocks.map((block, i) => {
        const blockLogros = block.nums
          .map((num) => logros.find((l) => l.num === num))
          .filter((l): l is Logro => l !== undefined);

        if (blockLogros.length === 0) return null;

        return (
          <SectionArticle key={block.id} id={`logro-${block.id}`} last={i === blocks.length - 1}>
            <ChapterHeader
              numeral={romanNumerals[i]}
              title={block.title}
              subtitle={block.subtitle}
            />

            {/* Cards grid */}
            <div className="grid gap-5 md:grid-cols-2">
              {blockLogros.map((logro) => (
                <BeforeAfterCard key={logro.num} logro={logro} />
              ))}
            </div>
          </SectionArticle>
        );
      })}
    </SidebarLayout>
  );
}
