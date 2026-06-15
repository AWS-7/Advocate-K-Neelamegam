"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scale, ChevronDown, MessageCircle } from "lucide-react";
import {
  getPracticeAreaHref,
  getWhatsAppUrl,
  navLinks,
  practiceAreas,
  siteConfig,
} from "@/lib/site-data";
import { cn, scrollToSection } from "@/lib/utils";

function isPageLink(href: string) {
  return href.startsWith("/");
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [desktopPracticeOpen, setDesktopPracticeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const practiceRef = useRef<HTMLDivElement>(null);

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
      if (practiceRef.current && !practiceRef.current.contains(e.target as Node)) {
        setDesktopPracticeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    if (isPageLink(href)) {
      setMobileOpen(false);
      setDesktopPracticeOpen(false);
      return;
    }
    const id = href.replace("#", "");
    setActiveSection(id);
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      window.location.href = `/${href}`;
    }
    setMobileOpen(false);
    setPracticeOpen(false);
    setDesktopPracticeOpen(false);
  };

  const handlePracticeAreaClick = (slug: string) => {
    setMobileOpen(false);
    setPracticeOpen(false);
    setDesktopPracticeOpen(false);
    if (pathname === "/") {
      scrollToSection(`area-${slug}`);
    } else {
      window.location.href = getPracticeAreaHref(slug);
    }
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
          <Link href="/#home" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.name} - Home`}>
            <Scale className="h-9 w-9 text-gold lg:h-10 lg:w-10" strokeWidth={1.5} aria-hidden="true" />
            <div className="leading-none">
              <p className="font-heading text-lg font-bold tracking-wide text-navy lg:text-xl">LUMBINI</p>
              <p className="mt-0.5 text-[10px] font-medium tracking-[0.22em] text-navy/80 lg:text-[11px]">
                LAW ASSOCIATES
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div key={link.href} ref={practiceRef} className="relative">
                    <button
                      type="button"
                      onClick={() => setDesktopPracticeOpen(!desktopPracticeOpen)}
                      className={cn(
                        "inline-flex items-center gap-1 pb-1 text-[15px] font-medium transition-colors",
                        desktopPracticeOpen ? "text-gold" : "text-navy/75 hover:text-navy",
                      )}
                      aria-expanded={desktopPracticeOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform", desktopPracticeOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>

                    {desktopPracticeOpen && (
                      <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-navy/10 bg-white py-2 shadow-xl">
                        <a
                          href="#practice-areas"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#practice-areas");
                          }}
                          className="block border-b border-navy/5 px-4 py-2.5 text-sm font-semibold text-navy hover:bg-gold/10 hover:text-gold"
                        >
                          All Practice Areas
                        </a>
                        {practiceAreas.map((area) => (
                          <a
                            key={area.slug}
                            href={getPracticeAreaHref(area.slug)}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePracticeAreaClick(area.slug);
                            }}
                            className="block px-4 py-2.5 text-sm text-navy/80 transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {area.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = !isPageLink(link.href) && activeSection === link.href.replace("#", "");
              const isPage = "isPage" in link && link.isPage;

              if (isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative pb-1 text-[15px] font-medium transition-colors",
                      pathname.startsWith(link.href) ? "text-gold" : "text-navy/75 hover:text-navy",
                    )}
                  >
                    {link.label}
                  </Link>
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
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl("consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8922a] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Free Consultation
            </a>

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
              if ("hasDropdown" in link && link.hasDropdown) {
                return (
                  <div key={link.href} className="border-b border-navy/5">
                    <button
                      type="button"
                      onClick={() => setPracticeOpen(!practiceOpen)}
                      className="flex w-full items-center justify-between py-3.5 text-base font-medium text-navy/85"
                      aria-expanded={practiceOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn("h-4 w-4 text-gold transition-transform", practiceOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    {practiceOpen && (
                      <div className="pb-3 pl-3">
                        <a
                          href="#practice-areas"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick("#practice-areas");
                          }}
                          className="block py-2 text-sm font-semibold text-navy hover:text-gold"
                        >
                          All Practice Areas
                        </a>
                        {practiceAreas.map((area) => (
                          <a
                            key={area.slug}
                            href={getPracticeAreaHref(area.slug)}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePracticeAreaClick(area.slug);
                            }}
                            className="block py-2 text-sm text-muted hover:text-gold"
                          >
                            {area.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if ("isPage" in link && link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-navy/5 py-3.5 text-base font-medium text-navy/85 hover:text-gold"
                  >
                    {link.label}
                  </Link>
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
                  className="border-b border-navy/5 py-3.5 text-base font-medium text-navy/85 hover:text-gold"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="border-t border-navy/10 p-4">
            <a
              href={getWhatsAppUrl("consultation")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#b8922a]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Free Consultation
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
