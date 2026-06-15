import { TopInfoBar } from "@/components/layout/TopInfoBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { AboutAdvocate } from "@/components/sections/AboutAdvocate";
import { Stats } from "@/components/sections/Stats";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <div className="bg-navy">
        <TopInfoBar />
        <Header />
        <Hero />
      </div>
      <main id="main-content">
        <PracticeAreas />
        <AboutAdvocate />
        <Stats />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
