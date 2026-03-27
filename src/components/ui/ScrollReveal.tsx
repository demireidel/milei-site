"use client";

import {
  useRef,
  useEffect,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "clip-reveal"
  | "slide-left"
  | "slide-right"
  | "blur-in"
  | "none";

interface VariantConfig {
  hidden: React.CSSProperties;
  visible: React.CSSProperties;
  /** CSS property names separated by commas for transition string */
  transition: string;
}

const variants = {
  "fade-up":    { hidden: { opacity: 0, transform: "translateY(24px)" },  visible: { opacity: 1, transform: "translateY(0)" },    transition: "opacity,transform" },
  "fade-in":    { hidden: { opacity: 0 },                                 visible: { opacity: 1 },                                transition: "opacity" },
  "scale-in":   { hidden: { opacity: 0, transform: "scale(0.92)" },       visible: { opacity: 1, transform: "scale(1)" },         transition: "opacity,transform" },
  "clip-reveal":{ hidden: { clipPath: "inset(100% 0 0 0)" },              visible: { clipPath: "inset(0)" },                      transition: "clip-path" },
  "slide-left": { hidden: { opacity: 0, transform: "translateX(-40px)" }, visible: { opacity: 1, transform: "translateX(0)" },    transition: "opacity,transform" },
  "slide-right":{ hidden: { opacity: 0, transform: "translateX(40px)" },  visible: { opacity: 1, transform: "translateX(0)" },    transition: "opacity,transform" },
  "blur-in":    { hidden: { opacity: 0, filter: "blur(8px)" },            visible: { opacity: 1, filter: "blur(0px)" },           transition: "opacity,filter" },
  "none":       { hidden: {},                                              visible: {},                                            transition: "" },
} satisfies Record<AnimationVariant, VariantConfig>;

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  once = true,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  if (variant === "none") {
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    );
  }

  const config = variants[variant];
  const ease = "var(--ease-out-expo)";
  const transitionValue = config.transition
    .split(",")
    .map((p) => `${p.trim()} ${duration}ms ${ease} ${delay}ms`)
    .join(", ");

  const style: React.CSSProperties = {
    ...(visible ? config.visible : config.hidden),
    transition: transitionValue,
    willChange: visible ? undefined : config.transition.split(",").join(" "),
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
