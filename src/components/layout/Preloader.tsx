"use client";

import { useEffect, useRef, useState } from "react";
import { Scale } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const PARTICLE_COUNT = 10;
const CIRCLE_RADIUS = 52;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconWrapRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const barTrackRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const pageLoadedRef = useRef(false);
  const timelineDoneRef = useRef(false);

  const tryExit = () => {
    if (!pageLoadedRef.current || !timelineDoneRef.current || !overlayRef.current) return;
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.65,
      ease: "power2.inOut",
      onComplete: () => setVisible(false),
    });
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onLoad = () => {
      pageLoadedRef.current = true;
      tryExit();
    };

    if (document.readyState === "complete") {
      pageLoadedRef.current = true;
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    if (reducedMotion) {
      window.setTimeout(() => {
        timelineDoneRef.current = true;
        tryExit();
      }, 400);
      return () => window.removeEventListener("load", onLoad);
    }

    const ctx = gsap.context(() => {
      const particles = particlesRef.current?.querySelectorAll("[data-particle]");
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          timelineDoneRef.current = true;
          tryExit();
        },
      });

      // Step 01 — glowing gold line at center
      gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
      gsap.set(iconWrapRef.current, { opacity: 0 });
      gsap.set(iconRef.current, { scale: 0.6, opacity: 0, filter: "blur(8px)" });
      gsap.set(circleRef.current, { strokeDashoffset: CIRCLE_CIRCUMFERENCE });
      gsap.set(brandRef.current, { opacity: 0, y: 18 });
      gsap.set(taglineRef.current, { opacity: 0, y: 10 });
      gsap.set(barTrackRef.current, { opacity: 0 });
      gsap.set(barFillRef.current, { scaleX: 0 });
      if (particles) gsap.set(particles, { opacity: 0, scale: 0 });

      tl.to(lineRef.current, { scaleX: 1, opacity: 1, duration: 0.75, ease: "power2.inOut" })
        // Step 02 — scales icon forms + particles
        .to(iconWrapRef.current, { opacity: 1, duration: 0.2 }, "-=0.15")
        .to(iconRef.current, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, "-=0.1");

      if (particles && particles.length > 0) {
        tl.to(
          particles,
          {
            opacity: 0.85,
            scale: 1,
            duration: 0.55,
            stagger: 0.04,
            ease: "power2.out",
          },
          "-=0.65",
        );
      }

      tl
        // Step 03 — circular outline draws around icon
        .to(
          circleRef.current,
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.35",
        )
        // Step 04 — brand name fades in
        .to(brandRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.25")
        // Step 05 — tagline with glow
        .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" }, "-=0.2")
        // Step 06 — loading bar fills
        .to(barTrackRef.current, { opacity: 1, duration: 0.25 }, "-=0.1")
        .to(barFillRef.current, {
          scaleX: 1,
          duration: 1.15,
          ease: "power2.inOut",
        })
        .to(barTrackRef.current, { opacity: 0, duration: 0.45, ease: "power2.in" }, "+=0.05")
        .to(lineRef.current, { opacity: 0, duration: 0.35 }, "<");
    });

    return () => {
      ctx.revert();
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className={cn(
        "preloader-overlay fixed inset-0 z-[100] flex items-center justify-center",
        "bg-[#040a14]",
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,157,95,0.06),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        {/* Step 01 — gold line */}
        <div
          ref={lineRef}
          className="mb-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_18px_rgba(197,157,95,0.65)] sm:w-52"
          aria-hidden="true"
        />

        <div ref={iconWrapRef} className="relative flex h-[7.5rem] w-[7.5rem] items-center justify-center sm:h-32 sm:w-32">
          {/* Step 03 — circular outline */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            <circle
              ref={circleRef}
              cx="60"
              cy="60"
              r={CIRCLE_RADIUS}
              fill="none"
              stroke="#c59d5f"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeDasharray={CIRCLE_CIRCUMFERENCE}
              className="opacity-90"
              style={{ filter: "drop-shadow(0 0 6px rgba(197,157,95,0.45))" }}
            />
          </svg>

          {/* Step 02 — particles */}
          <div ref={particlesRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
              const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
              const x = 50 + Math.cos(angle) * 46;
              const y = 50 + Math.sin(angle) * 46;
              return (
                <span
                  key={i}
                  data-particle
                  className="absolute h-1 w-1 rounded-full bg-gold/80 shadow-[0_0_6px_rgba(197,157,95,0.8)]"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                />
              );
            })}
          </div>

          {/* Step 02 — scales icon */}
          <div ref={iconRef} className="relative z-10">
            <Scale
              className="h-11 w-11 text-gold sm:h-12 sm:w-12"
              strokeWidth={1.35}
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 0 12px rgba(197,157,95,0.35))" }}
            />
          </div>
        </div>

        {/* Step 04 — brand */}
        <div ref={brandRef} className="mt-8 text-center">
          <p className="font-heading text-[1.35rem] font-bold tracking-[0.18em] text-white sm:text-2xl">
            LUMBINI
          </p>
          <p className="mt-1 font-heading text-sm font-semibold tracking-[0.32em] text-gold sm:text-base">
            LAW ASSOCIATES
          </p>
        </div>

        {/* Step 05 — tagline */}
        <p
          ref={taglineRef}
          className="preloader-tagline mt-4 text-center text-xs font-medium tracking-[0.28em] text-gold/90 sm:text-sm"
        >
          Justice &bull; Integrity &bull; Trust
        </p>

        {/* Step 06 — loading bar */}
        <div
          ref={barTrackRef}
          className="mt-8 h-0.5 w-44 overflow-hidden rounded-full bg-white/10 sm:w-52"
          aria-hidden="true"
        >
          <div
            ref={barFillRef}
            className="h-full w-full origin-left rounded-full bg-gradient-to-r from-gold/80 via-gold to-gold-light shadow-[0_0_10px_rgba(197,157,95,0.5)]"
          />
        </div>
      </div>
    </div>
  );
}
