// ── Interfaces ──────────────────────────────────────────────

export interface GalleryPhoto {
  src: string;
  who: string;
  where: string;
  tag: string;
  pos: string;
}

export interface FuturoStat {
  val: string;
  label: string;
}

export interface FuturoQuote {
  text: string;
  cite: string;
}

export interface FuturoPhotoCard {
  src: string;
  alt: string;
  objectPosition: string;
  captionStrong: string;
  captionSpan: string;
  aspectRatio: string;
}

export interface SiliconValleyData {
  kicker: string;
  titleLine1: string;
  titleLine2Em: string;
  paragraphs: string[];
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface StargateData {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  quote: FuturoQuote;
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface NuclearPhase {
  label: string;
  text: string;
}

export interface NuclearData {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  phases: NuclearPhase[];
  quote: FuturoQuote;
  closingParagraph: string;
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface VacaMuertaData {
  kicker: string;
  titleLine1: string;
  titleLine2Em: string;
  paragraphs: string[];
  stats: FuturoStat[];
  photo: FuturoPhotoCard;
}

export interface ClosingData {
  text: string;
  attr: string;
}

// ── Section header ──────────────────────────────────────────

export const futuroHeader = {
  sectionTitle: "ARGENTINA DEL FUTURO",
  introQuote: "Solo reencontrándonos con las verdades de nuestro pasado profundo podemos dar un salto hacia el futuro.",
  introText: "Cuatro pilares transforman a la Argentina en protagonista de la revolución tecnológica y energética global: Silicon Valley, Stargate, energía nuclear e hidrocarburos.",
} as const;

// ── Gallery photos ──────────────────────────────────────────

export const galleryPhotos: GalleryPhoto[] = [
  // ── May 2024 — Silicon Valley tour ──
  { src: "/images/banco/silicon-valley-sam-altman.jpg", who: "Milei con Sam Altman", where: "CEO de OpenAI — Silicon Valley, Mayo 2024", tag: "OpenAI", pos: "center 20%" },
  { src: "/images/banco/silicon-valley-milei-pichai-gift.jpg", who: "Milei con Sundar Pichai", where: "Google HQ — recibe un doodle personalizado", tag: "Google", pos: "center 30%" },
  { src: "/images/banco/silicon-valley-milei-cook-balcony.jpg", who: "Milei con Tim Cook", where: "Apple Park, Cupertino — balcón del anillo", tag: "Apple", pos: "center 25%" },
  { src: "/images/banco/silicon-valley-tim-cook.jpg", who: "Milei con Tim Cook", where: "Apple Park, Cupertino", tag: "Apple", pos: "center 40%" },
  { src: "/images/banco/silicon-valley-milei-zuckerberg-phones.jpg", who: "Milei con Mark Zuckerberg", where: "Sede de Meta, Menlo Park — mirando el celular", tag: "Meta", pos: "center 25%" },
  { src: "/images/banco/silicon-valley-milei-zuckerberg-selfie.jpg", who: "Selfie con Mark Zuckerberg", where: "Sede de Meta, Menlo Park", tag: "Meta", pos: "center 30%" },
  { src: "/images/banco/silicon-valley-milei-zuckerberg-group.jpg", who: "Milei con Zuckerberg y la delegación", where: "Sede de Meta — foto grupal", tag: "Meta", pos: "center 30%" },
  { src: "/images/banco/silicon-valley-meta-meeting.jpg", who: "Reunión bilateral en Meta", where: "Sede de Meta, Menlo Park", tag: "Meta", pos: "center 40%" },
  { src: "/images/banco/silicon-valley-andreessen.jpg", who: "Con Marc Andreessen", where: "Cofundador de a16z — Silicon Valley", tag: "a16z", pos: "center 25%" },
  { src: "/images/banco/silicon-valley-sundar-pichai.jpg", who: "Milei con Sundar Pichai", where: "Google HQ, Mountain View", tag: "Google", pos: "center 12%" },
  { src: "/images/banco/silicon-valley-investor-talk.jpg", who: "Milei ante inversores", where: "Pacific Summit, Bay Area Council", tag: "Inversores", pos: "center 35%" },
  { src: "/images/banco/silicon-valley-investor-dinner.jpg", who: "Cena con líderes tech", where: "San Francisco — delegación argentina", tag: "Inversores", pos: "center 30%" },
  { src: "/images/banco/silicon-valley-apple-park.jpg", who: "Apple Park", where: "Sede principal de Apple, Cupertino", tag: "Apple", pos: "center 50%" },
  { src: "/images/banco/silicon-valley-investors.jpg", who: "La delegación argentina con inversores", where: "Silicon Valley, California", tag: "Inversores", pos: "center 18%" },
  { src: "/images/banco/silicon-valley-tech-leaders.jpg", who: "Delegación argentina en Silicon Valley", where: "California", tag: "Google", pos: "center 22%" },
  // ── Oct 2024 — XPRIZE ──
  { src: "/images/banco/silicon-valley-xprize-diamandis.jpg", who: "Con Peter Diamandis", where: "XPRIZE, California — Octubre 2024", tag: "XPRIZE", pos: "center 30%" },
  { src: "/images/banco/silicon-valley-xprize-tyson.jpg", who: "Con Neil deGrasse Tyson", where: "XPRIZE, California — Octubre 2024", tag: "XPRIZE", pos: "center 20%" },
];

// ── Dividers ────────────────────────────────────────────────

export const futuroDividers = [
  "STARGATE ARGENTINA — Un año después, la semilla dio fruto",
  "VACA MUERTA — El gigante despierta",
] as const;

// ── 1. Silicon Valley ───────────────────────────────────────

export const siliconValley: SiliconValleyData = {
  kicker: "Mayo 2024 · Silicon Valley",
  titleLine1: "ARGENTINA COMO",
  titleLine2Em: "HUB GLOBAL DE IA",
  paragraphs: [
    "En mayo de 2024, el Presidente Milei realizó una gira histórica por Silicon Valley — la cuarta visita a Estados Unidos en cinco meses de gestión y la primera dedicada exclusivamente a tecnología. La semana incluyó reuniones cara a cara con los líderes más influyentes del sector tech mundial: Sam Altman (CEO de OpenAI, valuada en USD 80.000M), Sundar Pichai (CEO de Google/Alphabet, USD 2T de capitalización), Tim Cook (CEO de Apple, la empresa más valiosa del mundo con USD 3T), Mark Zuckerberg (CEO de Meta, USD 1,3T), Elon Musk (CEO de Tesla y SpaceX, el hombre más rico del mundo) y Marc Andreessen (cofundador de a16z, el fondo de venture capital más influyente de Silicon Valley con USD 42.000M bajo gestión).",
    "El pitch de Milei usó el modelo irlandés: así como Irlanda multiplicó su PBI per cápita 6 veces atrayendo inversión tech, la Argentina ofrece algo que nadie más tiene — Patagonia con tierras vastas, clima frío ideal para refrigeración de servidores, acceso al agua dulce y energía limpia abundante (nuclear, eólica e hidroeléctrica). La tesis geopolítica es clara: Europa reguló con el AI Act, China es impredecible, y EEUU debate restricciones. Argentina, alineada con Washington y sin regulación hostil, es la alternativa creíble para instalar la infraestructura de IA del futuro.",
    "La agenda fue implacable. El martes, reunión de una hora con Sam Altman en las oficinas de OpenAI en Mission District, donde el equipo de Altman preparó una demostración exclusiva de GPT-4o y sus capacidades multimodales. El miércoles, disertación en la Hoover Institution de Stanford junto a Condoleezza Rice y el rector Richard Saller ante 400 asistentes, seguida de reuniones con Tim Cook en Apple Park (Cupertino) — donde Cook mostró interés en expandir la manufactura de componentes en Argentina — y con Sundar Pichai en Google HQ (Mountain View), donde un cartel decía «Bienvenido Javier Milei, Presidente de la República Argentina» y se discutió la instalación de un Google Cloud Region en Buenos Aires. El jueves, reunión con Zuckerberg en la sede de Meta en Menlo Park, donde se exploró la instalación de un cable submarino de fibra óptica, presentación ante 500 inversores en el Pacific Summit del Bay Area Council, y encuentros con empresas emergentes de IA.",
    "Una anécdota reveladora: al terminar la reunión con Jeff Bezos de Amazon (la séptima reunión con un CEO tech), fue Bezos quien le pidió una selfie al Presidente. Para el sector tecnológico mundial, Milei es como un héroe — no se juntan a sacarse fotos, se juntan porque piensan que hay algo importante para discutir. La visita sembró la semilla de lo que un año después se convertiría en Stargate Argentina — la mayor inversión en infraestructura tecnológica de la historia del país.",
  ],
  stats: [
    { val: "7", label: "CEOs tech reunidos" },
    { val: "$6T+", label: "cap. bursátil combinada" },
    { val: "4°", label: "Hub IA proyectado" },
  ],
  photo: {
    src: "/images/banco/silicon-valley-investors.jpg",
    alt: "Milei con Mark Zuckerberg",
    objectPosition: "center 25%",
    captionStrong: "Milei con Mark Zuckerberg",
    captionSpan: "Sede de Meta — Silicon Valley, Mayo 2024",
    aspectRatio: "16/9",
  },
};

// ── 2. Stargate ─────────────────────────────────────────────

export const stargate: StargateData = {
  kicker: "Octubre 2025 · Buenos Aires",
  titleLine1: "STARGATE",
  titleLine2: "ARGENTINA",
  paragraphs: [
    "El 10 de octubre de 2025, el Presidente Milei recibió en Casa Rosada a una delegación de OpenAI liderada por Chris Lehane (VP de Asuntos Globales), junto a Demian Reidel. Allí se firmó la carta de intención para el primer proyecto Stargate fuera de Estados Unidos — y el primer país del programa «OpenAI for Countries», convirtiendo a la Argentina en la punta de lanza de la expansión global de infraestructura de inteligencia artificial.",
    "El megacentro de datos se ubicará en la Patagonia argentina, aprovechando el clima frío (temperatura promedio de 8°C que reduce costos de refrigeración en un 40%), el acceso al agua dulce de ríos cordilleranos, y la capacidad de generación eléctrica limpia. Tendrá capacidad de hasta 500 MW en su configuración final — el mayor data center de toda América Latina, equivalente a abastecer una ciudad de 400.000 habitantes.",
    "La primera fase de 100 MW se proyecta para fines de 2027, con inicio de obras en 2026. Más allá de la infraestructura, OpenAI se comprometió a desplegar una versión personalizada de ChatGPT para los 46 millones de ciudadanos argentinos — integrada con servicios públicos, educación y salud. Esto convierte a Argentina en el primer país del mundo con acceso universal a un asistente de IA gubernamental, capaz de ayudar con trámites, consultas médicas básicas, y tutoría educativa personalizada.",
    "El proyecto supone una inversión de hasta USD 25.000 millones bajo el régimen RIGI (Ley Bases 27.742) — la mayor iniciativa de tecnología e infraestructura energética en la historia de Argentina. Se integra en Stargate, la joint venture global de OpenAI, SoftBank (Masayoshi Son), Oracle (Larry Ellison) y MGX (fondo soberano de Abu Dhabi) que planea invertir un total de USD 500.000 millones en infraestructura de IA a nivel mundial, anunciada por el presidente Trump en enero de 2025. La primera fase argentina, de USD 7.000 a 10.000 millones, contempla inicio de obras en 2026 y puesta en funcionamiento del primer módulo de 100 MW hacia fines de 2027, generando más de 15.000 puestos de trabajo directos e indirectos durante la construcción.",
  ],
  quote: {
    text: "Cuando conocí al Presidente Milei durante su visita a San Francisco, su visión sobre cómo la IA puede impulsar el crecimiento de Argentina era inconfundible. Stargate Argentina no es solo infraestructura — es poner la inteligencia artificial en las manos de más personas en Argentina.",
    cite: "Sam Altman — CEO, OpenAI",
  },
  stats: [
    { val: "$25B", label: "Inversión total USD" },
    { val: "500", label: "MW Capacidad final" },
    { val: "2027", label: "Fase 1 · 100 MW" },
  ],
  photo: {
    src: "/images/banco/stargate-anuncio.jpg",
    alt: "Milei y Reidel con delegación de OpenAI en Casa Rosada",
    objectPosition: "center 25%",
    captionStrong: "Milei y Demian Reidel reciben a delegación de OpenAI",
    captionSpan: "Casa Rosada — Octubre 2025",
    aspectRatio: "16/9",
  },
};

// ── 3. Nuclear ──────────────────────────────────────────────

export const nuclear: NuclearData = {
  kicker: "Energía estratégica · Tres fases",
  titleLine1: "EL MOTOR DETRÁS",
  titleLine2: "DE LA REVOLUCIÓN",
  phases: [
    {
      label: "Fase 1 — El reactor.",
      text: "El ACR-300, un reactor modular pequeño (SMR) de 300 MW diseñado por ingenieros de INVAP — la empresa de tecnología nuclear argentina reconocida internacionalmente — y patentado en Estados Unidos. Se construirán cuatro módulos en el complejo de Atucha (Lima, provincia de Buenos Aires), duplicando la capacidad nuclear instalada del país a 1.200 MW adicionales, sobre los 1.755 MW existentes de Atucha I, Atucha II y Embalse. Argentina apunta a ser el primer país en exportar y vender SMRs comercialmente a nivel global — y en noviembre de 2025 se convirtió en el primer país latinoamericano en adherirse al programa FIRST (Foundational Infrastructure for Responsible Use of Small Modular Reactor Technology) de Estados Unidos para desarrollo y despliegue comercial de reactores modulares, con acceso a financiamiento del Departamento de Energía de EE.UU.",
    },
    {
      label: "Fase 2 — El uranio.",
      text: "El «modelo Gillette»: vender reactores con compromiso de compra de uranio argentino a largo plazo. YPF creó la subsidiaria YPF Nuclear para liderar la explotación de Cerro Solo en Chubut — el mayor reservorio de uranio del país con reservas estimadas de 6.000 toneladas — junto a 18 iniciativas privadas adicionales de exploración y explotación en Mendoza, Salta y San Luis. En 2025, Argentina batió su récord histórico de producción de uranio: 190 toneladas. El objetivo: nunca más importar uranio para nuestros propios reactores. Argentina tiene la séptima mayor reserva de uranio de América y la infraestructura para enriquecer combustible nuclear — una capacidad que solo 13 países del mundo poseen.",
    },
    {
      label: "Fase 3 — Nuclear City.",
      text: "Un hub de data centers 100% libre de combustibles fósiles en la Patagonia, alimentado exclusivamente por energía nuclear. La demanda es real y urgente: según Goldman Sachs, los data centers globales requerirán entre 85 y 90 GW de nueva capacidad eléctrica para 2030 — el equivalente a la demanda eléctrica total de Japón — y la energía nuclear es la única fuente que ofrece energía 24/7, sin emisiones, con factor de capacidad superior al 90%. Argentina, con tierras vastas a precios irrisorios comparados con EE.UU. o Europa, clima frío patagónico ideal para refrigeración natural, acceso al agua dulce cordillerana, y 70 años de experiencia nuclear, ofrece la combinación que ningún otro país del mundo puede igualar.",
    },
  ],
  quote: {
    text: "Con el ACR-300, vamos a ofrecerle al mundo una fuente de energía limpia, estable y escalable. Primero construimos. Después, licenciamos la tecnología al resto del mundo.",
    cite: "Demian Reidel — Presidente, Consejo Nuclear Argentino",
  },
  closingParagraph:
    "Milei lo anunció en cadena nacional: «Tenemos energía de sobra, tierras frías e inhóspitas de sobra, y recurso humano de calidad. Cuando en Argentina imperaron las ideas de la libertad, fuimos punta de lanza en tecnología — en 1900, teníamos la mayor red ferroviaria de América Latina. Que nadie se sorprenda si la Argentina se convierte en el próximo hub del mundo.»",
  stats: [
    { val: "4", label: "ACR-300 · Atucha" },
    { val: "1.2", label: "GW Adicionales" },
    { val: "85-90", label: "GW demanda global 2030" },
  ],
  photo: {
    src: "/images/banco/plan-nuclear-atucha.jpg",
    alt: "Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino",
    objectPosition: "center 35%",
    captionStrong: "Reidel, Milei y Grossi anuncian el Plan Nuclear Argentino",
    captionSpan: "Casa Rosada — Diciembre 2024",
    aspectRatio: "16/9",
  },
};

// ── 4. Vaca Muerta ──────────────────────────────────────────

export const vacaMuerta: VacaMuertaData = {
  kicker: "Récord tras récord · 2025–2026",
  titleLine1: "VACA MUERTA:",
  titleLine2Em: "EL GIGANTE DESPIERTA",
  paragraphs: [
    "En 2025, la Argentina superó el récord de producción petrolera de 1998 — un máximo que llevaba 27 años intacto. La producción alcanzó 869.000 barriles diarios con Vaca Muerta aportando el 65% del total nacional. El crecimiento de la producción shale fue del 33% interanual, convirtiendo a Argentina en el productor de shale de más rápido crecimiento del mundo fuera de Estados Unidos. Vaca Muerta es la segunda reserva mundial de gas shale (tras China) y la cuarta de petróleo shale (tras Rusia, EE.UU. y China) — con una superficie de 30.000 km², equivalente a Bélgica.",
    "Las cifras de la Cuenca Neuquina son contundentes. La inversión total en 2025 alcanzó USD 10.000 millones, con el 76% destinado exclusivamente a Vaca Muerta. YPF, bajo la conducción de Horacio Marín, superó los 200.000 barriles diarios de shale oil propio — un crecimiento del 82% en solo dos años, posicionándose como la petrolera de shale de mayor crecimiento del mundo. Loma Campana, operado por YPF, se convirtió en el primer yacimiento argentino en romper la barrera de los 100.000 barriles diarios, con más de USD 10.000 millones invertidos acumulados y 750 pozos activos. Otras operadoras como Vista Energy, Pan American Energy, Tecpetrol y Pluspetrol batieron récords propios de producción.",
    "Las exportaciones de crudo y derivados superaron los USD 6.000 millones en 2025 — Argentina pasó de ser importador neto de energía a exportador neto en solo dos años. El superávit de la balanza comercial energética alcanzó USD 6.900 millones en 2025 — un 22% más que en 2024. El proyecto estrella del futuro es Argentina LNG, liderado por YPF y Petronas (la petrolera estatal de Malasia), que proyecta exportar 12 millones de toneladas anuales de gas natural licuado desde una planta en Sierra Grande, Río Negro — generando USD 200.000 millones en exportaciones acumuladas en 20 años. Con la segunda reserva mundial de gas shale y la cuarta de petróleo shale, el gigante despertó.",
    "Y en 2026, el gigante sigue acelerando. Neuquén superó por primera vez los 610.000 barriles diarios — récord provincial absoluto — y YPF apunta a que Argentina quiebre la barrera del millón de barriles diarios durante el año. El oleoducto Vaca Muerta Oil Sur (VMOS), construido por YPF junto a Pan American Energy, Pluspetrol, Vista y Pampa Energía, transportará hasta 550.000 barriles diarios hasta la costa atlántica, desbloqueando más de USD 15.000 millones anuales en exportaciones. YPF fijó una meta récord de USD 14.000 millones en exportaciones energéticas para 2026. La producción de uranio también marcó un hito: 190 toneladas en 2025, el récord histórico nacional.",
  ],
  stats: [
    { val: "869K", label: "Barriles/día · Récord 2025" },
    { val: "1M", label: "Meta 2026 · barriles/día" },
    { val: "$14B", label: "Meta exportaciones 2026" },
    { val: "$6.9B", label: "Superávit energético 2025" },
  ],
  photo: {
    src: "/images/banco/vaca-muerta-recorrida.jpg",
    alt: "Torre de perforación en Vaca Muerta, Neuquén",
    objectPosition: "center 30%",
    captionStrong: "Vaca Muerta — Neuquén, Patagonia",
    captionSpan: "2° reserva mundial de gas shale · 4° de petróleo shale",
    aspectRatio: "16/9",
  },
};

// ── Closing ─────────────────────────────────────────────────

export const futuroClosing: ClosingData = {
  text: "Silicon Valley abrió la puerta. Stargate trae la infraestructura. Vaca Muerta y el plan nuclear la alimentan. El litio, el cobre y el uranio proveen los minerales críticos. Argentina no será una observadora pasiva — está llamada a ser la arquitecta del futuro. En dos años, pasamos de país paria a destino de inversión global. Los próximos dos serán los de la construcción.",
  attr: "Javier Milei — Apertura de Sesiones 2026",
};
