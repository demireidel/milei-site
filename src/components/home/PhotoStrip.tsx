"use client";

import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  pos?: string;
}

interface PhotoStripProps {
  photos: Photo[];
  direction?: "left" | "right";
}

export function PhotoStrip({ photos, direction }: PhotoStripProps) {
  const scrollRight = direction === "right";
  const doubled = useMemo(() => [...photos, ...photos], [photos]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const inView = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const anim = useRef({
    offset: 0,
    speed: scrollRight ? 1.2 : -1,
    dragging: false,
    dragStartX: 0,
    dragStartOffset: 0,
    rafId: 0,
    hovering: false,
  });

  const getHalfWidth = useCallback(() => {
    if (!stripRef.current) return 1;
    return stripRef.current.scrollWidth / 2;
  }, []);

  const wrapOffset = useCallback(
    (x: number) => {
      const hw = getHalfWidth();
      let wrapped = x % hw;
      if (wrapped > 0) wrapped -= hw;
      if (wrapped <= -hw) wrapped += hw;
      return wrapped;
    },
    [getHalfWidth]
  );

  const applyTransform = useCallback((x: number) => {
    if (stripRef.current) {
      stripRef.current.style.transform = `translateX(${x}px)`;
    }
  }, []);

  const tick = useCallback(() => {
    const a = anim.current;
    if (!a.dragging && !a.hovering && inView.current && !prefersReducedMotion.current) {
      a.offset = wrapOffset(a.offset + a.speed);
      applyTransform(a.offset);
    }
    a.rafId = requestAnimationFrame(tick);
  }, [wrapOffset, applyTransform]);

  useEffect(() => {
    anim.current.rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim.current.rafId);
  }, [tick]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { rootMargin: "200px 0px 200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      anim.current.offset = wrapOffset(anim.current.offset);
      applyTransform(anim.current.offset);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [wrapOffset, applyTransform]);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    e.preventDefault();
    const a = anim.current;
    a.dragging = true;
    a.dragStartX = e.clientX;
    a.dragStartOffset = a.offset;
    setIsDragging(true);
    wrapperRef.current.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const a = anim.current;
      if (!a.dragging) return;
      e.preventDefault();
      const dx = e.clientX - a.dragStartX;
      a.offset = wrapOffset(a.dragStartOffset + dx);
      applyTransform(a.offset);
    },
    [wrapOffset, applyTransform]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const a = anim.current;
    if (!a.dragging) return;
    a.dragging = false;
    setIsDragging(false);
    wrapperRef.current?.releasePointerCapture(e.pointerId);
  }, []);

  const handleMouseEnter = useCallback(() => {
    anim.current.hovering = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    anim.current.hovering = false;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const step = 300;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        anim.current.offset = wrapOffset(anim.current.offset - step);
        applyTransform(anim.current.offset);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        anim.current.offset = wrapOffset(anim.current.offset + step);
        applyTransform(anim.current.offset);
      }
    },
    [wrapOffset, applyTransform]
  );

  const scrollByAmount = useCallback(
    (delta: number) => {
      anim.current.offset = wrapOffset(anim.current.offset + delta);
      applyTransform(anim.current.offset);
    },
    [wrapOffset, applyTransform]
  );

  return (
    <div
      ref={wrapperRef}
      role="region"
      aria-label="Galería de fotos — usá las flechas o arrastrá para ver más"
      tabIndex={0}
      className={`group/strip relative touch-pan-y select-none overflow-hidden bg-dark py-xs ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <div ref={stripRef} className="flex w-max gap-3">
        {doubled.map((p, i) => (
          <Image
            key={`${p.src}-${i}`}
            src={p.src}
            alt={p.alt}
            width={448}
            height={280}
            draggable={false}
            className="h-[clamp(8rem,6rem+8vw,14rem)] w-auto rounded-md object-cover"
            style={p.pos ? { objectPosition: p.pos } : undefined}
            sizes="(max-width: 640px) 40vw, 300px"
          />
        ))}
      </div>

      {/* Navigation buttons — visible on hover / focus-within for WCAG 2.5.7 */}
      <button
        type="button"
        aria-label="Foto anterior"
        onClick={() => scrollByAmount(300)}
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface-3 text-on-surface opacity-0 shadow-md transition-opacity focus:opacity-100 group-hover/strip:opacity-100"
      >
        <span aria-hidden="true">&larr;</span>
      </button>
      <button
        type="button"
        aria-label="Foto siguiente"
        onClick={() => scrollByAmount(-300)}
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-surface-3 text-on-surface opacity-0 shadow-md transition-opacity focus:opacity-100 group-hover/strip:opacity-100"
      >
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
