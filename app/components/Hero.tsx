"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ROTATE_MS = 3200;

const acts = [
  { id: "djs", label: "DJ'S", tag: "Best DJ", color: "#FF3131" },
  { id: "raves", label: "RAVES", tag: "Best Rave", color: "#2ED9A8" },
];

const slides = [
  { src: "/DJ Maphorisa.jpg", alt: "DJ Maphorisa", group: "djs" },
  { src: "/Uncle Waffles.jpg", alt: "Uncle Waffles", group: "djs" },
  { src: "/Black-Coffee.jpg", alt: "Black Coffee", group: "djs" },
  { src: "/group therapy.jpg", alt: "Group Therapy", group: "raves" },
  { src: "/sunday service.jpg", alt: "Sunday Service", group: "raves" },
  { src: "/ardour.jpg", alt: "Ardour", group: "raves" },
];

function Arrow() {
  return <span aria-hidden="true" className="text-lg">→</span>;
}

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const currentSlide = slides[slideIndex];
  const active = acts.find((act) => act.id === currentSlide.group)!;

  return (
    <section className="relative flex min-h-[84vh] items-center justify-center overflow-hidden px-5 pt-20 md:px-20">
      <div className="absolute inset-0 bg-[#0D0B0C]" />
      <div className="absolute inset-0 grain-overlay opacity-20" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-display text-[clamp(2rem,4.5vw,3.2rem)] uppercase leading-[0.95] tracking-[-0.03em] text-white">Afrohouse is for</p>
            <p className="font-display text-[clamp(2.4rem,6vw,4rem)] uppercase leading-[0.95] tracking-[-0.03em] text-white">
              celebrating{" "}
              <span className="inline-block transition-colors duration-500" style={{ color: active.color }}>
                {active.label}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 md:justify-start">
            {acts.map((act) => {
              const isActive = act.id === active.id;
              return (
                <button
                  key={act.id}
                  type="button"
                  aria-label={`Show ${act.label}`}
                  aria-current={isActive}
                  onClick={() => setSlideIndex(slides.findIndex((slide) => slide.group === act.id))}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "28px" : "8px",
                    backgroundColor: isActive ? act.color : "rgba(138,129,119,0.35)",
                  }}
                />
              );
            })}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link href="/vote" className="inline-flex items-center gap-3 rounded-full bg-[#FF3131] px-8 py-4 text-sm font-semibold uppercase text-white shadow-[0_14px_40px_rgba(255,49,49,0.28)] transition duration-200 hover:bg-[#FF5C5C]">Voting Coming Soon <Arrow /></Link>
          </div>
        </div>

        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[14%] border bg-[#111] shadow-[0_32px_80px_rgba(0,0,0,0.5)] transition-colors duration-500 sm:max-w-[460px] md:max-w-[500px] lg:max-w-[560px]"
          style={{ borderColor: `${active.color}4d` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              aria-hidden={index !== slideIndex}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: index === slideIndex ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 420px, (max-width: 1024px) 500px, 560px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
