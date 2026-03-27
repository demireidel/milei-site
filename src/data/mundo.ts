// ── Mundo Data ───────────────────────────────────────────

export interface Leader {
  flag: string;
  name: string;
  role: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
}

export interface MegaStat {
  value: string;
  label: string;
  detail: string;
  animated?: {
    target: number;
    prefix?: string;
    suffix?: string;
    formatDot?: boolean;
  };
}

export interface TradeAgreement {
  tag: string;
  title: string;
  description: string;
  keyFacts: { text: string; color: "gold" | "blue" | "green" }[];
  image: string;
  imageAlt: string;
  badge: string;
  reverse?: boolean;
}

export interface CooperationItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ForumAppearance {
  image: string;
  imageAlt: string;
  title: string;
  location: string;
  date: string;
  desc: string;
  highlight?: boolean;
}

// ── Data ────────────────────────────────────────────────

export const leaders: Leader[] = [
  { flag: "🇺🇸", name: "Donald Trump", role: "Presidente de EE.UU." },
  { flag: "🇮🇹", name: "Giorgia Meloni", role: "Primera Ministra de Italia" },
  { flag: "🇫🇷", name: "Emmanuel Macron", role: "Presidente de Francia" },
  { flag: "🇮🇱", name: "Benjamin Netanyahu", role: "PM de Israel" },
  { flag: "🇮🇳", name: "Narendra Modi", role: "PM de India" },
  { flag: "🇺🇸", name: "Elon Musk", role: "Tesla, X, SpaceX" },
  { flag: "🇺🇸", name: "Sam Altman", role: "CEO de OpenAI" },
  { flag: "🇺🇸", name: "Tim Cook", role: "CEO de Apple" },
  { flag: "🇺🇸", name: "Mark Zuckerberg", role: "CEO de Meta" },
  { flag: "🇸🇻", name: "Nayib Bukele", role: "Presidente de El Salvador" },
  { flag: "🌐", name: "K. Georgieva", role: "Directora del FMI" },
  { flag: "🇺🇸", name: "Jamie Dimon", role: "CEO de JP Morgan" },
  { flag: "🇺🇸", name: "Sundar Pichai", role: "CEO de Google" },
  { flag: "🇺🇸", name: "Scott Bessent", role: "Secretario del Tesoro" },
  { flag: "🇨🇱", name: "José A. Kast", role: "Presidente de Chile" },
  { flag: "🇭🇺", name: "Viktor Orbán", role: "PM de Hungría" },
  { flag: "🇬🇧", name: "Keir Starmer", role: "PM del Reino Unido" },
  { flag: "🇺🇸", name: "Pete Hegseth", role: "Secretario de Defensa de EE.UU." },
  { flag: "🇦🇪", name: "MGX / Abu Dhabi", role: "Fondo soberano — Stargate" },
  { flag: "🇯🇵", name: "Masayoshi Son", role: "CEO de SoftBank — Stargate" },
];

export const timeline: TimelineEvent[] = [
  {
    date: "ENE 2024",
    title: "Davos I — El rugido del león",
    desc: "«Occidente está en peligro.» Con esa frase, Milei irrumpe en el Foro Económico Mundial ante la élite global de Davos y lanza una defensa radical del capitalismo de libre mercado. El discurso genera una ovación de pie inédita en la historia del WEF y es reproducido por medios de todo el mundo. Argentina vuelve al radar global por primera vez en décadas.",
  },
  {
    date: "FEB 2024",
    title: "Vaticano — Una hora con el Papa Francisco",
    desc: "Pese a las asperezas públicas durante la campaña, Milei se reúne con el Papa Francisco durante 70 minutos en el Vaticano — una audiencia excepcionalmente larga. Intercambian regalos y discuten la crisis social argentina. El gesto desarma la narrativa de confrontación y abre un canal diplomático con la Santa Sede.",
  },
  {
    date: "FEB 2024",
    title: "Roma — Primera bilateral con Meloni",
    desc: "En el Palazzo Chigi, Milei se reúne durante una hora con Giorgia Meloni — su primera bilateral con una líder europea. Acuerdos en energía, infraestructura y agroindustria. Comienza una alianza personal que se profundizará en cinco encuentros en dos años.",
  },
  {
    date: "FEB 2024",
    title: "Jerusalén — Milei en el Muro de los Lamentos",
    desc: "Bilateral de 90 minutos con Netanyahu en la oficina del Primer Ministro. Acuerdos en ciberseguridad, defensa, drones y agtech. Milei visita el Muro de los Lamentos y anuncia la intención de trasladar la embajada argentina a Jerusalén. Israel reconoce a Argentina como socio prioritario en América Latina.",
  },
  {
    date: "FEB 2024",
    title: "CPAC Washington — Ante el conservadurismo global",
    desc: "En la conferencia conservadora más importante de EE.UU., Milei deconstruye los cuatro supuestos fallos de mercado: monopolio, bienes públicos, externalidades e información asimétrica. Primera foto con Trump — quien lo llama «MAGA: Make Argentina Great Again». El público norteamericano lo ovaciona de pie.",
  },
  {
    date: "ABR 2024",
    title: "Musk en la Gigafactory de Tesla — Austin",
    desc: "Milei visita la Gigafactory de Tesla en Austin, Texas, y se reúne con Elon Musk. Discuten mercados libres, litio argentino, eliminación de burocracia y la posibilidad de un «evento de la libertad» en Argentina. Musk elogia públicamente las reformas argentinas en X.",
  },
  {
    date: "MAY 2024",
    title: "Silicon Valley — 7 CEOs en 36 horas",
    desc: "En un raid de 36 horas por San Francisco, Milei se reúne cara a cara con Sam Altman (OpenAI, 90 minutos), Tim Cook (Apple), Sundar Pichai (Google), Mark Zuckerberg (Meta) y Marc Andreessen (a16z). Plantea a Argentina como hub global de IA con energía limpia, agua dulce y clima frío en Patagonia. La gira planta la semilla de Stargate Argentina.",
  },
  {
    date: "JUN 2024",
    title: "G7 Apulia — Invitado por Meloni",
    desc: "Milei asiste al G7 en Borgo Egnazia, Italia, como invitado personal de Meloni — la anfitriona del foro. Primera vez que un presidente argentino es invitado al G7 en una década. Bilaterales con líderes del grupo. Milei y Meloni consolidan su alianza personal ante las cámaras del mundo.",
  },
  {
    date: "JUN 2024",
    title: "Zelensky — Cumbre de Paz en Suiza",
    desc: "En el resort de Bürgenstock, Milei se reúne con Volodímir Zelensky en la Cumbre Global de Paz. Recibe la Orden de la Libertad de Ucrania y reitera el apoyo argentino a la soberanía ucraniana. Argentina firma el comunicado final junto a más de 80 países.",
  },
  {
    date: "JUL 2024",
    title: "Macron en el Elíseo — Bilateral en París",
    desc: "En vísperas de los Juegos Olímpicos, Milei se reúne con Macron en el Palacio del Elíseo durante casi una hora. El presidente liberal y el dirigista europeo encuentran terreno común: FMI, energía nuclear, Mercosur-UE y la candidatura argentina a la OCDE. Francia ofrece respaldo en los foros multilaterales.",
  },
  {
    date: "SEP 2024",
    title: "ONU — «No soy político, soy economista»",
    desc: "Ante la 79.ª Asamblea General de la ONU, Milei rechaza frontalmente la Agenda 2030, alerta sobre el fracaso de la ONU en su misión original y presenta a Argentina como ejemplo de que la transformación radical es posible. «La vida, la libertad y la propiedad» quedan definidos como los tres pilares inamovibles de la política exterior argentina.",
  },
  {
    date: "NOV 2024",
    title: "Mar-a-Lago — Primer líder en ver a Trump electo",
    desc: "Milei es el primer jefe de Estado del mundo en reunirse con Trump tras su victoria electoral, en la gala del America First Policy Institute en Mar-a-Lago. Elon Musk también está presente. Milei llama a la victoria de Trump «el mayor comeback político de la historia». La foto de los tres recorre el planeta.",
  },
  {
    date: "NOV 2024",
    title: "Meloni en Buenos Aires — Cena en Olivos",
    desc: "Meloni visita Argentina después del G20 en Río. Cena en la Quinta de Olivos, bilateral de dos horas en Casa Rosada. Se anuncia el Plan de Acción Italia-Argentina 2025-2030. Italia respalda el ingreso de Argentina a la OCDE. Milei y Karina reciben la ciudadanía italiana por ius sanguinis.",
  },
  {
    date: "NOV 2024",
    title: "G20 Río — Xi Jinping cara a cara",
    desc: "Pese a haber llamado «asesinos» al gobierno chino durante la campaña, Milei se reúne con Xi Jinping en el G20 de Río de Janeiro. Ambos acuerdan «cooperación constructiva» y la renovación del swap de divisas por USD 5.000 millones. Pragmatismo puro: China es el segundo socio comercial de Argentina.",
  },
  {
    date: "ENE 2025",
    title: "Inauguración de Trump — Primer jefe de Estado en asistir",
    desc: "Milei asiste a la inauguración presidencial de Trump en el Capitolio — primer mandatario en ejercicio en hacerlo según los registros del Departamento de Estado desde 1874. Entourage: Karina Milei, Luis Caputo, Gerardo Werthein. También asiste a la Starlight Gala. La señal es inequívoca: Argentina y EE.UU. son aliados estratégicos.",
  },
  {
    date: "ENE 2025",
    title: "Davos II — «Maquiavelo ha muerto»",
    desc: "Segundo Special Address consecutivo ante el WEF. Milei introduce la eficiencia dinámica de Huerta de Soto, argumenta que la eficiencia sin moral es tiranía, y anuncia la formación de una alianza internacional de naciones libres junto a Trump, Musk, Meloni, Bukele, Orbán y Netanyahu. Ovación prolongada del auditorio.",
  },
  {
    date: "ABR 2025",
    title: "Acuerdo FMI — USD 20.000M",
    desc: "Programa de 48 meses bajo el Extended Fund Facility con un primer desembolso descomunal de USD 12.000M — el más grande que el Fondo haya girado en una sola transferencia. Habilita un nuevo régimen cambiario de banda de flotación que entierra el crawling peg.",
  },
  {
    date: "JUN 2025",
    title: "Meloni en Roma — YPF-ENI y ciudadanía italiana",
    desc: "Bilateral de dos horas en Roma. Se adopta el Plan de Acción Italia-Argentina 2025-2030 y se firma el acuerdo YPF-ENI para el proyecto Argentina LNG: gas de Vaca Muerta licuado con tecnología flotante, con potencial de más de USD 100.000 millones en exportaciones en 20 años. Quinto encuentro Milei-Meloni en 18 meses.",
  },
  {
    date: "JUN 2025",
    title: "Papa León XIV — Primera audiencia",
    desc: "Audiencia privada de 45 minutos con el Papa León XIV — el primer papa americano de la historia. Discuten la situación social argentina, la reducción de la pobreza y la cohesión social. El Papa confirma su intención de visitar Argentina. Milei entrega una invitación formal por escrito.",
  },
  {
    date: "JUN 2025",
    title: "Knesset — Milei ante el parlamento israelí",
    desc: "Milei se convierte en el primer presidente argentino en dirigirse al pleno de la Knesset. Anuncia formalmente que Argentina trasladará su embajada a Jerusalén Oeste en 2026. Netanyahu agradece a Milei por «estar del lado correcto en la lucha contra las fuerzas de la oscuridad». Visita de tres días que incluye acuerdos de defensa y tecnología.",
  },
  {
    date: "JUN 2025",
    title: "Macron en Niza — Alianza nuclear y minerales",
    desc: "Al margen de la Conferencia de Océanos de la ONU, Milei y Macron firman una alianza estratégica en minerales críticos y energía nuclear. Francia se compromete a apoyar el Plan Nuclear argentino. Acuerdos bilaterales en litio y cobre. Según funcionarios, la relación franco-argentina está «en su punto más alto de cercanía política en décadas».",
  },
  {
    date: "JUL 2025",
    title: "Modi en Buenos Aires — Hito histórico",
    desc: "Primera bilateral India-Argentina desde 1968 — más de medio siglo de silencio diplomático roto de un solo golpe. Modi aterriza en Buenos Aires para abrir un canal directo con la tercera economía de Sudamérica. Acuerdos en tecnología, defensa y cadenas de suministro de minerales críticos.",
  },
  {
    date: "JUL 2025",
    title: "1ª Revisión FMI aprobada",
    desc: "El Fondo aprueba sin objeciones la primera revisión del programa, desbloqueando USD 2.000M adicionales. Argentina sorprende a los mercados retornando a los mercados internacionales de capital antes de lo previsto, colocando deuda con spreads en mínimos desde 2018.",
  },
  {
    date: "SEP 2025",
    title: "TLC Mercosur — EFTA firmado en Río",
    desc: "Ocho años de negociación culminan en Río de Janeiro. Una zona de libre comercio de 300 millones de personas con el bloque de mayor renta per cápita del planeta: Suiza, Noruega, Islandia y Liechtenstein. 100% arancel cero para productos industriales.",
  },
  {
    date: "SEP 2025",
    title: "Netanyahu en Nueva York",
    desc: "Al margen de la Asamblea General de la ONU, segundo encuentro bilateral del año entre Milei y Netanyahu. Refuerzo de la cooperación en defensa e inteligencia, y coordinación conjunta en foros multilaterales.",
  },
  {
    date: "OCT 2025",
    title: "Casa Blanca — Bilateral con Trump",
    desc: "Milei cruza el umbral de la Casa Blanca como el primer líder sudamericano recibido por Trump. Almuerzo de trabajo con delegaciones completas en el Salón Oval. La imagen del apretón de manos recorre el mundo: Argentina tiene un aliado en Washington.",
  },
  {
    date: "OCT 2025",
    title: "Swap USD 20.000M con el Tesoro de EE.UU.",
    desc: "En un gesto sin precedentes, el secretario Bessent activa el Exchange Stabilization Fund (ESF) por primera vez en la historia para un país latinoamericano. Swap de divisas por USD 20.000M, compra directa de bonos soberanos argentinos y crédito stand-by del Tesoro.",
  },
  {
    date: "OCT 2025",
    title: "Stargate Argentina — OpenAI elige Patagonia",
    desc: "OpenAI y Sur Energy firman el acuerdo para construir Stargate Argentina: el primer proyecto de infraestructura de IA fuera de Estados Unidos. Hasta 500 MW de capacidad de cómputo alimentados con energía renovable patagónica. Inversión de hasta USD 25.000 millones bajo el régimen RIGI. Construcción comienza en 2026, primera fase operativa en 2027.",
  },
  {
    date: "OCT 2025",
    title: "Victoria legislativa histórica — 40,7 %",
    desc: "La Libertad Avanza arrasa en las elecciones de medio término con el 40,7 % a nivel nacional — victoria en 15 de 24 provincias y en 6 de 8 distritos senatoriales. Por primera vez desde 1987, un presidente gana la provincia de Buenos Aires, bastión histórico del peronismo. LLA consolida el tercio legislativo para blindar vetos y queda a 22 votos de la mayoría simple. Los mercados responden con un rally inmediato.",
  },
  {
    date: "NOV 2025",
    title: "Framework Comercial con EE.UU.",
    desc: "La Casa Blanca anuncia el marco del acuerdo bilateral comercial. Comienzan las negociaciones técnicas capítulo por capítulo. El mundo toma nota: un TLC entre EE.UU. y Sudamérica deja de ser fantasía.",
  },
  {
    date: "DIC 2025",
    title: "Kast en Casa Rosada",
    desc: "El presidente chileno José Antonio Kast visita Buenos Aires para una bilateral en Casa Rosada. Agenda conjunta de libre comercio, seguridad fronteriza y cooperación energética. Un eje liberal se consolida en el Cono Sur.",
  },
  {
    date: "ENE 2026",
    title: "Riesgo país debajo de 500 puntos",
    desc: "El 27 de enero de 2026, el riesgo país argentino perfora el piso de los 500 puntos por primera vez desde junio de 2018. Una señal que los mercados internacionales leen con claridad: Argentina dejó de ser sinónimo de default.",
  },
  {
    date: "ENE 2026",
    title: "Firma Mercosur — UE en Asunción",
    desc: "Después de 25 años de idas y vueltas, el acuerdo más ambicioso entre bloques se materializa en la Cumbre de Asunción. Acuerdo de Asociación + Acuerdo Comercial Interino. Un mercado integrado de 700 millones de personas que representa el 30% del PBI global.",
  },
  {
    date: "ENE 2026",
    title: "Davos III + Board of Peace",
    desc: "Tercer Special Address consecutivo ante el WEF — ningún líder latinoamericano lo había logrado. Firma del Board of Peace junto a Trump: 19 países comprometidos con la resolución pacífica de conflictos. Argentina queda eximida de la cuota de USD 1.000M.",
  },
  {
    date: "FEB 2026",
    title: "Firma del TLC Argentina — EE.UU.",
    desc: "Lo que ningún gobierno logró en 200 años de historia. Primer tratado de libre comercio entre EE.UU. y un país sudamericano. 1.675 productos argentinos sin arancel. Cuota de 100.000 toneladas de carne bovina. Acuerdo de minerales críticos. Un antes y un después.",
  },
  {
    date: "FEB 2026",
    title: "Firma del acuerdo comercial y de datos con EE.UU.",
    desc: "El canciller Pablo Quirno y el representante de Comercio Jamieson Greer firman en Washington el acuerdo de comercio, inversiones y datos. Argentina reconoce a EE.UU. como jurisdicción adecuada para transferencia transfronteriza de datos y se compromete a no imponer aranceles a transmisiones electrónicas. Paralelamente, el ministro de Defensa firma con Pete Hegseth la adhesión a la coalición hemisférica de seguridad.",
  },
  {
    date: "FEB 2026",
    title: "Reforma laboral — Primera en 40 años de democracia",
    desc: "El Senado aprueba la primera reforma laboral integral desde el retorno a la democracia en 1983. Reemplaza el sistema de indemnizaciones por fondos de cese, elimina la ultractividad de convenios colectivos, prioriza acuerdos empresa por empresa sobre los sectoriales, y moderniza licencias, horas extra y régimen de enfermedades inculpables. Aplica a todos los contratos — no solo a los nuevos.",
  },
  {
    date: "MAR 2026",
    title: "Shield of the Americas — Miami",
    desc: "Coalición de 17 naciones del hemisferio occidental, co-liderada por Argentina y EE.UU., firma en Miami el pacto de seguridad hemisférica más ambicioso en décadas. Objetivo: erradicar el narcoterrorismo y blindar la región contra la interferencia de potencias extracontinentales.",
  },
  {
    date: "MAR 2026",
    title: "Argentina Week — Nueva York",
    desc: "Más de 300 líderes empresariales de todo el mundo convergen en Manhattan. Jamie Dimon inaugura el evento desde la flamante torre de JP Morgan en 270 Park Avenue. USD 16.150M en inversiones confirmadas. Gobernadores argentinos salen a vender sus provincias al capital global.",
  },
  {
    date: "2026",
    title: "Londres — Primera visita presidencial en 28 años",
    desc: "Milei confirma la primera visita oficial de un presidente argentino a Londres desde 1998. Agenda: cooperación en energía, servicios financieros y tecnología con el PM Keir Starmer. Se inician conversaciones sobre el embargo de armas vigente desde 1982. El reclamo de soberanía sobre Malvinas se ratifica como «no negociable», pero Milei propone una «relación comercial adulta» como vía diplomática.",
  },
];

export const megaStats: MegaStat[] = [
  {
    value: "1er",
    label: "País sudamericano",
    detail: "en firmar un TLC bilateral con EE.UU. en la historia — lo que ningún gobierno logró en 200 años de vida independiente",
  },
  {
    value: "1.675",
    label: "Productos argentinos",
    detail: "con aranceles eliminados hacia EE.UU. + 221 posiciones norteamericanas con arancel cero recíproco",
    animated: { target: 1675, formatDot: true },
  },
  {
    value: "$1.013M",
    label: "Exportaciones recuperadas",
    detail: "en acceso directo al mercado de consumo más grande del mundo — USD 28T de PBI",
    animated: { target: 1013, prefix: "$", suffix: "M" },
  },
  {
    value: "100K tn",
    label: "Carne bovina",
    detail: "cuota libre de arancel — la mayor concesión cárnica bilateral de EE.UU. en un tratado comercial",
    animated: { target: 100, suffix: "K tn" },
  },
  {
    value: "92%",
    label: "Aranceles eliminados",
    detail: "por la UE para exportaciones del Mercosur — mercado de 700M de personas, 30% del PBI mundial",
    animated: { target: 92, suffix: "%" },
  },
  {
    value: "<500",
    label: "Riesgo país",
    detail: "por debajo de 500 puntos el 27 de enero de 2026 — el nivel más bajo desde junio de 2018, una señal inequívoca de confianza global",
    animated: { target: 500, prefix: "<" },
  },
  {
    value: "$11.29B",
    label: "Superávit comercial 2025",
    detail: "USD 11.290M de superávit en la balanza comercial de 2025 — Argentina vuelve a exportar más de lo que importa, revirtiendo años de déficit",
    animated: { target: 11.29, prefix: "$", suffix: "B" },
  },
  {
    value: "$55B+",
    label: "Inversiones anunciadas",
    detail: "USD 55.000M+ en inversiones comprometidas: RIGI (USD 25.000M aprobados, USD 60.000M en pipeline), Stargate Argentina, Vaca Muerta Sur, Argentina LNG, minería de litio y cobre",
    animated: { target: 55, prefix: "$", suffix: "B+" },
  },
  {
    value: "40,7%",
    label: "Victoria legislativa",
    detail: "La Libertad Avanza ganó las elecciones de medio término en 15 de 24 provincias, incluyendo Buenos Aires — bastión peronista desde 1987",
    animated: { target: 40.7, suffix: "%" },
  },
  {
    value: "9+",
    label: "Viajes a EE.UU.",
    detail: "Récord histórico de un presidente argentino: Washington, Nueva York, Miami, Austin, San Francisco, Los Ángeles, Idaho — la relación bilateral más intensa de la historia",
    animated: { target: 9, suffix: "+" },
  },
];

export const tradeAgreements: TradeAgreement[] = [
  {
    tag: "Acuerdo Bilateral Histórico",
    title: "Acuerdo de Comercio e Inversión Recíproco con Estados Unidos",
    description:
      "Lo que parecía un espejismo diplomático se convirtió en realidad el día que Milei y Trump estamparon sus firmas sobre el primer tratado de libre comercio entre Estados Unidos y un país sudamericano en la historia. El acuerdo elimina aranceles de forma recíproca para 1.675 productos argentinos y 221 posiciones norteamericanas, abriendo de par en par las puertas del mercado de consumo más grande del planeta. La joya de la corona: una cuota preferencial de 100.000 toneladas de carne bovina sin arancel — la mayor concesión cárnica que Washington haya otorgado jamás en un tratado bilateral. Se incluye un cronograma de revisión conjunta de aranceles al acero (sección 232) y aluminio con desgravación progresiva. El financiamiento fluye a través del EXIM Bank y la DFC (Development Finance Corporation) para inversiones en minerales críticos, energía, infraestructura y data centers. Capítulos de propiedad intelectual, facilitación aduanera digital y mecanismo inversor-Estado completan un acuerdo que reescribe las reglas del juego hemisférico.",
    keyFacts: [
      { text: "USD 1.013M en exportaciones", color: "gold" },
      { text: "1.675 + 221 posiciones sin arancel", color: "blue" },
      { text: "100K tn carne bovina cuota libre", color: "green" },
      { text: "EXIM Bank + DFC financiamiento", color: "gold" },
    ],
    image: "/images/banco/trump-casablanca-oval.jpg",
    imageAlt: "Milei con Trump en el Salón Oval — Acuerdo bilateral Argentina-EE.UU.",
    badge: "🇺🇸🇦🇷 Firmado Feb 2026",
  },
  {
    tag: "Acuerdo de Asociación",
    title: "Mercosur — Unión Europea: un mercado de 700 millones de personas",
    description:
      "Veinticinco años. Un cuarto de siglo de rondas, borradores, bloqueos y falsas alarmas. Y fue un presidente argentino que se define como anarcocapitalista quien finalmente lo cerró. En la Cumbre de Asunción de enero 2026, el acuerdo más ambicioso entre bloques regionales del planeta dejó de ser borrador para convertirse en tratado. La UE eliminará aranceles para el 92% de las exportaciones del Mercosur. Las proyecciones oficiales son contundentes: las exportaciones argentinas a la UE crecerían un 76% en 5 años (de USD 8.641M a USD 15.208M) y un 122% en 10 años (hasta USD 19.165M). Tres pilares sostienen la arquitectura: comercial (desgravación arancelaria, compras públicas, servicios e inversiones), político (diálogo institucionalizado, derechos humanos, no proliferación) y de cooperación (ciencia, tecnología, medio ambiente, educación). Un mercado integrado que representa el 30% del PBI mundial.",
    keyFacts: [
      { text: "700 millones de consumidores", color: "gold" },
      { text: "De USD 8.641M a 19.165M", color: "blue" },
      { text: "+76% en 5 años / +122% en 10", color: "green" },
    ],
    image: "/images/banco/mercosur-ue-escenario.jpg",
    imageAlt: "Ceremonia de firma Mercosur-UE en Asunción, enero 2026",
    badge: "🇪🇺 Firmado Ene 2026",
    reverse: true,
  },
  {
    tag: "Tratado de Libre Comercio",
    title: "Mercosur — EFTA: Suiza, Noruega, Islandia y Liechtenstein",
    description:
      "Río de Janeiro, septiembre de 2025. Tras ocho años de negociación técnica, el Mercosur sella un tratado con el bloque de mayor renta per cápita del mundo. EFTA eliminará el 100% de los aranceles a productos industriales y pesqueros del Mercosur — sin excepciones, sin asteriscos. Preferencias inmediatas para carne bovina, café, etanol, vino, miel y cítricos. Capítulos completos de servicios, inversiones, compras públicas, propiedad intelectual y desarrollo sostenible. Nace una zona de libre comercio de 300 millones de personas con un PBI combinado de USD 4,3 billones. Argentina fue sede de las tres últimas rondas de negociación en Buenos Aires, forzando un ritmo que convirtió a este en el acuerdo más rápido jamás cerrado por el Mercosur.",
    keyFacts: [
      { text: "300M de consumidores", color: "gold" },
      { text: "100% arancel cero industrial", color: "blue" },
      { text: "USD 4,3B PBI combinado", color: "green" },
    ],
    image: "/images/banco/mercosur-efta.jpg",
    imageAlt: "Milei con Santiago Peña — Cumbre Mercosur-EFTA",
    badge: "🇨🇭🇳🇴 Firmado Sep 2025",
  },
];

export const financialSupport = {
  tag: "Respaldo Financiero Sin Precedentes",
  title: "Acuerdo FMI por USD 20.000M + Swap del Tesoro de EE.UU. por USD 20.000M",
  description:
    "Abril de 2025: el FMI aprueba un programa de 48 meses por USD 20.000M bajo el Extended Fund Facility, con un primer desembolso de USD 12.000M — el giro individual más grande en la historia del Fondo. El programa habilita un nuevo régimen cambiario de banda de flotación que sepulta definitivamente el crawling peg. Pero la verdadera bomba llega desde Washington: el Tesoro de EE.UU. activa por primera vez en la historia el Exchange Stabilization Fund (ESF) para un país latinoamericano — un mecanismo reservado hasta entonces para aliados del G7. Swap de divisas por USD 20.000M, compra directa de bonos soberanos argentinos y crédito stand-by del Tesoro. En julio 2025, la primera revisión se aprueba sin objeciones y desbloquea USD 2.000M adicionales. Argentina retorna a los mercados internacionales de capital con spreads en mínimos históricos desde 2018, mientras el riesgo país se desploma por debajo de los 500 puntos por primera vez en casi ocho años. Un respaldo total de USD 40.000M que selló la credibilidad del programa económico ante el mundo.",
  keyFacts: [
    { text: "USD 40.000M en respaldo total", color: "gold" as const },
    { text: "1ª vez ESF para Latinoamérica", color: "blue" as const },
    { text: "Riesgo país < 500 (mín. desde 2018)", color: "green" as const },
  ],
  image: "/images/banco/davos-2024-fmi.jpg",
  imageAlt: "Milei con directivos del FMI en Davos — Respaldo financiero internacional",
};

export const cooperationGrid: CooperationItem[] = [
  {
    icon: "🛡️",
    title: "Shield of the Americas",
    desc: "Coalición hemisférica de 17 naciones contra el narcoterrorismo y la interferencia de potencias extracontinentales. Co-liderada por Argentina y EE.UU., firmada en Miami en marzo 2026. El pacto de seguridad más ambicioso del hemisferio occidental en décadas.",
  },
  {
    icon: "🕊️",
    title: "Board of Peace",
    desc: "Firmado en Davos junto a Trump. 19 países comprometidos con la resolución pacífica de conflictos internacionales. Argentina fue eximida de la cuota de participación de USD 1.000M — un reconocimiento explícito a su liderazgo moral en el foro.",
  },
  {
    icon: "⚡",
    title: "RIGI — USD 25.000M aprobados",
    desc: "12 proyectos aprobados con USD 25.000M en inversiones comprometidas y USD 60.000M+ en pipeline. Vaca Muerta Sur (oleoducto USD 3.000M), GNL (USD 6.878M), litio (Río Tinto USD 2.724M), siderurgia, minería de oro. RIGI extendido hasta julio 2027 — beneficios fiscales y aduaneros por 30 años para inversiones estratégicas.",
  },
  {
    icon: "🤖",
    title: "Hub de Inteligencia Artificial",
    desc: "Reuniones bilaterales con los 7 CEOs más influyentes de Silicon Valley — Apple, Meta, Tesla, OpenAI, Google, Amazon, a16z. Stargate Argentina: primer proyecto de infraestructura IA fuera de EE.UU. con inversión comprometida de hasta USD 25.000M.",
  },
  {
    icon: "⚛️",
    title: "Plan Nuclear + SMR",
    desc: "Reactivación de Nucleoeléctrica Argentina y plan de reactores modulares pequeños (SMR) para alimentar data centers y generar energía limpia. Cooperación directa con EE.UU. en tecnología nuclear de última generación.",
  },
  {
    icon: "🔗",
    title: "Minerales Críticos",
    desc: "Acuerdo bilateral con EE.UU. sobre litio, tierras raras y cadenas de suministro. Reciclaje de baterías, seguridad de inversiones y acceso preferencial al mercado norteamericano para minerales estratégicos de la transición energética.",
  },
  {
    icon: "🌍",
    title: "Seguridad Económica",
    desc: "Alineamiento con EE.UU. en controles de exportación, seguridad de inversiones y protección frente a prácticas no mercantiles de terceros estados. Argentina abandona la ambigüedad y elige su lugar en el tablero geopolítico global.",
  },
];

export const forumAppearances: ForumAppearance[] = [
  {
    image: "/images/banco/davos-2024-discurso.jpg",
    imageAlt: "Milei en el Foro de Davos 2024",
    title: "Foro Económico Mundial — Davos I",
    location: "Davos, Suiza",
    date: "ENE 2024",
    desc: "«Occidente está en peligro.» Primer Special Address ante la élite global. Ovación de pie inédita en la historia del WEF.",
    highlight: true,
  },
  {
    image: "/images/banco/miami-cumbre-trump-lideres.jpg",
    imageAlt: "Milei con Trump y líderes conservadores en CPAC Washington",
    title: "CPAC Washington",
    location: "Washington D.C.",
    date: "FEB 2024",
    desc: "Deconstrucción de los 4 fallos de mercado. Primera foto con Trump — «MAGA: Make Argentina Great Again».",
  },
  {
    image: "/images/banco/israel-netanyahu-bilateral.jpg",
    imageAlt: "Milei con Netanyahu en Jerusalén",
    title: "Bilateral con Netanyahu",
    location: "Jerusalén, Israel",
    date: "FEB 2024",
    desc: "90 minutos con el PM. Acuerdos en ciberseguridad, defensa, drones y agtech. Visita al Muro de los Lamentos.",
  },
  {
    image: "/images/banco/silicon-valley-tim-cook.jpg",
    imageAlt: "Milei con Tim Cook en Apple Park",
    title: "Silicon Valley — 7 CEOs en 36 horas",
    location: "San Francisco, EE.UU.",
    date: "MAY 2024",
    desc: "Altman (OpenAI), Cook (Apple), Pichai (Google), Zuckerberg (Meta), Andreessen (a16z). Semilla de Stargate Argentina.",
  },
  {
    image: "/images/banco/g7-italia-lideres.jpg",
    imageAlt: "Milei en la Cumbre del G7, Italia",
    title: "Cumbre del G7 — Invitado por Meloni",
    location: "Borgo Egnazia, Italia",
    date: "JUN 2024",
    desc: "Primera invitación argentina al G7 en una década. Bilaterales con líderes del grupo de las 7 economías más grandes.",
    highlight: true,
  },
  {
    image: "/images/banco/trump-onu-bilateral.jpg",
    imageAlt: "Bilateral Milei-Trump en la ONU",
    title: "Asamblea General de la ONU",
    location: "Nueva York",
    date: "SEP 2024",
    desc: "Rechazo a la Agenda 2030 ante la 79.ª Asamblea General. «La vida, la libertad y la propiedad» como pilares de la política exterior.",
  },
  {
    image: "/images/banco/meloni-casarosada-pose.jpg",
    imageAlt: "Milei con Meloni en Casa Rosada",
    title: "Meloni visita Buenos Aires",
    location: "Casa Rosada, Buenos Aires",
    date: "NOV 2024",
    desc: "Bilateral de 2 horas. Plan de Acción Italia-Argentina 2025-2030. Italia respalda ingreso de Argentina a la OCDE.",
  },
  {
    image: "/images/banco/trump-casablanca-almuerzo.jpg",
    imageAlt: "Milei con Trump en la Casa Blanca",
    title: "Casa Blanca — Bilateral con Trump",
    location: "Washington D.C.",
    date: "OCT 2025",
    desc: "Primer líder sudamericano recibido por Trump. Almuerzo de trabajo con delegaciones completas en el Salón Oval.",
    highlight: true,
  },
  {
    image: "/images/banco/davos-2026-discurso.jpg",
    imageAlt: "Milei en Davos 2026",
    title: "Davos III + Board of Peace",
    location: "Davos, Suiza",
    date: "ENE 2026",
    desc: "Tercer Special Address consecutivo — récord para un líder latinoamericano. Firma del Board of Peace con Trump: 19 países.",
    highlight: true,
  },
  {
    image: "/images/banco/mercosur-ue-firma.jpg",
    imageAlt: "Firma del acuerdo Mercosur-UE",
    title: "Firma Mercosur-UE",
    location: "Asunción, Paraguay",
    date: "ENE 2026",
    desc: "Después de 25 años, el acuerdo entre bloques más grande del planeta se materializa. 700 millones de personas, 30% del PBI global.",
  },
  {
    image: "/images/banco/miami-cumbre-trump-lideres.jpg",
    imageAlt: "Cumbre Shield of the Americas en Miami",
    title: "Shield of the Americas",
    location: "Miami, EE.UU.",
    date: "MAR 2026",
    desc: "Coalición de 17 naciones co-liderada por Argentina y EE.UU. Pacto de seguridad hemisférica más ambicioso en décadas.",
    highlight: true,
  },
  {
    image: "/images/banco/stargate-altman-milei.jpg",
    imageAlt: "Milei y Sam Altman — Stargate Argentina",
    title: "Stargate Argentina — OpenAI elige Patagonia",
    location: "Buenos Aires",
    date: "OCT 2025",
    desc: "Primer proyecto de infraestructura IA fuera de EE.UU. Hasta 500 MW de cómputo con energía renovable patagónica. Hasta USD 25.000M.",
  },
];

export const forosHeader = {
  sectionTitle: "FOROS INTERNACIONALES",
  sectionIntro: "En dos años, Milei pasó de ser un outsider desconocido a protagonista en los foros más exclusivos del mundo — Davos, G7, ONU, CPAC — y construyó relaciones directas con los líderes más influyentes del planeta.",
} as const;

// ── Section metadata ────────────────────────────────────

export const mundoHero = {
  imgSrc: "/images/banco/miami-cumbre-trump-lideres.jpg",
  imgAlt: "Argentina en el mundo",
  subtitle: "Inserción Internacional",
  titleLine1: "ARGENTINA",
  titleLine2: "EN EL MUNDO",
} as const;

export const acuerdosHeader = {
  sectionTitle: "ACUERDOS COMERCIALES",
  sectionIntro: "En dos años, Argentina firmó tres acuerdos de libre comercio históricos que abren mercados para más de mil millones de consumidores — y reescribió las reglas del comercio hemisférico.",
} as const;

export const cooperacionHeader = {
  sectionTitle: "COOPERACIÓN Y FINANCIAMIENTO",
  sectionIntro: "Argentina aseguró USD 40.000M en respaldo financiero, lideró una coalición de seguridad de 17 naciones, y se posicionó como el destino de inversión en energía e inteligencia artificial del hemisferio sur.",
} as const;
