import Image from "next/image";
import { galleryImages } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

type GalleryImage = (typeof galleryImages)[number];

type MarqueeRowProps = {
  images: readonly GalleryImage[];
  reverse?: boolean;
  duration?: number;
};

function MarqueeRow({ images, reverse = false, duration = 35 }: MarqueeRowProps) {
  const track = [...images, ...images];

  return (
    <div className="gallery-marquee overflow-hidden">
      <div
        className={`gallery-marquee-track flex w-max gap-4 ${reverse ? "gallery-marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-xl border border-navy/10 shadow-md sm:h-52 sm:w-80"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const rowOne = galleryImages.slice(0, 4);
  const rowTwo = galleryImages.slice(4);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-white py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="A glimpse into our legal practice, courtroom presence, and professional journey at Madurai High Court."
        />
      </div>

      <div className="mt-4 space-y-5 md:mt-6 md:space-y-6">
        <MarqueeRow images={rowOne} duration={32} />
        <MarqueeRow images={rowTwo.length ? rowTwo : rowOne} reverse duration={38} />
      </div>
    </section>
  );
}
