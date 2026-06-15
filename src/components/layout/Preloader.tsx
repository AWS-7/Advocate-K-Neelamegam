"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const MIN_DISPLAY_MS = 1600;
const FADE_MS = 500;
const MAX_WAIT_MS = 4000;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let done = false;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const hide = () => {
      if (done) return;
      done = true;

      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      fadeTimer = setTimeout(() => {
        setFadeOut(true);
        document.body.classList.remove("preloader-active");
        document.body.style.overflow = "";
        document.getElementById("site-preloader-static")?.remove();

        hideTimer = setTimeout(() => setVisible(false), FADE_MS);
      }, remaining);
    };

    document.body.classList.add("preloader-active");
    document.body.style.overflow = "hidden";

    const maxTimer = setTimeout(hide, MAX_WAIT_MS);

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      document.addEventListener("DOMContentLoaded", hide, { once: true });
    }

    return () => {
      clearTimeout(maxTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      window.removeEventListener("load", hide);
      document.removeEventListener("DOMContentLoaded", hide);
      document.body.classList.remove("preloader-active");
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061224] transition-opacity duration-500 ease-out",
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
