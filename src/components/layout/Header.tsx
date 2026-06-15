"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scale, ChevronDown, MessageCircle } from "lucide-react";
import { navLinks, practiceAreas, siteConfig } from "@/lib/site-data";
import { cn, navigateTo } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPracticeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    if (href === "/") {
      if (pathname === "/") {
        navigateTo("/#home");
        setActiveSection("home");
      } else {
        window.location.href = "/";
      }
    } else {
      navigateTo(href);
      if (href.startsWith("/#")) {
        setActiveSection(href.replace("/#", ""));
      }
    }
    setMobileOpen(false);
    setPracticeOpen(false);
    setMobilePracticeOpen(false);
  };

  const handlePracticeAreaClick = (slug: string) => {
    handleNavClick(`/#practice-${slug}`);
  };

  const isLinkActive = (href: string) => {
    if (href === "/blog") return pathname.startsWith("/blog");
    if (href === "/privacy-policy") return pathname === "/privacy-policy";
    if (href === "/") return pathname === "/" && activeSection === "home";
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.replace("/#", "");
    return false;
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          scrolled && "shadow-[0_2px_20px_rgba(11,29,58,0.08)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 lg:px-8 lg:py-4">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/");
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
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div key={link.href} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setPracticeOpen(!practiceOpen)}
                      onMouseEnter={() => setPracticeOpen(true)}
                      className={cn(
                        "relative inline-flex items-center gap-1 pb-1 text-[15px] font-medium transition-colors",
                        isActive || practiceOpen ? "text-gold" : "text-navy/75 hover:text-navy",
                      )}
                      aria-expanded={practiceOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-70 transition-transform",
                          practiceOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {practiceOpen && (
                      <div
                        className="absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-navy/10 bg-white py-2 shadow-xl"
                        onMouseLeave={() => setPracticeOpen(false)}
                      >
                        {practiceAreas.map((area) => (
                          <button
                            key={area.slug}
                            type="button"
                            onClick={() => handlePracticeAreaClick(area.slug)}
                            className="block w-full px-4 py-2.5 text-left text-sm text-navy/85 transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {area.title}
                          </button>
                        ))}
                        <div className="my-1 border-t border-navy/5" />
                        <button
                          type="button"
                          onClick={() => handleNavClick("/#practice-areas")}
                          className="block w-full px-4 py-2.5 text-left text-sm font-semibold text-gold hover:bg-gold/5"
                        >
                          View All Practice Areas
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

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
                    isActive ? "text-gold" : "text-navy/75 hover:text-navy",
                  )}
                >
                  {link.label}
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
              onClick={() => handleNavClick("/#appointment")}
              className="hidden items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 bg-navy/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
        />

        <aside
          className={cn(
            "absolute top-0 right-0 flex h-full w-[min(300px,85vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <Scale className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <div className="leading-none">
                <p className="font-heading text-base font-bold text-navy">LUMBINI</p>
                <p className="text-[9px] font-medium tracking-[0.2em] text-navy/70">LAW ASSOCIATES</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-md p-2 text-navy transition-colors hover:bg-navy/5"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div key={link.href} className="border-b border-navy/5">
                    <button
                      type="button"
                      onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                      className="flex w-full items-center justify-between py-3.5 text-base font-medium text-navy/85"
                      aria-expanded={mobilePracticeOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-gold transition-transform",
                          mobilePracticeOpen && "rotate-180",
                        )}
                      />
                    </button>
                    {mobilePracticeOpen && (
                      <div className="pb-3 pl-3">
                        {practiceAreas.map((area) => (
                          <button
                            key={area.slug}
                            type="button"
                            onClick={() => handlePracticeAreaClick(area.slug)}
                            className="block w-full py-2 text-left text-sm text-navy/70 hover:text-gold"
                          >
                            {area.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "border-b border-navy/5 py-3.5 text-base font-medium transition-colors",
                    isActive ? "text-gold" : "text-navy/85 hover:text-gold",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="border-t border-navy/10 p-4">
            <button
              type="button"
              onClick={() => handleNavClick("/#appointment")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#b8922a]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Book Appointment
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
