// ── Home page data ────────────────────────────────────────────

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
}

export const homeStats: HomeStat[] = [
  { target: 57, suffix: "% → 27%", label: "Reducción de pobreza" },
  { target: 2.4, suffix: "% mensual", label: "Inflación", decimals: 1 },
  { target: 14500, suffix: "+", label: "Desregulaciones" },
  { target: 497, suffix: " pts", label: "Riesgo país" },
] satisfies HomeStat[];

export const sectionCards: SectionCard[] = [
  {
    title: "Visión",
    desc: "La filosofía y los principios que guían cada decisión de gobierno",
    href: "/vision",
    stat: "5",
    statLabel: "capítulos",
  },
  {
    title: "Logros",
    desc: "Resultados concretos con datos antes y después — la evidencia habla",
    href: "/logros",
    stat: "19",
    statLabel: "logros",
  },
  {
    title: "Reformas",
    desc: "Las transformaciones estructurales que cambiaron las reglas del juego",
    href: "/reformas",
    stat: "12",
    statLabel: "reformas",
  },
  {
    title: "Futuro",
    desc: "Los proyectos estratégicos que posicionan a la Argentina como potencia",
    href: "/futuro",
    stat: "4",
    statLabel: "proyectos",
  },
  {
    title: "Mundo",
    desc: "Acuerdos comerciales, alianzas y el regreso de Argentina al escenario global",
    href: "/mundo",
    stat: "3",
    statLabel: "TLCs firmados",
  },
  {
    title: "Archivo",
    desc: "Libros, artículos académicos, discursos y entrevistas — el pensamiento completo",
    href: "/archivo",
    stat: "80+",
    statLabel: "obras",
  },
] satisfies SectionCard[];
