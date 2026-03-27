"use client";

import Link from "next/link";
import { navLinks } from "@/data/nav";
import { Wordmark } from "@/components/ui/Wordmark";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto max-w-content px-4 pb-xl pt-3xl sm:px-6 lg:px-8">
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
                      className="link-slide inline-block py-1 text-sm text-text-secondary no-underline transition-colors duration-fast hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ScrollReveal>

        {/* Social + Contact */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="text-xs text-text-tertiary">
              <p className="m-0">
                Presidencia de la Nación Argentina — Casa Rosada
              </p>
              <p className="m-0">Balcarce 50, Buenos Aires, Argentina</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/JMilei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-text-secondary no-underline transition-colors hover:bg-gold hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/javiermilei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-text-secondary no-underline transition-colors hover:bg-gold hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@javiermilei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-text-secondary no-underline transition-colors hover:bg-gold hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Argentine flag — animates width from left */}
        <ScrollReveal variant="none" delay={400}>
          <div
            className="mb-8 flex h-1 max-w-32 gap-0 overflow-hidden rounded"
            aria-hidden="true"
          >
            <div className="flex-1 bg-celeste" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-celeste" />
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <ScrollReveal variant="blur-in" delay={500}>
          <p className="m-0 font-display text-sm italic text-text-tertiary">
            Viva la libertad, carajo.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
