"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
}

export function PageHeader({
  eyebrow,
  title,
  titleEmphasis,
  subtitle,
  children,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(sectionRef);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cssScrollTimeline, setCssScrollTimeline] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setCssScrollTimeline(CSS.supports("animation-timeline", "scroll()"));
  }, []);

  // Parallax: prefer CSS scroll-driven animation when supported, JS fallback otherwise
  const useJsParallax = !cssScrollTimeline && !reducedMotion;
  const parallaxY = useJsParallax ? scrollProgress * -30 : 0;

  // Split title into words for staggered reveal
  const titleWords = title.split(" ");
  const totalWords = titleWords.length + (titleEmphasis ? titleEmphasis.split(" ").length : 0);
  const baseDelay = 0; // ms delay for first word — start immediately
  const stagger = 30; // ms between words

  return (
    <section
      ref={sectionRef}
      className={`pb-12 pt-14 md:pt-18${backgroundImage ? " relative overflow-hidden" : ""}`}
      style={{ viewTransitionName: "page-header" }}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundAlt || ""}
            fill
            sizes="100vw"
            className={`object-cover opacity-40${cssScrollTimeline && !reducedMotion ? " parallax-scroll" : ""}`}
            style={
              useJsParallax
                ? {
                    transform: `translateY(${parallaxY}px)`,
                    willChange: scrollProgress > 0 ? "transform" : undefined,
                  }
                : undefined
            }
            priority
          />
          <div
            className="page-header-overlay absolute inset-0"
          />
        </>
      )}
      <Container className={backgroundImage ? "relative z-10" : ""}>
      {/* Force light-on-dark text for pages with background images */}
      <div className={backgroundImage ? "section-light-text" : undefined}>
        {/* Eyebrow — slide in from right */}
        <p
          className="page-eyebrow"
          style={
            reducedMotion
              ? {}
              : {
                  animation: "anim-slide-right 500ms var(--ease-out-expo) 0ms both",
                }
          }
        >
          {eyebrow}
        </p>

        {/* Gold ornamental rule */}
        <span
          className="gold-rule"
          aria-hidden="true"
          style={
            reducedMotion
              ? {}
              : { animation: "anim-fade-up 400ms var(--ease-out-expo) 150ms both" }
          }
        />

        {/* Title — word-by-word reveal */}
        <h1 className="page-title">
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="inline-block"
              style={
                reducedMotion
                  ? {}
                  : {
                      animation: `anim-fade-up 500ms var(--ease-out-expo) ${baseDelay + i * stagger}ms both`,
                    }
              }
            >
              {word}
              {i < titleWords.length - 1 || titleEmphasis ? "\u00A0" : ""}
            </span>
          ))}
          {titleEmphasis && (
            <>
              {titleEmphasis.split(" ").map((word, i) => (
                <span
                  key={`em-${i}`}
                  className="inline-block italic text-gold"
                  style={
                    reducedMotion
                      ? {}
                      : {
                          animation: `anim-fade-up 500ms var(--ease-out-expo) ${baseDelay + (titleWords.length + i) * stagger}ms both`,
                        }
                  }
                >
                  {word}
                  {i < titleEmphasis.split(" ").length - 1 ? "\u00A0" : ""}
                </span>
              ))}
            </>
          )}
        </h1>

        {/* Subtitle — fade in after title completes */}
        {subtitle && (
          <p
            className="page-subtitle"
            style={
              reducedMotion
                ? {}
                : {
                    animation: `anim-fade-up 600ms var(--ease-out-expo) ${baseDelay + totalWords * stagger}ms both`,
                  }
            }
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
      </Container>
    </section>
  );
}
