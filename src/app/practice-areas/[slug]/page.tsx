import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { practiceAreas, SITE_URL, siteConfig, getWhatsAppUrl } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice Area Not Found" };

  const title = `${area.title} Lawyer & Advocate in Madurai, Tamil Nadu | ${siteConfig.advocateName}`;
  const description = `${area.title} legal services by Advocate K. Neelamegam at Lumbini Law Associates, Madurai High Court. ${area.description} Call 080720 21876.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/practice-areas/${slug}` },
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  return (
    <PageShell>
      <article className="bg-grey-soft py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#practice-areas" className="hover:text-gold">
              Practice Areas
            </Link>
            <span className="mx-2">/</span>
            <span>{area.title}</span>
          </nav>

          <h1 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            {area.title} — Madurai &amp; Tamil Nadu Advocate
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{area.description}</p>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>
              {siteConfig.advocateName} at {siteConfig.name} provides expert {area.title.toLowerCase()}{" "}
              legal services for clients in Madurai, Tamil Nadu, and across India. With 22+ years of
              experience at the Madras High Court Madurai Bench, Chamber No. 43, clients receive
              ethical, strategic, and results-driven advocacy.
            </p>
            <p>
              Whether you need urgent consultation, court representation, or long-term litigation
              support, contact Lumbini Law Associates 24x7 via phone, WhatsApp, or the online
              appointment form.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl(area.whatsappKey)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Consult on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Book Appointment
            </Link>
            <Link
              href="/advocate"
              className="rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Find Advocate by Location
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
