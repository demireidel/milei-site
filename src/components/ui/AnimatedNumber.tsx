"use client";

import { useAnimatedNumber } from "@/hooks/useAnimatedNumber";

type AnimatedNumberVariant =
  /** StatsStrip: stat-number size, suffix, simple label, scale pop effect */
  | "strip"
  /** Logros/Futuro: larger 3xl stat-number, suffix, bold label, sub-label */
  | "counter";

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  label: string;
  /** Only used in "counter" variant */
  sub?: string;
  decimals?: number;
  variant?: AnimatedNumberVariant;
}

export function AnimatedNumber({
  target,
  suffix,
  label,
  sub,
  decimals = 0,
  variant = "strip",
}: AnimatedNumberProps) {
  const { ref, display, value } = useAnimatedNumber({
    target,
    duration: 1800,
    decimals,
  });

  if (variant === "strip") {
    // Scale pop: 0.85 → 1.0 as value approaches target
    const progress = target > 0 ? Math.min(value / target, 1) : 1;
    const scale = progress < 1 ? 0.85 + 0.15 * progress : 1;

    return (
      <div className="text-center" ref={ref}>
        <p
          className="stat-number m-0 leading-snug"
          aria-live="polite"
          style={{
            transform: `scale(${scale})`,
            textShadow:
              "0 0 40px color-mix(in oklch, var(--color-gold-light), transparent 80%)",
          }}
        >
          {display}
          <span className="text-[0.7em]">{suffix}</span>
        </p>
        <p className="stat-label m-0 mt-2">{label}</p>
      </div>
    );
  }

  // variant === "counter"
  return (
    <div ref={ref} className="text-center">
      <p
        className="stat-number m-0 text-[length:var(--text-3xl)] leading-none"
        aria-live="polite"
      >
        {display}
        <span className="text-[0.6em]">{suffix}</span>
      </p>
      <p className="m-0 mt-2 font-accent text-[length:var(--text-sm)] uppercase tracking-wide text-text-primary">
        {label}
      </p>
      {sub && (
        <p className="m-0 mx-auto mt-1 max-w-64 text-[length:var(--text-xs)] text-text-tertiary">
          {sub}
        </p>
      )}
    </div>
  );
}
