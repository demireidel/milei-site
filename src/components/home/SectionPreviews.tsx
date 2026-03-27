import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { sectionCards } from "@/data/home";

export function SectionPreviews() {
  return (
    <section className="bg-dark py-section">
      <Container>
        <ScrollReveal variant="blur-in">
          <p className="badge-text mb-3 text-right tracking-[0.2em]">
            Explorar
          </p>
          <h2 className="mb-12 text-right font-display text-2xl text-text-primary">
            La transformación, sección por sección
          </h2>
        </ScrollReveal>

        {/* Bento grid: Visión spans 2 cols, middle 4 are standard, Archivo spans full width */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectionCards.map((s, i) => {
            const isFeatured = i === 0 || i === 5;
            const spanClass =
              i === 0 ? "lg:col-span-2" : i === 5 ? "lg:col-span-3" : "";
            return (
              <ScrollReveal key={s.href} variant="scale-in" delay={i * 60} className={spanClass}>
                <Link href={s.href} className="card-container group block h-full no-underline">
                  <Card accent hover className="h-full overflow-hidden p-0">
                    {s.img && (
                      <Image
                        src={s.img}
                        alt={s.imgAlt ?? ""}
                        width={600}
                        height={300}
                        className="aspect-[2/1] w-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="p-6 @md:p-8">
                    {/* Stat chip — responds to container width */}
                    {s.stat && (
                      <div className="mb-4 flex items-baseline gap-2">
                        <span className="font-accent text-xl font-bold leading-none text-gold @md:text-3xl">
                          {s.stat}
                        </span>
                        <span className="stat-label">{s.statLabel}</span>
                      </div>
                    )}

                    <h3 className="m-0 mb-2 font-display text-xl text-text-primary @md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="prose-body m-0 leading-normal">{s.desc}</p>

                    {/* Arrow indicator */}
                    <div className="badge-text mt-5 flex items-center gap-1">
                      Explorar
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-fast group-hover:translate-x-1"
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    </div>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
