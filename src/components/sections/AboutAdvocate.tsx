"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { infoCards, siteConfig, whyChooseUs } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80";

export function AboutAdvocate() {
  return (
    <section
      id="about"
      className="bg-white py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={ABOUT_IMAGE}
                alt="Scales of justice representing legal authority"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 h-32 w-32 rounded-xl border-2 border-gold bg-navy p-4 shadow-lg"
              aria-hidden="true"
            >
              <p className="font-heading text-3xl font-bold text-gold">20+</p>
              <p className="text-xs text-white/80">Years of Practice</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title={siteConfig.advocateName}
              subtitle="Practicing advocate at Madurai High Court Bench with years of courtroom experience."
              align="left"
              className="mb-8"
            />

            <div id="why-choose-us" className="space-y-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <p className="text-muted">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-navy/10 bg-grey-soft p-4 text-center transition-colors hover:border-gold/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {card.label}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold text-navy">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
