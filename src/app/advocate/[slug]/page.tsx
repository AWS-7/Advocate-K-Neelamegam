import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoContentPage } from "@/components/seo/SeoContentPage";
import { AdvocatePageJsonLd } from "@/components/seo/AdvocatePageJsonLd";
import {
  advocateLandingPages,
  getAdvocateLandingPage,
} from "@/lib/seo-landing-pages";
import { SITE_URL } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return advocateLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAdvocateLandingPage(slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE_URL}/advocate/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/advocate/${page.slug}`,
    },
  };
}

export default async function AdvocateLandingRoute({ params }: Props) {
  const { slug } = await params;
  const page = getAdvocateLandingPage(slug);
  if (!page) notFound();

  return (
    <>
      <AdvocatePageJsonLd page={page} />
      <SeoContentPage
        h1={page.h1}
        intro={page.intro}
        location={page.location}
        focus={page.focus}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Find Advocate", href: "/advocate" },
          { label: page.h1, href: `/advocate/${page.slug}` },
        ]}
      />
    </>
  );
}
