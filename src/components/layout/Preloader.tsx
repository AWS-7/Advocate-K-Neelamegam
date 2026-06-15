"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const MIN_DISPLAY_MS = 1000;
const FADE_MS = 450;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));
      window.setTimeout(() => {
        setFadeOut(true);
        window.setTimeout(() => setVisible(false), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-dark transition-opacity duration-[450ms] ease-out",
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div className="flex flex-col items-center gap-5 px-6">
        <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <span
            className="absolute inset-0 rounded-full border-2 border-gold/20"
            aria-hidden="true"
          />
          <span
            className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold"
            aria-hidden="true"
          />
          <Scale
            className="h-9 w-9 text-gold sm:h-10 sm:w-10"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="text-center">
          <p className="font-heading text-lg font-bold tracking-wide text-white sm:text-xl">
            LUMBINI
          </p>
          <p className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-gold sm:text-[11px]">
            LAW ASSOCIATES
          </p>
          <p className="mt-2 text-xs text-white/50">{siteConfig.advocateName}</p>
        </div>

        <div className="h-0.5 w-28 overflow-hidden rounded-full bg-white/10 sm:w-32">
          <div className="preloader-bar h-full rounded-full bg-gold" />
        </div>
      </div>
    </div>
  );
}
