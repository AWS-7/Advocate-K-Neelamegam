"use client";

import { motion } from "framer-motion";
import {
  Gavel,
  Scale,
  Users,
  Building2,
  FileWarning,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { practiceAreas } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  gavel: Gavel,
  scale: Scale,
  users: Users,
  building: Building2,
  fileWarning: FileWarning,
  landmark: Landmark,
};

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="bg-grey-soft py-20 md:py-28"
      aria-labelledby="practice-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Areas of Legal Expertise"
          subtitle="Comprehensive legal services across criminal, civil, family, property, and High Court matters at the Madurai Bench."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon] ?? Scale;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-sm",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                )}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-navy">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="#contact" variant="primary">
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
}
