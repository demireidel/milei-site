"use client";

import Link from "next/link";
import { navLinks } from "@/data/nav";
import { Wordmark } from "@/components/ui/Wordmark";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto max-w-[var(--width-content)] px-4 pb-[var(--spacing-xl)] pt-[var(--spacing-3xl)] sm:px-6 lg:px-8">
        {/* Top row: wordmark + nav */}
        <ScrollReveal variant="fade-up">
          <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Wordmark + tagline */}
            <div>
              <Link href="/" className="no-underline">
                <Wordmark className="text-xl tracking-[0.1em]" />
              </Link>
              <p className="page-eyebrow mt-2">La libertad avanza</p>
            </div>

            {/* Nav links */}
            <nav aria-label="Navegación del pie de página">
              <ul className="m-0 grid list-none grid-cols-2 gap-x-12 gap-y-3 p-0 sm:grid-cols-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-slide text-[length:var(--text-sm)] text-text-secondary no-underline transition-colors duration-[var(--duration-fast)] hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ScrollReveal>

        {/* Contact */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mb-8 text-[length:var(--text-xs)] text-text-tertiary">
            <p className="m-0">
              Presidencia de la Nación Argentina — Casa Rosada
            </p>
            <p className="m-0">Balcarce 50, Buenos Aires, Argentina</p>
          </div>
        </ScrollReveal>

        {/* Argentine flag — animates width from left */}
        <ScrollReveal variant="none" delay={400}>
          <div
            className="mb-8 flex max-w-32 gap-0 overflow-hidden rounded"
            style={{ height: "4px" }}
            aria-label="Bandera Argentina"
            role="img"
          >
            <div className="flex-1 bg-celeste" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-celeste" />
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <ScrollReveal variant="blur-in" delay={500}>
          <p className="m-0 font-display text-[length:var(--text-sm)] italic text-text-tertiary">
            Viva la libertad, carajo.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
