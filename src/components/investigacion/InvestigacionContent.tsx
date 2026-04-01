"use client";

import { useRef, useEffect, useState } from "react";
import { ChapterHeader } from "@/components/ui/ChapterHeader";
import { Card } from "@/components/ui/Card";
import { SectionArticle } from "@/components/ui/SectionArticle";
import { SidebarLayout } from "@/components/ui/SidebarLayout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { InsightCallout } from "@/components/ui/InsightCallout";
import { Pullquote } from "@/components/ui/Pullquote";
import { ExpandableSection } from "@/components/ui/ExpandableSection";
import { Math } from "@/components/ui/Math";

/* ── useInView ───────────────────────────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setInView(true); return; }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Equation block — premium styled container ───────────── */
function EquationBlock({ tex, label, children }: { tex: string; label?: string; children?: React.ReactNode }) {
  return (
    <ScrollReveal variant="fade-up">
      <div className="my-10 rounded-xl border border-gold/20 bg-gold/[0.03] px-6 py-8 sm:px-10 sm:py-10">
        {label && (
          <p className="m-0 mb-5 text-center text-[11px] font-bold uppercase tracking-[0.25em] text-text-tertiary">{label}</p>
        )}
        <div className="flex justify-center overflow-x-auto py-2 text-[1.6rem] text-gold sm:text-[2rem]">
          <Math tex={tex} display />
        </div>
        {children}
      </div>
    </ScrollReveal>
  );
}

/* ── Animated fold diagram ───────────────────────────────── */
function FoldDiagram() {
  const { ref, inView } = useInView(0.2);

  return (
    <ScrollReveal variant="fade-up">
      <div ref={ref} className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-2 text-center font-display text-lg text-text-primary">
          {"El pliegue: la productividad marginal del capital tiene forma de joroba"}
        </h4>
        <p className="mb-6 text-center text-sm text-text-tertiary">
          {"Con rendimientos crecientes (θ > 1) y complementaridad capital-trabajo (σ < 1)"}
        </p>

        <div className="mb-6">
          <svg viewBox="0 0 420 240" className="mx-auto block" style={{ width: "100%", maxWidth: "32rem" }}>
            {[60, 100, 140, 180].map((y) => (
              <line key={y} x1="50" y1={y} x2="390" y2={y} stroke="var(--color-border)" strokeWidth="0.3" />
            ))}
            <line x1="50" y1="200" x2="390" y2="200" stroke="var(--color-border)" strokeWidth="1" />
            <line x1="50" y1="200" x2="50" y2="30" stroke="var(--color-border)" strokeWidth="1" />

            <path
              d="M 60,195 C 95,190 130,110 200,55 C 240,30 290,42 340,110 C 360,145 380,180 395,195"
              fill="none" stroke="var(--color-gold-hex)" strokeWidth="2.5" strokeLinecap="round"
              style={{ strokeDasharray: 600, strokeDashoffset: inView ? 0 : 600, transition: "stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1)" }}
            />

            <line x1="50" y1="110" x2="390" y2="110" stroke="var(--color-celeste-hex)" strokeWidth="1.5" strokeDasharray="6 4"
              style={{ opacity: inView ? 0.7 : 0, transition: "opacity 0.6s ease 0.8s" }} />

            <circle cx="200" cy="55" r="4" fill="var(--color-gold-hex)"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0)", transformOrigin: "200px 55px", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.2s" }} />
            <circle cx="148" cy="110" r="5" fill="var(--color-celeste-hex)"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0)", transformOrigin: "148px 110px", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.5s" }} />
            <circle cx="310" cy="110" r="5" fill="var(--color-celeste-hex)"
              style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0)", transformOrigin: "310px 110px", transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.7s" }} />

            <line x1="148" y1="110" x2="148" y2="200" stroke="var(--color-text-tertiary)" strokeWidth="1" strokeDasharray="3 3"
              style={{ opacity: inView ? 0.4 : 0, transition: "opacity 0.5s ease 1.8s" }} />
            <rect x="50" y="196" width="98" height="6" rx="2" fill="var(--color-gold-hex)"
              style={{ opacity: inView ? 0.15 : 0, transition: "opacity 0.5s ease 2s" }} />

            <text x="200" y="46" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="10" fontWeight="bold"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.4s ease 1.3s" }}>pico</text>
            <text x="398" y="114" textAnchor="start" fill="var(--color-celeste-hex)" fontSize="9"
              style={{ opacity: inView ? 0.7 : 0, transition: "opacity 0.4s ease 1s" }}>umbral D</text>
            <text x="148" y="218" textAnchor="middle" fill="var(--color-text-primary)" fontSize="10" fontWeight="bold"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.4s ease 2s" }}>L_min</text>
            <text x="90" y="208" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="8"
              style={{ opacity: inView ? 0.6 : 0, transition: "opacity 0.4s ease 2.2s" }}>sin equilibrio</text>
            <text x="148" y="103" textAnchor="middle" fill="var(--color-celeste-hex)" fontSize="8"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.4s ease 1.6s" }}>bajo</text>
            <text x="310" y="103" textAnchor="middle" fill="var(--color-celeste-hex)" fontSize="8"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.4s ease 1.8s" }}>alto</text>
            <text x="220" y="232" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9">escala (trabajo)</text>
            <text x="18" y="120" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="8" transform="rotate(-90, 18, 120)">productividad marginal K</text>
          </svg>
        </div>

        <div className="space-y-2 text-sm text-text-secondary">
          <p className="m-0">
            <span className="font-semibold text-gold">La curva dorada</span>{" es la productividad marginal reducida del capital, "}
            <Math tex="\phi_K(r)" />
            {". Tiene forma de joroba: sube, alcanza un pico, y baja."}
          </p>
          <p className="m-0">
            <span className="font-semibold text-celeste">La línea celeste</span>{" es el umbral de costo "}
            <Math tex="D" />
            {" que la economía necesita superar. Solo donde la curva cruza la línea hay equilibrio — y hay dos: uno de baja y otro de alta productividad."}
          </p>
          <p className="m-0">
            {"A la izquierda de "}
            <Math tex="L_{\min}" />
            {", la curva nunca alcanza el umbral. No importa cuánto esfuerzo haga la economía — "}
            <strong>no hay ninguna combinación viable</strong>
            {". Es una zona muerta."}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Amplifier bars ──────────────────────────────────────── */
function AmplifierBars() {
  const { ref, inView } = useInView(0.25);
  const data = [
    { shock: "+10\\%", result: "+46\\%", pct: 16, label: "+46%" },
    { shock: "+25\\%", result: "+144\\%", pct: 51, label: "+144%" },
    { shock: "+40\\%", result: "+284\\%", pct: 100, label: "+284%" },
  ];

  return (
    <ScrollReveal variant="fade-up">
      <div ref={ref} className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-2 text-center font-display text-lg text-text-primary">
          {"Benchmark: "}
          <Math tex="\theta = 1.25" />
          {", amplificador = "}
          <Math tex="4\times" />
        </h4>
        <p className="mb-6 text-center text-sm text-text-tertiary">
          {"Cada 1% de aumento en "}
          <Math tex="D" />
          {" amplifica "}
          <Math tex="L_{\min}" />
          {" en un 4%"}
        </p>

        <div className="space-y-4">
          {data.map((d, i) => (
            <div key={d.label} className="flex items-center gap-4">
              <div className="w-20 shrink-0 text-right">
                <span className="font-accent text-sm font-bold text-text-primary"><Math tex={d.shock} /></span>
                <span className="block text-xs text-text-tertiary">shock</span>
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="h-8 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="flex h-full items-center rounded-full bg-gradient-to-r from-gold/80 to-gold px-3"
                    style={{ width: inView ? `${d.pct}%` : "0%", transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${0.3 + i * 0.3}s` }}
                  >
                    <span className="text-xs font-bold text-white">{d.label}</span>
                  </div>
                </div>
              </div>
              <div className="w-14 shrink-0 text-center text-xs text-text-tertiary">
                <Math tex="\Delta L_{\min}" />
              </div>
            </div>
          ))}
        </div>

        <p className="m-0 mt-6 text-center text-sm text-text-secondary">
          {"Un aumento del 40% en las cuñas regulatorias casi "}
          <strong>triplica</strong>
          {" la escala mínima. La regulación no tiene que ser confiscatoria para ser destructiva."}
        </p>
      </div>
    </ScrollReveal>
  );
}

/* ── Hysteresis map ──────────────────────────────────────── */
function HysteresisMap() {
  const { ref, inView } = useInView(0.2);

  return (
    <ScrollReveal variant="fade-up">
      <div ref={ref} className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
        <h4 className="mb-2 text-center font-display text-lg text-text-primary">
          {"La recuperación es bidimensional"}
        </h4>
        <p className="mb-6 text-center text-sm text-text-tertiary">
          {"Requiere "}
          <Math tex="D < D_{SN}" />
          {" y "}
          <Math tex="K \in \mathcal{A}(D)" />
          {" simultáneamente"}
        </p>

        <svg viewBox="0 0 400 260" className="mx-auto block" style={{ width: "100%", maxWidth: "28rem" }}>
          <rect x="60" y="30" width="300" height="200" fill="none" stroke="var(--color-border)" strokeWidth="0.5" />
          <rect x="60" y="30" width="150" height="100" fill="var(--color-gold-hex)"
            style={{ opacity: inView ? 0.08 : 0, transition: "opacity 0.8s ease 0.4s" }} />
          <rect x="210" y="130" width="150" height="100" fill="oklch(0.55 0.2 25)"
            style={{ opacity: inView ? 0.06 : 0, transition: "opacity 0.8s ease 0.8s" }} />
          <line x1="210" y1="30" x2="210" y2="235" stroke="var(--color-text-tertiary)" strokeWidth="1" strokeDasharray="4 4"
            style={{ opacity: inView ? 0.4 : 0, transition: "opacity 0.5s ease 0.2s" }} />
          <line x1="60" y1="130" x2="365" y2="130" stroke="var(--color-text-tertiary)" strokeWidth="1" strokeDasharray="4 4"
            style={{ opacity: inView ? 0.4 : 0, transition: "opacity 0.5s ease 0.2s" }} />

          <text x="135" y="70" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="12" fontWeight="bold"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease 0.8s" }}>RECUPERACIÓN</text>
          <text x="135" y="88" textAnchor="middle" fill="var(--color-gold-hex)" fontSize="8"
            style={{ opacity: inView ? 0.7 : 0, transition: "opacity 0.5s ease 1s" }}>D baja + K suficiente</text>
          <text x="285" y="75" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9"
            style={{ opacity: inView ? 0.5 : 0, transition: "opacity 0.5s ease 0.8s" }}>K suficiente</text>
          <text x="285" y="90" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="8"
            style={{ opacity: inView ? 0.4 : 0, transition: "opacity 0.5s ease 1s" }}>pero D alta</text>
          <text x="135" y="170" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="9"
            style={{ opacity: inView ? 0.5 : 0, transition: "opacity 0.5s ease 0.8s" }}>D baja</text>
          <text x="135" y="185" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="8"
            style={{ opacity: inView ? 0.4 : 0, transition: "opacity 0.5s ease 1s" }}>pero sin K</text>
          <text x="285" y="178" textAnchor="middle" fill="oklch(0.55 0.2 25)" fontSize="11" fontWeight="bold"
            style={{ opacity: inView ? 0.7 : 0, transition: "opacity 0.5s ease 1s" }}>TRAMPA</text>

          <text x="210" y="252" textAnchor="middle" fill="var(--color-text-primary)" fontSize="9" fontWeight="bold">D_SN</text>
          <text x="280" y="252" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="8">cuña →</text>
          <text x="25" y="130" textAnchor="middle" fill="var(--color-text-tertiary)" fontSize="8" transform="rotate(-90, 25, 130)">capital K →</text>

          <path d="M 300,180 C 250,160 200,135 120,65" fill="none" stroke="var(--color-gold-hex)" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrH2)"
            style={{ opacity: inView ? 0.7 : 0, transition: "opacity 0.8s ease 1.2s" }} />
          <circle cx="300" cy="180" r="5" fill="oklch(0.55 0.2 25)"
            style={{ opacity: inView ? 0.5 : 0, transition: "opacity 0.5s ease 1s" }} />
          <defs>
            <marker id="arrH2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M 0 0 L 8 3 L 0 6 Z" fill="var(--color-gold-hex)" />
            </marker>
          </defs>
        </svg>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-surface-2 p-4">
            <span className="mb-1 block text-xs font-semibold text-text-primary">
              {"Condición 1: "}
              <Math tex="D < D_{SN}" />
            </span>
            <p className="m-0 text-xs text-text-secondary">
              {"Impuestos, regulaciones y costos de cumplimiento deben caer por debajo del umbral. En el benchmark: reducción de apenas 3,1%."}
            </p>
          </div>
          <div className="rounded-lg bg-surface-2 p-4">
            <span className="mb-1 block text-xs font-semibold text-text-primary">
              {"Condición 2: "}
              <Math tex="K \in \mathcal{A}(D)" />
            </span>
            <p className="m-0 text-xs text-text-secondary">
              {"El capital acumulado debe estar dentro de la región de activación. Si fue destruido por años de malas políticas, bajar la cuña sola no produce el salto."}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Sidebar ─────────────────────────────────────────────── */
const sidebarItems = [
  { id: "resumen", num: "I", title: "Los papers" },
  { id: "escala", num: "II", title: "La escala mínima" },
  { id: "dos-mundos", num: "III", title: "Dos mundos" },
  { id: "amplificador", num: "IV", title: "El amplificador" },
  { id: "histeresis", num: "V", title: "Histéresis" },
  { id: "paper2", num: "VI", title: "La regulación" },
  { id: "canales", num: "VII", title: "Los cuatro canales" },
  { id: "google", num: "VIII", title: "Caso Google" },
  { id: "regla", num: "IX", title: "La regla" },
];

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════ */
export function InvestigacionContent() {
  return (
    <SidebarLayout label="Secciones" items={sidebarItems} variant="navy">

      {/* ── I. Los papers ────────────────────────────────────── */}
      <SectionArticle id="resumen">
        <ChapterHeader numeral="I" title="Los papers" />
        <SectionKicker color="celeste">{"Davos, enero 2026"}</SectionKicker>

        <ScrollReveal variant="fade-up">
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            {/* Paper 1 card */}
            <Card accent className="overflow-hidden !border-l-3 !border-l-gold">
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="badge-text !mb-0">Paper 1</span>
                </div>
                <h4 className="m-0 mb-1 font-display text-sm leading-snug text-text-primary">
                  {"Minimum Viable Scale and Local Activation with Increasing Returns to Scale and Endogenous Labor Supply"}
                </h4>
                <p className="card-body mb-3">Milei & Reidel · 2026</p>
                <a href="/papers/minimum-viable-scale.pdf" download
                  className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-wide text-gold transition-colors duration-fast hover:bg-gold/20">
                  PDF
                </a>
              </div>
            </Card>
            {/* Paper 2 card */}
            <Card accent className="overflow-hidden !border-l-3 !border-l-gold">
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="badge-text !mb-0">Paper 2</span>
                </div>
                <h4 className="m-0 mb-1 font-display text-sm leading-snug text-text-primary">
                  {"When Regulation Kills Growth: A Theoretical and Practical Framework Against Scale-Fragmenting Regulation"}
                </h4>
                <p className="card-body mb-3">Milei & Reidel · 2026</p>
                <a href="/papers/when-regulation-kills-growth.pdf" download
                  className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-wide text-gold transition-colors duration-fast hover:bg-gold/20">
                  PDF
                </a>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-10">
            <h3 className="m-0 mb-4 font-display text-xl text-text-primary">{"El problema que la economía no podía resolver"}</h3>
            <p className="prose-body">
              {"Abran cualquier libro de microeconomía y van a encontrar el mismo supuesto en la primera página: rendimientos decrecientes a escala. Producir el doble cuesta más que el doble. ¿Por qué todos los modelos asumen esto? No porque sea verdad — sino porque cuando los rendimientos son crecientes, los modelos estándar dejan de funcionar. La función objetivo deja de ser cóncava, los teoremas de existencia y unicidad no aplican, y las herramientas convencionales no sirven."}
            </p>
            <p className="prose-body">
              {"El resultado es que la teoría económica asumió durante décadas algo que sabe que es falso. En el mundo real — redes, tecnología, software, infraestructura, data centers — la escala genera más escala. Los economistas lo sabían, pero no tenían las herramientas para modelarlo."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">
              <span className="badge-text !text-red-600">Lo que asumen los libros de texto</span>
              <p className="m-0 mt-3 text-sm text-text-secondary">
                {"Rendimientos decrecientes → un solo equilibrio → la economía siempre converge → más regulación te hace un poco más pobre. Todo es gradual."}
              </p>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-5">
              <span className="badge-text !text-green-700">Lo que demuestra este paper</span>
              <p className="m-0 mt-3 text-sm text-text-secondary">
                {"Rendimientos crecientes → múltiples equilibrios → acantilado invisible → un poco más de regulación puede empujarte al vacío. La diferencia es abrupta."}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={400}>
          <InsightCallout icon="🔑">
            {"Este paper resuelve el problema: desarrolla el modelo completo con rendimientos crecientes a escala, oferta laboral endógena y complementaridad capital-trabajo. Donde los modelos convencionales se rompían, Milei y Reidel derivan resultados exactos en forma cerrada."}
          </InsightCallout>
        </ScrollReveal>
      </SectionArticle>

      {/* ── II. La escala mínima ─────────────────────────────── */}
      <SectionArticle id="escala">
        <ChapterHeader numeral="II" title="La escala mínima viable" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"Pensalo como una pista de despegue. Un avión necesita una longitud mínima de pista para levantar vuelo — no importa qué tan bueno sea el motor, si la pista es más corta que el umbral, el avión no despega. Punto. No es que despegue un poco menos o más lento: simplemente no despega."}
          </p>
          <p className="prose-body">
            {"Una economía con rendimientos crecientes funciona igual. Hay un tamaño mínimo por debajo del cual no puede sostenerse — no es que sea pobre, es que la matemática dice que "}
            <strong>{"ningún equilibrio viable puede existir"}</strong>
            {". El primer resultado clave del paper es una fórmula cerrada para ese umbral."}
          </p>
        </ScrollReveal>

        <EquationBlock
          label="La fórmula cerrada para la escala mínima viable"
          tex="L_{\min} \;=\; \left(\frac{D}{\phi_K^{\max}}\right)^{\!\frac{1}{\theta-1}}"
        >
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-surface-2 p-3">
              <div className="mb-1 text-lg text-gold"><Math tex="D" /></div>
              <p className="m-0 text-xs text-text-secondary">
                {"La cuña de costos: impuestos, regulaciones, costos de cumplimiento. Todo lo que encarece operar."}
              </p>
            </div>
            <div className="rounded-lg bg-surface-2 p-3">
              <div className="mb-1 text-lg text-gold"><Math tex="\phi_K^{\max}" /></div>
              <p className="m-0 text-xs text-text-secondary">
                {"El pico de productividad marginal del capital. Lo máximo que la tecnología puede rendir."}
              </p>
            </div>
            <div className="rounded-lg bg-surface-2 p-3">
              <div className="mb-1 text-lg text-gold"><Math tex="\theta" /></div>
              <p className="m-0 text-xs text-text-secondary">
                {"Grado de rendimientos a escala. "}
                <Math tex="\theta = 1" />
                {" es constante, "}
                <Math tex="\theta > 1" />
                {" es creciente. Benchmark: "}
                <Math tex="\theta = 1.25" />
                {"."}
              </p>
            </div>
          </div>
        </EquationBlock>

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"La intuición: "}
            <Math tex="L_{\min}" />
            {" sube cuando la cuña regulatoria sube (más impuestos → más difícil sostener la economía) y baja cuando la productividad tecnológica sube (mejor tecnología → viable a menor escala). El exponente "}
            <Math tex="1/(\theta-1)" />
            {" es el amplificador — y es donde está la magia del resultado."}
          </p>
        </ScrollReveal>

        <FoldDiagram />

        <InsightCallout icon="📐">
          {"Nadie había derivado esta fórmula en forma cerrada para un modelo Ramsey con oferta laboral endógena y tecnología CES. Los trabajos anteriores (Skiba 1978, Dechert-Nishimura 1983) estudiaron modelos similares sin poder resolver el umbral explícitamente."}
        </InsightCallout>
      </SectionArticle>

      {/* ── III. Dos mundos ──────────────────────────────────── */}
      <SectionArticle id="dos-mundos">
        <ChapterHeader numeral="III" title="Dos mundos posibles" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"Por encima de "}
            <Math tex="L_{\min}" />
            {", el modelo genera dos equilibrios que coexisten simultáneamente con exactamente los mismos parámetros. La diferencia entre ambos no es gradual: es un "}
            <strong>orden de magnitud</strong>
            {"."}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="my-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-6">
              <span className="badge-text !text-red-600">Equilibrio bajo</span>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div><p className="m-0 font-display text-2xl text-text-primary">26%</p><p className="m-0 text-xs text-text-tertiary">de la fuerza laboral</p></div>
                <div><p className="m-0 font-display text-2xl text-text-primary">4%</p><p className="m-0 text-xs text-text-tertiary">{"sobre "}<Math tex="L_{\min}" /></p></div>
              </div>
              <p className="m-0 mt-4 text-sm text-text-secondary">
                {"Apenas por encima del acantilado. Un empujón la tira al vacío. Es una trampa: formalmente viable, funcionalmente estancada."}
              </p>
            </div>
            <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-6">
              <span className="badge-text !text-green-700">Equilibrio alto</span>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div><p className="m-0 font-display text-2xl text-text-primary">34%</p><p className="m-0 text-xs text-text-tertiary">de la fuerza laboral</p></div>
                <div><p className="m-0 font-display text-2xl text-text-primary">35%</p><p className="m-0 text-xs text-text-tertiary">{"sobre "}<Math tex="L_{\min}" /></p></div>
              </div>
              <p className="m-0 mt-4 text-sm text-text-secondary">
                {"Misma economía, mismos parámetros — pero opera lejos del acantilado, con amplio margen. Próspera y resiliente."}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <div className="my-8 flex flex-wrap items-center justify-center gap-8 rounded-xl border border-border bg-surface-1 p-6 sm:gap-16">
            {[
              { val: "7\\times", label: "más producto" },
              { val: "6\\times", label: "más capital" },
              { val: "9\\times", label: "más consumo" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="m-0 font-display text-3xl text-gold sm:text-4xl"><Math tex={s.val} /></p>
                <p className="m-0 mt-1 text-sm text-text-tertiary">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"La brecha equivale a 171 veces el consumo del equilibrio bajo. Pero la zona de transición entre ambos es extremadamente angosta. Todo se juega en un margen estrecho — la diferencia entre un país próspero y uno estancado puede parecer sutil desde afuera, pero es abismal en sus consecuencias."}
          </p>
        </ScrollReveal>
      </SectionArticle>

      {/* ── IV. El amplificador ──────────────────────────────── */}
      <SectionArticle id="amplificador">
        <ChapterHeader numeral="IV" title="El amplificador" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"El resultado más peligroso del paper. La elasticidad de la escala mínima respecto de la cuña regulatoria es:"}
          </p>
        </ScrollReveal>

        <EquationBlock
          label="Elasticidad de la escala mínima respecto de la cuña"
          tex="\frac{\partial \ln L_{\min}}{\partial \ln D} \;=\; \frac{1}{\theta - 1}"
        >
          <div className="mt-6 rounded-lg bg-surface-2 p-4">
            <h4 className="m-0 mb-3 font-display text-base text-text-primary">{"¿Cómo funciona?"}</h4>
            <p className="m-0 text-sm text-text-secondary">
              {"Con "}
              <Math tex="\theta = 1.25" />
              {" — rendimientos apenas por encima de constantes — el denominador "}
              <Math tex="\theta - 1 = 0.25" />
              {". El amplificador es "}
              <Math tex="1/0.25 = \mathbf{4}" />
              {". Cada aumento de 1% en la cuña amplifica "}
              <Math tex="L_{\min}" />
              {" en un 4%."}
            </p>
            <p className="m-0 mt-3 text-sm text-text-secondary">
              {"Lo crucial: cuanto más cerca está "}
              <Math tex="\theta" />
              {" de 1, "}
              <strong>{"mayor es el amplificador"}</strong>
              {". Rendimientos crecientes moderados son los más peligrosos."}
            </p>
          </div>
        </EquationBlock>

        <AmplifierBars />

        <InsightCallout>
          {"Lo que destruye economías no es la gran confiscación. Es la acumulación silenciosa de fricciones: un impuesto aquí, un trámite allá, un costo de cumplimiento más allá. Cada uno parece menor. Pero todos entran al denominador y se amplifican. Cuando la escala mínima cruza el umbral, la economía cae del acantilado."}
        </InsightCallout>
      </SectionArticle>

      {/* ── V. Histéresis ────────────────────────────────────── */}
      <SectionArticle id="histeresis">
        <ChapterHeader numeral="V" title="Histéresis" subtitle="Caer es fácil, recuperarse es difícil" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"El resultado más poderoso: la asimetría entre destrucción y recuperación. La recuperación requiere "}
            <strong>dos condiciones simultáneas</strong>
            {" — ninguna sola alcanza:"}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="my-6 grid gap-4 sm:grid-cols-2">
            <Card className="p-5">
              <span className="mb-2 block font-display text-2xl text-gold">1</span>
              <h4 className="m-0 mb-2 font-display text-base text-text-primary">
                {"Bajar la cuña: "}
                <Math tex="D < D_{SN}" />
              </h4>
              <p className="card-body m-0">
                {"En el benchmark, una reducción de apenas 3,1%. Parece poco, pero es "}
                <strong>necesaria, no suficiente</strong>
                {"."}
              </p>
            </Card>
            <Card className="p-5">
              <span className="mb-2 block font-display text-2xl text-gold">2</span>
              <h4 className="m-0 mb-2 font-display text-base text-text-primary">
                {"Capital en la activación: "}
                <Math tex="K \in \mathcal{A}(D)" />
              </h4>
              <p className="card-body m-0">
                {"Si años de malas políticas destruyeron el capital, "}
                <strong>reformar sola no produce el salto</strong>
                {"."}
              </p>
            </Card>
          </div>
        </ScrollReveal>

        <HysteresisMap />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"Esto formaliza una experiencia que muchos países conocen: reformaron sus economías pero no crecieron. No es que las reformas hayan fallado. Es que la recuperación es bidimensional: se necesita simultáneamente cuña baja y capital suficiente."}
          </p>
        </ScrollReveal>

        <Pullquote cite="Milei & Reidel (2026a)">
          {"La intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir. Un impuesto que parece menor empuja la escala mínima hacia arriba; una vez que la economía cae por debajo del pliegue, el daño persiste aun después de revertir la política."}
        </Pullquote>
      </SectionArticle>

      {/* ═══════════════════════════════════════════════════════
         PAPER 2 — When Regulation Kills Growth
         ═══════════════════════════════════════════════════════ */}

      {/* ── VI. Paper 2 ─────────────────────────────────────── */}
      <SectionArticle id="paper2">
        <ChapterHeader numeral="VI" title="When Regulation Kills Growth" />
        <SectionKicker color="celeste">{"Working Paper — Abril 2026"}</SectionKicker>

        <ScrollReveal variant="fade-up">
          <Card accent className="overflow-hidden !border-l-3 !border-l-gold">
            <div className="p-5">
              <div className="mb-2 flex items-center gap-3">
                <span className="badge-text !mb-0">2026</span>
                <span className="rounded-full bg-celeste/10 px-2.5 py-0.5 text-xs font-semibold text-celeste">Working Paper</span>
              </div>
              <h4 className="m-0 mb-1 font-display text-base leading-snug text-text-primary">
                {"When Regulation Kills Growth: A Theoretical and Practical Framework Against Scale-Fragmenting Regulation"}
              </h4>
              <p className="card-body mb-3">Javier Milei & Demian Reidel</p>
              <a href="/papers/when-regulation-kills-growth.pdf" download
                className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2 font-accent text-xs font-semibold uppercase tracking-wide text-gold transition-colors duration-fast hover:bg-gold/20">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF
              </a>
            </div>
            <ExpandableSection label="Ver abstract" labelExpanded="Cerrar">
              <p className="card-body m-0">
                {"En sectores con rendimientos crecientes, el debate regulatorio salta demasiado rápido del poder de mercado a la intervención estructural. Ese salto es peligroso. Este paper desarrolla un Scale Impact Assessment (SIA) operacional — un protocolo que define la unidad productiva, mide el headroom desde el pliegue, mapea cada remedio en cuatro canales económicos y emite una decisión transparente. El caso Google Search 2025 ilustra el framework sobre un expediente real."}
              </p>
            </ExpandableSection>
          </Card>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-10">
            <h3 className="m-0 mb-4 font-display text-xl text-text-primary">{"De la teoría al instrumento"}</h3>
            <p className="prose-body">
              {"El primer paper demuestra que la escala mínima existe. Este segundo paper pregunta: ¿qué pasa cuando un regulador, con la mejor de las intenciones, rompe una empresa en pedazos? La respuesta depende de los detalles — y este paper construye el instrumento para evaluarlos."}
            </p>
            <p className="prose-body">
              {"El paper no dice que toda regulación sea mala. Dice algo más preciso: en sectores con rendimientos crecientes y complementariedades densas, la regulación que "}
              <strong>fragmenta escala productiva</strong>
              {" es presuntivamente peligrosa salvo que el regulador demuestre que es segura. ¿Por qué? Porque la fragmentación puede empujar la economía por debajo del pliegue del Paper 1 — y una vez ahí, la reversión puede no reconstruir el sistema."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300}>
          <div className="my-8 rounded-xl border border-gold/20 bg-gold/[0.03] p-5">
            <h4 className="m-0 mb-3 font-display text-base text-text-primary">{"¿Dónde aplica este framework?"}</h4>
            <p className="m-0 text-sm text-text-secondary">
              {"No en toda la economía — solo en sectores donde las respuestas a estas preguntas son afirmativas:"}
            </p>
            <div className="mt-4 space-y-2">
              {[
                "¿Los rendimientos a escala son plausiblemente crecientes en la unidad productiva relevante?",
                "¿Las complementariedades son densas y operacionalmente integrales?",
                "¿El remedio propuesto es genuinamente fragmentador de escala?",
                "¿El daño probable es persistente, no meramente transicional?",
                "¿La escala y el headroom pueden medirse conservadoramente?",
              ].map((q) => (
                <div key={q.slice(0, 20)} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-0.5 shrink-0 text-gold">?</span>
                  {q}
                </div>
              ))}
            </div>
            <p className="m-0 mt-4 text-xs text-text-tertiary">
              {"Si la mayoría de las respuestas son negativas, el framework no debería tener peso. Si son afirmativas, la fragmentación debería pasar un filtro de seguridad antes de proceder."}
            </p>
          </div>
        </ScrollReveal>
      </SectionArticle>

      {/* ── VII. Los cuatro canales ─────────────────────────── */}
      <SectionArticle id="canales">
        <ChapterHeader numeral="VII" title="Los cuatro canales" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"Las etiquetas legales de un remedio pueden engañar. Un remedio \"de conducta\" puede destruir complementariedades si la conducta prohibida es parte integral del sistema productivo. Un remedio \"estructural\" puede preservar escala si no fragmenta la unidad funcional. El paper propone evaluar todo remedio a través de cuatro canales económicos:"}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-500/20 bg-green-500/[0.03] p-5">
              <div className="mb-2 text-lg text-green-600"><Math tex="m_r" /></div>
              <h4 className="m-0 mb-1 font-display text-sm text-text-primary">Markup relief</h4>
              <p className="m-0 text-xs text-text-secondary">
                {"¿Cuánto baja el markup? Los remedios de conducta tienden a reducir markups sin tocar la unidad productiva. Esto "}
                <strong>baja</strong>
                {" la escala mínima — es bueno."}
              </p>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">
              <div className="mb-2 text-lg text-red-600"><Math tex="c_r" /></div>
              <h4 className="m-0 mb-1 font-display text-sm text-text-primary">Complementarity destruction</h4>
              <p className="m-0 text-xs text-text-secondary">
                {"¿Cuánta productividad conjunta se destruye? Interfaces, pipelines de datos, rutinas de coordinación rotas. Esto "}
                <strong>sube</strong>
                {" la escala mínima — es peligroso."}
              </p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
              <div className="mb-2 text-lg text-amber-600"><Math tex="u_r" /></div>
              <h4 className="m-0 mb-1 font-display text-sm text-text-primary">Wedge pressure</h4>
              <p className="m-0 text-xs text-text-secondary">
                {"¿Cuánto sube el costo de cumplimiento? Compliance, fricciones de financiamiento, demoras. Todo se amplifica por "}
                <Math tex="1/(\theta-1)" />
                {"."}
              </p>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-5">
              <div className="mb-2 text-lg text-blue-600"><Math tex="\ell_r" /></div>
              <h4 className="m-0 mb-1 font-display text-sm text-text-primary">Retained scale</h4>
              <p className="m-0 text-xs text-text-secondary">
                {"¿Cuánta escala operativa sobrevive? Medida a nivel del sistema, no del incumbente individual. Si rivales expanden, la escala sistémica puede preservarse."}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"Los cuatro canales determinan conjuntamente si un remedio cruza el pliegue. La fórmula para el headroom post-remedio es:"}
          </p>
        </ScrollReveal>

        <EquationBlock
          label="Headroom post-remedio"
          tex="h_r \;=\; h_0 + \ell_r - \frac{u_r - m_r + c_r}{\theta - 1}"
        >
          <p className="m-0 mt-4 text-center text-sm text-text-secondary">
            {"Un remedio es admisible solo si "}
            <Math tex="h_r \geq s" />
            {" — si preserva al menos un margen de seguridad "}
            <Math tex="s" />
            {" desde el pliegue."}
          </p>
        </EquationBlock>

        <ScrollReveal variant="fade-up">
          <div className="my-8 overflow-hidden rounded-xl border border-border bg-surface-1 p-6">
            <h4 className="mb-4 text-center font-display text-lg text-text-primary">Taxonomía de remedios</h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { type: "Conducta", examples: "Anti-conditioning, tying bans, contratos", effect: "↓ markup, unidad intacta", verdict: "Favorable", color: "border-green-500/30 bg-green-500/[0.04]", verdictColor: "text-green-700", icon: "✅" },
                { type: "Acceso preservando escala", examples: "Interoperabilidad, portabilidad, datos abiertos", effect: "↓ markup indirecto, escala preservada", verdict: "Favorable con verificación", color: "border-amber-500/30 bg-amber-500/[0.04]", verdictColor: "text-amber-700", icon: "⚠️" },
                { type: "Fragmentación estructural", examples: "Breakups, separación forzosa, límites de red", effect: "↓ complementariedades, ↓ escala", verdict: "Peligrosa salvo prueba fold-safe", color: "border-red-500/30 bg-red-500/[0.04]", verdictColor: "text-red-700", icon: "❌" },
              ].map((r) => (
                <div key={r.type} className={`rounded-xl border p-4 ${r.color}`}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">{r.icon}</span>
                    <h5 className="m-0 font-display text-sm text-text-primary">{r.type}</h5>
                  </div>
                  <p className="m-0 mb-2 text-xs text-text-secondary">{r.examples}</p>
                  <p className="m-0 mb-2 text-xs text-text-tertiary">{r.effect}</p>
                  <p className={`m-0 text-xs font-semibold ${r.verdictColor}`}>{r.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <div className="my-10 overflow-hidden rounded-xl border border-border bg-surface-1 p-6 sm:p-8">
            <h4 className="mb-6 text-center font-display text-lg text-text-primary">Scale Impact Assessment — Workflow</h4>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { step: "0", label: "Applicability\nscreen" },
                { step: "1", label: "Definir unidad\nproductiva" },
                { step: "2", label: "Medir headroom\nbaseline" },
                { step: "3", label: "Mapear en\nm, c, u, ℓ" },
                { step: "4", label: "Aplicar test\nfold-safety" },
                { step: "5", label: "Rankear y\ndecidir" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-center gap-2">
                  <div className="flex h-16 w-24 flex-col items-center justify-center rounded-lg border border-border bg-surface-2 px-2 text-center sm:w-28">
                    <span className="mb-0.5 font-mono text-[10px] font-bold text-gold">Paso {s.step}</span>
                    <span className="whitespace-pre-line text-[10px] leading-tight text-text-secondary">{s.label}</span>
                  </div>
                  {i < 5 && <span className="text-text-tertiary">→</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <div className="rounded-lg border-2 border-gold/30 bg-gold/[0.04] px-6 py-3 text-center">
                <span className="block text-xs font-semibold text-text-tertiary">Decisión</span>
                <span className="font-display text-sm text-text-primary">Pass · Fail · Indeterminate · Dominated</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <InsightCallout>
          {"El paper no es anti-remedio. Es anti-fragmentación sin prueba de seguridad. Algunos remedios mejoran la viabilidad — los que reducen markups sin romper la unidad productiva. El framework los aprueba."}
        </InsightCallout>
      </SectionArticle>

      {/* ── VIII. Caso Google ────────────────────────────────── */}
      <SectionArticle id="google">
        <ChapterHeader numeral="VIII" title="Caso Google Search 2025" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"El paper aplica el SIA al expediente real de remedios antimonopolio contra Google Search en 2025. No es un ejercicio teórico — es una demostración de cómo el framework clasifica un menú real de remedios sobre evidencia pública."}
          </p>
          <p className="prose-body">
            {"La unidad productiva no es \"Google\" en abstracto. Es el sistema integrado query-distribución-datos-compute a través del cual la calidad de búsqueda, la colocación por defecto, el uso del navegador, los datos del usuario y la escala de infraestructura interactúan. Es el lugar donde las complementariedades se crean y donde la fragmentación puede destruirlas."}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="my-8 overflow-hidden rounded-xl border border-border bg-surface-1 p-6">
            <h4 className="mb-4 text-center font-display text-lg text-text-primary">Clasificación SIA del menú de remedios</h4>
            <div className="space-y-3">
              {[
                { remedy: "Anti-conditioning + límites de 1 año", output: "Pass", color: "text-green-700 bg-green-500/10", why: "Ataca contratos de distribución directamente. La unidad productiva queda intacta." },
                { remedy: "Data disclosures", output: "Pass", color: "text-green-700 bg-green-500/10", why: "Abre acceso a datos y soporta escala rival. Requiere monitoreo de privacidad." },
                { remedy: "Syndication package", output: "Pass", color: "text-green-700 bg-green-500/10", why: "Soporta escala rival sin fragmentación inmediata. Requiere taper enforcement." },
                { remedy: "Choice screens", output: "Pass ilustrativo", color: "text-amber-700 bg-amber-500/10", why: "Fácil de reconciliar con fold safety, pero probablemente demasiado débil." },
                { remedy: "Complete payment ban", output: "Indeterminate", color: "text-amber-700 bg-amber-500/10", why: "Markup relief potencialmente grande, pero escala retenida y respuesta de distribuidores sin resolver." },
                { remedy: "Chrome divestiture", output: "Fail", color: "text-red-700 bg-red-500/10", why: "Fragmentación estructural de la interfaz browser-distribución-aprendizaje. La carga de prueba no se cumple." },
              ].map((r) => (
                <div key={r.remedy} className="flex flex-col gap-2 rounded-lg bg-surface-2 p-3 sm:flex-row sm:items-start sm:gap-4">
                  <div className="shrink-0 sm:w-48">
                    <span className="block text-xs font-semibold text-text-primary">{r.remedy}</span>
                    <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${r.color}`}>{r.output}</span>
                  </div>
                  <p className="m-0 text-xs text-text-secondary">{r.why}</p>
                </div>
              ))}
            </div>
            <p className="m-0 mt-4 text-center text-xs text-text-tertiary">
              {"El tribunal eligió el paquete de menor fragmentación. El SIA lo clasifica como la ruta más consistente con fold safety."}
            </p>
          </div>
        </ScrollReveal>

        <InsightCallout icon="🔍">
          {"La conclusión sobre Chrome es deliberadamente estrecha: no dice que Google debería quedar sin regular. Dice que, en el expediente disponible, la fragmentación estructural no fue demostrada fold-safe respecto de alternativas de menor fragmentación que estaban en el mismo menú."}
        </InsightCallout>
      </SectionArticle>

      {/* ── IX. La regla de decisión ──────────────────────────── */}
      <SectionArticle id="regla" last>
        <ChapterHeader numeral="IX" title="La regla de decisión" subtitle="Policy rule under irreversibility" />

        <ScrollReveal variant="fade-up">
          <p className="prose-body">
            {"El test robusto usa cotas conservadoras para cada variable: lower bounds para markup relief y escala retenida, upper bounds para destrucción de complementariedades y presión de cuña:"}
          </p>
        </ScrollReveal>

        <EquationBlock
          label="Versión robusta del test de fold safety"
          tex="\underline{h}_r \;\equiv\; \underline{h}_0 + \underline{\ell}_r - \frac{\bar{u}_r - \underline{m}_r + \bar{c}_r}{\underline{\theta} - 1} \;\geq\; s"
        >
          <p className="m-0 mt-4 text-center text-sm text-text-secondary">
            {"Si incluso la parametrización más favorable no despeja el margen de seguridad, el remedio falla."}
          </p>
        </EquationBlock>

        <ScrollReveal variant="fade-up">
          <div className="my-8 overflow-hidden rounded-xl border border-border bg-surface-1 p-6">
            <h4 className="mb-4 font-display text-lg text-text-primary">Regla de decisión bajo irreversibilidad</h4>
            <div className="space-y-4">
              {[
                { step: "i", text: "Definir la unidad productiva y aplicar el Scale Impact Assessment.", icon: "🔍" },
                { step: "ii", text: "Eliminar del menú todo remedio que falle el test o que esté dominado por una alternativa de menor fragmentación.", icon: "❌" },
                { step: "iii", text: "Solo entonces — con los remedios admisibles — proceder al balanceo de bienestar convencional.", icon: "⚖️" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <span className="mt-0.5 text-xl">{s.icon}</span>
                  <div>
                    <span className="font-mono text-xs font-bold text-gold">({s.step})</span>
                    <p className="m-0 text-sm text-text-secondary">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="m-0 mt-6 text-sm text-text-secondary">
              <strong>{"¿Por qué importa el orden?"}</strong>
              {" Porque la fragmentación es irreversible. Si un regulador decide no fragmentar hoy, retiene la opción de hacerlo mañana con más evidencia. Si fragmenta y destruye las complementariedades, los equipos, las rutinas y los pipelines de datos, la reversión puede no reconstruir el sistema."}
            </p>
          </div>
        </ScrollReveal>

        <Pullquote cite="Milei & Reidel (2026b)">
          {"En sectores con rendimientos crecientes, complementariedades densas e irreversibilidad significativa, la regulación que fragmenta escala productiva no puede tratarse como presuntivamente inofensiva. Antes de fragmentar, hay que demostrar — ex ante, bajo supuestos conservadores y con margen de seguridad — que el remedio es fold-safe."}
        </Pullquote>

        <InsightCallout icon="📄">
          {"Ambos papers fueron presentados en el Foro Económico Mundial de Davos, enero 2026. El primero construye la teoría — la escala mínima viable, el amplificador, la histéresis. El segundo la convierte en un instrumento operacional — el Scale Impact Assessment — y lo demuestra sobre un expediente real. Juntos, formalizan matemáticamente la intuición de que la intervención estatal puede manufacturar exactamente el estancamiento que dice prevenir."}
        </InsightCallout>
      </SectionArticle>
    </SidebarLayout>
  );
}
