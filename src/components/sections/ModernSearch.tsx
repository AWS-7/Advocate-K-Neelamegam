import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { modernSearchCards, siteConfig } from "@/lib/site-data";

export function ModernSearch() {
  return (
    <section
      id="modern-search"
      className="border-t border-navy/8 bg-white py-16 md:py-24"
      aria-labelledby="modern-search-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Built For Modern Search
          </span>
          <h2
            id="modern-search-heading"
            className="mt-3 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl"
          >
            Digital Presence Optimized For Modern Search
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {siteConfig.name} website is structured to improve online visibility and help
            clients discover reliable legal services through search engines and AI-powered
            platforms.
          </p>
          <p className="mt-3 text-sm text-muted">
            Founded by{" "}
            <span className="font-medium text-navy">{siteConfig.founderName}</span>
            {" · "}
            <Link href="#about" className="font-medium text-navy underline-offset-2 hover:text-gold hover:underline">
              {siteConfig.advocateName}
            </Link>
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {modernSearchCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-[0_4px_24px_rgba(11,29,58,0.04)] md:p-7"
            >
              <h3 className="font-heading text-xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">
                {card.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5" aria-label={`${card.title} features`}>
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-navy/85">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-navy/8 pt-5">
                {card.link.href.startsWith("/") ? (
                  <Link
                    href={card.link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold"
                  >
                    Explore {card.link.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    href={card.link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold"
                  >
                    Explore {card.link.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <aside
          className="mt-12 rounded-xl bg-navy px-6 py-8 text-center md:mt-14 md:px-10 md:py-10"
          aria-label="Modern legal digital presence highlight"
        >
          <div
            className="mx-auto mb-4 h-px w-16 bg-gold"
            aria-hidden="true"
          />
          <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
            Modern Legal Digital Presence
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Optimized for Google Search, AI Assistants and next-generation search platforms.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#practice-areas"
              className="rounded-md border border-white/20 px-4 py-2 text-xs font-medium text-white/90 transition-colors hover:border-gold/50 hover:text-gold sm:text-sm"
            >
              Practice Areas
            </a>
            <a
              href="#faq"
              className="rounded-md border border-white/20 px-4 py-2 text-xs font-medium text-white/90 transition-colors hover:border-gold/50 hover:text-gold sm:text-sm"
            >
              FAQ
            </a>
            <Link
              href="/blog"
              className="rounded-md border border-white/20 px-4 py-2 text-xs font-medium text-white/90 transition-colors hover:border-gold/50 hover:text-gold sm:text-sm"
            >
              Legal Blog
            </Link>
            <a
              href="#contact"
              className="rounded-md bg-gold px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-gold-light sm:text-sm"
            >
              Contact Us
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
