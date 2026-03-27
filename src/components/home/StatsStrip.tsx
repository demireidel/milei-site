"use client";

import { homeStats } from "@/data/home";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsStrip() {
  return (
    <section className="section-light-text bg-cream">
      <div className="mx-auto max-w-[var(--width-content)] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-[oklch(1_0_0/0.07)] md:grid-cols-4 md:divide-y-0">
          {homeStats.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="scale-in" delay={i * 80} className="flex justify-center">
              <div className="px-6 py-12 text-center md:px-8">
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  label={stat.label}
                  decimals={stat.decimals}
                  variant="strip"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
