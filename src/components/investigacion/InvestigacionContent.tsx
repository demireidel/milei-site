"use client";

import type { ResearchPaper } from "@/data/archivo";
import { amplifierData, remedyTaxonomy } from "@/data/archivo";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { InsightCallout } from "@/components/ui/InsightCallout";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { Pullquote } from "@/components/ui/Pullquote";

/* ── Visual: The Fold Diagram ──────────────────────────── */
function FoldDiagram() {
  return (
    <ScrollReveal variant="fade-up">
      <div className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-6 text-center font-display text-lg text-text-primary">
          {"El pliegue: por qué existe una escala mínima viable"}
        </h4>

        <div className="mb-6">
          <svg viewBox="0 0 400 200" className="mx-auto block" style={{ width: "100%", maxWidth: "32rem" }} aria-label="Diagrama del pliegue: la productividad marginal del capital tiene forma de joroba.">
            <line x1="50" y1="170" x2="370" y2="170" stroke="var(--color-border)" strokeWidth="1" />
            <line x1="50" y1="170" x2="50" y2="20" stroke="var(--color-border)" strokeWidth="1" />

            <path
              d="M 60,165 C 100,160 140,80 200,45 C 240,28 280,35 320,80 C 340,110 355,150 365,165"
              fill="none"
              stroke="var(--color-gold-hex)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <line x1="50" y1="90" x2="370" y2="90" stroke="var(--color-celeste-hex)" strokeWidth="1.5" strokeDasharray="6 4" />

            <circle cx="200" cy="45" r="4" fill="var(--color-gold-hex)" />
            <circle cx="142" cy="90" r="5" fill="var(--color-celeste-hex)" />
            <circle cx="288" cy="90" r="5" fill="var(--color-celeste-hex)" />

            <line x1="142" y1="90" x2="142" y2="170" stroke="var(--color-text-tertiary)" strokeWidth="1" strokeDasharray="3 3" />

            <rect x="50" y="165" width="92" height="8" rx="2" fill="var(--color-gold-hex)" opacity="0.15" />

            <text x="200" y="38" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="10" fontWeight="bold">pico</text>
            <text x="375" y="94" textAnchor="start" fill="var(--color-celeste-hex)" fontSize="9">umbral D</text>
            <text x="142" y="185" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontWeight="bold">L_min</text>
            <text x="85" y="178" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="8" opacity="0.7">sin equilibrio</text>

            <text x="210" y="198" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9">escala (trabajo)</text>
            <text x="15" y="95" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9" transform="rotate(-90, 15, 95)">productividad marginal</text>

            <text x="142" y="82" textAnchor="middle" fill="var(--color-celeste-hex)" fontSize="8">bajo</text>
            <text x="288" y="82" textAnchor="middle" fill="var(--color-celeste-hex)" fontSize="8">alto</text>
          </svg>
        </div>

        <div className="space-y-2 text-sm text-text-secondary">
          <p className="m-0">
            <span className="font-semibold text-gold">La curva dorada</span>{" es la productividad marginal del capital. Tiene forma de joroba: sube, alcanza un pico, y luego baja."}
          </p>
          <p className="m-0">
            <span className="font-semibold text-celeste">La línea celeste</span>{" es el umbral que la economía necesita alcanzar. Solo donde la curva cruza la línea hay equilibrio posible — dos puntos: uno de baja y otro de alta productividad."}
          </p>
          <p className="m-0">
            <strong>A la izquierda de L_min</strong>{", la curva nunca alcanza el umbral. No hay equilibrio viable. La economía no puede sostenerse."}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Visual: The Amplifier Effect ──────────────────────── */
function AmplifierGraphic() {
  return (
    <ScrollReveal variant="fade-up">
      <div className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-2 text-center font-display text-lg text-text-primary">
          El efecto amplificador
        </h4>
        <p className="mb-6 text-center text-sm text-text-tertiary">
          {"Pequeños cambios regulatorios producen grandes movimientos en la escala mínima viable"}
        </p>

        <div className="space-y-4">
          {amplifierData.map((row) => {
            const pct = parseInt(row.change.replace("+", "").replace("%", ""));
            const barWidth = Math.min((pct / 300) * 100, 100);
            return (
              <div key={row.shock} className="flex items-center gap-4">
                <div className="w-16 shrink-0 text-right">
                  <span className="font-accent text-sm font-bold text-text-primary">{row.shock}</span>
                  <span className="block text-xs text-text-tertiary">shock</span>
                </div>
                <div className="relative min-w-0 flex-1">
                  <div className="h-8 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="flex h-full items-center rounded-full bg-gradient-to-r from-gold/80 to-gold px-3 transition-all duration-1000"
                      style={{ width: `${barWidth}%` }}
                    >
                      <span className="text-xs font-bold text-white">{row.change}</span>
                    </div>
                  </div>
                </div>
                <div className="w-14 shrink-0 text-center">
                  <span className="font-accent text-xs text-text-tertiary">L_min</span>
                  <span className="block font-accent text-sm font-bold text-gold">{row.newLmin}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="m-0 mt-6 text-center text-sm text-text-secondary">
          {"Con rendimientos a escala de apenas "}<strong>{"θ = 1.25"}</strong>{", el amplificador es "}<strong>{"4×"}</strong>{". Un aumento del 40% en las cuñas regulatorias casi triplica la escala mínima viable."}
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ── Visual: Remedy Taxonomy ───────────────────────────── */
function RemedyTaxonomyGraphic() {
  return (
    <ScrollReveal variant="fade-up">
      <div className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-2 text-center font-display text-lg text-text-primary">
          {"No toda regulación es igual"}
        </h4>
        <p className="mb-6 text-center text-sm text-text-tertiary">
          {"Tres categorías de remedios con consecuencias muy distintas"}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {remedyTaxonomy.map((r, i) => (
            <div
              key={r.type}
              className={`rounded-xl border p-4 ${
                r.safe
                  ? i === 0
                    ? "border-green-500/30 bg-green-500/5"
                    : "border-amber-500/30 bg-amber-500/5"
                  : "border-red-500/30 bg-red-500/5"
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">
                  {r.safe ? (i === 0 ? "✅" : "⚠️") : "❌"}
                </span>
                <h5 className="m-0 font-display text-sm text-text-primary">{r.type}</h5>
              </div>
              <p className="m-0 mb-2 text-xs text-text-secondary">{r.examples}</p>
              <div className="rounded-lg bg-surface-2 px-3 py-2">
                <span className="block text-xs text-text-tertiary">Efecto en escala mínima</span>
                <span className={`text-xs font-bold ${r.safe ? "text-text-primary" : "text-red-600"}`}>
                  {r.effectScale}
                </span>
              </div>
              <p className={`m-0 mt-2 text-xs font-semibold ${
                r.safe ? (i === 0 ? "text-green-700" : "text-amber-700") : "text-red-700"
              }`}>
                {r.presumption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Visual: Before/After Scale Fragmentation ──────────── */
function FragmentationVisual() {
  return (
    <ScrollReveal variant="fade-up">
      <div className="my-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface-1 p-5">
          <span className="badge-text mb-3 block !text-text-tertiary">Antes del breakup</span>
          <div className="mb-3 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-3 border-gold bg-gold/10">
              <span className="font-display text-xl text-gold">1</span>
            </div>
          </div>
          <p className="m-0 text-center text-sm text-text-secondary">
            {"Una unidad productiva integrada. Las complementariedades entre datos, infraestructura, mantenimiento y operaciones "}<strong>generan la escala</strong>{" que sostiene el equilibrio de alta productividad."}
          </p>
          <div className="mt-3 text-center">
            <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-700">
              Por encima de L_min
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <span className="badge-text mb-3 block !text-red-600">{"Después del breakup"}</span>
          <div className="mb-3 flex items-center justify-center gap-2">
            {["A", "B", "C"].map((l) => (
              <div key={l} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-400/50 bg-red-500/10">
                <span className="font-display text-sm text-red-600">{l}</span>
              </div>
            ))}
          </div>
          <p className="m-0 text-center text-sm text-text-secondary">
            {"La fragmentación destruye las complementariedades. Cada fragmento es demasiado pequeño para alcanzar la escala mínima. "}<strong>El equilibrio de alta productividad desaparece.</strong>
          </p>
          <div className="mt-3 text-center">
            <span className="inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700">
              {"Por debajo de L_min — sin equilibrio viable"}
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Real-World Cases ──────────────────────────────────── */
function CaseStudies() {
  const cases = [
    { icon: "🚂", title: "British Rail (1990s)", outcome: "Fragmentación en +100 empresas", lesson: "La privatización destruyó las complementariedades entre vías, señalización, mantenimiento y operación. Costos 30% superiores a comparables europeos y problemas de seguridad que obligaron a reintegrar el mantenimiento." },
    { icon: "⚡", title: "California (2000-01)", outcome: "Crisis eléctrica", lesson: "La reestructuración separó generación de distribución con reglas de precios que amplificaron las cuñas. La separación redujo complementariedades mientras los precios regulados añadían fricción." },
    { icon: "🔍", title: "Google Search (2025)", outcome: "El tribunal rechazó el breakup", lesson: "Los demandantes proponían separar Chrome y Android. El tribunal eligió remedios de conducta — prohibiciones, compartición de datos — que atacan la exclusión sin fragmentar la unidad productiva." },
  ];

  return (
    <ScrollReveal variant="fade-up">
      <h4 className="mb-4 font-display text-lg text-text-primary">
        {"Tres casos reales: cuando la fragmentación cruzó el pliegue"}
      </h4>
      <div className="grid gap-4 sm:grid-cols-3">
        {cases.map((c) => (
          <Card key={c.title} className="p-4">
            <span className="mb-2 block text-2xl">{c.icon}</span>
            <h5 className="m-0 mb-1 font-display text-sm text-text-primary">{c.title}</h5>
            <span className="mb-2 block text-xs font-semibold text-gold">{c.outcome}</span>
            <p className="card-body m-0 text-xs">{c.lesson}</p>
          </Card>
        ))}
      </div>
    </ScrollReveal>
  );
}

/* ── Paper Card ────────────────────────────────────────── */
function PaperCard({ paper, featured }: { paper: ResearchPaper; featured?: boolean }) {
  return (
    <ScrollReveal variant="fade-up">
      <Card accent={featured} className={`overflow-hidden${featured ? " !border-l-3 !border-l-gold" : ""}`}>
        <div className="p-5">
          <div className="mb-2 flex items-center gap-3">
            <span className="badge-text !mb-0">{paper.year}</span>
            <span className="rounded-full bg-celeste/10 px-2.5 py-0.5 text-xs font-semibold text-celeste">Working Paper</span>
          </div>
          <h4 className="m-0 mb-1 font-display text-base leading-snug text-text-primary">{paper.title}</h4>
          {paper.subtitle && <p className="m-0 mb-2 text-sm italic text-text-tertiary">{paper.subtitle}</p>}
          <p className="card-body mb-3">{paper.authors}</p>
          {paper.pdfPath && (
            <a
              href={paper.pdfPath}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2 font-accent text-xs font-semibold uppercase tracking-wide text-gold transition-colors duration-fast hover:bg-gold/20"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar PDF
            </a>
          )}
        </div>
        <ExpandableSection label="Ver abstract y resultados" labelExpanded="Cerrar">
          <p className="card-body m-0 mb-4">{paper.abstract}</p>
          <h5 className="m-0 mb-2 font-accent text-xs uppercase tracking-wide text-text-primary">Resultados clave</h5>
          <ul className="m-0 list-none space-y-2 p-0">
            {paper.keyResults.map((r) => (
              <li key={r.slice(0, 30)} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {r}
              </li>
            ))}
          </ul>
        </ExpandableSection>
      </Card>
    </ScrollReveal>
  );
}

const sidebarItems = [
  { id: "papers", num: "I", title: "Papers" },
  { id: "explicacion", num: "II", title: "Explicación visual" },
  { id: "casos", num: "III", title: "Casos reales" },
  { id: "test", num: "IV", title: "El test" },
];

/* ── Main Content ──────────────────────────────────────── */
export function InvestigacionContent({ papers }: { papers: ResearchPaper[] }) {
  const [companion, policy] = papers;

  return (
    <SidebarLayout label="Secciones" items={sidebarItems} variant="navy">
      <SectionArticle id="papers">
      <ChapterHeader numeral="I" title={"Papers Milei-Reidel"} />
      <SectionKicker color="celeste">{"Reescribiendo la teoría económica"}</SectionKicker>

      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        <PaperCard paper={companion} />
        <PaperCard paper={policy} featured />
      </div>

      </SectionArticle>

      <SectionArticle id="explicacion">
      <ChapterHeader numeral="II" title={"Explicación visual"} />

      <ScrollReveal variant="fade-up">
        <div className="mb-4">
          <h3 className="m-0 font-display text-xl text-text-primary">
            <span className="text-gold">When Scale-Fragmenting Regulation Kills Growth</span>
          </h3>
          <p className="prose-body mt-2 max-w-[52rem]">
            {"El argumento central del paper en cuatro ideas y un test de política."}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <div className="mb-8 rounded-xl border-l-3 border-l-gold bg-gold/5 p-5">
          <h4 className="m-0 mb-2 font-display text-base text-text-primary">{"1. Rendimientos crecientes ≠ monopolio"}</h4>
          <p className="m-0 text-sm text-text-secondary">
            {"El debate convencional dice: rendimientos crecientes → costo promedio decreciente → monopolio natural → regular o romper. "}<strong>Ese silogismo es incompleto.</strong>{" Rendimientos crecientes son una propiedad de la tecnología. Monopolio es una estructura de mercado. Un sector puede tener rendimientos crecientes y aún así sostener múltiples firmas compitiendo."}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-up">
        <div className="mb-2">
          <h4 className="m-0 font-display text-base text-text-primary">{"2. La escala mínima viable y el pliegue"}</h4>
          <p className="m-0 mt-1 max-w-[52rem] text-sm text-text-secondary">
            {"Con rendimientos crecientes, la productividad marginal del capital tiene forma de joroba. Esto crea un "}<strong>pliegue</strong>{": un umbral mínimo de escala por debajo del cual "}<strong>{"no existe ningún equilibrio de crecimiento"}</strong>.
          </p>
        </div>
      </ScrollReveal>

      <FoldDiagram />

      <ScrollReveal variant="fade-up">
        <div className="mb-2">
          <h4 className="m-0 font-display text-base text-text-primary">{"3. El amplificador: pequeños cambios, grandes consecuencias"}</h4>
          <p className="m-0 mt-1 max-w-[52rem] text-sm text-text-secondary">
            {"Con rendimientos a escala de θ = 1.25, el amplificador es 1/(θ−1) = 4. Un impuesto, una regulación o un costo de cumplimiento que parece modesto puede empujar la escala mínima viable más allá de lo que la economía puede sostener."}
          </p>
        </div>
      </ScrollReveal>

      <AmplifierGraphic />

      <ScrollReveal variant="fade-up">
        <div className="mb-2">
          <h4 className="m-0 font-display text-base text-text-primary">{"4. No toda regulación es igual: la taxonomía de remedios"}</h4>
          <p className="m-0 mt-1 max-w-[52rem] text-sm text-text-secondary">
            {"La diferencia crucial no es «regular vs. no regular». Es entre remedios que "}<strong>preservan la escala productiva</strong>{" (atacar conductas abusivas, abrir acceso a datos) y remedios que "}<strong>fragmentan la unidad productiva</strong>{" (romper la empresa, separar componentes integrados)."}
          </p>
        </div>
      </ScrollReveal>

      <RemedyTaxonomyGraphic />
      <FragmentationVisual />
      </SectionArticle>

      <SectionArticle id="casos">
      <ChapterHeader numeral="III" title={"Casos reales"} />
      <CaseStudies />

      </SectionArticle>

      <SectionArticle id="test" last>
      <ChapterHeader numeral="IV" title={"El test de política"} />

      <ScrollReveal variant="fade-up">
        <div className="my-10 rounded-xl border-2 border-gold/30 bg-gold/5 p-6 sm:p-8">
          <h4 className="m-0 mb-4 text-center font-display text-lg text-gold">El test de no-cruce-del-pliegue</h4>
          <p className="m-0 mb-4 text-center text-sm text-text-tertiary">{"La regla de política que propone el paper"}</p>
          <div className="space-y-3 text-sm text-text-secondary">
            <p className="m-0">Antes de fragmentar un sector con rendimientos crecientes, el regulador debe demostrar que:</p>
            <div className="rounded-lg bg-surface-2 p-4 text-center">
              <span className="font-mono text-base font-bold text-text-primary">{"h_r = h₀ + ℓ_r − (u_r − m_r + c_r) / (θ − 1) ≥ s"}</span>
            </div>
            <p className="m-0">
              {"En palabras: el "}<strong>headroom post-remedio</strong>{" (distancia de la economía al borde del pliegue después de aplicar el remedio) debe ser mayor que un margen de seguridad. Si no puede demostrarlo, la fragmentación es presuntivamente peligrosa."}
            </p>
          </div>
        </div>
      </ScrollReveal>

      <Pullquote cite="Milei & Reidel (2026)">
        {"La regulación que fragmenta escala es presuntivamente peligrosa salvo que el regulador pueda demostrar ex ante que es fold-safe."}
      </Pullquote>

      <InsightCallout icon="📄">
        {"Estos dos papers formalizan matemáticamente la intuición de que la intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir. Presentados en el Foro Económico Mundial de Davos, enero 2026."}
      </InsightCallout>
    </SectionArticle>
    </SidebarLayout>
  );
}
