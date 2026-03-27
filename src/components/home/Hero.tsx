"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImage } from "@/data/photos";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      videoRef.current?.pause();
      setShowFallback(true);
      setStep(99);
      return;
    }

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData || conn?.effectiveType === "2g") {
      setShowFallback(true);
      setStep(99);
      return;
    }

    // Choreographed entrance sequence
    const timers = [
      setTimeout(() => setStep(1), 100),   // gold top line
      setTimeout(() => setStep(2), 400),   // eyebrow
      setTimeout(() => setStep(3), 600),   // "Javier"
      setTimeout(() => setStep(4), 800),   // "Milei"
      setTimeout(() => setStep(5), 1200),  // gold divider
      setTimeout(() => setStep(6), 1500),  // subtitle
      setTimeout(() => setStep(7), 1900),  // scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const shown = step >= 99;

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background video */}
      {!showFallback && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/videos/hero.mp4"
          poster={heroImage.src}
          onError={() => setShowFallback(true)}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
      )}

      {/* Fallback static image */}
      {showFallback && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%]"
          />
        </div>
      )}

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold accent line at top */}
      <div
        className="animate-entrance-scale absolute inset-x-0 top-0 h-0.5 bg-gold"
        style={{
          transform: shown || step >= 1 ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
        }}
      />

      {/* Content — no scroll-driven transform */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-4 pb-12">
        {/* Eyebrow */}
        <p
          className="animate-entrance-fade mb-6 text-center font-accent text-xs uppercase tracking-[0.35em] text-white/50"
          style={{
            opacity: shown || step >= 2 ? 1 : 0,
            transform: shown || step >= 2 ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Presidente de la Nación Argentina
        </p>

        <h1
          className="hero-title-text text-center leading-[0.88]"
          style={{ viewTransitionName: "hero-title" }}
        >
          {/* "Javier" — slightly smaller, white, clip-path reveal from bottom */}
          <span
            className="animate-entrance-clip block font-accent text-[clamp(2.5rem,9vw,5.5rem)] font-bold uppercase tracking-[0.18em] text-white"
            style={{
              clipPath: shown || step >= 3 ? "inset(0)" : "inset(100% 0 0 0)",
            }}
          >
            Javier
          </span>
          {/* "Milei" — larger, gold shimmer, clip-path reveal */}
          <span
            className={`animate-entrance-clip-slow block font-accent text-[clamp(4rem,16vw,9.5rem)] font-bold uppercase tracking-[0.08em] ${shown || step >= 4 ? "gold-shimmer" : ""}`}
            style={{
              clipPath: shown || step >= 4 ? "inset(0)" : "inset(100% 0 0 0)",
              ...(!(shown || step >= 4) ? { color: "var(--color-gold)" } : {}),
            }}
          >
            Milei
          </span>
        </h1>

        {/* Gold divider — expands from center */}
        <div
          className="animate-entrance-divider mx-auto mb-5 mt-7 h-px w-20 bg-gold"
          style={{
            transform: shown || step >= 5 ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
          }}
        />

        {/* Subtitle — max-w-lg so the phrase fits on 1–2 lines */}
        <p
          className="animate-entrance-fade-slow max-w-[36rem] text-center font-display text-lg italic leading-snug text-white/65"
          style={{
            opacity: shown || step >= 6 ? 1 : 0,
            transform: shown || step >= 6 ? "translateY(0)" : "translateY(10px)",
          }}
        >
          Argentina será el país más libre del mundo
        </p>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-normal ease-standard"
          aria-hidden="true"
          style={{
            opacity: shown || step >= 7 ? 1 : 0,
          }}
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/25 pt-1.5">
            <div className="h-2 w-1 animate-[scroll-dot_2s_ease-in-out_infinite] rounded-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
