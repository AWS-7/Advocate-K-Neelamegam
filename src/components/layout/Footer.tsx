import { Scale, Phone, Mail, MapPin } from "lucide-react";
import {
  footerPracticeAreas,
  navLinks,
  siteConfig,
  getWhatsAppUrl,
} from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-white/5">
                <Scale className="h-5 w-5 text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold">{siteConfig.name}</p>
                <p className="text-sm text-gold">{siteConfig.advocateName}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Trusted legal representation at the Madurai Bench of Madras High Court.
              Professional, ethical, and client-focused advocacy since {siteConfig.foundingYear}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              {footerPracticeAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-2 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-gold"
                >
                  <span className="mt-0.5 text-gold" aria-hidden="true">
                    WA
                  </span>
                  WhatsApp Consultation
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic">{siteConfig.address.full}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>
            &copy; {year} {siteConfig.name} &mdash; {siteConfig.advocateName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
