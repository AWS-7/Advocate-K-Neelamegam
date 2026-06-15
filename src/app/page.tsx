import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { AboutAdvocate } from "@/components/sections/AboutAdvocate";
import { Gallery } from "@/components/sections/Gallery";
import { Stats } from "@/components/sections/Stats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Reviews } from "@/components/sections/Reviews";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Faq } from "@/components/sections/Faq";
import { AppointmentBooking } from "@/components/sections/AppointmentBooking";
import { Contact } from "@/components/sections/Contact";
import { homePageMetadata } from "@/lib/seo";

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
        <CaseStudies />
        <Reviews />
        <BlogPreview />
        <Faq />
        <AppointmentBooking />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
