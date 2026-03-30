// ── Interfaces ──────────────────────────────────────────────

export interface ImpactStat {
  val: string;
  label: string;
}

export interface ReformaQuote {
  text: string;
  cite: string;
}

export interface Reforma {
  num: string;
  icon?: string;
  title: string;
  subtitle: string;
  desc: string;
  antes: string;
  ahora: string;
  impactStats: ImpactStat[];
  impactText: string;
  quote?: ReformaQuote;
  img?: string;
  imgAlt?: string;
}

export interface ReformBlock {
  title: string;
  subtitle: string;
  range: [number, number]; // start inclusive, end exclusive – use with .slice()
}

export interface HeroCounter {
  num: string;
  label: string;
}

// ── Hero ────────────────────────────────────────────────────

export const reformasHero = {
  eyebrow: "La revolución institucional",
  title: "LAS 12 REFORMAS",
  desc: "Prometí transformar la Argentina. No con discursos, sino con hechos. En dos años aprobamos los tres exámenes — fiscal, monetario y cambiario — aprobamos la primera reforma laboral de la democracia, e hicimos más reformas estructurales que en las últimas cuatro décadas juntas. En 2026, cada ministerio presentará 10 paquetes de proyectos legislativos para completar la transformación.",
} as const;

export const heroCounters: HeroCounter[] = [
  { num: "14.500+", label: "Desregulaciones" },
  { num: "12", label: "Reformas estructurales" },
  { num: "2,5", label: "Puntos PIB devueltos" },
  { num: "90", label: "Paquetes reforma 2026" },
];

// ── Reform blocks ───────────────────────────────────────────

export const reformBlocks: ReformBlock[] = [
  {
    title: "BLOQUE I — ESTABILIZACIÓN MACROECONÓMICA",
    subtitle:
      "Los tres exámenes aprobados: fiscal, monetario y cambiario",
    range: [0, 3],
  },
  {
    title: "BLOQUE II — DESREGULACIÓN Y REFORMA DEL ESTADO",
    subtitle:
      "DNU 70/23, Ley Bases, y 14.500 desregulaciones: de la economía más regulada a la más libre",
    range: [3, 7],
  },
  {
    title: "BLOQUE III — REFORMAS LEGISLATIVAS",
    subtitle:
      "Con el Congreso más reformista de la historia: laboral, comercial, fiscal y penal",
    range: [7, 10],
  },
  {
    title: "BLOQUE IV — SEGURIDAD Y JUSTICIA",
    subtitle:
      "Sin orden y sin justicia no hay futuro posible. Nadie puede edificar su futuro si no se respeta la ley.",
    range: [10, 12],
  },
];

// ── Reformas data ───────────────────────────────────────────

export const reformas: Reforma[] = [
  // ── 01 EQUILIBRIO FISCAL ──────────────────────────────────
  {
    num: "01",
    icon: "💰",
    title: "EQUILIBRIO FISCAL",
    subtitle:
      "De décadas de déficit crónico al primer superávit financiero en 16 años",
    desc: "Argentina había logrado solo **8 superávits fiscales en 100 años**. Cuando asumí el 10 de diciembre de 2023, el déficit consolidado era de **15 puntos del PIB** y la maquinita de imprimir billetes funcionaba las 24 horas para financiar la fiesta de la casta. Lo primero que hice fue dar vuelta la ecuación: recorté el **30% del gasto público real en un solo año**, eliminé las transferencias discrecionales a provincias, reduje subsidios energéticos de **USD 14.000M a USD 5.000M anuales** y terminé con la obra pública como herramienta de corrupción — cancelando más de **3.000 obras ficticias** que solo existían en papeles. En 2024 logramos el **primer superávit financiero en 16 años**. En 2025 lo repetimos. Y aprobamos el **primer presupuesto sin déficit ni default en más de 100 años** — la Ley de Presupuesto 2026, sancionada en diciembre de 2025, incluye el principio de **equilibrio fiscal como ancla permanente**. Hoy somos uno de los **cinco países del mundo** que solo gastan lo que recaudan y ni un peso más.",
    antes: "Déficit consolidado de **15 puntos del PIB** — equivalente a **USD 90.000M anuales** de gasto por encima de los ingresos. Solo **8 superávits fiscales en un siglo** de historia. **Emisión monetaria descontrolada**: el BCRA emitió **$17,6 billones** en 2023 solo para financiar al Tesoro. Transferencias discrecionales a gobernadores amigos. Subsidios energéticos de **USD 14.000M anuales** que beneficiaban a los ricos de la Ciudad de Buenos Aires. Obra pública como herramienta de saqueo sistemático — más de **3.000 obras ficticias** sin avance real.",
    ahora: "Superávit primario de **1,8% del PIB en 2024** y **1,4% en 2025**. **Dos años consecutivos de superávit financiero** — el primero desde 2008. **Cero emisión** para financiar déficit. Presupuesto 2026 equilibrado por ley. Baja impositiva de **2,5 puntos del PIB devueltos** a los argentinos de bien: eliminación del Impuesto PAIS, reducción de retenciones al campo, eliminación del impuesto a los débitos y créditos bancarios. A diferencia de otros gobiernos que lograron superávit subiendo impuestos, nosotros lo hicimos **bajándolos**.",
    impactStats: [
      { val: "15 pts", label: "de ajuste fiscal" },
      { val: "30%", label: "menos gasto real" },
      { val: "100+", label: "años sin presup. equilib." },
      { val: "$5.000M", label: "ahorro en subsidios" },
    ],
    impactText: "El **ajuste fiscal más grande de la historia argentina** — bajando impuestos, no subiéndolos. Subsidios energéticos reducidos de **USD 14.000M a USD 5.000M**. Más de **3.000 obras ficticias canceladas**. Presupuesto 2026 con equilibrio fiscal garantizado por ley.",
    quote: {
      text: "No hay plata. Y cuando no hay plata, no se puede gastar lo que no se tiene. Es así de simple. El equilibrio fiscal no es una opción — es la ley.",
      cite: "Milei, cadena nacional, 10 de diciembre de 2023",
    },
    img: "/images/banco/presupuesto-congreso.jpg",
    imgAlt: "Milei presenta el presupuesto equilibrado en el Congreso",
  },

  // ── 02 DERROTA DE LA INFLACIÓN ────────────────────────────
  {
    num: "02",
    icon: "📉",
    title: "DERROTA DE LA INFLACIÓN",
    subtitle:
      "De 211% anual — la más alta del mundo tras Venezuela — al nivel más bajo en ocho años",
    desc: "Heredé una inflación del **211,4% anual** que anualizada viajaba a la velocidad de **17.000%**. En diciembre de 2023, el mes que asumí, la inflación mensual tocó el **25,5%** tras la devaluación necesaria para sincerar los precios que el gobierno anterior había reprimido — los precios de tarifas de gas y luz estaban **subsidiados al 90%**, creando un agujero fiscal insostenible. Los economistas del establishment decían que era imposible bajarla sin hiperinflación previa. Eliminé la causa: dejé de imprimir para financiar al Estado. El ancla fue fiscal, no cambiaria. No hubo magia ni trucos: simplemente dejamos de robarle a los argentinos a través de la inflación. En 2025 cerramos con **~30% anual**, la cifra **más baja desde 2017**. Los precios mayoristas ya están casi en un dígito. La inflación tiene fecha de defunción.",
    antes: "Inflación del **211,4% anual en 2023** — anualizada al **17.000%**. Pico mensual del **25,5%** en diciembre 2023. Destruimos **cinco signos monetarios** en nuestra historia — les sacamos **13 ceros** a la moneda. Los salarios se licuaban en días: un trabajador perdía **más del 20% de su poder adquisitivo por mes**. Argentina era el **segundo país más inflacionario del mundo**, solo detrás de Venezuela. Precios de tarifas reprimidos al **90% de subsidio**, generando desabastecimiento y un déficit energético de **USD 14.000M**.",
    ahora: "**~30% anual en 2025** — la más baja en **ocho años**. Inflación mensual estabilizada entre **1,5% y 2,2%**. Tendencia descendente sostenida durante **24 meses consecutivos**. Precios mayoristas casi en un dígito. El peso se apreció **más de 40% en términos reales** sin precedentes. Proyección 2026: por debajo del **20%**. Meta de **un dígito para 2027**.",
    impactStats: [
      { val: "–85%", label: "reducción inflación" },
      { val: "211→30", label: "% anual" },
      { val: "8", label: "años de mínimo" },
      { val: "24", label: "meses de baja consecutiva" },
    ],
    impactText: "Poder adquisitivo del salario real en recuperación sostenida — los salarios crecen **por encima de la inflación** desde septiembre 2024. Pobreza del **57% al ~30%** — la mayor caída en la historia reciente. **Boom de créditos hipotecarios**: más de **45.000 hipotecas UVA** otorgadas en 2025.",
    quote: {
      text: "La inflación es el impuesto más perverso porque lo pagan los que menos tienen. La terminamos sin controles, sin congelamientos — a puro equilibrio fiscal.",
      cite: "Milei, Congreso 2026",
    },
    img: "/images/reformas/02-inflacion.jpg",
    imgAlt: "Desinflación argentina — precios estabilizándose",
  },

  // ── 03 LIBERACIÓN DEL CEPO CAMBIARIO ──────────────────────
  {
    num: "03",
    icon: "🔓",
    title: "LIBERACIÓN DEL CEPO CAMBIARIO",
    subtitle:
      "Después de más de 6 años de restricciones, los argentinos vuelven a ser libres de comprar y vender dólares",
    desc: "El cepo cambiario fue la herramienta más perversa del kirchnerismo: un control de capitales que duró **más de 6 años**, impuesto por Macri en septiembre de 2019 y perpetuado y agravado por Alberto Fernández hasta dejar **más de 15 tipos de cambio simultáneos** — dólar oficial, blue, MEP, CCL, tarjeta, ahorro, cripto, soja, y más. En abril de 2025, **liberé completamente el mercado cambiario** para las personas físicas, respaldado por un acuerdo con el FMI de **USD 20.000M** y apoyos adicionales del Banco Mundial (**USD 12.000M**) y organismos multilaterales. La brecha desapareció. El peso flotó libremente y se apreció.",
    antes: "Restricciones cambiarias ininterrumpidas **desde septiembre de 2019** — más de **6 años de cepo**. Brecha cambiaria superior al **100%** entre el dólar oficial y el paralelo. **Más de 15 tipos de cambio** simultáneos distorsionando toda la economía. Riesgo país en **2.400 puntos** — Argentina excluida de los mercados internacionales de deuda. Reservas netas del BCRA en **territorio negativo: –USD 11.500M**.",
    ahora: "**Mercado cambiario libre** con banda de flotación administrada (1.000-1.400 $/USD). **Brecha eliminada: 0%**. Acuerdo con el FMI por **USD 20.000M** a 48 meses, más **USD 12.000M del Banco Mundial**. Riesgo país desplomado de 2.400 a **~560 puntos**. Reservas netas en recuperación sostenida. El peso flotó libre y **se apreció contra el dólar**.",
    impactStats: [
      { val: "0%", label: "brecha cambiaria" },
      { val: "$20.000M", label: "acuerdo FMI" },
      { val: "~560", label: "riesgo país" },
      { val: "$12.000M", label: "Banco Mundial" },
    ],
    impactText: "Riesgo país de **2.400 a ~560 puntos** — caída del **77%**. Reservas netas de **–USD 11.500M a territorio positivo**. **Argentina vuelve a los mercados internacionales** de deuda tras años de exclusión. Desembolso inmediato de **USD 12.000M del FMI** en abril 2025.",
    quote: {
      text: "Hoy aprobamos el tercer examen. Nos deshicimos del cepo cambiario, que era una aberración que nunca debería haber existido. Los argentinos vuelven a ser libres de hacer con su dinero lo que quieran.",
      cite: "— Cadena Nacional, fin del cepo, abril 2025",
    },
    img: "/images/reformas/03-cepo.jpg",
    imgAlt: "Mercado cambiario libre — fin del cepo",
  },

  // ── 04 DNU 70/23 ─────────────────────────────────────────
  {
    num: "04",
    icon: "📜",
    title: "DNU 70/23 — LA PRIMERA OLA",
    subtitle:
      "A diez días de asumir: 366 artículos que desmantelaron décadas de regulaciones asfixiantes",
    desc: "A diez días de asumir, el **20 de diciembre de 2023**, firmé el **DNU 70/23** — el **Decreto de Necesidad y Urgencia de Desregulación de la Economía Argentina** — con **366 artículos** que modificaron o derogaron más de **40 leyes**. Derogué la **Ley de Alquileres 27.551** (que había destruido el 40% de la oferta), la **Ley de Abastecimiento 20.680** (que permitía al Estado fijar precios y embargar mercadería), la **Ley de Góndolas 27.545**, y desregulé sectores como aviación comercial, telecomunicaciones, seguros y salud. En un solo decreto, desregulamos más que cualquier gobierno en **toda la historia argentina**. El decreto fue ratificado por la Cámara de Diputados y resistió todos los embates judiciales.",
    antes: "Más de **40 leyes y regulaciones** que impedían el comercio, el trabajo y la producción. **Ley de Alquileres 27.551** que destruyó el **40% de la oferta** de inmuebles en alquiler en Buenos Aires. **Ley de Abastecimiento** de 1974 que permitía al Estado intervenir cualquier empresa. Mercado aerocomercial con **rutas monopólicas** y precios inflados. Telecomunicaciones con tarifas reguladas que impedían la inversión. **Starlink prohibido** de operar. Precios del sector salud regulados, generando desabastecimiento de medicamentos.",
    ahora: "**366 artículos de desregulación** en un solo decreto, ratificado por Diputados. Mercado de alquileres con **+170% de oferta** y precios reales **–30%**. Aviación comercial liberada: **57 nuevas rutas** y récord de **50,6 millones de pasajeros** en 2025. **Starlink** operativo en todo el territorio, conectando **700.000 argentinos rurales**. Telecomunicaciones con competencia real. Farmacias con libre competencia de precios.",
    impactStats: [
      { val: "366", label: "artículos" },
      { val: "+170%", label: "oferta alquileres" },
      { val: "40+", label: "leyes modificadas" },
      { val: "700K", label: "conectados Starlink" },
    ],
    impactText: "Precios de alquiler **–30% en términos reales** con la oferta más que triplicada. Récord de **50,6 millones de pasajeros aéreos** en 2025 — **57 nuevas rutas** habilitadas. **700.000 argentinos rurales** conectados a internet vía Starlink donde antes no había cobertura.",
    quote: {
      text: "Firmé el DNU más grande de la historia argentina: 366 artículos que le devuelven la libertad a los argentinos. Cada artículo es una cadena que se rompe.",
      cite: "Milei, cadena nacional, 20 de diciembre de 2023",
    },
    img: "/images/banco/gabinete-motosierra.jpg",
    imgAlt: "El DNU 70/23 — la primera ola desregulatoria",
  },

  // ── 05 LEY BASES Y EL RIGI ───────────────────────────────
  {
    num: "05",
    icon: "🏗️",
    title: "LEY BASES Y EL RIGI",
    subtitle:
      "Con solo 7 senadores de 72, aprobamos la ley más importante en décadas — y creamos el RIGI",
    desc: "Con solo **7 senadores propios de 72**, logramos aprobar la **Ley Bases 27.742** — sancionada el **28 de junio de 2024** con el voto de desempate de la Vicepresidenta Victoria Villarruel. La ley declaró la **emergencia pública** en materia administrativa, económica, financiera y energética, y creó el **RIGI** (Régimen de Incentivo para Grandes Inversiones), que garantiza estabilidad fiscal, aduanera y cambiaria por **30 años** para inversiones superiores a **USD 200 millones**. El RIGI incluye beneficios tributarios como amortización acelerada, reducción del impuesto a las ganancias al **25%**, y libre disponibilidad de divisas a partir del **tercer año**. También habilitó las privatizaciones de empresas públicas deficitarias.",
    antes: "Sin marco legal para grandes inversiones. **Inestabilidad regulatoria crónica**: las reglas cambiaban con cada gobierno. Sin privatizaciones posibles — empresas públicas perdiendo **miles de millones** por año. Inversores huyendo del país: la inversión extranjera directa era apenas el **1,4% del PIB** — la mitad del promedio regional. **Aerolíneas Argentinas** costaba **USD 800M al año** al contribuyente.",
    ahora: "**Ley Bases 27.742 sancionada** con desempate de la Vicepresidenta. **RIGI operativo**: estabilidad fiscal, aduanera y cambiaria por **30 años**. Más de **USD 25.000M en proyectos aprobados** bajo el régimen, incluyendo Stargate, Argentina LNG y proyectos mineros. Impuesto a las ganancias al **25%** para proyectos RIGI. Privatizaciones habilitadas. Aerolíneas autofinanciada por **primera vez en 20 años**.",
    impactStats: [
      { val: "238", label: "artículos" },
      { val: "$25.000M", label: "inversiones RIGI" },
      { val: "30", label: "años estabilidad" },
      { val: "25%", label: "ganancias RIGI" },
    ],
    impactText: "La primera ley del gobierno — aprobada contra todo pronóstico con **7 senadores propios** y desempate de la Vicepresidenta. El **RIGI como imán de inversiones**: más de **USD 25.000M aprobados** en proyectos de energía, minería y tecnología. Stargate, Argentina LNG y proyectos de litio **todos bajo régimen RIGI**.",
    quote: {
      text: "La Ley Bases no es una ley más. Es el acta de refundación económica de la Argentina. Y el RIGI es la garantía de que el capital que venga se quede.",
      cite: "Milei, Luna Park, mayo 2024",
    },
    img: "/images/banco/apertura-sesiones-2024.jpg",
    imgAlt: "Congreso de la Nación — votación de la Ley Bases",
  },

  // ── 06 DESREGULACIÓN MASIVA ───────────────────────────────
  {
    num: "06",
    icon: "✂️",
    title: "DESREGULACIÓN MASIVA",
    subtitle:
      "14.500 desregulaciones: detrás de cada regulación había un privilegio — o mejor dicho, un curro",
    desc: "Sturzenegger, desde el Ministerio de Desregulación y Transformación del Estado creado por **Ley Bases 27.742**, llevó adelante una tarea titánica y admirable: más de **14.500 desregulaciones** ejecutadas a través de **494 normas específicas** que eliminaron **14.392 artículos regulatorios** en un sinfín de áreas que dan cuenta del grado de cooptación corporativa que tenía el Estado. Porque detrás de cada regulación había un privilegio — o mejor dicho, un curro, un tongo. Estas desregulaciones nos permitieron marcar **récords en el mercado aerocomercial** de pasajeros (50,6M en 2025), le permitieron a los productores argentinos acceder a mejor maquinaria productiva eliminando aranceles del **35% sobre bienes de capital**, y normalizaron y potenciaron el mercado de los alquileres. La zona más regulada del mundo, Europa, está estancada, no crece. Un eje central de nuestra política es la desregulación, porque en la medida que desregulamos **liberamos rendimientos crecientes**.",
    antes: "Miles de normas acumuladas durante **más de 80 años** por capas geológicas de burocracia peronista. Cada regulación protegía un privilegio de algún sector concentrado: **sindicatos, monopolios, importadores amigos**. Licencias, permisos, habilitaciones discrecionales en cada actividad económica. Argentina era **la economía más regulada de toda la región** y una de las más reguladas del mundo según el Banco Mundial. Costos inflados artificialmente — abrir un negocio requería **más de 14 trámites** y hasta **6 meses de espera**. Competencia bloqueada en sector tras sector por regulaciones diseñadas para proteger a los de adentro.",
    ahora: "**14.500+ desregulaciones** ejecutadas mediante **494 normas** que eliminaron **14.392 artículos regulatorios**. Mercados completamente abiertos. **Competencia real por primera vez en décadas**. Aranceles del **35% eliminados** sobre bienes de capital. Trámites simplificados radicalmente: habilitaciones que tardaban **meses ahora toman días**. La política de exterminar regulaciones libera **rendimientos crecientes**, que son las bases del crecimiento económico sostenido.",
    impactStats: [
      { val: "14.500+", label: "desregulaciones" },
      { val: "50,6M", label: "pasajeros aéreos" },
      { val: "57", label: "nuevas rutas" },
      { val: "494", label: "normas simplificadas" },
    ],
    impactText: "**Récord de 50,6M pasajeros aéreos** en 2025 con **57 nuevas rutas**. Alquileres **–30% real** con **+170% oferta**. Aranceles del **35% eliminados** sobre bienes de capital. Una política admirada en el mundo: **494 normas** eliminaron **14.392 artículos** de burocracia asfixiante.",
    quote: {
      text: "Detrás de cada regulación hay un curro. Detrás de cada trámite hay un intermediario. Federico Sturzenegger encontró 67.000 regulaciones — y las está eliminando una por una.",
      cite: "Milei, entrevista Forbes, diciembre 2024",
    },
    img: "/images/reformas/06-desregulacion.jpg",
    imgAlt: "Desregulación masiva — eliminación de trámites y regulaciones",
  },

  // ── 07 REFORMA DEL ESTADO ────────────────────────────────
  {
    num: "07",
    icon: "🏛️",
    title: "REFORMA DEL ESTADO",
    subtitle:
      "De 18 ministerios a 8. De 340.000 empleados a 277.000. De déficit a superávit en empresas públicas.",
    desc: "El Estado argentino era un monstruo que se devoraba a sí mismo. **18 ministerios**, **84 secretarías** y más de **340.000 empleados públicos nacionales** — muchos contratados masivamente antes de las elecciones de 2023, con **más de 20.000 nombramientos** en los últimos 90 días del gobierno de Alberto Fernández. Reduje los ministerios a **8**, las secretarías a **51**, eliminé **63.234 cargos** innecesarios. Disolvimos organismos que eran pura ideología y cero gestión: **TELAM** (con más de **800 empleados** para una agencia de noticias que nadie leía), **INADI** (que hacía militancia K con presupuesto público), y decenas de entes similares. Las **32 empresas públicas** que heredé con déficit conjunto masivo hoy operan con **superávit de $109.200M**.",
    antes: "**18 ministerios** y **84 secretarías**. **~340.000 empleados públicos nacionales**, muchos contratados en masa antes de la transición: **20.000+ nombramientos** en los últimos 90 días del gobierno anterior. **32 empresas públicas** con déficit conjunto de **miles de millones de dólares** — Aerolíneas Argentinas sola costaba **USD 800M al año**. TELAM con **800+ empleados**. INADI haciendo militancia con presupuesto público. Gasto en personal representaba más del **12% del PIB**.",
    ahora: "**8 ministerios**, **51 secretarías**. **277.000 empleados** — **63.234 cargos eliminados (–18%)**. TELAM, INADI y decenas de organismos disueltos — **ahorro anual de USD 500M+**. Empresas públicas con **superávit de $109.200M** — de perder miles de millones a ganar dinero. **Aerolíneas Argentinas autofinanciada** por primera vez en 20 años, sin un solo peso del contribuyente.",
    impactStats: [
      { val: "–56%", label: "menos ministerios" },
      { val: "63.234", label: "cargos eliminados" },
      { val: "–18%", label: "planta estatal" },
      { val: "$109.200M", label: "superávit empresas" },
    ],
    impactText: "Empresas públicas de déficit masivo a **superávit histórico de $109.200M**. Aerolíneas Argentinas autofinanciada **por primera vez en 20 años**. Ahorro anual de más de **USD 500M** en organismos disueltos. Estado más chico, más eficiente y más barato: de **18 a 8 ministerios**, de **84 a 51 secretarías**.",
    img: "/images/banco/pacto-mayo-tucuman.jpg",
    imgAlt: "Reforma del Estado — reducción de ministerios",
  },

  // ── 08 REFORMA LABORAL ───────────────────────────────────
  {
    num: "08",
    icon: "👷",
    title: "REFORMA LABORAL",
    subtitle:
      "La primera reforma laboral en más de 50 años. 218 artículos que modifican 28 leyes y derogan 11.",
    desc: "Los campeones de los derechos de los trabajadores dejaron sin ningún tipo de derechos a **la mitad de los trabajadores**. Una ley de **más de 50 años** — la Ley de Contrato de Trabajo 20.744 de 1974 — había dejado a la mitad de los trabajadores argentinos en la informalidad: **más de 5 millones de personas** sin aportes, sin obra social, sin jubilación, sin indemnización. El costo de contratar formalmente era tan alto que las PyMEs directamente no contrataban — o lo hacían en negro. La **industria del juicio laboral** generaba más de **250.000 causas por año**, con abogados que se quedaban con hasta el 50% de las indemnizaciones. Sancionamos la reforma en sesión extraordinaria de febrero de 2026 junto con la reforma comercial y la penal juvenil.",
    antes: "**Ley de Contrato de Trabajo 20.744** de 1974 — **más de 50 años sin reforma sustancial**. Más de **5 millones de trabajadores** en la informalidad total — **el 46% de la fuerza laboral**. Industria del juicio laboral con **250.000+ causas por año**. Indemnizaciones calculadas sobre todos los conceptos salariales, incluyendo bonos y horas extra. Período de prueba de solo **3 meses**. PyMEs que no contrataban por miedo al juicio.",
    ahora: "**Fondo de Asistencia Laboral (FAL)** como alternativa moderna a las indemnizaciones — el trabajador elige. Período de prueba de **6 meses** (hasta **1 año para PyMEs**). Servicios esenciales con **75% de funcionamiento** garantizado durante huelgas. **Eliminación de la ultraactividad sindical**: los convenios colectivos vencidos ya no rigen indefinidamente. Base de cálculo indemnizatorio **limitada al salario básico**. Blanqueo laboral con **condonación del 70%** de deuda por aportes.",
    impactStats: [
      { val: "218", label: "artículos" },
      { val: "28", label: "leyes modificadas" },
      { val: "11", label: "leyes derogadas" },
      { val: "5M+", label: "trabajadores informales" },
    ],
    impactText: "**La primera reforma laboral en medio siglo**. Señal fuerte a los mercados internacionales: Argentina moderniza su marco laboral para atraer inversión. Fin de la **industria del juicio laboral** (250.000+ causas/año) y de la ultraactividad sindical. Blanqueo laboral con condonación del **70% de deuda** para formalizar a **millones de trabajadores**.",
    quote: {
      text: "No hay nada mejor para un trabajador que una empresa, y no hay nada mejor para una empresa que un trabajador. Los que se oponen a esta reforma defienden sus privilegios, no los derechos de los trabajadores.",
      cite: "— Sobre la reforma laboral, febrero 2026",
    },
    img: "/images/reformas/08-laboral.jpg",
    imgAlt: "Reforma laboral — empleo formal y trabajo",
  },

  // ── 09 APERTURA COMERCIAL ────────────────────────────────
  {
    num: "09",
    icon: "🌍",
    title: "APERTURA COMERCIAL",
    subtitle:
      "138 medidas de apertura. Mercosur-UE tras 26 años. Primer acuerdo bilateral con EE.UU. en la historia.",
    desc: "Argentina era una de las economías más cerradas del mundo — puesto **148 de 160** en el índice de libertad comercial. El **sistema SIRA** de permisos previos obligatorios era un mecanismo de extorsión burocrática donde importar un insumo podía tardar **meses y requería coimas**. El **Impuesto PAIS** (creado por Alberto Fernández en diciembre de 2019) encarecía toda importación hasta un **17,5%** adicional. Implementamos **138 medidas de apertura**, eliminamos el SIRA, eliminamos el Impuesto PAIS en diciembre de 2024, redujimos aranceles en **1.675 productos**, y firmamos los acuerdos comerciales más importantes de la historia argentina: el **Mercosur-UE** (tras 26 años de negociación), el primer **TLC bilateral con Estados Unidos**, y el acuerdo con **EFTA** (Suiza, Noruega, Islandia y Liechtenstein).",
    antes: "Puesto **148 de 160** en libertad comercial. **Sistema SIRA** de permisos previos obligatorios para importar — mecanismo de extorsión donde un trámite tardaba **meses**. **Impuesto PAIS del 17,5%** sobre importaciones y operaciones en dólares. Aranceles del **35%** en múltiples productos. Argentina aislada del mundo: sin un solo TLC bilateral en **200 años** de historia. Mercosur-UE estancado **26 años**.",
    ahora: "**SIRA eliminado** — reemplazado por sistema automático. **Impuesto PAIS eliminado** en diciembre 2024. **138 medidas de apertura** implementadas. Aranceles reducidos en **1.675 productos**. Acuerdo **Mercosur-UE ratificado** por el Senado — acceso preferencial a un mercado de **780 millones de personas**. Primer **TLC bilateral con EE.UU.** en la historia. Acuerdo con **EFTA** firmado. Superávit comercial récord de **USD 19.000M**.",
    impactStats: [
      { val: "$19.000M", label: "superávit comercial" },
      { val: "1.675", label: "productos sin arancel" },
      { val: "26", label: "años de negociación UE" },
      { val: "780M", label: "personas mercado UE" },
    ],
    impactText: "**Récord de superávit comercial: USD 19.000M**. Exportaciones a la UE proyectadas a crecer **76% en 5 años** — acceso preferencial a **780 millones de personas**. Primer **TLC con EE.UU.** en 200 años de historia. Argentina volvió al mundo después de **dos décadas de aislamiento** kirchnerista.",
    quote: {
      text: "Hace 21 años Chávez gritó «ALCA, al carajo» y el kirchnerismo festejó. Nosotros firmamos con Estados Unidos, con la Unión Europea, y vamos a seguir firmando con el mundo entero.",
      cite: "— Tras la ratificación del acuerdo Mercosur-UE, febrero 2026",
    },
    img: "/images/banco/mercosur-ue-escenario.jpg",
    imgAlt: "Firma del acuerdo Mercosur-UE — apertura comercial",
  },

  // ── 10 LEY DE INOCENCIA FISCAL ───────────────────────────
  {
    num: "10",
    icon: "⚖️",
    title: "LEY DE INOCENCIA FISCAL",
    subtitle:
      "Restaurar la presunción de inocencia en materia tributaria — un principio constitucional básico que la política había vulnerado.",
    desc: "En materia tributaria éramos **todos culpables**. La política había vulnerado una cuestión constitucional básica: **la presunción de inocencia**. El Estado podía perseguir, embargar y destruir a cualquier contribuyente **sin necesidad de probar nada**. La **AFIP** (hoy ARCA) tenía poderes discrecionales para clausurar comercios, embargar cuentas bancarias y arruinar la vida de cualquier argentino con una simple resolución administrativa — sin intervención judicial. Más de **2 millones de contribuyentes** habían sido objeto de alguna forma de persecución tributaria. La ley fue aprobada en el Senado con **43 votos a favor**, restaurando un principio constitucional que el Estado había violado durante décadas.",
    antes: "**Presunción de culpabilidad tributaria** de facto. AFIP con poderes para **clausurar comercios sin orden judicial**. El Estado podía embargar cuentas bancarias **sin necesidad de probar la existencia de una deuda**. Más de **2 millones de contribuyentes perseguidos**. **Inspecciones arbitrarias** usadas como herramienta de presión política. PyMEs destruidas por embargos preventivos. El sistema tributario argentino era **el más hostil de la región**: más de **100 impuestos diferentes** entre nación, provincias y municipios.",
    ahora: "**Presunción de inocencia restaurada** en materia tributaria — aprobada con **43 votos** en el Senado. El Estado debe probar antes de perseguir, no al revés. **Protección contra embargos arbitrarios**: se requiere intervención judicial previa. **AFIP reemplazada por ARCA** (Agencia de Recaudación y Control Aduanero) con estructura **reducida en un 34%**. Moratoria fiscal que permitió regularizar **USD 32.000M en activos**.",
    impactStats: [
      { val: "43", label: "votos a favor" },
      { val: "$32.000M", label: "activos regularizados" },
      { val: "–34%", label: "estructura ARCA" },
      { val: "2M+", label: "contribuyentes protegidos" },
    ],
    impactText: "Moratoria fiscal que regularizó **USD 32.000M en activos** — la más exitosa de la historia argentina. AFIP reducida y transformada en **ARCA con 34% menos de estructura**. Clave para la **formalización del empleo y la economía**: más de **2 millones de contribuyentes** protegidos de la persecución tributaria arbitraria.",
    quote: {
      text: "El Estado no puede presumir culpable al que trabaja y produce. La inocencia fiscal es un derecho constitucional — no una concesión del burócrata de turno.",
      cite: "Milei, Congreso 2025",
    },
    img: "/images/reformas/10-fiscal.jpg",
    imgAlt: "Reforma fiscal — inocencia tributaria y ARCA",
  },

  // ── 11 SEGURIDAD Y JUSTICIA ──────────────────────────────
  {
    num: "11",
    icon: "🛡️",
    title: "SEGURIDAD Y JUSTICIA",
    subtitle:
      "De calles tomadas y Rosario narco al país más seguro de Sudamérica por segundo año consecutivo",
    desc: "Cuando asumí, las calles eran tierra de nadie. Más de **9.000 piquetes al año** — un promedio de **25 por día** — bloqueaban avenidas, rutas y puentes con total impunidad. Rosario era la capital narco del país con **261 homicidios en 2022** y bandas como Los Monos controlando barrios enteros. El **protocolo antipiquetes de Patricia Bullrich** — la Resolución 943/2023, firmada el mismo día de la asunción — terminó de raíz con los cortes. No se negoció con piqueteros: se aplicó la ley. En Rosario, el gobierno nacional desplegó **fuerzas federales**, intervino la policía provincial y lanzó operativos conjuntos que desarticularon las principales bandas narco. La **Ley Antimafia** fue aprobada en el Senado **38 a 0**, sin un solo voto en contra.",
    antes: "**9.000+ piquetes al año** — 25 por día — con impunidad total; las fuerzas de seguridad tenían **orden de no intervenir**. Rosario: **261 homicidios en 2022**, la tasa más alta del país. Bandas narco como **Los Monos** controlando barrios enteros. **Puerta giratoria judicial** que devolvía delincuentes a la calle en horas. Más de **600 detenidos por narcotráfico** que tuvieron que ser recapturados. Tasa de homicidios de **5,2 cada 100.000 habitantes**.",
    ahora: "**Cero piquetes** desde el día uno — Resolución 943/2023. Homicidios **–17% a nivel nacional** y **–65% en Rosario** (de 261 a 91). Robos **–20%** — **mínimo histórico en décadas**. Ley Antimafia aprobada **38 a 0**. Más de **600 detenidos narco** en operativos federales. Incautación de cocaína **+500%**. Tasa de homicidios más baja de **toda Sudamérica** por segundo año consecutivo.",
    impactStats: [
      { val: "–65%", label: "homicidios Rosario" },
      { val: "–20%", label: "robos nacional" },
      { val: "0", label: "piquetes" },
      { val: "+500%", label: "cocaína incautada" },
    ],
    impactText: "De **261 a 91 homicidios en Rosario** — caída del **65%**. Incautación de cocaína **+500%** respecto al gobierno anterior. De **9.000 piquetes al año a cero** desde el primer día. Ley Antimafia aprobada **38 a 0**. Argentina: **el país más seguro de toda Sudamérica** por segundo año consecutivo.",
    img: "/images/reformas/11-seguridad.jpg",
    imgAlt: "Seguridad y justicia — fuerzas de seguridad",
  },

  // ── 12 REFORMA PENAL JUVENIL ─────────────────────────────
  {
    num: "12",
    icon: "📋",
    title: "REFORMA PENAL JUVENIL",
    subtitle:
      "Un régimen obsoleto de 45 años de antigüedad, reformado: el que las hace, las paga",
    desc: "El Régimen Penal Juvenil vigente — la **Ley 22.278** — tenía **45 años de antigüedad**: una norma obsoleta promulgada durante la **dictadura militar en 1980**. Menores de edad eran utilizados por organizaciones narco como **soldados descartables**, porque sabían que no iban a tener consecuencias penales: un menor de 16 años podía cometer un homicidio y volver a su casa el mismo día. En Rosario, el **30% de los homicidios** involucraban menores como ejecutores. La reforma fue sancionada en la **sesión extraordinaria de febrero de 2026** — la misma noche en que se aprobaron la reforma laboral y la comercial, en lo que fue la sesión legislativa más reformista de la historia argentina.",
    antes: "**Ley 22.278 de 1980** — promulgada durante la **dictadura militar**. **45 años sin una sola reforma**. Menores de **16 años absolutamente inimputables** sin importar el delito cometido — incluyendo homicidio, violación y narcotráfico. Organizaciones narco reclutando menores como **sicarios descartables**. En Rosario, el **30% de los homicidios** involucraban menores. **Argentina incumplía** la Convención Internacional de los Derechos del Niño por tener un régimen de la dictadura.",
    ahora: "Imputabilidad desde los **14 años para delitos graves** (homicidio, violación, secuestro, narcotráfico). **Nuevo régimen penal juvenil completo** con medidas socioeducativas graduales y proporcionales. Penas diferenciadas por edad: **14-15 años** con medidas socioeducativas obligatorias; **16-17 años** con penas reducidas respecto a adultos. **Argentina cumple** por primera vez con los estándares internacionales de justicia juvenil.",
    impactStats: [
      { val: "45", label: "años sin reforma" },
      { val: "14", label: "edad imputabilidad" },
      { val: "Feb 26", label: "sesión histórica" },
      { val: "30%", label: "homicidios con menores" },
    ],
    impactText: "**Tres reformas históricas en una sola sesión** del Congreso en febrero de 2026: laboral, comercial y penal juvenil — la **sesión más reformista de la historia**. El viejo régimen de la dictadura (Ley 22.278) reemplazado por uno moderno. Fin del uso de menores como **sicarios descartables** por el narco: **el que las hace, las paga**.",
    quote: {
      text: "Reformamos la Ley Penal Juvenil, modificando un régimen penal obsoleto que tenía ya 45 años de antigüedad. Porque, como lo dijimos antes de ser gobierno, el que las hace, las paga.",
      cite: "— Apertura de sesiones ordinarias, 1 de marzo de 2026",
    },
    img: "/images/banco/apertura-congreso-2025.jpg",
    imgAlt: "Sesión del Congreso — reforma penal juvenil",
  },
];
