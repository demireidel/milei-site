// ── Home page data ────────────────────────────────────────────

import { STATS } from "./stats";

/** Parse leading number from a STATS display string (e.g. "2,4%" → 2.4). */
const num = (s: string): number =>
  Number(s.replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", "."));

export interface HomeStat {
  /** Animated target number */
  target: number;
  /** Text appended after the number (e.g. "% → 27%" or " pts") */
  suffix: string;
  /** Accessible label below number */
  label: string;
  /** Decimal places for display (default 0) */
  decimals?: number;
}

export interface SectionCard {
  title: string;
  desc: string;
  href: string;
  stat?: string;
  statLabel?: string;
  img?: string;
  imgAlt?: string;
}

export const homeStats: HomeStat[] = [
  { target: num(STATS.pobrezaAnterior), suffix: `% → ${STATS.pobreza.replace("%", "")}%`, label: "Reducción de pobreza" },
  { target: num(STATS.inflacionMensual), suffix: "% mensual", label: "Inflación", decimals: 1 },
  { target: num(STATS.desregulaciones), suffix: "+", label: "Desregulaciones" },
  { target: num(STATS.riesgoPais), suffix: " pts", label: "Riesgo país" },
] satisfies HomeStat[];

export const sectionCards: SectionCard[] = [
  {
    title: "Visión",
    desc: "La filosofía y los principios que guían cada decisión de gobierno",
    href: "/vision",
    stat: "5",
    statLabel: "capítulos",
    img: "/images/banco/apertura-sesiones-2024.jpg",
    imgAlt: "Milei en discurso de apertura de sesiones",
  },
  {
    title: "Logros",
    desc: "Resultados concretos con datos antes y después — la evidencia habla",
    href: "/logros",
    stat: "19",
    statLabel: "logros",
    img: "/images/banco/inauguracion-discurso-congreso.jpg",
    imgAlt: "Javier Milei en la asunción presidencial",
  },
  {
    title: "Reformas",
    desc: "Las transformaciones estructurales que cambiaron las reglas del juego",
    href: "/reformas",
    stat: "12",
    statLabel: "reformas",
    img: "/images/banco/congreso-apertura-2024.jpg",
    imgAlt: "Congreso de la Nación",
  },
  {
    title: "Futuro",
    desc: "Los proyectos estratégicos que posicionan a la Argentina como potencia",
    href: "/futuro",
    stat: "4",
    statLabel: "proyectos",
    img: "/images/banco/silicon-valley-tech-leaders.jpg",
    imgAlt: "Milei en Silicon Valley",
  },
  {
    title: "Mundo",
    desc: "Acuerdos comerciales, alianzas y el regreso de Argentina al escenario global",
    href: "/mundo",
    stat: "3",
    statLabel: "TLCs firmados",
    img: "/images/banco/trump-casablanca-oval.jpg",
    imgAlt: "Milei con líderes internacionales",
  },
  {
    title: "Archivo",
    desc: "Libros, artículos académicos, discursos y entrevistas — el pensamiento completo",
    href: "/archivo",
    stat: "80+",
    statLabel: "obras",
    img: "/images/banco/davos-2024-discurso.jpg",
    imgAlt: "Milei en el Foro de Davos",
  },
] satisfies SectionCard[];
