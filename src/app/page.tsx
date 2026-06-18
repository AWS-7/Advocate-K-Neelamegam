import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { Hero } from "@/components/sections/Hero";
import { SectionFallback } from "@/components/ui/SectionFallback";
import { homePageMetadata } from "@/lib/seo";

const PracticeAreas = dynamic(
  () => import("@/components/sections/PracticeAreas").then((module) => module.PracticeAreas),
  { loading: () => <SectionFallback className="min-h-64" /> },
);

const AboutAdvocate = dynamic(
  () => import("@/components/sections/AboutAdvocate").then((module) => module.AboutAdvocate),
  { loading: () => <SectionFallback className="min-h-96" /> },
);

const Gallery = dynamic(
  () => import("@/components/sections/Gallery").then((module) => module.Gallery),
  { loading: () => <SectionFallback className="min-h-72" /> },
);

const Stats = dynamic(
  () => import("@/components/sections/Stats").then((module) => module.Stats),
  { loading: () => <SectionFallback className="min-h-40 bg-navy-dark/20" /> },
);

const Reviews = dynamic(
  () => import("@/components/sections/Reviews").then((module) => module.Reviews),
  { loading: () => <SectionFallback className="min-h-72" /> },
);

const BlogPreview = dynamic(
  () => import("@/components/sections/BlogPreview").then((module) => module.BlogPreview),
  { loading: () => <SectionFallback className="min-h-64" /> },
);

const Faq = dynamic(
  () => import("@/components/sections/Faq").then((module) => module.Faq),
  { loading: () => <SectionFallback className="min-h-72" /> },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((module) => module.Contact),
  { loading: () => <SectionFallback className="min-h-96" /> },
);

export const metadata: Metadata = homePageMetadata;

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main-content">
        <PracticeAreas />
        <AboutAdvocate />
        <Gallery />
        <Stats />
        <Reviews />
        <BlogPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
