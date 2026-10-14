"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = {
  image: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

type HeroSliderProps = {
  slides: HeroSlide[];
  brand: React.ReactNode;
  nav?: React.ReactNode;
  controls?: React.ReactNode;
  overlayClassName?: string;
  titleClassName?: string;
  intervalMs?: number;
};

export function HeroSlider({
  slides,
  brand,
  nav,
  controls,
  overlayClassName = "bg-black/55",
  titleClassName = "text-4xl font-semibold tracking-tight text-white sm:text-6xl",
  intervalMs = 5500,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, slides.length, intervalMs]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((item, i) => (
        <Image
          key={item.image}
          src={item.image}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-all duration-1000 ease-out ${
            i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        {brand}
        {nav}
        {controls}
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-6xl flex-col justify-end px-6 pb-20 sm:pb-24">
        <div key={index} className="max-w-3xl">
          <h1 className={`animate-rise ${titleClassName}`}>{slide.title}</h1>
          <p className="animate-rise-delay mt-5 max-w-xl text-lg leading-8 text-white/75">
            {slide.body}
          </p>
          <a
            href={slide.ctaHref}
            className="animate-rise-delay-2 mt-8 inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 transition hover:scale-[1.02]"
          >
            {slide.ctaLabel}
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() =>
              setIndex((current) => (current - 1 + slides.length) % slides.length)
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((current) => (current + 1) % slides.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            →
          </button>
          <div className="ml-2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
