import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { advocateLandingPages } from "@/lib/seo-landing-pages";
import { SITE_URL, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Find Advocate & Lawyer in Madurai, Tamil Nadu & India",
  description:
    "Find the best advocate and lawyer in Madurai, Tamil Nadu, and India. Advocate K. Neelamegam — criminal, civil, family, property & High Court legal services at Lumbini Law Associates.",
  alternates: { canonical: `${SITE_URL}/advocate` },
};

export default function AdvocateIndexPage() {
  return (
    <PageShell>
      <section className="bg-grey-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-navy md:text-4xl">
            Find Advocate &amp; Lawyer — Madurai, Tamil Nadu &amp; India
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted">
            {siteConfig.advocateName} at {siteConfig.name} provides trusted legal representation
            for criminal, civil, family, property, NI Act, and High Court matters across Madurai,
            Tamil Nadu, and India.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {advocateLandingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/advocate/${page.slug}`}
                className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-gold hover:text-gold"
              >
                {page.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
