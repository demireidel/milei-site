"use client";

import { useRef, useEffect, useState } from "react";

interface DividerProps {
  className?: string;
  animated?: boolean;
}

export function Divider({ className = "", animated = true }: DividerProps) {
  const ref = useRef<HTMLHRElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!animated) return;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  if (!animated) {
    return <hr className={`section-divider ${className}`} />;
  }

  return (
    <hr
      ref={ref}
      className={`divider-animated ${className}`}
      style={{
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 800ms var(--ease-out-expo)",
      }}
    />
  );
}
