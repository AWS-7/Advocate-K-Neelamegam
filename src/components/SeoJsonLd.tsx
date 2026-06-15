import { SITE_URL, practiceAreas, siteConfig } from "@/lib/site-data";

export function LegalServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    alternateName: siteConfig.advocateName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/advocate-portrait.jpg`,
    description:
      "Lumbini Law Associates — High Court Advocate at Madurai Bench offering criminal, civil, family, property, and NI Act legal services.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹",
    foundingDate: String(siteConfig.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Madurai",
      containedInPlace: {
        "@type": "State",
        name: "Tamil Nadu",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["Tamil", "English"],
      areaServed: "IN",
    },
    employee: {
      "@type": "Attorney",
      name: siteConfig.advocateName,
      jobTitle: siteConfig.tagline,
      worksFor: {
        "@type": "LegalService",
        name: siteConfig.name,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Practice Areas",
      itemListElement: practiceAreas.map((area) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: area.title,
          description: area.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    description: siteConfig.description,
    publisher: {
      "@type": "LegalService",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
