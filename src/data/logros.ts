// ── Logros Data ──────────────────────────────────────────

export interface PobrezaCounter {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sub: string;
}

export interface PobrezaPill {
  val: string;
  lbl: string;
}

export interface PobrezaFlowCard {
  tag: string;
  big: string;
  desc: string;
}

export interface PobrezaData {
  badge: string;
  topbarNum: string;
  kicker: string;
  headline: string;
  headlineEm: string;
  counters: PobrezaCounter[];
  narrative: string[];
  flowBefore: PobrezaFlowCard;
  flowAfter: PobrezaFlowCard;
  pills: PobrezaPill[];
  quote: string;
  quoteAttr: string;
  img: string;
  imgAlt: string;
}

export const pobrezaData: PobrezaData = {
  badge: "I — POBREZA",
  topbarNum: "EL LOGRO MÁS IMPORTANTE",
  kicker: "De la peor crisis social desde 2001 al mayor descenso de pobreza en la historia argentina",
  headline: "Más de ",
  headlineEm: "10 millones",
  counters: [
    { target: 57, suffix: "%", label: "Pobreza heredada", sub: "Q1 2024 — la peor desde la crisis de 2001" },
    { target: 27, suffix: "%", label: "Pobreza actual", sub: "Q3 2025 — el nivel más bajo en 7 años" },
    { target: 10, suffix: "M+", label: "Salieron de la pobreza", sub: "En menos de dos años — sin precedente histórico" },
    { target: 5.3, suffix: "M", decimals: 1, label: "Salieron de la indigencia", sub: "Del 20,3 % al 4,6 % — caída de 77 %" },
  ],
  narrative: [
    "En el primer trimestre de 2024, el INDEC reveló la magnitud de la catástrofe heredada: la pobreza alcanzó el 57 % — la peor cifra desde la crisis terminal de 2001. Estaba camuflada con controles de precios, tarifas congeladas y maquillaje estadístico. Siete de cada diez chicos eran pobres. Casi 20 millones de personas vivían bajo la línea de pobreza, con una indigencia del 20,3 %. El gobierno de Alberto Fernández y Cristina Kirchner dejó una bomba social sin precedentes.",
    "La plata de la ayuda social no llegaba a quienes la necesitaban. Organizaciones como la UTEP y Barrios de Pie operaban como intermediarias del Estado: se quedaban con hasta el 20 % de los recursos, administraban la miseria como un negocio y usaban a los más vulnerables como rehenes para movilizaciones y presión política. Era un sistema diseñado para perpetuar la pobreza, no para combatirla.",
    "La ministra de Capital Humano, Sandra Pettovello, desmanteló el aparato de intermediarios y eliminó las transferencias discrecionales. La plata dejó de pasar por punteros y empezó a llegar directo al bolsillo de cada beneficiario. La AUH aumentó un 492,9 %. Se incorporaron 600.000 chicos que estaban fuera del sistema. La prestación Alimentar creció 137,5 %. Las becas Primera Infancia subieron más de 500 % y Primeros Mil Días más de 1.100 %. Para el tercer trimestre de 2025, la pobreza cayó al 26,9 % — el valor más bajo desde 2018 y la mayor reducción de pobreza jamás registrada en la Argentina.",
  ],
  flowBefore: {
    tag: "HERENCIA — peor cifra desde 2001",
    big: "57 %",
    desc: "Casi 20 M de personas bajo la línea de pobreza. Indigencia: 20,3 %. 7 de cada 10 chicos eran pobres. Ayuda social secuestrada por intermediarios.",
  },
  flowAfter: {
    tag: "Q3 2025 — récord histórico de reducción",
    big: "26,9 %",
    desc: "Mínimo en 7 años. 10 M+ salieron de la pobreza, 5,3 M de la indigencia. Transferencias directas. AUH +493 %.",
  },
  pills: [
    { val: "+493%", lbl: "AUH" },
    { val: "600K", lbl: "Chicos incorporados" },
    { val: "+137%", lbl: "Alimentar" },
    { val: "+500%", lbl: "Becas Primera Infancia" },
    { val: "+1.100%", lbl: "Primeros Mil Días" },
  ],
  quote: "«Robar está mal, pero robarle el pan de la boca a los más vulnerables, haciéndolos esclavos para amasar poder, excede a cualquier adjetivo que se pueda encontrar en el diccionario.»",
  quoteAttr: "— Milei, Congreso 2026",
  img: "/images/banco/hero-balcon.jpg",
  imgAlt: "Milei ante la multitud en el balcón de Casa Rosada — asunción presidencial, diciembre 2023",
};

export interface BeforeAfter {
  label: string;
  val: string;
  desc: string;
}

export interface Logro {
  num: string;
  badge: string;
  title: string;
  paragraphs: string[];
  before: BeforeAfter;
  after: BeforeAfter;
  callout: string;
  gradient: string;
  imgBefore: string;
  imgAfter: string;
  altBefore: string;
  altAfter: string;
  img?: string;
  imgAlt?: string;
  reverse?: boolean;
}

export const logros: Logro[] = [
  {
    num: "02",
    badge: "II — ESTABILIZACIÓN",
    title: "Se evitó la hiperinflación: se desactivó la bomba más grande de la historia",
    paragraphs: [
      "En agosto de 2023, Sergio Massa quedó tercero en las PASO y lanzó el «Plan Platita»: inyectó 1,3 % del PBI en bonos, devolución de IVA y beneficios impositivos — todo financiado con emisión pura del Banco Central. En un solo año emitió trece bases monetarias. Para diciembre de 2023, la inflación mayorista viajaba al 17.000 % anualizado. El déficit consolidado llegaba al 15 % del PBI. Las reservas netas eran negativas en USD 13.000 M. La brecha cambiaria superaba el 200 %.",
      "La herencia que recibimos el 10 de diciembre de 2023 combinaba las tres peores crisis de la historia argentina en una sola: el desequilibrio monetario duplicaba al del Rodrigazo de junio de 1975, el Banco Central estaba en peor situación que antes de la hiperinflación de Alfonsín en 1989, y los indicadores sociales superaban en gravedad a los del colapso de 2001. Ningún país del mundo había enfrentado jamás estas tres crisis simultáneamente sin caer en hiperinflación.",
      "El ministro de Economía Luis «Toto» Caputo lo resolvió de forma opuesta a cualquier antecedente histórico: sin expropiaciones, sin Plan Bonex, sin controles de precios, sin confiscar depósitos — todo a libre mercado. En seis meses se eliminó el déficit cuasifiscal del Banco Central. La hiper se evitó. Fue la primera vez en la historia argentina que una crisis de esta magnitud se resolvió sin destruir los ahorros de la clase media.",
    ],
    before: { label: "Herencia dic. 2023 — la peor de la historia", val: "17.000%", desc: "Inflación mayorista anualizada. 13 bases monetarias emitidas en un año. Déficit consolidado 15 % PBI. Reservas negativas USD 13.000 M." },
    after: { label: "Resultado — sin precedente mundial", val: "HIPER EVITADA", desc: "Cuasifiscal eliminado en 6 meses. Sin Bonex, sin confiscación, sin controles — a puro mercado libre." },
    callout: "Se desactivó la mayor bomba inflacionaria de la historia argentina sin tocar un solo depósito ni confiscar un solo peso.",
    gradient: "linear-gradient(135deg, #b71c1c, #d32f2f)",
    imgBefore: "/logros/02-antes.png",
    imgAfter: "/logros/02-despues.png",
    altBefore: "Pesos argentinos quemándose, hiperinflación",
    altAfter: "Bosques de Palermo, familias disfrutando",
    img: "/images/banco/inauguracion-discurso-congreso.jpg",
    imgAlt: "Milei en el discurso inaugural ante el Congreso, asumiendo el desafío de evitar la hiperinflación",
  },
  {
    num: "03",
    badge: "III — ORDEN",
    title: "No más piquetes: la calle es de todos los argentinos",
    paragraphs: [
      "En 2023, la Argentina registró más de 9.000 piquetes — un promedio de 25 cortes de calle por día. Organizaciones sociales como la UTEP, el Polo Obrero y Barrios de Pie recibían financiamiento estatal y cortaban rutas con total impunidad. Millones de argentinos no podían ir a trabajar, llevar a sus hijos al colegio ni llegar a un hospital. Los piquetes se financiaban con plata de la ayuda social — dinero que debía llegar a los más necesitados terminaba pagando el aparato de presión callejera de dirigentes como Juan Grabois y Eduardo Belliboni.",
      "La ministra de Seguridad Patricia Bullrich implementó el Protocolo Antipiquetes desde el primer día de gobierno. Se eliminaron las transferencias discrecionales a intermediarios. La plata va directo a quien la necesita, sin punteros. Las calles se liberaron por primera vez en más de 20 años. La 9 de Julio, la Panamericana, los accesos a Buenos Aires: todos circulan con normalidad.",
    ],
    before: { label: "2023 — 25 cortes por día", val: "9.000", desc: "Piquetes por año. Financiados con plata de la ayuda social. Impunidad total para los organizadores." },
    after: { label: "2024-2025", val: "0", desc: "Cero cortes. Protocolo Bullrich. Transferencias directas. Las calles son de todos por primera vez en 20 años." },
    callout: "De 25 piquetes por día a cero. Las calles argentinas volvieron a ser de la gente que trabaja, no de los que extorsionan.",
    gradient: "linear-gradient(135deg, #4a148c, #7b1fa2)",
    imgBefore: "/logros/03-antes.png",
    imgAfter: "/logros/03-despues.png",
    altBefore: "Piqueteros cortando la 9 de Julio",
    altAfter: "Obelisco y 9 de Julio fluyendo de noche",
    img: "/images/banco/cpac-argentina-01.jpg",
    imgAlt: "CPAC Argentina — autoridad política restaurada, orden en las calles",
    reverse: true,
  },
  {
    num: "04",
    badge: "IV — DESINFLACIÓN",
    title: "La inflación se pulverizó: del 17.000 % anualizado a menos de 30 %",
    paragraphs: [
      "En la primera semana de diciembre de 2023, la inflación corría al 1 % diario — un ritmo que destruía el poder adquisitivo en tiempo real. La inflación mayorista de noviembre fue del 54 % mensual, equivalente a 17.000 % anualizado. La minorista marcó 25,5 % en diciembre. Los argentinos cobraban el sueldo y corrían a comprar antes de que los precios volvieran a subir. Los supermercados remarcaban dos y tres veces por semana.",
      "El equipo económico de Toto Caputo logró la desinflación más rápida de la historia argentina sin recurrir a ninguna de las herramientas habituales: sin fijar el tipo de cambio, sin congelar precios, sin tablitas, sin pactos sociales. Solo con disciplina fiscal y monetaria. Para febrero de 2026, la inflación mensual bajó a 2,4 %, y la interanual se ubica en torno al 26 %. Una caída de más de 99 % desde el pico heredado — la mayor desinflación del mundo en curso.",
    ],
    before: { label: "Dic 2023 — al borde de la hiper", val: "17.000%", desc: "Inflación mayorista anualizada. 25,5 % mensual minorista. 1 % diario. Remarcaciones múltiples por semana." },
    after: { label: "Feb 2026", val: "2,4%", desc: "Mensual. Interanual ~26 %. Sin controles de precios, sin tipo de cambio fijo — desinflación récord mundial." },
    callout: "De 1 % de inflación por día a 2,4 % por mes. La mayor desinflación del planeta, lograda sin controles ni congelamientos.",
    gradient: "linear-gradient(135deg, #e65100, #ff8f00)",
    imgBefore: "/logros/04-antes.png",
    imgAfter: "/logros/04-despues.png",
    altBefore: "Supermercado con límites de compra, escasez",
    altAfter: "Familia comprando con normalidad, góndolas llenas",
    img: "/images/banco/davos-2026-discurso.jpg",
    imgAlt: "Milei en Davos 2026 declarando la victoria sobre la inflación ante líderes mundiales",
  },
  {
    num: "05",
    badge: "V — FISCAL",
    title: "Déficit cero: primer presupuesto equilibrado en más de un siglo",
    paragraphs: [
      "La Argentina llevaba más de 100 años sin presentar un presupuesto equilibrado y libre de default. El gobierno de Alberto Fernández dejó un déficit fiscal consolidado de 15 puntos del PBI: cinco del Tesoro Nacional y diez escondidos debajo de la alfombra del Banco Central en forma de Leliqs y pases. Había 22 ministerios, 106 secretarías y un aparato burocrático diseñado para alimentar a la política, no para servir al ciudadano.",
      "En el primer mes de gobierno se aplicó el mayor ajuste fiscal de la historia: se bajó de 22 a 7 ministerios, se eliminaron 106 secretarías, se cortaron las transferencias discrecionales y se frenó la emisión monetaria. El resultado: superávit fiscal desde enero de 2024 — sostenido durante más de dos años consecutivos. Se bajaron impuestos por 2,5 puntos del PBI, incluyendo la eliminación del Impuesto PAÍS y la reducción de retenciones. Se aprobó el primer presupuesto equilibrado, libre de default, en 123 años.",
    ],
    before: { label: "Herencia — 100+ años sin equilibrio", val: "–15% PBI", desc: "Déficit consolidado. 22 ministerios, 106 secretarías. Emisión descontrolada. Brecha cambiaria 200 %+." },
    after: { label: "2024-2026", val: "SUPERÁVIT", desc: "Sostenido 24 meses consecutivos. 7 ministerios. Gasto –30 %. Impuestos –2,5 pp PBI. Primer presupuesto equilibrado en 123 años." },
    callout: "Primer superávit fiscal sostenido en 123 años. Primer gobierno de la historia que baja impuestos y gasto al mismo tiempo.",
    gradient: "linear-gradient(135deg, #1a237e, #283593)",
    imgBefore: "/logros/05-antes.png",
    imgAfter: "/logros/05-despues.png",
    altBefore: "Máquina imprimiendo billetes, emisión descontrolada",
    altAfter: "Plaza de Mayo y Casa Rosada, orden fiscal",
    img: "/images/banco/presupuesto-congreso.jpg",
    imgAlt: "Milei presenta el primer presupuesto equilibrado en más de un siglo ante el Congreso",
    reverse: true,
  },
  {
    num: "06",
    badge: "VI — CREDIBILIDAD",
    title: "El riesgo país se desplomó: Argentina volvió al mapa financiero mundial",
    paragraphs: [
      "En diciembre de 2023, el riesgo país superaba los 2.000 puntos básicos. La Argentina estaba en default técnico, sin acceso a los mercados internacionales de crédito. Ningún inversor serio consideraba poner un dólar en el país. Los bonos argentinos cotizaban a precio de remate — a niveles de países en guerra.",
      "La credibilidad fiscal y la disciplina monetaria hicieron lo que décadas de promesas no lograron. El riesgo país se desplomó a 652 puntos tras las legislativas de octubre 2025 — una caída de más de 2.500 puntos básicos — y perforó los 500 puntos en enero 2026, el mínimo desde junio de 2018. Se cerró un acuerdo histórico con el FMI por USD 20.000 M. Las empresas anunciaron inversiones por más de USD 55.000 M. Los depósitos en dólares del sector privado se dispararon a USD 37.000 M — un crecimiento del 160 % desde que Milei asumió, el mayor nivel desde el fin de la convertibilidad. Los argentinos perdieron el miedo a dejar los dólares en el banco. Argentina volvió a ser destino de inversión extranjera directa por primera vez en más de una década.",
    ],
    before: { label: "Dic 2023 — país paria", val: "2.000+ pts", desc: "Sin acceso a mercados. Bonos a precio de default. Ningún inversor miraba a Argentina." },
    after: { label: "Ene 2026 — mínimo desde 2018", val: "<500 pts", desc: "–2.500 pb. Acuerdo FMI USD 20.000 M. Inversiones anunciadas USD 55.000 M. Argentina volvió al mundo." },
    callout: "De país paria financiero a destino de inversión: USD 55.000 M en proyectos anunciados y el riesgo país más bajo en 6 años.",
    gradient: "linear-gradient(135deg, #0d47a1, #1565c0)",
    imgBefore: "/logros/06-antes.png",
    imgAfter: "/logros/06-despues.png",
    altBefore: "Crisis 2001, auto quemándose frente al Obelisco",
    altAfter: "Grúas de Puerto Madero, Argentina abierta al mundo",
    img: "/images/banco/davos-2024-fmi.jpg",
    imgAlt: "Milei en reunión con el FMI en Davos 2024 — credibilidad financiera restaurada",
  },
  {
    num: "07",
    badge: "VII — SEGURIDAD",
    title: "Tasa de homicidios más baja en 25 años — y la más baja de toda Sudamérica",
    paragraphs: [
      "Rosario se había convertido en una de las ciudades más violentas de América Latina. En 2022 registró 261 homicidios — más que muchas capitales centroamericanas. Las bandas narco del clan de «Los Monos» y otros grupos operaban con impunidad, extorsionando comercios, controlando barrios enteros y ejecutando a plena luz del día. A nivel nacional, la tasa de homicidios era de 4,4 por cada 100.000 habitantes.",
      "La ministra de Seguridad Patricia Bullrich desplegó fuerzas federales en Rosario y lanzó operativos conjuntos con la Justicia Federal contra las bandas narco. Los homicidios bajaron 17 % a nivel nacional. En Rosario la caída fue del 65 % — la mayor reducción de violencia en la historia de la ciudad. Argentina registró 3,8 homicidios por 100.000 habitantes en 2024: la tasa más baja en 25 años y la más baja de toda Sudamérica, por debajo de Chile y Uruguay por primera vez en la historia.",
    ],
    before: { label: "2022-2023 — Rosario tomada por el narco", val: "4,4", desc: "Homicidios/100K. Rosario: 261 asesinatos. Bandas narco con impunidad total. Fronteras sin control." },
    after: { label: "2024 — récord histórico", val: "3,8", desc: "Tasa más baja en 25 años y la más baja de Sudamérica. Rosario –65 %. Por debajo de Chile y Uruguay por primera vez." },
    callout: "Por primera vez en la historia, Argentina tiene menos homicidios per cápita que Chile y Uruguay. Rosario recuperó sus calles.",
    gradient: "linear-gradient(135deg, #1b5e20, #2e7d32)",
    imgBefore: "/logros/07-antes.png",
    imgAfter: "/logros/07-despues.png",
    altBefore: "Operativo policial nocturno, inseguridad en Rosario",
    altAfter: "Monumento a la Bandera, Rosario en paz",
    img: "/images/banco/cpac-argentina-02.jpg",
    imgAlt: "CPAC Argentina — seguridad y autoridad del Estado restauradas",
    reverse: true,
  },
  {
    num: "08",
    badge: "VIII — DESREGULACIÓN",
    title: "14.500 desregulaciones: la motosierra de Sturzenegger liberó la economía",
    paragraphs: [
      "La Argentina tenía más de 67.000 regulaciones vigentes — un laberinto burocrático diseñado para proteger privilegios, no para servir al ciudadano. Detrás de cada regulación había un curro, un intermediario o un monopolio protegido. Aerolíneas Argentinas había costado USD 8.000 M al Estado desde su re-estatización en 2008 bajo Cristina Kirchner. La ley de alquileres de 2020 había destruido el mercado: la oferta cayó 50 % y los precios se dispararon. Abrir un negocio requería hasta 14 trámites y 45 días.",
      "El ministro de Desregulación Federico Sturzenegger eliminó más de 14.500 regulaciones mediante el DNU 70/2023 y la Ley Bases. Aerolíneas Argentinas pasó de pérdida crónica a generar ganancias por USD 100 M en 2025. La derogación de la ley de alquileres triplicó la oferta y bajó los precios un 30 % en términos reales. Se registró récord histórico de pasajeros aéreos. Los cielos abiertos permitieron la entrada de nuevas aerolíneas low-cost. Abrir un negocio pasó de 45 días a 24 horas.",
    ],
    before: { label: "Argentina asfixiada — 67.000 regulaciones", val: "ASFIXIA", desc: "Cada regulación, un privilegio. Aerolíneas: –USD 8.000 M. Ley de alquileres destruyó la oferta. 45 días para abrir un negocio." },
    after: { label: "Argentina desregulada — DNU 70 + Ley Bases", val: "14.500+", desc: "Regulaciones eliminadas. Aerolíneas: +USD 100 M. Alquileres –30 % real, oferta x3. Récord de pasajeros aéreos." },
    callout: "De 67.000 regulaciones a 14.500 menos. Aerolíneas pasó de perder USD 8.000 M a ganar USD 100 M. La motosierra funciona.",
    gradient: "linear-gradient(135deg, #bf360c, #e65100)",
    imgBefore: "/logros/08-antes.png",
    imgAfter: "/logros/08-despues.png",
    altBefore: "Cola interminable de trámites, burocracia asfixiante",
    altAfter: "Aerolíneas Argentinas despegando, cielos abiertos",
    img: "/images/banco/gabinete-motosierra.jpg",
    imgAlt: "El gabinete de Milei con la motosierra — 14.500 desregulaciones en marcha",
  },
  {
    num: "09",
    badge: "IX — CRECIMIENTO",
    title: "La economía creció 4,4 % y alcanzó el máximo histórico de PBI",
    paragraphs: [
      "En 2023, la economía argentina caía 1,6 %. En 2024 volvió a retroceder 1 %. Dos años consecutivos de contracción, con una industria paralizada por las distorsiones cambiarias, una inversión desplomada y un consumo destruido por la inflación. El aparato productivo estaba frenado: empresas que no invertían, importaciones trabadas por el cepo y una fuga de capitales que vaciaba al país.",
      "En 2025, la economía argentina creció 4,4 % según el INDEC — el mayor crecimiento en más de una década — y el PBI alcanzó un máximo histórico, ubicándose 1,1 % por encima del récord previo de 2022. El consumo privado subió 7,9 %. La inversión bruta fija se disparó 16,4 % — señal inequívoca de que el sector privado volvió a apostar por Argentina. Las exportaciones crecieron 7,6 %. Los sectores que más traccionaron fueron la intermediación financiera (+24,7 %), minas y canteras (+8 %) y hoteles y restaurantes (+7,4 %). No fue un rebote estadístico: fue crecimiento genuino sobre bases sanas, sin emisión, sin déficit y sin cepo.",
      "Lo que distingue a este crecimiento de los anteriores es su composición. En los ciclos kirchneristas, el PBI crecía a fuerza de gasto público, emisión y consumo artificial de corto plazo — un modelo que siempre terminaba en crisis. En 2025, la inversión fue el motor: subió 16,4 %, indicando que las empresas están construyendo capacidad productiva nueva, no simplemente vendiendo stock existente. El cuarto trimestre cerró con un crecimiento del 2,1 % interanual y 0,6 % desestacionalizado contra el trimestre anterior — demostrando que la expansión se sostuvo todo el año sin perder impulso. Las proyecciones para 2026 apuntan a otro año de crecimiento, consolidando la primera expansión bienal sostenida sobre equilibrio fiscal en la historia moderna argentina.",
    ],
    before: { label: "2023-2024 — dos años de caída", val: "–2,6%", desc: "PBI cayó 1,6 % en 2023 y 1 % en 2024. Inversión desplomada. Consumo destruido por inflación. Industria paralizada." },
    after: { label: "2025 — máximo histórico", val: "+4,4%", desc: "Récord absoluto de PBI. Consumo +7,9 %. Inversión +16,4 %. Exportaciones +7,6 %. Crecimiento genuino sin emisión." },
    callout: "El PBI de Argentina alcanzó un máximo histórico en 2025. La inversión creció 16,4 % — el sector privado volvió a apostar por el país.",
    gradient: "linear-gradient(135deg, #004d40, #00695c)",
    imgBefore: "/logros/09-antes.png",
    imgAfter: "/logros/09-despues.png",
    altBefore: "Fábricas cerradas, recesión económica",
    altAfter: "Construcción y crecimiento económico en Argentina",
    img: "/images/banco/cordoba-25mayo-gabinete.jpg",
    imgAlt: "Milei y el gabinete en Córdoba celebrando el 25 de Mayo — economía en máximo histórico",
    reverse: true,
  },
  {
    num: "10",
    badge: "X — CEPO",
    title: "Se levantó el cepo: Argentina volvió a tener un mercado cambiario libre",
    paragraphs: [
      "Desde septiembre de 2019, la Argentina vivía con cepo cambiario — un sistema de controles que impedía a los ciudadanos comprar más de USD 200 por mes, prohibía a las empresas girar dividendos al exterior y generaba una brecha cambiaria que llegó a superar el 200 %. El cepo distorsionaba todos los precios de la economía, ahuyentaba la inversión extranjera y condenaba a los argentinos a vivir con un tipo de cambio artificial. Era una cárcel financiera que convertía al peso en una moneda inconvertible.",
      "El 14 de abril de 2025, el gobierno levantó el cepo cambiario y puso fin a casi seis años de restricciones. Se implementó un régimen de flotación administrada entre bandas de $1.000 y $1.400, con ampliación del 1 % mensual. Se eliminó el límite de USD 200, se suprimió el dólar blend y se permitió la libre distribución de utilidades a accionistas extranjeros. La operación contó con el respaldo de un nuevo acuerdo con el FMI por USD 20.000 millones, de los cuales USD 15.000 millones fueron de libre disponibilidad. Argentina volvió a tener un mercado cambiario libre por primera vez en seis años — sin corrida, sin crisis y sin devaluación abrupta.",
      "El impacto fue inmediato. Las empresas multinacionales que habían acumulado ganancias sin poder girarlas al exterior comenzaron a remitir dividendos por primera vez en años — una señal de normalidad que cambió la percepción del riesgo argentino en los directorios de todo el mundo. La brecha cambiaria se desplomó de más de 200 % a prácticamente cero. Los importadores dejaron de sobre-stockearse anticipando devaluaciones, normalizando los precios de los bienes importados. Los exportadores dejaron de adelantar o retrasar liquidaciones, alineando los flujos comerciales con la realidad productiva. El Banco Central, respaldado por los USD 15.000 millones del FMI de libre disponibilidad y un swap del Tesoro de EE.UU. por USD 20.000 millones — la primera vez que Washington activó el Exchange Stabilization Fund para un país latinoamericano — pudo defender la banda sin perder reservas. La Fase 3 del programa económico había comenzado.",
    ],
    before: { label: "2019-2025 — seis años de cepo", val: "USD 200", desc: "Máximo mensual para personas. Brecha cambiaria 200 %+. Prohibición de giro de dividendos. Tipo de cambio artificial." },
    after: { label: "14 de abril de 2025", val: "LIBRE", desc: "Flotación entre bandas. Sin límite de compra. Libre giro de dividendos. Respaldo FMI: USD 20.000 M." },
    callout: "De una cárcel financiera con USD 200 de tope a un mercado cambiario libre. Sin corrida, sin crisis, con respaldo del FMI por USD 20.000 M.",
    gradient: "linear-gradient(135deg, #311b92, #4527a0)",
    imgBefore: "/logros/10-antes.png",
    imgAfter: "/logros/10-despues.png",
    altBefore: "Colas en casas de cambio, cepo cambiario",
    altAfter: "Mercado financiero libre, pantallas de cotización",
    img: "/images/banco/congreso-apertura-2024.jpg",
    imgAlt: "Apertura de sesiones del Congreso 2024 — liberación del mercado cambiario",
  },
  {
    num: "11",
    badge: "XI — EXPORTACIONES",
    title: "Récord de exportaciones: USD 87.000 millones y superávit comercial histórico",
    paragraphs: [
      "Durante años, la Argentina fue un país que se cerraba al mundo. Las retenciones asfixiaban al campo, el cepo frenaba las importaciones de insumos y las regulaciones ahogaban la competitividad industrial. El resultado era un comercio exterior raquítico, una balanza energética deficitaria y empresas que no podían competir en los mercados globales. Argentina importaba energía en lugar de exportarla — un absurdo para un país con Vaca Muerta y los recursos naturales más abundantes del hemisferio sur.",
      "En 2025, las exportaciones argentinas alcanzaron USD 87.077 millones — el segundo máximo histórico y un récord en volumen físico — con un crecimiento del 9,3 % interanual. El superávit comercial cerró en USD 11.286 millones. La composición exportadora se diversificó: manufacturas agropecuarias USD 30.467 M (35 %), productos industriales USD 23.380 M (26,8 %), productos primarios USD 22.144 M (25,4 %) y combustibles y energía USD 11.086 M (12,7 %). Por primera vez, Argentina se consolidó como exportadora neta de energía. La soja, el petróleo, el oro y la carne lideraron el ingreso de divisas.",
      "El dato más revelador es el de energía: USD 11.086 millones en exportaciones de combustibles — un sector que apenas dos años antes era deficitario. Vaca Muerta explica el milagro: la producción shale creció 33 % interanual y Argentina ya es el productor de shale de más rápido crecimiento del mundo fuera de Estados Unidos. Pero no fue solo energía: las exportaciones mineras saltaron 30 % a USD 6.071 millones (récord histórico), la carne generó USD 904 millones adicionales y el oro aportó USD 939 millones más. El modelo exportador argentino dejó de depender exclusivamente del complejo sojero — ahora tiene cuatro motores: agro, energía, minería e industria. Los tres TLC firmados en 2025-2026 (EE.UU., Mercosur-UE, Mercosur-EFTA) abren mercados para más de mil millones de consumidores adicionales.",
    ],
    before: { label: "Argentina cerrada al mundo", val: "DÉFICIT", desc: "Retenciones asfixiantes. Importadora neta de energía. Cepo frenaba insumos. Comercio exterior raquítico." },
    after: { label: "2025 — récord", val: "USD 87.000 M", desc: "Exportaciones récord en volumen. Superávit USD 11.300 M. Exportadora neta de energía. Diversificación productiva." },
    callout: "USD 87.000 M en exportaciones — récord en volumen físico. Argentina pasó de importar energía a exportarla.",
    gradient: "linear-gradient(135deg, #01579b, #0277bd)",
    imgBefore: "/logros/11-antes.png",
    imgAfter: "/logros/11-despues.png",
    altBefore: "Puerto vacío, comercio paralizado",
    altAfter: "Puerto de Buenos Aires con contenedores, exportaciones récord",
    img: "/images/banco/mercosur-ue-firma.jpg",
    imgAlt: "Firma del acuerdo Mercosur-UE — apertura de mercados para exportaciones récord",
    reverse: true,
  },
  {
    num: "12",
    badge: "XII — CRÉDITO",
    title: "Volvió el crédito hipotecario: boom inmobiliario después de años de parálisis",
    paragraphs: [
      "El crédito hipotecario había desaparecido de la Argentina. Con una inflación de tres dígitos y tasas de interés impagables, ningún banco otorgaba préstamos para vivienda. Los argentinos que soñaban con la casa propia estaban condenados a alquilar o a juntar dólares durante décadas. El mercado inmobiliario estaba paralizado: las escrituras en la Ciudad de Buenos Aires habían caído a mínimos históricos y los precios se desplomaban.",
      "La estabilización macroeconómica trajo de vuelta lo que parecía imposible: el crédito hipotecario. En 2025 se otorgaron 44.305 préstamos hipotecarios — el cuarto mejor año desde que hay registros en 2004, solo detrás de los picos de 2017, 2018 y 2007. El ratio de hipotecas sobre escrituras superó el 15 %, duplicando el promedio de los últimos cinco años y alcanzando su nivel más alto desde 2018. Los precios de inmuebles en CABA subieron entre 5 % y 11 % interanual en los tres segmentos (pozo, a estrenar y usados). Miles de familias argentinas volvieron a acceder al sueño de la vivienda propia gracias a la estabilidad de precios y la baja de tasas.",
      "El efecto multiplicador del crédito hipotecario trasciende el mercado inmobiliario. Cada hipoteca activa una cadena: escrituración, mudanza, refacción, compra de muebles y electrodomésticos. En dos años, la proporción de depósitos privados destinada a préstamos a empresas y familias se duplicó — señal de que el sistema financiero dejó de ser un intermediario del déficit público para convertirse en lo que siempre debió ser: un canal de financiamiento productivo. La derogación de la ley de alquileres de 2020 completó el cuadro: la oferta de alquileres se triplicó y los precios cayeron 30 % en términos reales. Más crédito, más oferta, precios más accesibles — el mercado hizo en meses lo que décadas de regulación no lograron.",
    ],
    before: { label: "Crédito destruido por la inflación", val: "0", desc: "Sin crédito hipotecario. Tasas impagables. Mercado inmobiliario paralizado. El sueño de la casa propia, imposible." },
    after: { label: "2025 — boom hipotecario", val: "44.305", desc: "Hipotecas otorgadas. 4° mejor año desde 2004. Ratio hipotecas/escrituras 15 % (récord desde 2018). Precios +5-11 %." },
    callout: "De cero crédito hipotecario a 44.305 préstamos en un año. Miles de familias argentinas volvieron a acceder a la vivienda propia.",
    gradient: "linear-gradient(135deg, #33691e, #558b2f)",
    imgBefore: "/logros/12-antes.png",
    imgAfter: "/logros/12-despues.png",
    altBefore: "Cartel de venta sin interesados, mercado inmobiliario paralizado",
    altAfter: "Familia mudándose a su nueva casa, crédito hipotecario",
    img: "/images/banco/pacto-mayo-tucuman.jpg",
    imgAlt: "Pacto de Mayo en Tucumán — acuerdos estructurales que habilitaron la estabilidad y el crédito",
  },
  {
    num: "13",
    badge: "XIII — SALARIOS",
    title: "Los salarios le ganaron a la inflación: recuperación real del poder adquisitivo",
    paragraphs: [
      "La inflación de tres dígitos heredada en diciembre de 2023 había pulverizado los salarios. Los trabajadores cobraban y la plata no alcanzaba: los precios subían más rápido que cualquier paritaria. El poder adquisitivo del salario promedio había caído al nivel más bajo en décadas. Los empleados públicos, los informales y los jubilados eran los más golpeados. El sueldo se licuaba antes de llegar a fin de mes.",
      "La desinflación hizo lo que ninguna paritaria había logrado: devolver poder de compra real. En 2025, los salarios del sector privado registrado crecieron 4,8 % por encima de la inflación — la primera recuperación sostenida en años. Los salarios públicos subieron 3,8 % real. Desde mediados de 2024, el salario real encadena quince meses consecutivos de mejora. La estabilidad de precios rompió el círculo vicioso de inflación-paritaria-remarcación que destruía el bolsillo de los argentinos desde hacía dos décadas.",
      "La recuperación salarial se nota en lo cotidiano. Con inflación del 2 % mensual en lugar del 25 %, los argentinos pueden planificar: saben cuánto van a gastar el mes que viene, pueden comparar precios sin que cambien cada semana, y el sueldo alcanza para lo que antes era un lujo. Las cuotas fijas volvieron — algo impensable con inflación de tres dígitos. Los patentamientos de autos (+47,8 %), el boom del crédito hipotecario (44.305 préstamos) y el récord de pasajeros aéreos (50,6 millones) son la prueba de que el salario real se traduce en consumo real. El dato que más duele al relato opositor: la recuperación del salario privado no vino de paritarias más altas — vino de precios que dejan de subir.",
    ],
    before: { label: "Dic 2023 — salarios licuados", val: "–25%", desc: "Caída real acumulada. Inflación 200 %+ destruía el poder de compra. Remarcaciones diarias. Sueldos que no alcanzaban." },
    after: { label: "2025 — recuperación real", val: "+4,8%", desc: "Crecimiento real del salario privado. +3,8 % público. 15 meses consecutivos de mejora. Estabilidad de precios." },
    callout: "Por primera vez en años, los salarios le ganan a la inflación. 15 meses consecutivos de recuperación del poder adquisitivo.",
    gradient: "linear-gradient(135deg, #e65100, #f57c00)",
    imgBefore: "/logros/13-antes.png",
    imgAfter: "/logros/13-despues.png",
    altBefore: "Billete de mil pesos arrugado, salarios licuados",
    altAfter: "Familia en supermercado con carrito lleno, poder adquisitivo",
    img: "/images/banco/inauguracion-convertible-karina.jpg",
    imgAlt: "Milei e inauguration — una nueva era de estabilidad y recuperación del poder adquisitivo",
    reverse: true,
  },
  {
    num: "14",
    badge: "XIV — AVIACIÓN Y CONSUMO",
    title: "Récord absoluto de pasajeros aéreos y boom de ventas de autos",
    paragraphs: [
      "En 2025, más de 50,6 millones de personas volaron por los aeropuertos argentinos — el mayor registro en la historia de la aviación del país, superando todos los récords previos con un crecimiento del 12 % respecto a 2024. Argentina lideró el crecimiento del tráfico aéreo en toda América Latina con un alza interanual del 13,2 %. Los vuelos internacionales alcanzaron 15,9 millones de pasajeros — un 18,2 % más que el año anterior y por encima del récord de 2018. Los cielos abiertos, la desregulación de Sturzenegger y la entrada de nuevas aerolíneas low-cost transformaron un sector que estaba estancado.",
      "El boom del consumo se replicó en la industria automotriz: en 2025 se patentaron 612.178 vehículos 0 km — un salto del 47,8 % respecto a 2024. Fue el mejor registro en siete años, impulsado por el regreso del crédito automotor y la estabilidad de precios. El primer trimestre fue el mejor en la década. La reaparición del financiamiento, las tasas más bajas y la confianza del consumidor hicieron lo que años de controles de precios nunca lograron: que los argentinos vuelvan a comprar.",
      "Los cielos abiertos transformaron la aviación comercial. La desregulación de Sturzenegger permitió la entrada de nuevas aerolíneas low-cost, eliminó restricciones de rutas y liberó tarifas. El resultado: 15,9 millones de pasajeros volaron en rutas internacionales — un 18,2 % más que el récord previo de 2018, cuando la clase media todavía accedía al dólar sin restricciones. Argentina lideró el crecimiento aéreo de toda América Latina, superando a Brasil, México y Colombia. Aerolíneas Argentinas, sin subsidios del Tesoro por primera vez desde su re-estatización en 2008, amplió su flota y registró su primer resultado operativo positivo. El mercado de autos también marca un cambio estructural: los híbridos y eléctricos alcanzaron récord de patentamientos, anticipando la modernización del parque automotor. Consumo real, no artificial — financiado con crédito, no con emisión.",
    ],
    before: { label: "Argentina sin crédito y sin vuelos", val: "ESTANCADO", desc: "Aviación regulada, sin competencia. Ventas de autos en mínimos. Sin crédito automotor. Consumo destruido por inflación." },
    after: { label: "2025 — récord histórico", val: "50,6M", desc: "Pasajeros aéreos récord absoluto. 612K autos patentados (+47,8 %). Líderes en crecimiento aéreo de Latinoamérica." },
    callout: "50,6 millones de personas volaron en Argentina — récord absoluto. 612.000 autos 0 km patentados — el mejor año en siete.",
    gradient: "linear-gradient(135deg, #0097a7, #00838f)",
    imgBefore: "/logros/14-antes.png",
    imgAfter: "/logros/14-despues.png",
    altBefore: "Aeropuerto vacío, vuelos cancelados",
    altAfter: "Aeropuerto lleno de pasajeros, aviones despegando",
    img: "/images/banco/g7-italia-lideres.jpg",
    imgAlt: "Milei en el G7 Italia — Argentina de vuelta en la mesa de los países prósperos",
  },
  {
    num: "15",
    badge: "XV — MINERÍA",
    title: "Exportaciones mineras récord: litio, oro y cobre explotan",
    paragraphs: [
      "La minería argentina era un gigante dormido. Con las mayores reservas de litio del triángulo sudamericano, yacimientos de cobre de clase mundial y depósitos de oro sin explotar, el potencial era enorme — pero las regulaciones, la inseguridad jurídica y la Ley de Glaciares ahuyentaban toda inversión seria. Las exportaciones mineras llevaban años estancadas mientras Chile y Australia capturaban las inversiones que Argentina rechazaba.",
      "En 2025, las exportaciones mineras alcanzaron USD 6.071 millones — un salto del 30 % respecto a los USD 4.674 millones de 2024 y el mayor registro en la historia del sector. La producción de litio se disparó a 130.000 toneladas de carbonato de litio equivalente, un crecimiento del 75 % interanual. Argentina posee el 20 % de los recursos mundiales de litio y apunta a convertirse en el segundo productor global. El RIGI atrajo proyectos transformadores: Los Azules (cobre, USD 2.700M con McEwen y Stellantis), el mega-proyecto Vicuña de BHP y Lundin Mining (USD 12.000M+ en fases), Río Tinto en Salta (USD 2.724M en litio). En total, más de USD 10.000 millones en proyectos de litio y cobre están en distintas etapas de ejecución. Argentina se posiciona como la potencia minera del hemisferio sur.",
      "El RIGI fue el catalizador. Al ofrecer 30 años de estabilidad fiscal y aduanera para inversiones superiores a USD 200 millones, el régimen eliminó la incertidumbre que históricamente ahuyentaba al capital minero. En la conferencia PDAC 2026 en Toronto — la mayor feria minera del mundo — Argentina fue el país más buscado de América Latina. Los números proyectados son transformadores: las exportaciones mineras podrían superar los USD 12.000 millones para 2030, cuando los mega-proyectos de litio y cobre entren en plena producción. El acuerdo de minerales críticos con EE.UU. — firmado como parte del TLC bilateral — garantiza acceso preferencial al mercado norteamericano para el litio, cobre y tierras raras argentinas, posicionando al país como proveedor estratégico en la cadena de suministro de baterías, vehículos eléctricos y semiconductores. Argentina tiene los minerales que el mundo necesita — y ahora tiene las reglas para explotarlos.",
    ],
    before: { label: "Minería bloqueada", val: "BLOQUEADA", desc: "Inversión ahuyentada por regulación. Exportaciones estancadas. Litio y cobre sin explotar. Chile y Australia captaban todo." },
    after: { label: "2025 — récord histórico", val: "USD 6.071M", desc: "Exportaciones mineras +30 %. Litio +75 %. RIGI: USD 10.000M+ en proyectos. Argentina potencia minera del hemisferio sur." },
    callout: "Exportaciones mineras récord: USD 6.071 M (+30 %). Litio +75 %. Más de USD 10.000 M en proyectos de litio y cobre.",
    gradient: "linear-gradient(135deg, #5d4037, #795548)",
    imgBefore: "/logros/15-antes.png",
    imgAfter: "/logros/15-despues.png",
    altBefore: "Mina abandonada, inversión bloqueada",
    altAfter: "Operación minera moderna, litio en producción",
    img: "/images/banco/vaca-muerta-recorrida.jpg",
    imgAlt: "Milei recorre Vaca Muerta — producción de recursos naturales en máximos históricos",
    reverse: true,
  },
  {
    num: "16",
    badge: "XVI — IMPUESTOS",
    title: "La presión tributaria más baja en 19 años: menos impuestos, más libertad",
    paragraphs: [
      "La Argentina era un infierno fiscal. Más de 160 impuestos nacionales, provinciales y municipales asfixiaban a empresas y trabajadores. El impuesto PAÍS gravaba cada dólar que un argentino compraba. Las retenciones al campo castigaban al sector más productivo de la economía. Bienes Personales expulsaba el ahorro. Y encima de todo, el mayor impuesto de todos era invisible: la inflación — un impuesto de 2,6 puntos del PBI que licuaba los ingresos de los más pobres.",
      "El gobierno de Milei hizo lo que ninguno había logrado: bajar impuestos y mantener el superávit al mismo tiempo. Se eliminó el impuesto PAÍS (1,1 % del PBI). Se redujeron transitoriamente las retenciones al agro. Bienes Personales cayó 34,6 %. Y la gran revolución silenciosa: la desinflación eliminó el impuesto inflacionario en 2,6 puntos del PBI — la mayor reducción impositiva de todas. En total, la presión tributaria en 2025 fue la más baja en 19 años. La recaudación cayó 1 % real, pero el Estado gastó menos y mantuvo el superávit. Por primera vez en décadas, un gobierno argentino baja impuestos de verdad — y las cuentas cierran.",
      "La agenda de 2026 profundiza la estrategia: cada ministerio preparó 10 paquetes de reformas legislativas para presentación mensual, incluyendo reforma del Código Aduanero, reforma impositiva integral, defensa del consumidor y competencia. El objetivo es simplificar el sistema tributario de 160 impuestos a uno que quepa en una servilleta — como lo prometió Milei en campaña. Los derechos de exportación — el impuesto más distorsivo y el que más daño hace a la competitividad argentina — están en la mira para una reducción progresiva hasta su eventual eliminación. Mientras tanto, el blanqueo regularizó USD 32.000 millones en activos que ahora pagan impuestos normales, ensanchando la base imponible sin aumentar alícuotas. Menos impuestos, más contribuyentes, superávit fiscal sostenido — la fórmula opuesta a 100 años de historia fiscal argentina.",
    ],
    before: { label: "Infierno fiscal", val: "160+", desc: "Impuestos entre Nación, provincias y municipios. Impuesto PAÍS. Retenciones. Bienes Personales. Inflación como impuesto invisible." },
    after: { label: "2025 — mínimo en 19 años", val: "–2,5 pp", desc: "PBI devuelto en baja de impuestos. Sin impuesto PAÍS. Retenciones reducidas. Bienes Personales –34,6 %. Impuesto inflacionario eliminado." },
    callout: "La presión tributaria más baja en 19 años. Eliminó el impuesto PAÍS, redujo retenciones, bajó Bienes Personales — y mantuvo el superávit.",
    gradient: "linear-gradient(135deg, #827717, #9e9d24)",
    imgBefore: "/logros/16-antes.png",
    imgAfter: "/logros/16-despues.png",
    altBefore: "Formularios de impuestos, burocracia fiscal",
    altAfter: "Emprendedor trabajando libre, menos carga tributaria",
    img: "/images/banco/apertura-sesiones-2024.jpg",
    imgAlt: "Apertura de sesiones ordinarias 2024 — aprobación de las reformas tributarias",
  },
  {
    num: "17",
    badge: "XVII — BLANQUEO",
    title: "El blanqueo más exitoso de la historia: USD 32.000 millones regularizados",
    paragraphs: [
      "Argentina tenía USD 250.000 millones fuera del sistema financiero — el segundo stock más grande del mundo detrás de Rusia. Décadas de confiscaciones, corralitos, pesificaciones y cepos habían destruido la confianza del argentino en el sistema bancario. Los dólares se escondían en cajas de seguridad, colchones y cuentas en el exterior. Era dinero muerto que no financiaba inversión, no generaba crédito y no producía crecimiento.",
      "El Régimen de Regularización de Activos — lanzado bajo la Ley Bases — atrajo USD 32.151 millones en activos declarados en tres etapas. Más de 278.000 contribuyentes adhirieron voluntariamente. Se regularizaron USD 20.085 millones solo en efectivo en la primera etapa, 47.815 propiedades y miles de cuentas bancarias. El resultado fue transformador: los depósitos en dólares del sector privado se dispararon de USD 14.115 millones (diciembre 2023) a USD 37.000 millones — un crecimiento del 160 %, el mayor nivel desde el fin de la convertibilidad. Por primera vez en décadas, los argentinos perdieron el miedo a dejar los dólares en el banco. Ese dinero ahora financia hipotecas, créditos productivos e inversión.",
      "El éxito del blanqueo tiene una explicación más profunda que los incentivos fiscales: la confianza. Después del corralito de 2001, la pesificación forzada de Duhalde, el cepo de Cristina Kirchner y el reperfilamiento de Macri, los argentinos habían aprendido a esconder sus dólares como mecanismo de supervivencia. El gobierno de Milei rompió ese ciclo al demostrar que no iba a confiscar, no iba a pesificar y no iba a devaluar sorpresivamente. Los depósitos siguieron creciendo incluso después de que terminó el blanqueo — llegando a USD 38.300 millones en febrero 2026. La proporción de depósitos privados destinada a préstamos a empresas y familias se duplicó en dos años. Los dólares del colchón empezaron a hacer lo que siempre debieron hacer: trabajar dentro del sistema financiero, financiando hipotecas, créditos productivos y la economía real.",
    ],
    before: { label: "Dólares escondidos — USD 250.000 M", val: "USD 250.000 M", desc: "Fuera del sistema. 2° stock mundial de dólares no bancarizados. Décadas de desconfianza. Dinero muerto." },
    after: { label: "Blanqueo récord", val: "USD 32.000 M", desc: "Regularizados. 278K contribuyentes. Depósitos +160 %. USD 37.000 M en bancos — máximo desde la convertibilidad." },
    callout: "USD 32.000 M regularizados — el blanqueo más exitoso de la historia argentina. Los depósitos en dólares crecieron 160 %.",
    gradient: "linear-gradient(135deg, #1a237e, #1565c0)",
    imgBefore: "/logros/17-antes.png",
    imgAfter: "/logros/17-despues.png",
    altBefore: "Caja fuerte con dólares escondidos, economía informal",
    altAfter: "Sistema bancario moderno, depósitos creciendo",
    img: "/images/banco/trump-casablanca-oval.jpg",
    imgAlt: "Milei con Trump en Casa Blanca — confianza financiera internacional restaurada",
    reverse: true,
  },
  {
    num: "18",
    badge: "XVIII — CAMPO",
    title: "Cosecha récord: 160 millones de toneladas y el campo vuelve a ser motor",
    paragraphs: [
      "El campo argentino — el sector más productivo y competitivo de la economía — llevaba años asfixiado por retenciones confiscatorias, intervención estatal en los mercados de granos, cupos de exportación y cepo cambiario. En 2023, la sequía más severa en 60 años destruyó la cosecha: la producción se desplomó a 80 millones de toneladas, la peor en una década. El ingreso de divisas del agro se evaporó, agravando la crisis de reservas.",
      "La campaña 2025/26 proyecta una cosecha de 158 a 160 millones de toneladas — la más grande de la historia argentina. El trigo alcanzará 29,5 millones de toneladas, el maíz 62 millones y el girasol 6,6 millones (récord del siglo). Las exportaciones del complejo agroindustrial generarán USD 34.500 millones en divisas. El volumen exportado podría llegar a 113 millones de toneladas — también récord. La eliminación de cupos, la reducción transitoria de retenciones, la unificación cambiaria y la estabilidad macroeconómica devolvieron previsibilidad al sector. El campo argentino volvió a producir a su máximo potencial.",
      "El campo es el termómetro de confianza de la economía argentina. Cuando el productor ve un tipo de cambio unificado, sin cepo, sin cupos de exportación, con retenciones en baja y estabilidad macro, invierte en tecnología, expande la frontera agrícola y maximiza rindes. El resultado se ve en los números: la soja rinde 48 millones de toneladas pese a menor superficie sembrada (indicando mayor productividad por hectárea), y el maíz se consolida como el cultivo estrella con 62 millones de toneladas, desplazando a la soja como principal generador de divisas agrícolas. El TLC con Estados Unidos abrió una cuota de 100.000 toneladas de carne bovina sin arancel — la mayor concesión cárnica que Washington otorgó jamás. El acuerdo Mercosur-UE eliminará aranceles para el 92 % de las exportaciones agroindustriales hacia un mercado de 450 millones de europeos. El campo no solo recuperó oxígeno — tiene por delante la mejor década de su historia.",
    ],
    before: { label: "2023 — sequía y asfixia", val: "80M tn", desc: "Peor cosecha en una década. Retenciones confiscatorias. Cupos de exportación. Cepo. El campo ahogado." },
    after: { label: "2025/26 — cosecha récord", val: "160M tn", desc: "Mayor cosecha de la historia. Exportaciones USD 34.500 M. 113M tn exportadas. Sin cupos. Retenciones reducidas." },
    callout: "De 80 a 160 millones de toneladas: la mayor cosecha de la historia argentina. USD 34.500 M en divisas del agro.",
    gradient: "linear-gradient(135deg, #2e7d32, #43a047)",
    imgBefore: "/logros/18-antes.png",
    imgAfter: "/logros/18-despues.png",
    altBefore: "Campo seco por sequía, tierra agrietada",
    altAfter: "Cosecha abundante, campo verde productivo",
    img: "/images/banco/mercosur-efta.jpg",
    imgAlt: "Acuerdo Mercosur-EFTA — nuevos mercados para los 160 millones de toneladas de cosecha récord",
  },
  {
    num: "19",
    badge: "XIX — CONFIANZA",
    title: "Argentina volvió a los mercados: bonos, acciones y confianza inversora",
    paragraphs: [
      "Cuando Milei asumió, los bonos argentinos cotizaban a precio de default — entre 20 y 30 centavos por dólar. El riesgo país superaba los 2.000 puntos. Ningún inversor institucional serio consideraba a la Argentina como destino de capital. El país estaba excluido de los mercados internacionales de crédito desde 2019. Las acciones argentinas cotizaban a valuaciones de país en guerra.",
      "En dos años, los bonos soberanos argentinos en dólares rindieron entre 15 % y 20 % en moneda dura en 2025 — entre las mejores performances de deuda emergente del mundo. El riesgo país perforó los 500 puntos en enero 2026. Argentina retornó a los mercados internacionales con colocaciones exitosas a tasas históricamente bajas. El S&P Merval alcanzó récords nominales impulsado por el rally post-electoral. Los ADRs argentinos atrajeron flujos récord de fondos extranjeros. El RIGI canalizó USD 25.000 millones en proyectos aprobados con USD 60.000 millones más en pipeline. En total, se anunciaron inversiones por más de USD 55.000 millones. Argentina dejó de ser sinónimo de default para convertirse en la historia de transformación más seguida por los mercados globales.",
      "Las elecciones legislativas de octubre 2025 fueron el catalizador final. La victoria de La Libertad Avanza con el 40,7 % a nivel nacional — incluyendo la provincia de Buenos Aires, bastión del peronismo desde 1987 — le dio al gobierno el tercio legislativo para blindar vetos y quedó a 22 votos de la mayoría simple. Los mercados leyeron el resultado como una garantía de continuidad del programa económico: bonos y acciones se dispararon en las sesiones siguientes. La Argentina Week en Nueva York reunió a 300 líderes empresariales globales y cerró con USD 16.150 millones en inversiones confirmadas. Jamie Dimon inauguró el evento desde la nueva torre de JP Morgan. Fondos que nunca habían mirado a la Argentina comenzaron a abrir posiciones. La pregunta en Wall Street ya no es si Argentina va a hacer default — es cuánto se van a apreciar los activos argentinos cuando el upgrade a mercado emergente se materialice.",
    ],
    before: { label: "País paria financiero", val: "20¢", desc: "Bonos a precio de default. Riesgo país 2.000+. Excluida de mercados internacionales. Valuaciones de país en guerra." },
    after: { label: "2025-2026 — transformación", val: "USD 55.000 M+", desc: "Inversiones anunciadas. Bonos +20 % USD. Riesgo país <500. RIGI USD 25.000 M aprobados. Argentina volvió al mapa." },
    callout: "De bonos a 20 centavos a riesgo país bajo 500. USD 55.000 M en inversiones anunciadas. Argentina es la historia de mercados emergentes.",
    gradient: "linear-gradient(135deg, #006064, #00838f)",
    imgBefore: "/logros/19-antes.png",
    imgAfter: "/logros/19-despues.png",
    altBefore: "Pantalla de mercados en rojo, crisis financiera",
    altAfter: "Bolsa en alza, inversión fluyendo a Argentina",
    img: "/images/banco/miami-cumbre-trump-lideres.jpg",
    imgAlt: "Cumbre de líderes en Miami — Argentina de vuelta en el mapa financiero mundial",
    reverse: true,
  },
];

export const logrosSectionHeader = {
  sectionTitle: "LOGROS DE GESTIÓN",
  sectionIntro: "El 10 de diciembre de 2023, Argentina estaba en crisis terminal. La inflación corría al 1 % diario, el Banco Central tenía reservas negativas de USD 13.000 M, el déficit consolidado era de 15 % del PBI, y los indicadores sociales eran peores que en 2001 — la peor herencia de la historia. 19 batallas. 19 transformaciones. Este es el antes y el después.",
} as const;
