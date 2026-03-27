import type { ReactNode } from "react";

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
  desc: ReactNode;
  antes: ReactNode;
  ahora: ReactNode;
  impactStats: ImpactStat[];
  impactText: ReactNode;
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
    desc: (
      <>
        Argentina había logrado solo{" "}
        <strong>8 superávits fiscales en 100 años</strong>. Cuando asumí el 10
        de diciembre de 2023, el déficit consolidado era de{" "}
        <strong>15 puntos del PIB</strong> y la maquinita de imprimir billetes
        funcionaba las 24 horas para financiar la fiesta de la casta. Lo primero
        que hice fue dar vuelta la ecuación: recorté el{" "}
        <strong>30% del gasto público real en un solo año</strong>, eliminé las
        transferencias discrecionales a provincias, reduje subsidios energéticos
        de <strong>USD 14.000M a USD 5.000M anuales</strong> y terminé con la
        obra pública como herramienta de corrupción — cancelando más de{" "}
        <strong>3.000 obras ficticias</strong> que solo existían en papeles. En
        2024 logramos el{" "}
        <strong>primer superávit financiero en 16 años</strong>. En 2025 lo
        repetimos. Y aprobamos el{" "}
        <strong>
          primer presupuesto sin déficit ni default en más de 100 años
        </strong>{" "}
        — la Ley de Presupuesto 2026, sancionada en diciembre de 2025, incluye
        el principio de <strong>equilibrio fiscal como ancla permanente</strong>.
        Hoy somos uno de los <strong>cinco países del mundo</strong> que solo
        gastan lo que recaudan y ni un peso más.
      </>
    ),
    antes: (
      <>
        Déficit consolidado de <strong>15 puntos del PIB</strong> — equivalente a{" "}
        <strong>USD 90.000M anuales</strong> de gasto por encima de los ingresos.
        Solo <strong>8 superávits fiscales en un siglo</strong> de historia.{" "}
        <strong>Emisión monetaria descontrolada</strong>: el BCRA emitió{" "}
        <strong>$17,6 billones</strong> en 2023 solo para financiar al Tesoro.
        Transferencias discrecionales a gobernadores amigos. Subsidios
        energéticos de <strong>USD 14.000M anuales</strong> que beneficiaban a
        los ricos de la Ciudad de Buenos Aires. Obra pública como herramienta de
        saqueo sistemático — más de <strong>3.000 obras ficticias</strong> sin
        avance real.
      </>
    ),
    ahora: (
      <>
        Superávit primario de <strong>1,8% del PIB en 2024</strong> y{" "}
        <strong>1,4% en 2025</strong>.{" "}
        <strong>Dos años consecutivos de superávit financiero</strong> — el
        primero desde 2008. <strong>Cero emisión</strong> para financiar déficit.
        Presupuesto 2026 equilibrado por ley. Baja impositiva de{" "}
        <strong>2,5 puntos del PIB devueltos</strong> a los argentinos de bien:
        eliminación del Impuesto PAIS, reducción de retenciones al campo,
        eliminación del impuesto a los débitos y créditos bancarios. A diferencia
        de otros gobiernos que lograron superávit subiendo impuestos, nosotros lo
        hicimos <strong>bajándolos</strong>.
      </>
    ),
    impactStats: [
      { val: "15 pts", label: "de ajuste fiscal" },
      { val: "30%", label: "menos gasto real" },
      { val: "100+", label: "años sin presup. equilib." },
      { val: "$5.000M", label: "ahorro en subsidios" },
    ],
    impactText: (
      <>
        El{" "}
        <strong>ajuste fiscal más grande de la historia argentina</strong> —
        bajando impuestos, no subiéndolos. Subsidios energéticos reducidos de{" "}
        <strong>USD 14.000M a USD 5.000M</strong>. Más de{" "}
        <strong>3.000 obras ficticias canceladas</strong>. Presupuesto 2026 con
        equilibrio fiscal garantizado por ley.
      </>
    ),
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
    desc: (
      <>
        Heredé una inflación del <strong>211,4% anual</strong> que anualizada
        viajaba a la velocidad de <strong>17.000%</strong>. En diciembre de 2023,
        el mes que asumí, la inflación mensual tocó el <strong>25,5%</strong>{" "}
        tras la devaluación necesaria para sincerar los precios que el gobierno
        anterior había reprimido — los precios de tarifas de gas y luz estaban{" "}
        <strong>subsidiados al 90%</strong>, creando un agujero fiscal
        insostenible. Los economistas del establishment decían que era imposible
        bajarla sin hiperinflación previa. Eliminé la causa: dejé de imprimir
        para financiar al Estado. El ancla fue fiscal, no cambiaria. No hubo
        magia ni trucos: simplemente dejamos de robarle a los argentinos a
        través de la inflación. En 2025 cerramos con{" "}
        <strong>~30% anual</strong>, la cifra{" "}
        <strong>más baja desde 2017</strong>. Los precios mayoristas ya están
        casi en un dígito. La inflación tiene fecha de defunción.
      </>
    ),
    antes: (
      <>
        Inflación del <strong>211,4% anual en 2023</strong> — anualizada al{" "}
        <strong>17.000%</strong>. Pico mensual del <strong>25,5%</strong> en
        diciembre 2023. Destruimos <strong>cinco signos monetarios</strong> en
        nuestra historia — les sacamos <strong>13 ceros</strong> a la moneda.
        Los salarios se licuaban en días: un trabajador perdía{" "}
        <strong>más del 20% de su poder adquisitivo por mes</strong>. Argentina
        era el{" "}
        <strong>segundo país más inflacionario del mundo</strong>, solo detrás de
        Venezuela. Precios de tarifas reprimidos al <strong>90% de
        subsidio</strong>, generando desabastecimiento y un déficit energético de{" "}
        <strong>USD 14.000M</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>~30% anual en 2025</strong> — la más baja en{" "}
        <strong>ocho años</strong>. Inflación mensual estabilizada entre{" "}
        <strong>1,5% y 2,2%</strong>. Tendencia descendente sostenida durante{" "}
        <strong>24 meses consecutivos</strong>. Precios mayoristas casi en un
        dígito. El peso se apreció <strong>más de 40% en términos reales</strong>{" "}
        sin precedentes. Proyección 2026: por debajo del <strong>20%</strong>.
        Meta de <strong>un dígito para 2027</strong>.
      </>
    ),
    impactStats: [
      { val: "–85%", label: "reducción inflación" },
      { val: "211→30", label: "% anual" },
      { val: "8", label: "años de mínimo" },
      { val: "24", label: "meses de baja consecutiva" },
    ],
    impactText: (
      <>
        Poder adquisitivo del salario real en recuperación sostenida — los
        salarios crecen <strong>por encima de la inflación</strong> desde
        septiembre 2024. Pobreza del <strong>57% al ~30%</strong> — la mayor
        caída en la historia reciente.{" "}
        <strong>Boom de créditos hipotecarios</strong>: más de{" "}
        <strong>45.000 hipotecas UVA</strong> otorgadas en 2025.
      </>
    ),
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
    desc: (
      <>
        El cepo cambiario fue la herramienta más perversa del kirchnerismo: un
        control de capitales que duró <strong>más de 6 años</strong>, impuesto
        por Macri en septiembre de 2019 y perpetuado y agravado por Alberto
        Fernández hasta dejar <strong>más de 15 tipos de cambio
        simultáneos</strong> — dólar oficial, blue, MEP, CCL, tarjeta, ahorro,
        cripto, soja, y más. En abril de 2025,{" "}
        <strong>liberé completamente el mercado cambiario</strong> para las
        personas físicas, respaldado por un acuerdo con el FMI de{" "}
        <strong>USD 20.000M</strong> y apoyos adicionales del Banco Mundial
        (<strong>USD 12.000M</strong>) y organismos multilaterales. La brecha
        desapareció. El peso flotó libremente y se apreció.
      </>
    ),
    antes: (
      <>
        Restricciones cambiarias ininterrumpidas <strong>desde septiembre de
        2019</strong> — más de <strong>6 años de cepo</strong>. Brecha
        cambiaria superior al <strong>100%</strong> entre el dólar oficial y el
        paralelo. <strong>Más de 15 tipos de cambio</strong> simultáneos
        distorsionando toda la economía. Riesgo país en{" "}
        <strong>2.400 puntos</strong> — Argentina excluida de los mercados
        internacionales de deuda. Reservas netas del BCRA en{" "}
        <strong>territorio negativo: –USD 11.500M</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>Mercado cambiario libre</strong> con banda de flotación
        administrada (1.000-1.400 $/USD). <strong>Brecha eliminada: 0%</strong>.
        Acuerdo con el FMI por <strong>USD 20.000M</strong> a 48 meses, más{" "}
        <strong>USD 12.000M del Banco Mundial</strong>. Riesgo país desplomado
        de 2.400 a <strong>~560 puntos</strong>. Reservas netas en recuperación
        sostenida. El peso flotó libre y{" "}
        <strong>se apreció contra el dólar</strong>.
      </>
    ),
    impactStats: [
      { val: "0%", label: "brecha cambiaria" },
      { val: "$20.000M", label: "acuerdo FMI" },
      { val: "~560", label: "riesgo país" },
      { val: "$12.000M", label: "Banco Mundial" },
    ],
    impactText: (
      <>
        Riesgo país de <strong>2.400 a ~560 puntos</strong> — caída del{" "}
        <strong>77%</strong>. Reservas netas de{" "}
        <strong>–USD 11.500M a territorio positivo</strong>.{" "}
        <strong>Argentina vuelve a los mercados internacionales</strong> de
        deuda tras años de exclusión. Desembolso inmediato de{" "}
        <strong>USD 12.000M del FMI</strong> en abril 2025.
      </>
    ),
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
    desc: (
      <>
        A diez días de asumir, el <strong>20 de diciembre de 2023</strong>,
        firmé el <strong>DNU 70/23</strong> — el{" "}
        <strong>Decreto de Necesidad y Urgencia de Desregulación de la
        Economía Argentina</strong> — con <strong>366 artículos</strong> que
        modificaron o derogaron más de <strong>40 leyes</strong>. Derogué la{" "}
        <strong>Ley de Alquileres 27.551</strong> (que había destruido el 40%
        de la oferta), la <strong>Ley de Abastecimiento 20.680</strong> (que
        permitía al Estado fijar precios y embargar mercadería), la{" "}
        <strong>Ley de Góndolas 27.545</strong>, y desregulé sectores como
        aviación comercial, telecomunicaciones, seguros y salud. En un solo
        decreto, desregulamos más que cualquier gobierno en{" "}
        <strong>toda la historia argentina</strong>. El decreto fue ratificado
        por la Cámara de Diputados y resistió todos los embates judiciales.
      </>
    ),
    antes: (
      <>
        Más de <strong>40 leyes y regulaciones</strong> que impedían el
        comercio, el trabajo y la producción.{" "}
        <strong>Ley de Alquileres 27.551</strong> que destruyó el{" "}
        <strong>40% de la oferta</strong> de inmuebles en alquiler en Buenos
        Aires. <strong>Ley de Abastecimiento</strong> de 1974 que permitía al
        Estado intervenir cualquier empresa. Mercado aerocomercial con{" "}
        <strong>rutas monopólicas</strong> y precios inflados. Telecomunicaciones
        con tarifas reguladas que impedían la inversión.{" "}
        <strong>Starlink prohibido</strong> de operar. Precios del sector salud
        regulados, generando desabastecimiento de medicamentos.
      </>
    ),
    ahora: (
      <>
        <strong>366 artículos de desregulación</strong> en un solo decreto,
        ratificado por Diputados. Mercado de alquileres con{" "}
        <strong>+170% de oferta</strong> y precios reales{" "}
        <strong>–30%</strong>. Aviación comercial liberada:{" "}
        <strong>57 nuevas rutas</strong> y récord de{" "}
        <strong>50,6 millones de pasajeros</strong> en 2025.{" "}
        <strong>Starlink</strong> operativo en todo el territorio, conectando{" "}
        <strong>700.000 argentinos rurales</strong>. Telecomunicaciones con
        competencia real. Farmacias con libre competencia de precios.
      </>
    ),
    impactStats: [
      { val: "366", label: "artículos" },
      { val: "+170%", label: "oferta alquileres" },
      { val: "40+", label: "leyes modificadas" },
      { val: "700K", label: "conectados Starlink" },
    ],
    impactText: (
      <>
        Precios de alquiler <strong>–30% en términos reales</strong> con la
        oferta más que triplicada. Récord de{" "}
        <strong>50,6 millones de pasajeros aéreos</strong> en 2025 —{" "}
        <strong>57 nuevas rutas</strong> habilitadas.{" "}
        <strong>700.000 argentinos rurales</strong> conectados a internet vía
        Starlink donde antes no había cobertura.
      </>
    ),
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
    desc: (
      <>
        Con solo <strong>7 senadores propios de 72</strong>, logramos aprobar la{" "}
        <strong>Ley Bases 27.742</strong> — sancionada el{" "}
        <strong>28 de junio de 2024</strong> con el voto de desempate de la
        Vicepresidenta Victoria Villarruel. La ley declaró la{" "}
        <strong>emergencia pública</strong> en materia administrativa,
        económica, financiera y energética, y creó el{" "}
        <strong>RIGI</strong> (Régimen de Incentivo para Grandes Inversiones),
        que garantiza estabilidad fiscal, aduanera y cambiaria por{" "}
        <strong>30 años</strong> para inversiones superiores a{" "}
        <strong>USD 200 millones</strong>. El RIGI incluye beneficios tributarios
        como amortización acelerada, reducción del impuesto a las ganancias al{" "}
        <strong>25%</strong>, y libre disponibilidad de divisas a partir del{" "}
        <strong>tercer año</strong>. También habilitó las privatizaciones de
        empresas públicas deficitarias.
      </>
    ),
    antes: (
      <>
        Sin marco legal para grandes inversiones.{" "}
        <strong>Inestabilidad regulatoria crónica</strong>: las reglas cambiaban
        con cada gobierno. Sin privatizaciones posibles — empresas públicas
        perdiendo <strong>miles de millones</strong> por año. Inversores huyendo
        del país: la inversión extranjera directa era apenas el{" "}
        <strong>1,4% del PIB</strong> — la mitad del promedio regional.{" "}
        <strong>Aerolíneas Argentinas</strong> costaba{" "}
        <strong>USD 800M al año</strong> al contribuyente.
      </>
    ),
    ahora: (
      <>
        <strong>Ley Bases 27.742 sancionada</strong> con desempate de la
        Vicepresidenta. <strong>RIGI operativo</strong>: estabilidad fiscal,
        aduanera y cambiaria por <strong>30 años</strong>. Más de{" "}
        <strong>USD 25.000M en proyectos aprobados</strong> bajo el régimen,
        incluyendo Stargate, Argentina LNG y proyectos mineros. Impuesto a las
        ganancias al <strong>25%</strong> para proyectos RIGI.
        Privatizaciones habilitadas. Aerolíneas autofinanciada por{" "}
        <strong>primera vez en 20 años</strong>.
      </>
    ),
    impactStats: [
      { val: "238", label: "artículos" },
      { val: "$25.000M", label: "inversiones RIGI" },
      { val: "30", label: "años estabilidad" },
      { val: "25%", label: "ganancias RIGI" },
    ],
    impactText: (
      <>
        La primera ley del gobierno — aprobada contra todo pronóstico con{" "}
        <strong>7 senadores propios</strong> y desempate de la Vicepresidenta. El{" "}
        <strong>RIGI como imán de inversiones</strong>: más de{" "}
        <strong>USD 25.000M aprobados</strong> en proyectos de energía, minería
        y tecnología. Stargate, Argentina LNG y proyectos de litio{" "}
        <strong>todos bajo régimen RIGI</strong>.
      </>
    ),
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
    desc: (
      <>
        Sturzenegger, desde el Ministerio de Desregulación y Transformación del
        Estado creado por <strong>Ley Bases 27.742</strong>, llevó adelante una
        tarea titánica y admirable: más de{" "}
        <strong>14.500 desregulaciones</strong> ejecutadas a través de{" "}
        <strong>494 normas específicas</strong> que eliminaron{" "}
        <strong>14.392 artículos regulatorios</strong> en un sinfín de áreas que
        dan cuenta del grado de cooptación corporativa que tenía el Estado.
        Porque detrás de cada regulación había un privilegio — o mejor dicho, un
        curro, un tongo. Estas desregulaciones nos permitieron marcar{" "}
        <strong>récords en el mercado aerocomercial</strong> de pasajeros
        (50,6M en 2025), le permitieron a los productores argentinos acceder
        a mejor maquinaria productiva eliminando aranceles del{" "}
        <strong>35% sobre bienes de capital</strong>, y normalizaron y
        potenciaron el mercado de los alquileres. La zona más regulada del
        mundo, Europa, está estancada, no crece. Un eje central de nuestra
        política es la desregulación, porque en la medida que desregulamos{" "}
        <strong>liberamos rendimientos crecientes</strong>.
      </>
    ),
    antes: (
      <>
        Miles de normas acumuladas durante <strong>más de 80 años</strong> por
        capas geológicas de burocracia peronista. Cada regulación protegía un
        privilegio de algún sector concentrado:{" "}
        <strong>sindicatos, monopolios, importadores amigos</strong>. Licencias,
        permisos, habilitaciones discrecionales en cada actividad económica.
        Argentina era{" "}
        <strong>la economía más regulada de toda la región</strong> y una de las
        más reguladas del mundo según el Banco Mundial. Costos inflados
        artificialmente — abrir un negocio requería{" "}
        <strong>más de 14 trámites</strong> y hasta{" "}
        <strong>6 meses de espera</strong>. Competencia bloqueada en sector tras
        sector por regulaciones diseñadas para proteger a los de adentro.
      </>
    ),
    ahora: (
      <>
        <strong>14.500+ desregulaciones</strong> ejecutadas mediante{" "}
        <strong>494 normas</strong> que eliminaron{" "}
        <strong>14.392 artículos regulatorios</strong>. Mercados completamente
        abiertos. <strong>Competencia real por primera vez en décadas</strong>.
        Aranceles del <strong>35% eliminados</strong> sobre bienes de capital.
        Trámites simplificados radicalmente: habilitaciones que tardaban{" "}
        <strong>meses ahora toman días</strong>. La política de exterminar
        regulaciones libera <strong>rendimientos crecientes</strong>, que son las
        bases del crecimiento económico sostenido.
      </>
    ),
    impactStats: [
      { val: "14.500+", label: "desregulaciones" },
      { val: "50,6M", label: "pasajeros aéreos" },
      { val: "57", label: "nuevas rutas" },
      { val: "494", label: "normas simplificadas" },
    ],
    impactText: (
      <>
        <strong>Récord de 50,6M pasajeros aéreos</strong> en 2025 con{" "}
        <strong>57 nuevas rutas</strong>. Alquileres{" "}
        <strong>–30% real</strong> con <strong>+170% oferta</strong>. Aranceles
        del <strong>35% eliminados</strong> sobre bienes de capital. Una política
        admirada en el mundo: <strong>494 normas</strong> eliminaron{" "}
        <strong>14.392 artículos</strong> de burocracia asfixiante.
      </>
    ),
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
    desc: (
      <>
        El Estado argentino era un monstruo que se devoraba a sí mismo.{" "}
        <strong>18 ministerios</strong>, <strong>84 secretarías</strong> y más de{" "}
        <strong>340.000 empleados públicos nacionales</strong> — muchos
        contratados masivamente antes de las elecciones de 2023, con{" "}
        <strong>más de 20.000 nombramientos</strong> en los últimos 90 días del
        gobierno de Alberto Fernández. Reduje los ministerios a{" "}
        <strong>8</strong>, las secretarías a <strong>51</strong>, eliminé{" "}
        <strong>63.234 cargos</strong> innecesarios. Disolvimos organismos que
        eran pura ideología y cero gestión: <strong>TELAM</strong> (con más de{" "}
        <strong>800 empleados</strong> para una agencia de noticias que nadie
        leía), <strong>INADI</strong> (que hacía militancia K con presupuesto
        público), y decenas de entes similares. Las{" "}
        <strong>32 empresas públicas</strong> que heredé con déficit conjunto
        masivo hoy operan con <strong>superávit de $109.200M</strong>.
      </>
    ),
    antes: (
      <>
        <strong>18 ministerios</strong> y <strong>84 secretarías</strong>.{" "}
        <strong>~340.000 empleados públicos nacionales</strong>, muchos
        contratados en masa antes de la transición:{" "}
        <strong>20.000+ nombramientos</strong> en los últimos 90 días del
        gobierno anterior. <strong>32 empresas públicas</strong> con déficit
        conjunto de <strong>miles de millones de dólares</strong> — Aerolíneas
        Argentinas sola costaba <strong>USD 800M al año</strong>. TELAM con{" "}
        <strong>800+ empleados</strong>. INADI haciendo militancia con
        presupuesto público. Gasto en personal representaba más del{" "}
        <strong>12% del PIB</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>8 ministerios</strong>, <strong>51 secretarías</strong>.{" "}
        <strong>277.000 empleados</strong> —{" "}
        <strong>63.234 cargos eliminados (–18%)</strong>. TELAM, INADI y decenas
        de organismos disueltos — <strong>ahorro anual de USD 500M+</strong>.
        Empresas públicas con <strong>superávit de $109.200M</strong> — de
        perder miles de millones a ganar dinero.{" "}
        <strong>Aerolíneas Argentinas autofinanciada</strong> por primera vez en
        20 años, sin un solo peso del contribuyente.
      </>
    ),
    impactStats: [
      { val: "–56%", label: "menos ministerios" },
      { val: "63.234", label: "cargos eliminados" },
      { val: "–18%", label: "planta estatal" },
      { val: "$109.200M", label: "superávit empresas" },
    ],
    impactText: (
      <>
        Empresas públicas de déficit masivo a{" "}
        <strong>superávit histórico de $109.200M</strong>. Aerolíneas
        Argentinas autofinanciada <strong>por primera vez en 20 años</strong>.
        Ahorro anual de más de <strong>USD 500M</strong> en organismos
        disueltos. Estado más chico, más eficiente y más barato: de{" "}
        <strong>18 a 8 ministerios</strong>, de{" "}
        <strong>84 a 51 secretarías</strong>.
      </>
    ),
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
    desc: (
      <>
        Los campeones de los derechos de los trabajadores dejaron sin ningún
        tipo de derechos a <strong>la mitad de los trabajadores</strong>. Una ley
        de <strong>más de 50 años</strong> — la Ley de Contrato de Trabajo 20.744
        de 1974 — había dejado a la mitad de los trabajadores argentinos en la
        informalidad: <strong>más de 5 millones de personas</strong> sin aportes,
        sin obra social, sin jubilación, sin indemnización. El costo de
        contratar formalmente era tan alto que las PyMEs directamente no
        contrataban — o lo hacían en negro. La{" "}
        <strong>industria del juicio laboral</strong> generaba más de{" "}
        <strong>250.000 causas por año</strong>, con abogados que se quedaban
        con hasta el 50% de las indemnizaciones. Sancionamos la reforma en
        sesión extraordinaria de febrero de 2026 junto con la reforma comercial
        y la penal juvenil.
      </>
    ),
    antes: (
      <>
        <strong>Ley de Contrato de Trabajo 20.744</strong> de 1974 —{" "}
        <strong>más de 50 años sin reforma sustancial</strong>. Más de{" "}
        <strong>5 millones de trabajadores</strong> en la informalidad total —{" "}
        <strong>el 46% de la fuerza laboral</strong>. Industria del juicio
        laboral con <strong>250.000+ causas por año</strong>. Indemnizaciones
        calculadas sobre todos los conceptos salariales, incluyendo bonos y
        horas extra. Período de prueba de solo{" "}
        <strong>3 meses</strong>. PyMEs que no contrataban por miedo al juicio.
      </>
    ),
    ahora: (
      <>
        <strong>Fondo de Asistencia Laboral (FAL)</strong> como alternativa
        moderna a las indemnizaciones — el trabajador elige. Período de prueba
        de <strong>6 meses</strong> (hasta <strong>1 año para PyMEs</strong>).
        Servicios esenciales con <strong>75% de funcionamiento</strong> garantizado
        durante huelgas. <strong>Eliminación de la ultraactividad
        sindical</strong>: los convenios colectivos vencidos ya no rigen
        indefinidamente. Base de cálculo indemnizatorio{" "}
        <strong>limitada al salario básico</strong>. Blanqueo laboral con{" "}
        <strong>condonación del 70%</strong> de deuda por aportes.
      </>
    ),
    impactStats: [
      { val: "218", label: "artículos" },
      { val: "28", label: "leyes modificadas" },
      { val: "11", label: "leyes derogadas" },
      { val: "5M+", label: "trabajadores informales" },
    ],
    impactText: (
      <>
        <strong>La primera reforma laboral en medio siglo</strong>. Señal fuerte
        a los mercados internacionales: Argentina moderniza su marco laboral
        para atraer inversión. Fin de la{" "}
        <strong>industria del juicio laboral</strong> (250.000+ causas/año) y de
        la ultraactividad sindical. Blanqueo laboral con condonación del{" "}
        <strong>70% de deuda</strong> para formalizar a{" "}
        <strong>millones de trabajadores</strong>.
      </>
    ),
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
    desc: (
      <>
        Argentina era una de las economías más cerradas del mundo — puesto{" "}
        <strong>148 de 160</strong> en el índice de libertad comercial. El{" "}
        <strong>sistema SIRA</strong> de permisos previos obligatorios era un
        mecanismo de extorsión burocrática donde importar un insumo podía tardar{" "}
        <strong>meses y requería coimas</strong>. El{" "}
        <strong>Impuesto PAIS</strong> (creado por Alberto Fernández en diciembre
        de 2019) encarecía toda importación hasta un <strong>17,5%</strong>{" "}
        adicional. Implementamos <strong>138 medidas de apertura</strong>,
        eliminamos el SIRA, eliminamos el Impuesto PAIS en diciembre de 2024,
        redujimos aranceles en <strong>1.675 productos</strong>, y firmamos los
        acuerdos comerciales más importantes de la historia argentina: el{" "}
        <strong>Mercosur-UE</strong> (tras 26 años de negociación), el primer{" "}
        <strong>TLC bilateral con Estados Unidos</strong>, y el acuerdo con{" "}
        <strong>EFTA</strong> (Suiza, Noruega, Islandia y Liechtenstein).
      </>
    ),
    antes: (
      <>
        Puesto <strong>148 de 160</strong> en libertad comercial.{" "}
        <strong>Sistema SIRA</strong> de permisos previos obligatorios para
        importar — mecanismo de extorsión donde un trámite tardaba{" "}
        <strong>meses</strong>. <strong>Impuesto PAIS del 17,5%</strong> sobre
        importaciones y operaciones en dólares. Aranceles del{" "}
        <strong>35%</strong> en múltiples productos. Argentina aislada del
        mundo: sin un solo TLC bilateral en <strong>200 años</strong> de
        historia. Mercosur-UE estancado <strong>26 años</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>SIRA eliminado</strong> — reemplazado por sistema automático.{" "}
        <strong>Impuesto PAIS eliminado</strong> en diciembre 2024.{" "}
        <strong>138 medidas de apertura</strong> implementadas. Aranceles
        reducidos en <strong>1.675 productos</strong>. Acuerdo{" "}
        <strong>Mercosur-UE ratificado</strong> por el Senado — acceso
        preferencial a un mercado de <strong>780 millones de personas</strong>.
        Primer <strong>TLC bilateral con EE.UU.</strong> en la historia.
        Acuerdo con <strong>EFTA</strong> firmado. Superávit comercial récord
        de <strong>USD 19.000M</strong>.
      </>
    ),
    impactStats: [
      { val: "$19.000M", label: "superávit comercial" },
      { val: "1.675", label: "productos sin arancel" },
      { val: "26", label: "años de negociación UE" },
      { val: "780M", label: "personas mercado UE" },
    ],
    impactText: (
      <>
        <strong>Récord de superávit comercial: USD 19.000M</strong>.
        Exportaciones a la UE proyectadas a crecer <strong>76% en 5
        años</strong> — acceso preferencial a <strong>780 millones de
        personas</strong>. Primer <strong>TLC con EE.UU.</strong> en 200 años
        de historia. Argentina volvió al mundo después de{" "}
        <strong>dos décadas de aislamiento</strong> kirchnerista.
      </>
    ),
    quote: {
      text: "Hace 21 años Chávez gritó «ALCA, al carajo» y el kirchnerismo festejó. Nosotros firmamos con Estados Unidos, con la Unión Europea, y vamos a seguir firmando con el mundo entero.",
      cite: "— Tras la ratificación del acuerdo Mercosur-UE, febrero 2026",
    },
    img: "/images/banco/mercosur-ue-firma.jpg",
    imgAlt: "Firma del acuerdo Mercosur-UE — apertura comercial",
  },

  // ── 10 LEY DE INOCENCIA FISCAL ───────────────────────────
  {
    num: "10",
    icon: "⚖️",
    title: "LEY DE INOCENCIA FISCAL",
    subtitle:
      "Restaurar la presunción de inocencia en materia tributaria — un principio constitucional básico que la política había vulnerado.",
    desc: (
      <>
        En materia tributaria éramos <strong>todos culpables</strong>. La
        política había vulnerado una cuestión constitucional básica:{" "}
        <strong>la presunción de inocencia</strong>. El Estado podía perseguir,
        embargar y destruir a cualquier contribuyente{" "}
        <strong>sin necesidad de probar nada</strong>. La{" "}
        <strong>AFIP</strong> (hoy ARCA) tenía poderes discrecionales para
        clausurar comercios, embargar cuentas bancarias y arruinar la vida de
        cualquier argentino con una simple resolución administrativa — sin
        intervención judicial. Más de{" "}
        <strong>2 millones de contribuyentes</strong> habían sido objeto de
        alguna forma de persecución tributaria. La ley fue aprobada en el
        Senado con <strong>43 votos a favor</strong>, restaurando un principio
        constitucional que el Estado había violado durante décadas.
      </>
    ),
    antes: (
      <>
        <strong>Presunción de culpabilidad tributaria</strong> de facto. AFIP
        con poderes para <strong>clausurar comercios sin orden
        judicial</strong>. El Estado podía embargar cuentas bancarias{" "}
        <strong>sin necesidad de probar la existencia de una deuda</strong>.
        Más de <strong>2 millones de contribuyentes perseguidos</strong>.{" "}
        <strong>Inspecciones arbitrarias</strong> usadas como herramienta de
        presión política. PyMEs destruidas por embargos preventivos. El sistema
        tributario argentino era <strong>el más hostil de la región</strong>:
        más de <strong>100 impuestos diferentes</strong> entre nación,
        provincias y municipios.
      </>
    ),
    ahora: (
      <>
        <strong>Presunción de inocencia restaurada</strong> en materia
        tributaria — aprobada con <strong>43 votos</strong> en el Senado. El
        Estado debe probar antes de perseguir, no al revés.{" "}
        <strong>Protección contra embargos arbitrarios</strong>: se requiere
        intervención judicial previa. <strong>AFIP reemplazada por ARCA</strong>{" "}
        (Agencia de Recaudación y Control Aduanero) con estructura{" "}
        <strong>reducida en un 34%</strong>. Moratoria fiscal que permitió
        regularizar <strong>USD 32.000M en activos</strong>.
      </>
    ),
    impactStats: [
      { val: "43", label: "votos a favor" },
      { val: "$32.000M", label: "activos regularizados" },
      { val: "–34%", label: "estructura ARCA" },
      { val: "2M+", label: "contribuyentes protegidos" },
    ],
    impactText: (
      <>
        Moratoria fiscal que regularizó <strong>USD 32.000M en
        activos</strong> — la más exitosa de la historia argentina. AFIP
        reducida y transformada en <strong>ARCA con 34% menos de
        estructura</strong>. Clave para la{" "}
        <strong>formalización del empleo y la economía</strong>: más de{" "}
        <strong>2 millones de contribuyentes</strong> protegidos de la
        persecución tributaria arbitraria.
      </>
    ),
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
    desc: (
      <>
        Cuando asumí, las calles eran tierra de nadie. Más de{" "}
        <strong>9.000 piquetes al año</strong> — un promedio de{" "}
        <strong>25 por día</strong> — bloqueaban avenidas, rutas y puentes con
        total impunidad. Rosario era la capital narco del país con{" "}
        <strong>261 homicidios en 2022</strong> y bandas como Los Monos
        controlando barrios enteros. El{" "}
        <strong>protocolo antipiquetes de Patricia Bullrich</strong> — la
        Resolución 943/2023, firmada el mismo día de la asunción — terminó de
        raíz con los cortes. No se negoció con piqueteros: se aplicó la ley.
        En Rosario, el gobierno nacional desplegó{" "}
        <strong>fuerzas federales</strong>, intervino la policía provincial y
        lanzó operativos conjuntos que desarticularon las principales bandas
        narco. La <strong>Ley Antimafia</strong> fue aprobada en el Senado{" "}
        <strong>38 a 0</strong>, sin un solo voto en contra.
      </>
    ),
    antes: (
      <>
        <strong>9.000+ piquetes al año</strong> — 25 por día — con impunidad
        total; las fuerzas de seguridad tenían{" "}
        <strong>orden de no intervenir</strong>. Rosario:{" "}
        <strong>261 homicidios en 2022</strong>, la tasa más alta del país.
        Bandas narco como <strong>Los Monos</strong> controlando barrios
        enteros. <strong>Puerta giratoria judicial</strong> que devolvía
        delincuentes a la calle en horas. Más de{" "}
        <strong>600 detenidos por narcotráfico</strong> que tuvieron que ser
        recapturados. Tasa de homicidios de{" "}
        <strong>5,2 cada 100.000 habitantes</strong>.
      </>
    ),
    ahora: (
      <>
        <strong>Cero piquetes</strong> desde el día uno — Resolución 943/2023.
        Homicidios <strong>–17% a nivel nacional</strong> y{" "}
        <strong>–65% en Rosario</strong> (de 261 a 91). Robos{" "}
        <strong>–20%</strong> — <strong>mínimo histórico en décadas</strong>.
        Ley Antimafia aprobada <strong>38 a 0</strong>. Más de{" "}
        <strong>600 detenidos narco</strong> en operativos federales. Incautación
        de cocaína <strong>+500%</strong>. Tasa de homicidios más baja de{" "}
        <strong>toda Sudamérica</strong> por segundo año consecutivo.
      </>
    ),
    impactStats: [
      { val: "–65%", label: "homicidios Rosario" },
      { val: "–20%", label: "robos nacional" },
      { val: "0", label: "piquetes" },
      { val: "+500%", label: "cocaína incautada" },
    ],
    impactText: (
      <>
        De <strong>261 a 91 homicidios en Rosario</strong> — caída del{" "}
        <strong>65%</strong>. Incautación de cocaína{" "}
        <strong>+500%</strong> respecto al gobierno anterior. De{" "}
        <strong>9.000 piquetes al año a cero</strong> desde el primer día. Ley
        Antimafia aprobada <strong>38 a 0</strong>. Argentina:{" "}
        <strong>el país más seguro de toda Sudamérica</strong> por segundo año
        consecutivo.
      </>
    ),
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
    desc: (
      <>
        El Régimen Penal Juvenil vigente — la <strong>Ley 22.278</strong> —
        tenía <strong>45 años de antigüedad</strong>: una norma obsoleta
        promulgada durante la <strong>dictadura militar en 1980</strong>.
        Menores de edad eran utilizados por organizaciones narco como{" "}
        <strong>soldados descartables</strong>, porque sabían que no iban a
        tener consecuencias penales: un menor de 16 años podía cometer un
        homicidio y volver a su casa el mismo día. En Rosario, el{" "}
        <strong>30% de los homicidios</strong> involucraban menores como
        ejecutores. La reforma fue sancionada en la{" "}
        <strong>sesión extraordinaria de febrero de 2026</strong> — la misma
        noche en que se aprobaron la reforma laboral y la comercial, en lo que
        fue la sesión legislativa más reformista de la historia argentina.
      </>
    ),
    antes: (
      <>
        <strong>Ley 22.278 de 1980</strong> — promulgada durante la{" "}
        <strong>dictadura militar</strong>.{" "}
        <strong>45 años sin una sola reforma</strong>. Menores de{" "}
        <strong>16 años absolutamente inimputables</strong> sin importar el
        delito cometido — incluyendo homicidio, violación y narcotráfico.
        Organizaciones narco reclutando menores como{" "}
        <strong>sicarios descartables</strong>. En Rosario, el{" "}
        <strong>30% de los homicidios</strong> involucraban menores.{" "}
        <strong>Argentina incumplía</strong> la Convención Internacional de los
        Derechos del Niño por tener un régimen de la dictadura.
      </>
    ),
    ahora: (
      <>
        Imputabilidad desde los <strong>14 años para delitos graves</strong>{" "}
        (homicidio, violación, secuestro, narcotráfico).{" "}
        <strong>Nuevo régimen penal juvenil completo</strong> con medidas
        socioeducativas graduales y proporcionales. Penas diferenciadas por
        edad: <strong>14-15 años</strong> con medidas socioeducativas
        obligatorias; <strong>16-17 años</strong> con penas reducidas respecto
        a adultos. <strong>Argentina cumple</strong> por primera vez con los
        estándares internacionales de justicia juvenil.
      </>
    ),
    impactStats: [
      { val: "45", label: "años sin reforma" },
      { val: "14", label: "edad imputabilidad" },
      { val: "Feb 26", label: "sesión histórica" },
      { val: "30%", label: "homicidios con menores" },
    ],
    impactText: (
      <>
        <strong>Tres reformas históricas en una sola sesión</strong> del
        Congreso en febrero de 2026: laboral, comercial y penal juvenil — la{" "}
        <strong>sesión más reformista de la historia</strong>. El viejo régimen
        de la dictadura (Ley 22.278) reemplazado por uno moderno. Fin del uso de
        menores como <strong>sicarios descartables</strong> por el narco:{" "}
        <strong>el que las hace, las paga</strong>.
      </>
    ),
    quote: {
      text: "Reformamos la Ley Penal Juvenil, modificando un régimen penal obsoleto que tenía ya 45 años de antigüedad. Porque, como lo dijimos antes de ser gobierno, el que las hace, las paga.",
      cite: "— Apertura de sesiones ordinarias, 1 de marzo de 2026",
    },
    img: "/images/banco/inauguracion-discurso-congreso.jpg",
    imgAlt: "Sesión del Congreso — reforma penal juvenil",
  },
];
