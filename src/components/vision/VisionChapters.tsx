"use client";

import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Pullquote } from "@/components/ui/Pullquote";
import { Prose } from "@/components/ui/Prose";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { chapters, dataStrip, pyramid, pillars, thinkers } from "@/data/vision";
import { ChapterPhoto } from "@/components/vision/ChapterPhoto";
import { DataStripGrid } from "@/components/vision/DataStripGrid";
import { PyramidList } from "@/components/vision/PyramidList";
import { PillarGrid } from "@/components/vision/PillarGrid";
import { ThinkerGrid } from "@/components/vision/ThinkerGrid";

/* ───────── types ───────── */

interface Photo {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

/* ───────── main component ───────── */

export function VisionChapters({ photos }: { photos: Photo[] }) {
  return (
    <SidebarLayout label="Capítulos" items={chapters} variant="navy">
      {/* Chapter I */}
      <SectionArticle id="ch1" className="mb-16">
        <ChapterHeader numeral="I" title="El proyecto de la libertad" />
        <Prose>
          <p>En 1853, <strong>Juan Bautista Alberdi</strong> escribió las <em>Bases y puntos de partida para la organización política de la República Argentina</em> — el proyecto institucional más ambicioso del hemisferio sur. La Constitución de 1853, de fuerte raigambre liberal, consagró la propiedad privada, la libertad de comercio, la inmigración abierta y un Estado limitado. El resultado fue la transformación económica más veloz que el mundo haya visto.</p>
          <p>En apenas 35 años, la Argentina pasó de ser un territorio despoblado y empobrecido a ubicarse entre las diez economías más grandes del planeta. Para 1895, el PBI per cápita argentino superaba al de Francia, Alemania e Italia. Buenos Aires rivalizaba con París y Nueva York. Entre 1860 y 1930 llegaron más de seis millones de inmigrantes — italianos, españoles, alemanes, polacos — atraídos por la promesa de un país donde el mérito y la libertad determinaban el destino de cada persona.</p>
          <p>Después vino la catástrofe. A partir de la década del 30, la dirigencia abandonó el modelo que nos había hecho ricos y abrazó las ideas empobrecedoras del colectivismo. Cada gobierno agrandó el Estado, creó nuevas regulaciones, aumentó el gasto público. El resultado: más de cien años de decadencia ininterrumpida. Un país que en 1910 tenía el mismo PBI per cápita que Estados Unidos fue cayendo hasta ubicarse en el puesto 140 del ranking mundial de libertad económica.</p>
          <p>Mi proyecto no es administrar esa decadencia. <strong>Es dinamitarla y refundar la Argentina sobre las ideas que la hicieron grande.</strong> Cada decisión de gobierno se mide contra una sola pregunta: <strong>¿esto nos acerca a ser el país más libre del mundo?</strong></p>
        </Prose>
        <Pullquote cite="Discurso de asunción, diciembre 2023">&laquo;Hoy volvemos a abrazar las ideas de Alberdi, de nuestros padres fundadores, que hicieron que en 35 años pasáramos de ser un país de bárbaros a ser potencia.&raquo;</Pullquote>
        <DataStripGrid items={dataStrip} />
        {photos[0] && <ChapterPhoto src={photos[0].src} alt={photos[0].alt} caption={photos[0].caption} objectPosition={photos[0].objectPosition} />}
      </SectionArticle>

      {/* Chapter II */}
      <SectionArticle id="ch2" className="mb-16">
        <ChapterHeader numeral="II" title="Capitalismo y moralidad" />
        <Prose>
          <p><strong>El capitalismo de libre empresa no solo es el sistema más productivo de la historia de la humanidad — es el único sistema moralmente deseable.</strong> El único basado enteramente en el intercambio voluntario y el principio de no agresión. Desde que se adoptó el capitalismo, el PBI per cápita mundial se multiplicó por 15 en apenas 200 años, y más de 2.000 millones de personas salieron de la pobreza extrema.</p>
          <p>Como planteó <strong>Israel Kirzner</strong>, los socialistas ya no niegan que el capitalismo funciona — porque los datos son irrefutables. Lo que hacen es acusarlo de inmoral. Entonces la verdadera batalla de nuestro tiempo no es económica — es moral.</p>
          <p>El capitalista exitoso no se apropia de la riqueza ajena — contribuye al bienestar general. <strong>Un empresario exitoso es un héroe, un benefactor social</strong> que solo puede prosperar sirviendo al prójimo con mejores bienes a mejor precio.</p>
        </Prose>
        <Pullquote cite="Davos, enero 2024">&laquo;El capitalista, el empresario exitoso, es un benefactor social que, lejos de apropiarse de la riqueza ajena, contribuye al bienestar general. No les dejen decir que su ambición es inmoral.&raquo;</Pullquote>
        <Prose>
          <p><strong>&laquo;Maquiavelo ha muerto.&raquo;</strong> <strong>Jesús Huerta de Soto</strong> demostró que la eficiencia dinámica surge única y exclusivamente del respeto a la propiedad privada y la función empresarial. Y como probó <strong>Friedrich Hayek</strong>, el conocimiento está disperso en la sociedad — ningún planificador central puede reemplazar al orden espontáneo del mercado libre.</p>
          <p><strong>Lo justo no puede ser ineficiente ni lo eficiente injusto.</strong> Justicia y eficiencia son dos caras de la misma moneda.</p>
        </Prose>
        <PyramidList items={pyramid} />
        {photos[1] && <ChapterPhoto src={photos[1].src} alt={photos[1].alt} caption={photos[1].caption} objectPosition={photos[1].objectPosition} />}
      </SectionArticle>

      {/* Chapter III */}
      <SectionArticle id="ch3" className="mb-16">
        <ChapterHeader numeral="III" title="El Estado es el problema" />
        <Prose>
          <p>En 1944, <strong>Friedrich Hayek</strong> lo advirtió en <em>Camino de Servidumbre</em>: cada intervención del Estado genera distorsiones que justifican nuevas intervenciones, en una espiral que no se detiene hasta que la libertad desaparece por completo.</p>
          <p>Desde la primera presidencia de Perón en 1946 hasta diciembre de 2023, el gasto público pasó del 15 % del PBI al 42 %. Se crearon más de 600 organismos estatales. La carga impositiva se multiplicó por tres.</p>
          <p><strong>No existen las fallas de mercado.</strong> El mercado es un mecanismo de cooperación social donde se intercambian voluntariamente derechos de propiedad. La intromisión del Estado mete ruido en el sistema de precios. Los cuatro supuestos fallos de mercado — monopolio natural, bienes públicos, externalidades e información asimétrica — son construcciones teóricas que no resisten el análisis empírico. El concepto de monopolio natural es una falacia: en un mercado libre, la amenaza de competencia potencial disciplina al productor más eficiente. Los bienes públicos pueden proveerse por medios privados. Las externalidades se resuelven con derechos de propiedad bien definidos, como demostró Coase. La información asimétrica es la regla, no la excepción — y precisamente por eso el mercado funciona: el sistema de precios procesa más información de la que cualquier planificador podría soñar.</p>
          <p>En Argentina, cada «solución» estatal generó problemas mayores que los que pretendía resolver. La regulación del mercado de alquileres destruyó la oferta y disparó los precios. Los subsidios energéticos costaron USD 14.000 millones anuales y desfinanciaron la inversión en infraestructura. Los controles de precios generaron desabastecimiento. El cepo cambiario creó un mercado negro y ahuyentó la inversión extranjera. <strong>Cada intervención es una cuña que distorsiona los precios relativos y destruye información.</strong></p>
          <p><strong>Las funciones del Estado deben limitarse a la defensa del derecho a la vida, a la libertad y a la propiedad.</strong> Nada más. Todo lo demás es coacción disfrazada de política pública. El gasto público no es gratuito: cada peso que gasta el Estado es un peso que se le quita a un ciudadano que lo habría gastado mejor. No es un debate de gestión — es un debate moral.</p>
        </Prose>
        <Pullquote cite="Davos, enero 2024">&laquo;El Estado no es la solución. El Estado es el problema mismo. No cedan al avance del Estado.&raquo;</Pullquote>
        {photos[4] && <ChapterPhoto src={photos[4].src} alt={photos[4].alt} caption={photos[4].caption} objectPosition={photos[4].objectPosition} />}
      </SectionArticle>

      {/* Chapter IV */}
      <SectionArticle id="ch4" className="mb-16">
        <ChapterHeader numeral="IV" title="La batalla cultural" />
        <Prose>
          <p>La gran gesta para cambiar la Argentina tiene tres frentes de batalla que, si bien son distintos el uno del otro, <strong>son igualmente indispensables.</strong></p>
          <p>La década del 90 es la prueba. Carlos Menem implementó reformas económicas profundas — privatizaciones, apertura comercial, convertibilidad — y sin embargo la izquierda logró revertirlas todas en pocos años. El colectivismo no volvió porque las reformas fracasaron; volvió porque la izquierda nunca perdió la hegemonía cultural.</p>
          <p><strong>Antonio Gramsci</strong> escribió desde la cárcel en los años 30 que para implantar el socialismo era necesario primero conquistar la cultura. La izquierda lo hizo al pie de la letra durante 80 años. <strong>La batalla cultural fue ganada por la izquierda básicamente porque nosotros no dimos la batalla.</strong></p>
        </Prose>
        <Pullquote cite="CPAC Argentina, diciembre 2024">&laquo;Sin el cuidado de las ideas, no importa qué tan buenos seamos gestionando o cuán buenos seamos políticamente, no vamos a llegar a ningún lado.&raquo;</Pullquote>
        <PillarGrid items={pillars} />
        <Prose>
          <p><strong>Dar la batalla cultural desde el poder no solo es recomendable — es una obligación.</strong> Las ideas no ganan por mérito propio: deben ser promovidas activamente.</p>
          <p>Gracias a internet y la creatividad popular, las redes sociales rompieron el monopolio comunicacional de la izquierda. <strong>Una victoria política no es el fin de la lucha por las ideas, sino el comienzo.</strong></p>
        </Prose>
        {photos[2] && <ChapterPhoto src={photos[2].src} alt={photos[2].alt} caption={photos[2].caption} objectPosition={photos[2].objectPosition} />}
      </SectionArticle>

      {/* Chapter V */}
      <SectionArticle id="ch5" className="mb-16" last>
        <ChapterHeader numeral="V" title="La defensa de Occidente" />
        <Prose>
          <p><strong>Occidente está en peligro.</strong> Está en peligro porque aquellos que supuestamente deben defender sus valores — los líderes políticos, los académicos, los organismos internacionales — se encuentran cooptados por una visión del mundo que, inexorablemente, conduce al socialismo y a la pobreza.</p>
          <p>Y sin embargo, Occidente representa el pico de la civilización humana. Durante 2.500 años, a partir de cuatro fuentes — <strong>la filosofía griega, el derecho romano, la rectitud de los estoicos y los valores judeocristianos</strong> — Occidente construyó el edificio institucional que hizo posible la ciencia, el arte, la medicina, la tecnología y la libertad individual.</p>
          <p><strong>La paz nos volvió débiles. La prosperidad nos hizo complacientes.</strong> Las generaciones que no conocieron el horror del totalitarismo olvidaron por qué la libertad es un bien que debe defenderse con uñas y dientes, todos los días, sin descanso.</p>
        </Prose>
        <Pullquote cite="Davos, enero 2024">&laquo;Occidente está en peligro, y quienes deberían defenderlo lo están abandonando.&raquo;</Pullquote>
        <Prose>
          <p>La amenaza no viene solo del exterior. Organismos internacionales como la ONU, creados para preservar la paz y la libertad, fueron cooptados por una agenda colectivista que impone objetivos redistributivos, cuotas ideológicas y restricciones a la soberanía nacional bajo el rótulo de «desarrollo sostenible». La Agenda 2030 no es un programa de progreso — es un instrumento de planificación centralizada a escala global. Por eso Argentina votó en contra en la Asamblea General y se retiró del Pacto del Futuro.</p>
          <p>A partir del 10 de diciembre de 2023, la República Argentina abandonó la posición de neutralidad histórica y se puso a la vanguardia de la lucha en defensa de la libertad. No por imposición imperial sino por convicción: Argentina fue fundada sobre los mismos principios que hicieron grande a Occidente — la Constitución de 1853 de Alberdi es un documento liberal, no colectivista. Volver a esas raíces es volver a ser lo que fuimos cuando éramos potencia.</p>
          <p>La alianza con Estados Unidos, Israel, Italia, el Reino Unido, El Salvador y Chile no es un alineamiento automático — es una coalición de naciones que eligen la libertad sobre el control. El Board of Peace de 19 países, el Shield of the Americas de 17 naciones, los tres tratados de libre comercio firmados en un año: todo apunta en la misma dirección.</p>
          <p><strong>América será el faro de luz que vuelva a encender a todo Occidente</strong>, y con ello pagará su deuda civilizatoria como muestra de gratitud hacia las raíces que la hicieron posible.</p>
        </Prose>
        {photos[3] && <ChapterPhoto src={photos[3].src} alt={photos[3].alt} caption={photos[3].caption} objectPosition={photos[3].objectPosition} />}
        <ThinkerGrid items={thinkers} />
      </SectionArticle>

      {/* Closing declaration */}
      <div className="border-t border-border py-12 text-center">
        <p className="font-accent text-[length:var(--text-2xl)] uppercase leading-tight tracking-wide text-text-primary">
          Argentina será<br />
          el país más{" "}
          <span className="font-display italic normal-case text-gold">libre</span>
          <br />del mundo
        </p>
        <p className="mt-4 font-accent text-[length:var(--text-sm)] tracking-widest text-text-tertiary">
          ¡Viva la libertad, carajo!
        </p>
      </div>
    </SidebarLayout>
  );
}
