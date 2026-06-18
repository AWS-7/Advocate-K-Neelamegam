"use client";

import { useEffect, useRef, useState } from "react";
import { Scale } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 380;
const MAX_VISIBLE_MS = 900;

export function DesktopPreloader() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pageLoadedRef = useRef(false);
  const shownAtRef = useRef(Date.now());

  const tryExit = () => {
    if (!pageLoadedRef.current || !overlayRef.current) return;

    const elapsed = Date.now() - shownAtRef.current;
    const waitMs = Math.max(0, MIN_VISIBLE_MS - elapsed);

    window.setTimeout(() => {
      if (!overlayRef.current) return;
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => setVisible(false),
      });
    }, waitMs);
  };

  useEffect(() => {
    shownAtRef.current = Date.now();

    const onLoad = () => {
      pageLoadedRef.current = true;
      tryExit();
    };

    const maxTimer = window.setTimeout(() => {
      pageLoadedRef.current = true;
      tryExit();
    }, MAX_VISIBLE_MS);

    if (document.readyState === "complete") {
      pageLoadedRef.current = true;
      tryExit();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: gsap.Context | undefined;

    if (!reducedMotion && contentRef.current) {
      ctx = gsap.context(() => {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" },
        );
      });
    }

    return () => {
      ctx?.revert();
      window.clearTimeout(maxTimer);
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
        ref={contentRef}
        className="relative flex flex-col items-center px-6 text-center"
      >
        <Scale className="h-10 w-10 text-gold" strokeWidth={1.35} aria-hidden="true" />
        <p className="mt-4 font-heading text-lg font-bold tracking-[0.18em] text-white">
          LUMBINI
        </p>
        <p className="mt-1 font-heading text-xs font-semibold tracking-[0.28em] text-gold">
          LAW ASSOCIATES
        </p>
      </div>
    </div>
  );
}
