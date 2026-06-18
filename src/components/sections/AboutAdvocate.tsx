"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Scale, Shield } from "lucide-react";
import { galleryImages } from "@/lib/gallery-data";
import { infoCards, siteConfig, whyChooseUs } from "@/lib/site-data";

const aboutPortrait =
  galleryImages.find((image) => image.src.includes("advocate-court-attire-portrait")) ??
  galleryImages[0];

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1000&q=80";

const highlights = [
  { icon: Scale, title: "High Court Practice", text: "Madurai Bench of Madras High Court" },
  { icon: Shield, title: "Ethical Advocacy", text: "Integrity & confidentiality in every case" },
  { icon: Award, title: "Proven Experience", text: "22+ years of courtroom expertise" },
];

export function AboutAdvocate() {
  return (
    <section id="about" className="relative overflow-hidden bg-grey-soft pt-20 pb-10 md:pt-28 md:pb-12" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,157,95,0.08),transparent_45%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About Us</span>
          <h2 id="about-heading" className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
            {siteConfig.advocateName}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
            Leading High Court advocate with 22+ years of expertise in criminal defense,
            civil litigation, family law, and constitutional matters — trusted legal
            solutions with professionalism and integrity.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={aboutPortrait.src}
                alt={aboutPortrait.alt}
                width={aboutPortrait.width}
                height={aboutPortrait.height}
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 18%" }}
                placeholder="blur"
                blurDataURL={aboutPortrait.blurDataURL}
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={82}
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-xl border border-gold/40 bg-white px-5 py-4 shadow-lg sm:-right-5">
              <p className="font-heading text-3xl font-bold text-gold">22+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <item.icon className="mb-3 h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="font-heading text-base font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>

            <div
              id="why-choose-us"
              className="mt-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8"
            >
              <h3 className="font-heading text-xl font-bold text-navy md:text-2xl">Why Choose Us</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-muted md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl bg-navy px-3 py-4 text-center text-white"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold sm:text-xs">
                    {card.label}
                  </p>
                  <p className="mt-1 font-heading text-sm font-bold sm:text-base">{card.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl shadow-lg lg:mt-12"
        >
          <div className="relative aspect-[21/9] min-h-[180px]">
            <Image
              src={ABOUT_IMAGE}
              alt="Legal practice at Madurai High Court"
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="font-heading text-xl font-bold text-white md:text-3xl">
                Chamber No. 43, Madurai High Court Buildings
              </p>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                Trusted legal representation since {siteConfig.foundingYear}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
