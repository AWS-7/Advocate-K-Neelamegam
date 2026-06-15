"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scale, ChevronDown, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { cn, scrollToSection } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    setActiveSection(id);
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_2px_20px_rgba(11,29,58,0.08)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8 lg:py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} - Home`}
        >
          <Scale className="h-9 w-9 text-gold lg:h-10 lg:w-10" strokeWidth={1.5} aria-hidden="true" />
          <div className="leading-none">
            <p className="font-heading text-lg font-bold tracking-wide text-navy lg:text-xl">
              LUMBINI
            </p>
            <p className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-navy/80 lg:text-[11px]">
              LAW ASSOCIATES
            </p>
          </div>
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-7 xl:gap-9 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "relative pb-1 text-[15px] font-medium transition-colors",
                  isActive
                    ? "text-gold"
                    : "text-navy/75 hover:text-navy",
                )}
              >
                <span className="inline-flex items-center gap-1">
                  {link.label}
                  {"hasDropdown" in link && link.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                  )}
                </span>
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-full bg-gold"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="hidden items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Free Consultation
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="border-b border-navy/5 py-3.5 text-base font-medium text-navy/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-base font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
