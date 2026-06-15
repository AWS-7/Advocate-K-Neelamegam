"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 shadow-lg backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} - Home`}
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-white/10">
            <Image
              src="/images/logo.svg"
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-heading text-sm font-bold leading-tight text-white md:text-base">
              {siteConfig.name}
            </p>
            <p className="text-xs text-gold">{siteConfig.advocateName}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => handleNavClick("#contact")}
          >
            Free Consultation
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="border-b border-white/5 py-3 text-base font-medium text-white/90 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-4 w-full" onClick={() => handleNavClick("#contact")}>
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
