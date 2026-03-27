// ── Vision page data ──────────────────────────────────────────

export interface Chapter {
  id: string;
  num: string;
  title: string;
}

export interface DataPoint {
  num: string;
  label: string;
}

export interface PyramidRank {
  rank: string;
  title: string;
  desc: string;
}

export interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

export interface Thinker {
  era: string;
  title: string;
  desc: string;
}

export const chapters: Chapter[] = [
  { id: "ch1", num: "I",   title: "El proyecto de la libertad" },
  { id: "ch2", num: "II",  title: "Capitalismo y moralidad" },
  { id: "ch3", num: "III", title: "El Estado es el problema" },
  { id: "ch4", num: "IV",  title: "La batalla cultural" },
  { id: "ch5", num: "V",   title: "La defensa de Occidente" },
] satisfies Chapter[];

export const dataStrip: DataPoint[] = [
  { num: "1°",   label: "PBI per cápita mundial en 1895" },
  { num: "35",   label: "Años bastaron para ser top 10 mundial" },
  { num: "100+", label: "Años de decadencia colectivista" },
  { num: "140°", label: "Puesto en libertad económica al que caímos" },
] satisfies DataPoint[];

export const pyramid: PyramidRank[] = [
  {
    rank: "1°",
    title: "Ética y moral",
    desc: "Filosofía griega, derecho romano, rectitud de los estoicos, valores judeocristianos. Cada decisión de gobierno debe pasar primero el test moral: ¿es justa?",
  },
  {
    rank: "2°",
    title: "Eficiencia dinámica",
    desc: "Cuando el marco institucional es justo, la eficiencia es su consecuencia natural — no su rival.",
  },
  {
    rank: "3°",
    title: "Resultado político",
    desc: "Cuando hay tensión entre ética y resultado político, la política debe descartarse — aún cuando sirva electoralmente.",
  },
] satisfies PyramidRank[];

export const pillars: Pillar[] = [
  {
    icon: "⚙",
    title: "Gestión",
    desc: "Diseñar e implementar las reformas profundas que el país necesita. Demostrar con hechos que el liberalismo es el camino a la prosperidad.",
  },
  {
    icon: "⚖",
    title: "Política",
    desc: "Construir el poder institucional necesario para impulsar las reformas y blindarlas de la reversión.",
  },
  {
    icon: "★",
    title: "Cultura",
    desc: "La batalla por las almas. Ganar la disputa de las ideas para que los cambios sean permanentes.",
  },
] satisfies Pillar[];

export const thinkers: Thinker[] = [
  {
    era: "Fundamentos",
    title: "Filosofía griega",
    desc: "Desde Sócrates, Platón y Aristóteles: la razón como instrumento de conocimiento, la búsqueda de la verdad y la virtud como fin supremo del hombre libre.",
  },
  {
    era: "Instituciones",
    title: "Derecho romano",
    desc: "De la Ley de las XII Tablas al Corpus Iuris Civilis: el imperio de la ley, la propiedad privada y el contrato como pilares de la convivencia civilizada.",
  },
  {
    era: "Carácter",
    title: "Rectitud estoica",
    desc: "Marco Aurelio, Séneca, Epicteto: el deber, la disciplina interior y la responsabilidad individual.",
  },
  {
    era: "Valores",
    title: "Tradición judeocristiana",
    desc: "La sacralidad de la persona, la libertad de conciencia y la igualdad ante Dios y ante la ley.",
  },
] satisfies Thinker[];
