"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, User } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import { scrollToSection } from "@/lib/utils";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HeroTagsMarquee } from "@/components/sections/HeroTagsMarquee";

function LocationBadge() {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur-sm sm:text-sm">
      <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
      {siteConfig.locationLabel}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#081829] via-[#0a1f3d] to-[#0c2647] lg:bg-[#081829]"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="/images/hero-bg-mobile.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081829]/75 via-[#081829]/35 to-[#081829]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(197,157,95,0.07),transparent_55%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Image
          src="/images/hero-bg-desktop.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(197,157,95,0.06),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-7xl grid-cols-1 content-center items-center justify-items-center gap-5 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:justify-items-stretch lg:gap-x-10 lg:gap-y-0 lg:px-8 lg:py-10 xl:gap-x-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="order-1 w-full max-w-[340px] sm:max-w-md lg:order-2 lg:col-start-2 lg:row-start-1 lg:max-w-[440px] lg:justify-self-end xl:max-w-[460px]"
        >
          <HeroCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="order-2 flex w-full min-w-0 max-w-lg flex-col items-center text-center lg:order-1 lg:col-start-1 lg:row-start-1 lg:max-w-xl lg:items-start lg:text-left lg:justify-self-start lg:pr-2 xl:max-w-2xl xl:pr-6"
        >
          <div className="mb-4 flex w-full justify-center sm:mb-5 lg:mb-6 lg:justify-start">
            <LocationBadge />
          </div>

          <h1 className="w-full font-heading text-[1.65rem] font-bold leading-[1.15] text-white sm:text-3xl lg:text-[2.5rem] xl:text-[2.85rem]">
            {siteConfig.advocateName}
            <span className="mt-1 block text-[1.35rem] text-gold sm:text-2xl lg:text-[1.85rem] xl:text-[2.1rem]">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-2 w-full text-sm font-medium text-white/90 sm:text-base lg:text-lg">
            {siteConfig.seo.heroSubtitle}
          </p>

          <p className="mx-auto mt-4 w-full max-w-md text-sm leading-relaxed text-white/80 sm:mt-5 sm:max-w-xl sm:text-base lg:mx-0 lg:max-w-lg lg:text-[17px]">
            {siteConfig.description}
          </p>

          <p className="mt-4 w-full text-sm italic text-gold sm:text-base">
            &ldquo;{siteConfig.heroMotto}&rdquo;
          </p>

          <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="inline-flex w-auto items-center justify-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy transition-colors hover:bg-gold-light sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              About Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex w-auto items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              View Location
            </button>
          </div>

          <div className="mt-6 w-full overflow-hidden lg:mt-7">
            <HeroTagsMarquee />
          </div>

          <p className="mt-5 text-sm text-white/60 sm:mt-6">
            <span className="font-semibold text-gold">{siteConfig.rating.value}</span> rating
            &middot; {siteConfig.rating.label}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
