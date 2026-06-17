import { SITE_URL } from "@/lib/site-data";
import type { AdvocateLandingPage } from "@/lib/seo-landing-pages";

type Props = {
  page: AdvocateLandingPage;
};

export function AdvocatePageJsonLd({ page }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: page.h1,
    description: page.description,
    url: `${SITE_URL}/advocate/${page.slug}`,
    areaServed: page.location,
    provider: {
      "@type": "Attorney",
      name: "Advocate K. Neelamegam",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
