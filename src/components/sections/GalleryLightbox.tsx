"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery-data";

type GalleryLightboxProps = {
  image: GalleryImage | null;
  onClose: () => void;
};

export function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close image preview"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative max-h-[78vh] w-full bg-navy">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="mx-auto h-auto max-h-[78vh] w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            quality={90}
            priority
          />
        </div>
        <p className="border-t border-navy/10 px-4 py-3 text-sm text-muted sm:px-5 sm:text-base">
          {image.alt}
        </p>
      </div>
    </div>
  );
}
