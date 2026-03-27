"use client";

import Image from "next/image";
import type { PobrezaData } from "@/data/logros";
import { AnimatedCounter } from "@/components/logros/AnimatedCounter";
import { BeforeAfterPanel } from "@/components/ui/BeforeAfterPanel";
import { Pullquote } from "@/components/ui/Pullquote";

export function PobrezaBlock({ data }: { data: PobrezaData }) {
  return (
    <article id="logro-pobreza" className="mb-16">
      {/* Banner image */}
      {data.img && (
        <Image
          src={data.img}
          alt={data.imgAlt}
          width={1200}
          height={480}
          className="mb-8 aspect-[5/2] w-full rounded-xl object-cover"
          loading="lazy"
        />
      )}

      {/* Badge */}
      <p className="badge-text mb-2">{data.badge}</p>

      {/* Kicker */}
      <p className="prose-body mb-8 max-w-[44rem]">{data.kicker}</p>

      {/* Headline */}
      <h2 className="mb-10 font-display text-[length:var(--text-3xl)] text-text-primary">
        {data.headline}
        <span className="text-gold">{data.headlineEm}</span>
        {" "}de argentinos salieron de la pobreza
      </h2>

      {/* Animated counters */}
      <div className="mb-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {data.counters.map((c) => (
          <AnimatedCounter
            key={c.label}
            target={c.target}
            suffix={c.suffix}
            label={c.label}
            sub={c.sub}
            decimals={c.decimals}
          />
        ))}
      </div>

      {/* Before / After flow */}
      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <BeforeAfterPanel type="before" label={data.flowBefore.tag} value={data.flowBefore.big}>
          <p className="prose-body m-0">{data.flowBefore.desc}</p>
        </BeforeAfterPanel>
        <BeforeAfterPanel type="after" label={data.flowAfter.tag} value={data.flowAfter.big}>
          <p className="prose-body m-0">{data.flowAfter.desc}</p>
        </BeforeAfterPanel>
      </div>

      {/* Pills */}
      <div className="mb-10 flex flex-wrap gap-3">
        {data.pills.map((pill) => (
          <div
            key={pill.lbl}
            className="rounded-full border border-border bg-surface-1 px-4 py-2"
          >
            <span className="font-accent text-[length:var(--text-sm)] font-bold text-gold">
              {pill.val}
            </span>{" "}
            <span className="text-[length:var(--text-xs)] text-text-secondary">
              {pill.lbl}
            </span>
          </div>
        ))}
      </div>

      {/* Narrative */}
      {data.narrative.length > 0 && (
        <div className="mb-10 max-w-[52rem]">
          {data.narrative.map((p, i) => (
            <p
              key={i}
              className={`text-[length:var(--text-base)] leading-relaxed text-text-secondary ${
                i < data.narrative.length - 1 ? "mb-5" : "m-0"
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Quote */}
      <Pullquote cite={data.quoteAttr}>{data.quote}</Pullquote>
    </article>
  );
}
