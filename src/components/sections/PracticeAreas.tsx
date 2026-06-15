"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  FileWarning,
  Gavel,
  Landmark,
  Scale,
  Users,
  type LucideIcon,
} from "lucide-react";
import { practiceAreas } from "@/lib/site-data";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  gavel: Gavel,
  scale: Scale,
  users: Users,
  building: Building2,
  fileWarning: FileWarning,
  landmark: Landmark,
};

const practiceHighlights = [
  "Madurai High Court Bench",
  "Criminal & Civil Litigation",
  "Confidential Consultation",
] as const;

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-12 md:pt-14 md:pb-20"
      aria-labelledby="practice-areas-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-navy/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 lg:pr-20 xl:pr-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
          <div className="w-full shrink-0 lg:sticky lg:top-28 lg:w-[340px] xl:w-[380px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Practice Areas
              </span>
              <h2
                id="practice-areas-heading"
                className="mt-3 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl lg:text-[2.4rem] xl:text-[2.65rem]"
              >
                Areas of Legal Expertise
              </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Comprehensive legal services for criminal, civil, family, property, and High
              Court matters — expert advocacy with strategy, integrity, and decades of
              courtroom experience.
            </p>

              <ul className="mt-6 space-y-2.5" aria-label="Practice highlights">
                {practiceHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-navy/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] md:text-base"
              >
                Get Legal Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            {practiceAreas.map((area, index) => {
              const Icon = iconMap[area.icon] ?? Scale;
              const isFeatured = area.title === "High Court Matters";

              return (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 md:p-6",
                    isFeatured
                      ? "border-gold/40 bg-navy shadow-[0_20px_50px_rgba(11,29,58,0.18)]"
                      : "border-navy/8 bg-grey-soft/60 hover:border-gold/25 hover:bg-white hover:shadow-[0_16px_40px_rgba(11,29,58,0.08)]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute right-4 top-3 font-heading text-5xl font-bold leading-none md:right-6 md:top-4 md:text-6xl",
                      isFeatured ? "text-white/10" : "text-navy/[0.06] group-hover:text-gold/15",
                    )}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex items-start gap-4 md:gap-5">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl md:h-14 md:w-14",
                        isFeatured ? "bg-gold text-navy" : "bg-navy text-gold",
                      )}
                    >
                      <Icon className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1 pr-10 md:pr-12">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={cn(
                            "font-heading text-lg font-semibold md:text-xl",
                            isFeatured ? "text-white" : "text-navy",
                          )}
                        >
                          {area.title}
                        </h3>
                        {isFeatured && (
                          <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                            Primary Focus
                          </span>
                        )}
                      </div>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-relaxed md:text-[15px]",
                          isFeatured ? "text-white/75" : "text-muted",
                        )}
                      >
                        {area.description}
                      </p>
                    </div>

                    <ArrowRight
                      className={cn(
                        "mt-1 hidden h-5 w-5 shrink-0 transition-all duration-300 lg:block",
                        isFeatured
                          ? "text-gold opacity-80 group-hover:translate-x-1"
                          : "text-gold opacity-0 group-hover:translate-x-1 group-hover:opacity-100",
                      )}
                      aria-hidden="true"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
