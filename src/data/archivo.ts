// ── Archivo Data ─────────────────────────────────────────

export interface Libro {
  year: string;
  title: string;
  coauthors?: string;
  publisher?: string;
  highlight?: boolean;
  desc?: string;
  cover?: string;
}

export interface Etapa {
  label: string;
  desc: string;
  books: Libro[];
}

export interface Paper {
  topic: string;
  title: string;
  coauthors?: string;
  venue?: string;
  desc?: string;
}

export interface Discurso {
  date: string;
  title: string;
  location: string;
  desc: string;
  keynote?: boolean;
  frase?: string;
  duration?: string;
  themes?: string[];
  videoId?: string;
}

export interface Entrevista {
  date: string;
  outlet: string;
  journalist?: string;
  desc: string;
  highlight?: boolean;
  impact?: string;
  duration?: string;
  videoId?: string;
}

export interface Influencia {
  school: string;
  names: string;
  keyWork?: string;
}

// ── Data ────────────────────────────────────────────────

export const etapas: Etapa[] = [
  {
    label: "Etapa Técnica / Académica",
    desc: "pre-2014",
    books: [
      { year: "2013", title: "Política Económica Contrarreloj", coauthors: "Giacomini, Ferrelli Mazza", publisher: "Grupo Unión", cover: "/images/books/contrarreloj.jpg", desc: "Manual de diagnóstico y propuestas de política económica para salir del cepo cambiario y volver a crecer. Milei, junto a Diego Giacomini y Nicolás Ferrelli Mazza, analiza los síntomas de la enfermedad económica argentina — inflación reprimida, brecha cambiaria, caída de reservas — y prescribe un programa de estabilización basado en disciplina fiscal, liberalización del tipo de cambio y eliminación de controles de precios. El libro fue profético: las medidas que proponía en 2013 son esencialmente las que Milei implementó como presidente en 2024." },
      { year: "2014", title: "Lecturas de Economía en Tiempos del Kirchnerismo", publisher: "Grupo Unión", cover: "/images/books/lecturas-kirchnerismo.webp", desc: "Compilación de artículos y análisis económicos escritos durante la década kirchnerista (2003-2015). Milei desmonta sistemáticamente la narrativa oficial de «crecimiento con inclusión social», demostrando que el boom de consumo se financió con emisión, distorsión de precios relativos y destrucción de capital. El libro anticipa con precisión la crisis que estallaría años después: déficit fiscal creciente, reservas declinantes y una inflación que el INDEC intervenido por Guillermo Moreno ocultaba con estadísticas falsificadas." },
    ],
  },
  {
    label: "Intervención Económica",
    desc: "2015–2020",
    books: [
      { year: "2015", title: "Libertad, Libertad, Libertad", coauthors: "Diego Giacomini", publisher: "Galerna", cover: "/images/books/libertad-libertad.webp", desc: "Co-escrito con Diego Giacomini, este libro es un manifiesto por la libertad individual y económica. Milei y Giacomini argumentan que las cadenas que impiden el crecimiento argentino son las regulaciones, los impuestos confiscatorios y la inflación — todas formas de coerción estatal que violan la libertad de los ciudadanos. El título triplicado enfatiza que la libertad es el único camino: libertad económica, libertad política y libertad individual." },
      { year: "2015", title: "El Retorno al Sendero de la Decadencia Argentina", publisher: "Grupo Unión", cover: "/images/books/retorno-sendero.webp", desc: "Análisis del gobierno de Mauricio Macri como continuidad de la decadencia argentina, no como ruptura. Milei argumenta que el gradualismo fiscal de Macri — mantener el déficit mientras se financiaba con deuda externa — era una bomba de tiempo idéntica a la de los 90. Predice que la estrategia terminará en crisis de balanza de pagos y corrida cambiaria, exactamente lo que ocurrió en 2018. El libro consolida la posición de Milei como el economista más crítico tanto del kirchnerismo como del macrismo." },
      { year: "2017", title: "Desenmascarando la Mentira Keynesiana", publisher: "Grupo Unión", cover: "/images/books/mentira-keynesiana.webp", desc: "Ataque frontal contra la macroeconomía keynesiana y su influencia en la política económica argentina. Milei desmonta la curva de Phillips, la paradoja del ahorro, el multiplicador fiscal y la trampa de liquidez — los cuatro pilares teóricos que justificaron décadas de gasto público descontrolado en Argentina. Recurre a Friedman, Lucas Jr. y Hayek para demostrar que la demanda agregada es una construcción artificial que oculta las verdaderas causas de las recesiones: la manipulación monetaria y la distorsión de la tasa de interés." },
      { year: "2020", title: "Pandenomics", cover: "/images/books/pandenomics.webp", desc: "Escrito en plena cuarentena de Alberto Fernández — la más larga y estricta del mundo — Milei analiza las consecuencias económicas de los lockdowns y la megarrecesión global provocada por las políticas sanitarias. Argumenta que los gobiernos usaron la pandemia como pretexto para expandir el Estado a niveles sin precedentes en tiempos de paz: emisión masiva, prohibición de trabajar, controles de precios y destrucción del tejido productivo. Anticipa la ola inflacionaria mundial de 2021-2023 como consecuencia directa de la expansión monetaria pandémica. El libro se convirtió en el manifiesto intelectual de quienes se oponían a las restricciones." },
    ],
  },
  {
    label: "Etapa Política / Presidencial",
    desc: "2021–presente",
    books: [
      { year: "2022", title: "El Fin de la Inflación", publisher: "Planeta", highlight: true, cover: "/images/books/fin-inflacion.webp", desc: "La propuesta más audaz de la campaña presidencial: cerrar el Banco Central de la República Argentina y dolarizar la economía. Milei argumenta que mientras exista un banco central con capacidad de emitir, ningún político podrá resistir la tentación de financiar el déficit con la maquinita. Propone una transición ordenada: canje voluntario de pesos por dólares al tipo de cambio de mercado, eliminación del curso forzoso y competencia de monedas. El libro generó el debate económico más intenso de la campaña 2023 y estableció a Milei como el único candidato con un programa económico técnicamente detallado." },
      { year: "2024", title: "El Camino del Libertario", publisher: "Deusto (Planeta)", highlight: true, desc: "Autobiografía intelectual y manifiesto político publicado ya como presidente. Milei narra su conversión del mainstream neoclásico a la Escuela Austríaca, su trayectoria como economista mediático, la construcción de La Libertad Avanza y los primeros meses de gobierno. El libro se convirtió en bestseller internacional con ediciones en español, inglés, portugués e italiano. Publicado por Deusto (grupo Planeta), fue presentado en la Feria del Libro de Buenos Aires con una cola de más de 10 cuadras. Es el libro político argentino más vendido internacionalmente desde Evita de Tomás Eloy Martínez.", cover: "/images/books/camino-libertario.webp" },
      { year: "2024", title: "Capitalismo, Socialismo y la Trampa Neoclásica", publisher: "Planeta", highlight: true, desc: "El libro más técnico y ambicioso de Milei. Presentado en el Luna Park ante 8.000 personas con un show musical de apertura, el argumento central es que la economía neoclásica — con su modelo de competencia perfecta — terminó siendo funcional al socialismo al justificar la intervención estatal ante supuestas «fallas de mercado». Milei demuestra que los rendimientos crecientes a escala no son un teorema de monopolio natural, y que la competencia debe entenderse como un proceso dinámico de descubrimiento empresarial (Kirzner), no como un estado estático de equilibrio. El libro anticipa el paper Milei-Reidel presentado en Davos 2026.", cover: "/images/books/capitalismo-trampa.webp" },
    ],
  },
];

export const papers: Paper[] = [
  { topic: "Reservas", title: "Política Fiscal y Nivel Óptimo de Reservas en Dos Modelos para una Economía sin Fricciones y Tipo de Cambio Fijo", desc: "Milei construye dos modelos formales para determinar el nivel óptimo de reservas internacionales bajo tipo de cambio fijo: uno con acceso a mercados de capitales y otro sin él. El paper demuestra que la política fiscal determina endógenamente la necesidad de reservas — cuanto mayor es el déficit, más reservas necesita el banco central para defender la paridad, hasta un punto en que la defensa se vuelve insostenible. El resultado anticipó con precisión la dinámica que destruyó la convertibilidad en 2001 y el crawling peg en 2023-2024." },
  { topic: "Tipo de cambio", title: "Real Exchange Rate Targeting: ¿Trilema Monetario o Control de Capitales?", desc: "Análisis formal del trilema monetario (tipo de cambio fijo, libre movilidad de capitales, política monetaria independiente — solo dos de tres son posibles) aplicado a economías emergentes como Argentina. Milei demuestra que los intentos de targetear el tipo de cambio real sin resignar política monetaria independiente conducen inevitablemente a controles de capital — exactamente el mecanismo que produjo el cepo cambiario en 2011 y 2019. El paper es la base teórica de su posterior defensa de la flotación libre." },
  { topic: "Monetarismo", title: "Colección de cuatro ensayos: El Rol de las Reservas, Independencia del BCRA, La Visión Monetarista de la Inflación, La Inflación un Fenómeno Siempre Monetario", desc: "Serie de cuatro ensayos interconectados que construyen la visión monetaria completa de Milei. El primero analiza la relación entre reservas y sostenibilidad del tipo de cambio. El segundo argumenta por qué la independencia del BCRA es insuficiente sin un ancla fiscal. El tercero desarrolla la tesis friedmaniana de la inflación como fenómeno puramente monetario con datos argentinos de 1935 a 2015. El cuarto cierra con una refutación de las teorías estructuralistas e inercialistas que dominaban el debate argentino. La serie fue la columna vertebral intelectual de su programa antiinflacionario como presidente." },
  { topic: "Competitividad", title: "El Termómetro de Riqueza: La \"q\" de Tobin, Competitividad y Crecimiento", coauthors: "Kerst", venue: "Jornadas Internacionales de Finanzas Públicas, UNC (2015)", desc: "Paper co-escrito con Kerst que propone la q de Tobin — el ratio entre el valor de mercado de las empresas y el costo de reposición de sus activos — como indicador de competitividad y potencial de crecimiento. Cuando q > 1, la inversión es rentable y la economía crece; cuando q < 1, el capital se destruye. Milei y Kerst demuestran que la q de Tobin argentina cayó sistemáticamente durante los años del kirchnerismo, reflejando la destrucción de valor provocada por la presión impositiva, las regulaciones y la incertidumbre institucional. Presentado en las Jornadas Internacionales de Finanzas Públicas de la Universidad Nacional de Córdoba." },
  { topic: "Reforma monetaria", title: "El Nuevo BCRA y la Reforma Monetaria", venue: "2015", desc: "Propuesta de reforma integral del Banco Central de la República Argentina publicada durante el primer año de gobierno de Macri. Milei argumenta que la independencia del BCRA es condición necesaria pero no suficiente: sin una regla fiscal vinculante que prohíba el financiamiento monetario del déficit, cualquier banco central termina subordinado al Tesoro. Propone tres reformas: prohibición constitucional de financiamiento al fisco, eliminación del mandato de empleo (dejando solo estabilidad de precios) y adopción de un régimen de metas de agregados monetarios. El paper anticipó las políticas que Milei implementaría como presidente: emisión cero, cierre de la canilla fiscal y eliminación del cuasifiscal." },
  { topic: "Economía abierta", title: "Ensayos Monetarios para Economías Abiertas: El Caso Argentino", venue: "Revista Actualidad Económica, UNC (2017)", desc: "Publicado en la Revista de Actualidad Económica de la Universidad Nacional de Córdoba, este paper extiende los modelos monetarios al caso de una economía abierta como Argentina. Analiza cómo los flujos de capitales, la cuenta corriente y los términos de intercambio interactúan con la política monetaria doméstica. Milei demuestra que en una economía bimonetaria (peso/dólar) con restricciones cambiarias, la demanda de dinero doméstico es inherentemente inestable — un argumento técnico que fundamentó su propuesta de dolarización y, más tarde, su decisión de levantar el cepo en abril de 2025." },
  { topic: "Política económica", title: "Los Molinos de Viento: Los Falsos Dilemas al Acecho del Crecimiento y el Bienestar", desc: "Ensayo de largo aliento donde Milei identifica y desmonta los falsos dilemas que paralizan la política económica argentina: crecimiento vs. distribución, eficiencia vs. equidad, mercado interno vs. exportaciones, corto plazo vs. largo plazo. Argumenta que estos dilemas son construcciones artificiales de la economía neoclásica y keynesiana, diseñadas para justificar la intervención estatal. Usando la teoría austríaca del proceso de mercado (Mises, Hayek, Kirzner), demuestra que un marco institucional basado en la propiedad privada y la libre competencia resuelve automáticamente las supuestas tensiones — porque lo justo y lo eficiente son dos caras de la misma moneda." },
];

export const discursos: Discurso[] = [
  {
    date: "DIC 2023",
    title: "Discurso de Asunción Presidencial",
    location: "Escalinatas del Congreso de la Nación, Buenos Aires",
    duration: "~45 minutos",
    desc: "Desde las escalinatas del Congreso, Milei diagnosticó un siglo de decadencia argentina y anunció un ajuste fiscal de 5 puntos del PBI por la vía del shock, rechazando el gradualismo que había fracasado durante décadas. El discurso, pronunciado en coincidencia con la fiesta de Hanukkah, utilizó la metáfora de la luz sobre la oscuridad para marcar el inicio de una nueva era liberal. La multitud que desbordó la Plaza del Congreso respondió con ovaciones sostenidas ante cada promesa de reforma estructural.",
    frase: "Hoy comienza una nueva era en Argentina... damos por terminada una larga y triste historia de decadencia y declive.",
    themes: ["Ajuste fiscal", "Shock económico", "Liberalismo"],
    videoId: "0i2jpFaXbvM",
    keynote: true,
  },
  {
    date: "ENE 2024",
    title: "Foro Económico Mundial — Davos I",
    location: "54.ª Reunión Anual del WEF, Davos, Suiza",
    desc: "Con la frase inaugural \"Occidente está en peligro\", Milei lanzó ante la elite global de Davos una defensa radical del capitalismo de libre mercado y un ataque frontal al colectivismo, la justicia social y la economía neoclásica. Argumentó que los rendimientos crecientes a escala — ilustrados por la fábrica de alfileres de Adam Smith — invalidan el modelo de competencia perfecta y que la economía neoclásica terminó siendo funcional al socialismo al justificar la intervención estatal. El discurso generó una ovación de pie inédita en el WEF y fue reproducido por medios de todo el mundo, convirtiendo a Milei en el orador más comentado del foro.",
    frase: "Occidente está en peligro. Y está en peligro porque quienes deberían defender los valores de Occidente se encuentran cooptados por una visión del mundo que conduce al socialismo.",
    themes: ["Capitalismo", "Anti-colectivismo", "Economía neoclásica"],
    videoId: "yu2ERAfvroA",
    keynote: true,
  },
  {
    date: "FEB 2024",
    title: "CPAC Washington 2024",
    location: "Conferencia Política de Acción Conservadora, Washington D.C.",
    desc: "En la conferencia conservadora más importante de EE.UU., Milei profundizó los argumentos técnicos de Davos con una deconstrucción sistemática de los cuatro supuestos fallos de mercado neoclásicos: monopolio, bienes públicos, externalidades e información asimétrica. Demostró que el concepto de monopolio natural es una falacia teórica y que la competencia debe entenderse como un proceso dinámico de descubrimiento empresarial, no como un estado estático de equilibrio. El público conservador norteamericano interrumpió con aplausos repetidamente, especialmente al escuchar la crítica al intervencionismo estatal.",
    themes: ["Fallos de mercado", "Monopolio natural", "Competencia dinámica"],
    videoId: "20vQQyF-eVs",
  },
  {
    date: "JUN 2024",
    title: "Instituto Liberal de Praga",
    location: "Praga, República Checa",
    desc: "En el Instituto Liberal de Praga, Milei describió su programa como \"el mayor ajuste fiscal de la historia de la humanidad\" y narró su conversión intelectual a la Escuela Austríaca. Reveló que junto a Demian Reidel estaban reescribiendo la teoría económica para resolver el problema de los rendimientos crecientes, con la aspiración de competir por el Nobel de Economía. Comparó la estrategia argentina con el modelo irlandés de los 80 y detalló las 3.200 reformas pendientes para completar la transformación estructural.",
    frase: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teoría económica.",
    themes: ["Ajuste fiscal", "Escuela Austríaca", "Modelo irlandés"],
    videoId: "-ZjxbIyVPjc",
  },
  {
    date: "SEP 2024",
    title: "Asamblea General de la ONU",
    location: "79.º Período de Sesiones, AGNU, Nueva York",
    desc: "Ante la Asamblea General de Naciones Unidas, Milei alertó sobre el fracaso de la ONU en su misión original de preservar la paz y la libertad, y rechazó frontalmente la Agenda 2030 como un instrumento de planificación colectivista supranacional. Presentó a Argentina como ejemplo de que la transformación radical es posible y definió la vida, la libertad y la propiedad privada como los tres pilares inamovibles de su política exterior. El discurso dividió a la sala: delegaciones occidentales aplaudieron mientras representantes de regímenes autoritarios abandonaron el recinto.",
    frase: "No soy político, soy un economista liberal libertario que jamás tuvo la ambición de hacer política.",
    themes: ["ONU", "Agenda 2030", "Política exterior"],
    videoId: "-Hlzgio72lI",
    keynote: true,
  },
  {
    date: "ENE 2025",
    title: "Foro Económico Mundial — Davos II",
    location: "WEF, Davos, Suiza",
    desc: "Con la declaración \"Maquiavelo ha muerto\", Milei argumentó que la eficiencia sin moral es tiranía, introduciendo el concepto de eficiencia dinámica de Jesús Huerta de Soto como superación del utilitarismo neoclásico. Fundamentó en Rothbard y su Ética de la Libertad que los principios morales deben prevalecer sobre el cálculo de eficiencia como criterio de política pública. Cerró anunciando la formación de una alianza internacional de naciones libres junto a Trump, Musk, Meloni, Bukele, Orbán y Netanyahu, recibiendo una ovación prolongada del auditorio.",
    frase: "Maquiavelo ha muerto. La eficiencia sin moral es tiranía.",
    themes: ["Eficiencia dinámica", "Ética libertaria", "Alianza internacional"],
    videoId: "0JKbMW7aMXA",
    keynote: true,
  },
  {
    date: "FEB 2025",
    title: "CPAC Washington 2025",
    location: "Washington D.C.",
    desc: "Milei proclamó un \"punto de inflexión en la historia\" y formalizó el concepto de una \"internacional de derecha\" como alianza de naciones libres contra el colectivismo global. Trazó un paralelo entre su trayectoria y la de Trump como outsiders que desafiaron al establishment político, y respaldó la iniciativa DOGE de Musk contra la resistencia burocrática del Estado profundo. El momento más emotivo fue su reclamo por la familia Bibas secuestrada por Hamás y su condena al terrorismo, cerrando con el llamado a que \"el bien se organice\" frente al mal organizado.",
    themes: ["Internacional de derecha", "DOGE", "Anti-terrorismo"],
  },
  {
    date: "2025",
    title: "Premio Milton Friedman",
    location: "Roma, Italia",
    desc: "El discurso más técnico de su presidencia: una clase magistral de historia del pensamiento económico al recibir el premio que lleva el nombre de su primer referente intelectual. Milei recorrió las contribuciones de Friedman — la función de consumo permanente, la naturaleza monetaria de la inflación, la demolición de la curva de Phillips — y las conectó con los modelos de crecimiento endógeno de Romer y Lucas Jr. El auditorio en Roma, compuesto por economistas y académicos europeos, reconoció la profundidad técnica con una recepción excepcional para un jefe de Estado en ejercicio.",
    themes: ["Milton Friedman", "Pensamiento económico", "Crecimiento endógeno"],
    videoId: "2GONqA3nySQ",
    keynote: true,
  },
  {
    date: "SEP 2025",
    title: "Asamblea General de la ONU II",
    location: "80.º Período de Sesiones, AGNU, Nueva York",
    desc: "En su segundo discurso ante la AGNU, Milei propuso cuatro principios concretos para reformar las Naciones Unidas: soberanía nacional, subsidiariedad internacional, diligencia institucional y simplificación normativa. Reiteró el reclamo de soberanía sobre las Islas Malvinas, denunció la detención del gendarme Nahuel Gallo por el régimen de Maduro en Venezuela y exigió la liberación de los rehenes en Gaza. El discurso marcó un endurecimiento de la posición argentina en foros multilaterales, consolidando la doctrina de política exterior basada en libertad y propiedad.",
    themes: ["Reforma ONU", "Malvinas", "Venezuela"],
  },
  {
    date: "ENE 2026",
    title: "Foro Económico Mundial — Davos III",
    location: "WEF, Davos, Suiza",
    desc: "Tercer Special Address consecutivo ante el WEF — ningún líder latinoamericano lo había logrado. Milei proclamó que 'el mundo ha comenzado a despertar' y presentó los resultados de dos años de gestión: PBI en máximo histórico, inflación de 200% a 30%, pobreza de 57% a 27%, cepo levantado, tres acuerdos de libre comercio firmados. Defendió el capitalismo como el único sistema que genera prosperidad y trazó un paralelismo entre el renacer argentino y el giro global hacia las ideas de la libertad. Previamente, mantuvo un encuentro con CEOs y altos directivos de compañías internacionales. Junto a Trump, firmó el Board of Peace — 19 países comprometidos con la resolución pacífica de conflictos.",
    frase: "2026 es el año en el que traigo buenas noticias: el mundo ha comenzado a despertar.",
    themes: ["Capitalismo", "Resultados de gestión", "Board of Peace"],
    keynote: true,
  },
  {
    date: "MAR 2026",
    title: "Apertura de Sesiones Ordinarias 2026",
    location: "Congreso de la Nación, Buenos Aires",
    desc: "Ante la Asamblea Legislativa, Milei presentó el balance más completo de su gestión: PBI récord (+4,4%), inflación de 200% a 30%, pobreza de 57% a 27%, cepo eliminado, tres TLC firmados, RIGI con USD 25.000M aprobados, reforma laboral sancionada. Anunció el 'año calendario de la reforma': cada ministerio preparó 10 paquetes de proyectos legislativos para presentación mensual — reformas del Código Civil y Comercial, Código Aduanero, defensa del consumidor, competencia e impositivo. Ratificó la alianza estratégica con EE.UU. como política de Estado y presentó al RIGI como el mayor logro de la gestión.",
    frase: "Robar está mal, pero robarle el pan de la boca a los más vulnerables, haciéndolos esclavos para amasar poder, excede a cualquier adjetivo.",
    themes: ["Balance de gestión", "Reformas 2026", "RIGI", "Alianza con EE.UU."],
    keynote: true,
  },
];

export const entrevistas: Entrevista[] = [
  {
    date: "SEP 2023",
    outlet: "Tucker Carlson",
    desc: "Tucker Carlson viajó a Buenos Aires semanas antes de la elección presidencial para entrevistar al candidato que estaba sacudiendo la política argentina. Milei expuso su plan de dolarización, cierre del Banco Central y eliminación del socialismo institucionalizado, además de cuestionar la agenda climática y dar un consejo directo a Trump sobre cómo enfrentar al deep state. La entrevista acumuló más de 410 millones de visualizaciones en X (Twitter), fue compartida personalmente por Elon Musk y se convirtió en una de las entrevistas políticas más vistas en la historia de las plataformas digitales.",
    impact: "410M+ visualizaciones en X. Compartida por Elon Musk. Una de las entrevistas políticas más vistas de la historia digital.",
    videoId: "0a1NUl75sXU",
    highlight: true,
  },
  {
    date: "ABR 2024",
    outlet: "TIME Magazine",
    journalist: "Vera Bergengruen",
    desc: "Entrevista en profundidad en la Casa Rosada bajo el titular \"Make Argentina Great Again\", en la que Milei recorrió la historia argentina desde su apogeo en 1895 hasta el peronismo como origen del populismo latinoamericano. Detalló su estrategia de shock vs. gradualismo, los planes de dolarización, la influencia de la Constitución de 1853 inspirada en Alberdi, y su relación personal con Trump y Musk. La pieza resultó en la portada de TIME y la inclusión de Milei en la lista de las 100 personas más influyentes del mundo en 2024, el primer presidente argentino en recibir esa distinción.",
    impact: "Portada de TIME. Listado en TIME 100 Most Influential People 2024 — \"Make Argentina Great Again\".",
    highlight: true,
  },
  {
    date: "MAY 2024",
    outlet: "BBC",
    journalist: "Ione Wells",
    duration: "+20 minutos",
    desc: "En una entrevista tensa de más de veinte minutos, Milei defendió el ajuste económico y protagonizó un intercambio viral cuando la periodista Ione Wells lo confrontó con el precio de la leche — momento que recorrió las redes globales. Explicó la estrategia geopolítica de Argentina con EE.UU., Israel y China, elogió a Margaret Thatcher como referente, y abordó la cuestión Malvinas con una posición matizada: la visita de David Cameron no constituía provocación, y la recuperación de soberanía sería un proceso diplomático de largo plazo.",
    videoId: "-2tLkvw-1f4",
  },
  {
    date: "NOV 2024",
    outlet: "Lex Fridman Podcast #453",
    duration: "~2 horas",
    desc: "Grabada un día después de la gala de Trump en Mar-a-Lago, esta conversación de casi dos horas reveló en detalle la conversión intelectual de Milei: contó cómo leyendo a Rothbard descubrió que todo lo que había enseñado sobre estructuras de mercado en microeconomía estaba equivocado, y cómo luego leyó La Acción Humana de Mises de principio a fin sin parar, experimentando una \"revolución en su cabeza\" que lo convirtió del mainstream neoclásico a la Escuela Austríaca. Detalló los resultados de gestión — inflación heredada de 17.000% anual reducida a 28%, 50.000 empleados públicos dados de baja, ministerios reducidos a la mitad, pobreza de 57% a 46% — y las 3.200 reformas pendientes. Describió a Musk como \"un héroe en la historia de la humanidad\" y comparó su plan con el modelo irlandés de liberalización.",
    impact: "Conversación de referencia sobre la conversión intelectual de Milei. Disponible en español e inglés en X, YouTube y Spotify.",
    videoId: "8NLzc9kobDk",
    highlight: true,
  },
  {
    date: "DIC 2024",
    outlet: "Forbes Argentina",
    desc: "En la última entrevista del año, Milei rechazó categóricamente la idea de atraso cambiario y desplegó su hoja de ruta para 2025: continuar la desinflación, reducir impuestos, ejecutar los tres pasos necesarios para salir del cepo, avanzar con privatizaciones y cerrar un acuerdo de libre comercio con Estados Unidos. Habló del rol estratégico de su hermana Karina Milei en la organización política y lanzó un ultimátum al PRO de Mauricio Macri: \"juntos en todo o separados\" — sin medias tintas.",
  },
  {
    date: "2024–25",
    outlet: "60 Minutes · The Economist · FT · WSJ",
    desc: "Los medios más influyentes del mundo anglófono dedicaron cobertura sostenida al fenómeno Milei. El programa 60 Minutes de CBS envió un equipo a Buenos Aires para un segmento investigativo sobre las reformas. The Economist publicó perfiles editoriales en profundidad analizando el experimento libertario argentino. El Financial Times cubrió extensamente la política económica y las negociaciones con el FMI, mientras que el Wall Street Journal documentó el ajuste fiscal y la desinflación como caso de estudio para economías emergentes.",
  },
  {
    date: "2025",
    outlet: "Juan Carlos de Pablo & Ezequiel Burgo",
    desc: "A lo largo de cuatro sesiones extensas con el legendario economista Juan Carlos de Pablo y el periodista Ezequiel Burgo, Milei abrió las puertas de su proceso decisorio presidencial como nunca antes. Las conversaciones — que dieron origen al libro Tratando de Entender el Fenómeno Milei — recorrieron desde la mecánica interna del ajuste fiscal hasta las discusiones con su equipo económico, revelando cómo se tomaron las decisiones clave de los primeros meses de gobierno.",
  },
];

export const influencias: Influencia[] = [
  { school: "Escuela Austríaca", names: "Ludwig von Mises · Friedrich Hayek · Murray Rothbard · Carl Menger · Jesús Huerta de Soto · Israel Kirzner", keyWork: "La Acción Humana (Mises, 1949) — el tratado que provocó su conversión intelectual. La Ética de la Libertad (Rothbard, 1982) — el libro que le demostró que la microeconomía neoclásica estaba equivocada. Dinero, Crédito Bancario y Ciclos Económicos (Huerta de Soto, 1998) — la teoría del ciclo que fundamenta su crítica al banco central. Competencia y Empresarialidad (Kirzner, 1973) — la competencia como proceso de descubrimiento." },
  { school: "Monetarismo / Chicago", names: "Milton Friedman · Gary Becker · Robert Lucas Jr. · Paul Romer", keyWork: "Capitalismo y Libertad (Friedman, 1962) — su primera influencia intelectual antes de la conversión austríaca. Teoría de los Precios (Friedman) — manual que usó como profesor universitario. La Desnacionalización del Dinero (Hayek, 1976) — la propuesta de competencia entre monedas privadas." },
  { school: "Liberales argentinos", names: "Alberto Benegas Lynch (h) · Juan Bautista Alberdi", keyWork: "Bases y Puntos de Partida para la Organización Política de la República Argentina (Alberdi, 1852) — el texto fundacional que inspiró la Constitución de 1853 y el modelo de apertura que llevó a Argentina a ser potencia mundial. Benegas Lynch (h) fue el mentor que lo introdujo a la Escuela Austríaca." },
  { school: "Contemporáneos", names: "Juan Ramón Rallo · Philipp Bagus · Walter Block", keyWork: "De Viena a Madrid: Ensayos en Honor de Jesús Huerta de Soto (Bagus, ed.) — obra colectiva con prólogo de Milei. Anti-Piketty (Rallo, 2015) — refutación del igualitarismo redistributivo. Defendiendo lo Indefendible (Block, 1976) — la defensa más provocadora del libre mercado." },
];

export const reconocimientos: string[] = [
  "TIME 100 Most Influential People (2024)",
  "Portada de TIME (mayo 2024)",
  "Premio Milton Friedman — Roma (2025)",
  "Premio Instituto Liberal de la República Checa (2024)",
  "Record Guinness: Clase de economía más grande de la historia (2021)",
  "Doctor Honoris Causa — ESEADE",
  "Johns Hopkins: 2.º economista más influyente en habla hispana y EE.UU.",
  "Reunión con Robert C. Merton (Nobel 1997) en Olivos (diciembre 2025)",
  "Philippe Aghion (Nobel 2025) elogió las reformas en Foro Económico LAC 2026",
  "3 Special Addresses consecutivos en el WEF de Davos (2024, 2025, 2026) — único líder latinoamericano",
  "15 viajes a EE.UU. como presidente — récord histórico para un mandatario argentino",
  "Victoria legislativa de medio término con 40,7% — mayor votación oficialista en elecciones de mitad de mandato en democracia moderna",
];

// ── Section metadata ────────────────────────────────────

export const archivoHeader = {
  sectionTitle: "ARCHIVO INTELECTUAL",
  sectionIntro: "9 libros, 7 papers académicos, 11 discursos que redefinieron el debate global y entrevistas con audiencias de cientos de millones. La producción intelectual completa de un presidente-economista sin precedentes.",
} as const;

export const collabProject = {
  badge: "MILEI-REIDEL PAPER",
  title: "When Regulation Kills Growth",
  subtitle: "Summary for Davos \u2014 January 21, 2026",
  authors: "Javier Milei & Demian Reidel",
  abstract: "Los debates de pol\u00EDtica tratan los rendimientos crecientes a escala (IRS) como justificaci\u00F3n autom\u00E1tica para la intervenci\u00F3n estatal: costos medios decrecientes se leen como monopolio natural, y monopolio natural se lee como regulaci\u00F3n por defecto. Esa conclusi\u00F3n proviene de modelos parciales de juguete que asumen oferta laboral fija, sin acumulaci\u00F3n de capital ni factibilidad intertemporal. Este paper restaura esos m\u00E1rgenes en un modelo Ramsey\u2013CES con un par\u00E1metro expl\u00EDcito de rendimientos a escala.",
  desc: "El paper demuestra que los rendimientos crecientes a escala no son un teorema de monopolio. La implicancia central es directa: IRS generan una escala m\u00EDnima viable y potencial multiplicidad de estados estacionarios, incluyendo din\u00E1micas de trampa de pobreza impulsadas por la viabilidad de escala \u2014 no por precios de monopolio. Las pol\u00EDticas que fragmentan escala o aumentan cu\u00F1as fiscales pueden empujar a la econom\u00EDa hacia (o por debajo de) ese l\u00EDmite de viabilidad m\u00EDnima. En una econom\u00EDa con IRS, la intervenci\u00F3n estatal por defecto no es inocua: puede manufacturar exactamente el estancamiento que dice prevenir.",
  keyResults: [
    "Escala m\u00EDnima viable: la econom\u00EDa tiene un L_min end\u00F3geno requerido para satisfacer optimalidad intertemporal",
    "Multiplicidad y trampas de pobreza: el locus iso-costo-usuario tiene dos ramas, generando m\u00FAltiples estados estacionarios",
    "La falacia antimonopolio: IRS no son un teorema de monopolio. La regulaci\u00F3n que fragmenta escala puede destruir el equilibrio de alta productividad",
  ],
  keywords: "rendimientos crecientes a escala; oferta laboral end\u00F3gena; crecimiento no c\u00F3ncavo; equilibrios m\u00FAltiples; trampas de pobreza; antimonopolio",
  quote: "Con mi jefe de asesores, el doctor Demian Reidel, estamos reescribiendo gran parte de la teor\u00EDa econ\u00F3mica, para poder derivar optimalidad de Pareto, tanto est\u00E1tica como intertemporal, teniendo funciones de producci\u00F3n no convexas.",
  quoteCite: "Javier Milei \u2014 Instituto Liberal de Praga, 24 de junio de 2024",
} as const;

export const conversionQuote = {
  text: "Leyendo a Rothbard descubrí que lo que había enseñado sobre estructuras de mercado en microeconomía estaba equivocado. Luego leí La Acción Humana de Mises de principio a fin sin parar y experimenté una verdadera revolución en mi cabeza.",
  cite: "Javier Milei \u2014 Lex Fridman Podcast #453, noviembre 2024",
} as const;

export const edicionesNote = "Ediciones internacionales en portugués (Viva a Liberdade, Carajo!), inglés (The End of Inflation) y español peninsular (El Camino del Libertario, Deusto 2024). Prólogos en obras colectivas como De Viena a Madrid: Ensayos en Honor de Jesús Huerta de Soto (Unión Editorial), coordinado por Philipp Bagus." as const;
