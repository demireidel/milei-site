"use client";

import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
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
    if (!a.dragging && !a.hovering && inView.current) {
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

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
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
    (e: React.PointerEvent) => {
      const a = anim.current;
      if (!a.dragging) return;
      e.preventDefault();
      const dx = e.clientX - a.dragStartX;
      a.offset = wrapOffset(a.dragStartOffset + dx);
      applyTransform(a.offset);
    },
    [wrapOffset, applyTransform]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
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

  return (
    <div
      ref={wrapperRef}
      role="region"
      aria-label="Galería de fotos — arrastrá o deslizá para ver más"
      className={`select-none overflow-hidden bg-dark py-[var(--spacing-xs)] ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            sizes="(max-width: 768px) 200px, 300px"
          />
        ))}
      </div>
    </div>
  );
}
