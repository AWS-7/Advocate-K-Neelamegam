import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { practiceAreas, siteConfig, getWhatsAppUrl } from "@/lib/site-data";

type SeoContentPageProps = {
  h1: string;
  intro: string;
  location: string;
  focus: string;
  breadcrumbs: { label: string; href: string }[];
};

export function SeoContentPage({
  h1,
  intro,
  location,
  focus,
  breadcrumbs,
}: SeoContentPageProps) {
  return (
    <PageShell>
      <article className="bg-grey-soft py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            {breadcrumbs.map((item, index) => (
              <span key={item.href}>
                {index > 0 && <span className="mx-2">/</span>}
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>

          <h1 className="font-heading text-3xl font-bold text-navy md:text-4xl">{h1}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Whether you need a {focus} for urgent criminal defense, civil litigation, family
              court matters, property disputes, cheque bounce cases under the NI Act, or Madras High
              Court writ petitions, {siteConfig.advocateName} provides professional legal services
              with integrity, confidentiality, and 24x7 availability.
            </p>
            <p>
              Clients across {location}, Tamil Nadu, and India trust Lumbini Law Associates for
              bail applications, divorce and custody cases, land disputes, appeals, and
              constitutional matters. The firm is located at {siteConfig.address.full} with{" "}
              {siteConfig.rating.value} rating from {siteConfig.rating.label}.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="font-heading text-lg font-semibold text-navy">{area.title}</h2>
                <p className="mt-2 text-sm text-muted">{area.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl("consultation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
