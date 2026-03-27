"use client";

import { useMemo } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { Container } from "@/components/ui/Container";

interface SidebarItem {
  id: string;
  num: string;
  title: string;
}

interface SidebarLayoutProps {
  label: string;
  count?: string;
  items: SidebarItem[];
  variant?: "dark" | "navy";
  children: React.ReactNode;
}

export function SidebarLayout({
  label,
  count,
  items,
  variant = "dark",
  children,
}: SidebarLayoutProps) {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const active = useSectionObserver(sectionIds);

  const bg = variant === "navy" ? "bg-navy" : "bg-dark";

  return (
    <section className={`${bg} py-[var(--spacing-section)]`}>
      <Container wide>
        <div className="flex gap-12">
          {/* Sticky sidebar — desktop only */}
          <nav
            className="sidebar-nav hidden shrink-0 lg:block"
            aria-label={label}
          >
            {count && <p className="badge-text mb-4">{count}</p>}
            <ul className="m-0 list-none space-y-1 p-0">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`sidebar-nav-item ${
                      active === item.id ? "sidebar-nav-item-active" : ""
                    }`}
                  >
                    <span className="font-accent">{item.num}</span>{" "}
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Volver arriba */}
            <button
              type="button"
              aria-label="Volver al inicio de la página"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="sidebar-nav-item mt-4 w-full border-t border-border pt-4 text-left"
            >
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Volver arriba
            </button>
          </nav>

          {/* Main content */}
          <div className="min-w-0 max-w-[var(--width-narrow)] flex-1">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
