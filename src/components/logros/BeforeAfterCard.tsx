"use client";

import Image from "next/image";
import type { Logro } from "@/data/logros";
import { Card } from "@/components/ui/Card";
import { BeforeAfterPanel } from "@/components/ui/BeforeAfterPanel";
import { ExpandableSection } from "@/components/ui/ExpandableSection";

interface BeforeAfterCardProps {
  logro: Logro;
  featured?: boolean;
}

export function BeforeAfterCard({ logro, featured }: BeforeAfterCardProps) {
  const card = (
    <Card className="overflow-hidden">
        {/* Banner image */}
        {logro.img && (
          <Image
            src={logro.img}
            alt={logro.imgAlt ?? logro.title}
            width={600}
            height={240}
            className="aspect-[5/2] w-full object-cover"
            loading="lazy"
          />
        )}

        {/* Header with badge */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="badge-text">{logro.badge}</span>
        </div>

        {/* Title */}
        <div className="px-5 pb-3 pt-4">
          <h3 className="m-0 font-display text-lg leading-snug text-text-primary">
            {logro.title}
          </h3>
        </div>

        {/* Before / After comparison */}
        <div className="mx-5 mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg">
          <BeforeAfterPanel type="before" value={logro.before.val}>
            <span className="text-xs leading-snug text-text-secondary">
              {logro.before.label}
            </span>
          </BeforeAfterPanel>
          <BeforeAfterPanel type="after" value={logro.after.val}>
            <span className="text-xs leading-snug text-text-secondary">
              {logro.after.label}
            </span>
          </BeforeAfterPanel>
        </div>

        {/* Callout */}
        <div className="px-5 pb-4">
          <p className="pullquote m-0 text-sm">
            {logro.callout}
          </p>
        </div>

        {/* Expandable details */}
        {logro.paragraphs.length > 0 && (
          <ExpandableSection
            label="Leer más"
            labelExpanded="Cerrar detalle"
            id={`logro-detail-${logro.num}`}
          >
            <div className="space-y-3">
              {logro.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="prose-body m-0">
                  {p}
                </p>
              ))}

              {/* Before/After images with zoom hover */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="img-zoom-hover">
                  <Image
                    src={logro.imgBefore}
                    alt={logro.altBefore}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full rounded-md object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, 200px"
                  />
                </div>
                <div className="img-zoom-hover">
                  <Image
                    src={logro.imgAfter}
                    alt={logro.altAfter}
                    width={400}
                    height={300}
                    className="aspect-[4/3] w-full rounded-md object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, 200px"
                  />
                </div>
              </div>
            </div>
          </ExpandableSection>
        )}
      </Card>
  );

  if (featured) {
    return <div className="bento-hero [&_.stat-number]:text-3xl">{card}</div>;
  }

  return card;
}
