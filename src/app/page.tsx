import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { AboutAdvocate } from "@/components/sections/AboutAdvocate";
import { Gallery } from "@/components/sections/Gallery";
import { Stats } from "@/components/sections/Stats";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

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
        <Contact />
      </main>
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
