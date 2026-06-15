"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-data";

const HERO_BG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Madurai_High_Court_Building.jpg/1280px-Madurai_High_Court_Building.jpg";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(92vh,860px)] items-stretch overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0a1628]/78 to-[#0a1628]/45" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:px-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col justify-center py-6 lg:py-10"
        >
          <span className="mb-5 inline-flex w-fit items-center border border-gold px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs">
            {siteConfig.tagline}
          </span>

          <h1 className="font-body text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
            {siteConfig.advocateName}
          </h1>

          <p className="mt-2 font-body text-2xl font-bold text-gold sm:text-3xl lg:text-[2rem]">
            {siteConfig.name}
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-[17px]">
            {siteConfig.description}
          </p>

          <div className="mt-5 flex items-center gap-2.5">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-white sm:text-base">
              {siteConfig.rating.value} | {siteConfig.rating.label}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] sm:text-[15px]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {siteConfig.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-white/90 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-[15px]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative flex items-end justify-center lg:justify-end"
        >
          <div className="relative h-[min(68vh,620px)] w-full max-w-md lg:h-[min(88vh,760px)] lg:max-w-none">
            <Image
              src="/images/advocate-cutout.png"
              alt={`Professional portrait of ${siteConfig.advocateName}`}
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
