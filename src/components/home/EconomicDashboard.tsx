import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
  period: string;
}

const metrics: DashboardMetric[] = [
  { label: "Inflacion mensual", value: "2,4%", change: "\u221286%", direction: "down", period: "vs dic 2023" },
  { label: "Riesgo pais", value: "< 500", change: "\u221275%", direction: "down", period: "vs dic 2023" },
  { label: "Superavit fiscal", value: "1,8% PBI", change: "Primer vez en 123 a\u00f1os", direction: "up", period: "2024" },
  { label: "Empleo privado", value: "+340K", change: "Recuperacion sostenida", direction: "up", period: "2024-2025" },
  { label: "Inversiones", value: "$55B+", change: "Comprometidas", direction: "up", period: "RIGI + bilateral" },
  { label: "Exportaciones", value: "$11,3B", change: "Superavit comercial", direction: "up", period: "2025" },
];

export function EconomicDashboard() {
  return (
    <section className="bg-dark py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <p className="badge-text mb-2 text-center">Tablero economico</p>
          <h2 className="mb-12 text-center font-display text-xl text-text-primary">
            Los numeros hablan
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} variant="fade-up" delay={i * 80}>
              <div className="surface-card p-5">
                <p className="stat-label m-0">{m.label}</p>
                <p className="stat-number m-0 mt-2">{m.value}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-gold/10 px-2 py-0.5 text-xs font-semibold text-gold">
                    {m.direction === "down" ? "\u2193" : "\u2191"} {m.change}
                  </span>
                </div>
                <p className="m-0 mt-2 text-xs text-text-tertiary">{m.period}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
