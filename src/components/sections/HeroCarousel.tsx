"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {
  heroCarouselDesktopSlides,
  heroCarouselSlides,
  type HeroCarouselSlide,
} from "@/lib/hero-carousel-data";
import { cn } from "@/lib/utils";

type CarouselVariant = "mobile" | "desktop";

type HeroCarouselTrackProps = {
  slides: readonly HeroCarouselSlide[];
  variant: CarouselVariant;
};

function HeroCarouselTrack({ slides, variant }: HeroCarouselTrackProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Fade(), Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isDesktop = variant === "desktop";

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-white/10 bg-[#081829] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        isDesktop ? "rounded-3xl" : "rounded-2xl",
      )}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={cn(
                "relative min-w-0 flex-[0_0_100%]",
                isDesktop ? "aspect-[4/5] w-full" : "aspect-[16/10] max-h-[220px] w-full sm:max-h-[240px]",
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                placeholder="blur"
                blurDataURL={slide.blurDataURL}
                className="object-contain"
                style={{ objectPosition: slide.objectPosition }}
                sizes={isDesktop ? "460px" : "(max-width: 640px) 100vw, 420px"}
                quality={isDesktop ? 88 : 80}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-4"
        role="tablist"
        aria-label="Hero carousel slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex ? "w-7 bg-gold" : "w-1.5 bg-white/35 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroCarousel() {
  return (
    <div className="relative w-full">
      <div className="lg:hidden">
        <HeroCarouselTrack slides={heroCarouselSlides} variant="mobile" />
      </div>
      <div className="hidden lg:block">
        <HeroCarouselTrack slides={heroCarouselDesktopSlides} variant="desktop" />
      </div>
    </div>
  );
}
