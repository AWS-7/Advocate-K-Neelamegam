"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { heroCarouselSlides } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Fade(), Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d2a4a]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:rounded-3xl">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {heroCarouselSlides.map((slide, index) => (
              <div
                key={slide.src}
                className="relative aspect-[16/10] min-w-0 flex-[0_0_100%] lg:aspect-[3/4] lg:max-h-[500px]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={cn(
                    slide.src.includes("advocate-cutout")
                      ? "object-contain object-bottom bg-gradient-to-b from-[#0a1f3d] to-[#0d2a4a] p-4 lg:p-5"
                      : "object-cover",
                  )}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          role="tablist"
          aria-label="Hero carousel slides"
        >
          {heroCarouselSlides.map((_, index) => (
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
    </div>
  );
}
