"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
  sub: string;
  decimals?: number;
}

/** Thin wrapper that delegates to the shared AnimatedNumber component. */
export function AnimatedCounter(props: AnimatedCounterProps) {
  return <AnimatedNumber {...props} variant="counter" />;
}
