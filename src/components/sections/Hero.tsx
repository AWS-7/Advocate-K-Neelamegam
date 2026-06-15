"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Star } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/Button";

const HERO_BG =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-[72px] flex min-h-screen items-center overflow-hidden pt-[72px]"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {siteConfig.tagline}
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteConfig.advocateName}
          </h1>

          <p className="mt-3 font-heading text-xl text-gold sm:text-2xl">
            {siteConfig.name}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1" aria-label={`${siteConfig.rating.value} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-gold text-gold"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-white sm:text-base">
              {siteConfig.rating.value} | {siteConfig.rating.label}
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.phoneHref} size="lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="outline"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Consultation
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-gold/60 shadow-2xl shadow-black/40">
            <Image
              src="/images/advocate-portrait.svg"
              alt={`Professional portrait of ${siteConfig.advocateName}`}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>
          <div
            className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-xl border border-gold/30 bg-gold/10 backdrop-blur-sm lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute -right-4 -top-4 hidden h-16 w-16 rounded-full border border-gold/30 bg-navy/80 lg:block"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
