import {
  SITE_URL,
  faqItems,
  practiceAreas,
  siteConfig,
  testimonials,
} from "@/lib/site-data";
import { advocatePortraitImage, ogShareImage } from "@/lib/seo-images";
import { seoKeywords } from "@/lib/seo-keywords";

const heroPortrait = `${SITE_URL}${advocatePortraitImage.path}`;
const ogImage = `${SITE_URL}${ogShareImage.path}`;
const portraitImageId = `${SITE_URL}/#advocate-portrait`;

const businessId = `${SITE_URL}/#business`;
const localBusinessId = `${SITE_URL}/#localbusiness`;
const organizationId = `${SITE_URL}/#organization`;
const attorneyId = `${SITE_URL}/#attorney`;
const websiteId = `${SITE_URL}/#website`;

export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.svg`,
        founder: {
          "@type": "Person",
          name: siteConfig.founderName,
          jobTitle: "Founder",
        },
        employee: { "@id": attorneyId },
        sameAs: [siteConfig.googleMapsUrl, siteConfig.googleReviewsUrl],
      },
      {
        "@type": "LegalService",
        "@id": businessId,
        name: siteConfig.name,
        alternateName: [
          siteConfig.advocateName,
          "Lumbini Law Associates Madurai",
          "Advocate K Neelamegam Madurai",
          "Best Advocate in Madurai",
          "Best Advocate in Tamil Nadu",
          "Indian Advocate",
          "Madurai High Court Advocate",
          "Tamil Nadu Lawyer",
        ],
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.svg`,
        image: [heroPortrait, ogImage],
        description: siteConfig.seo.description,
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
        hasMap: siteConfig.googleMapsUrl,
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "State", name: "Tamil Nadu" },
          { "@type": "City", name: "Madurai" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.value,
          reviewCount: siteConfig.rating.count,
          bestRating: 5,
          worstRating: 1,
        },
        review: testimonials.map((t) => ({
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
          },
          reviewBody: t.text,
        })),
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
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phone,
            contactType: "customer service",
            availableLanguage: ["Tamil", "English"],
            areaServed: "IN",
          },
          {
            "@type": "ContactPoint",
            contactType: "legal consultation",
            url: SITE_URL,
            availableLanguage: ["Tamil", "English"],
          },
        ],
        sameAs: [siteConfig.googleMapsUrl, siteConfig.googleReviewsUrl],
        parentOrganization: { "@id": organizationId },
        location: { "@id": localBusinessId },
        employee: { "@id": attorneyId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Legal Practice Areas — India",
          itemListElement: practiceAreas.map((area) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: area.title,
              description: area.description,
              areaServed: "India",
            },
          })),
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: siteConfig.name,
        description: siteConfig.seo.description,
        url: SITE_URL,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        image: { "@id": portraitImageId },
        priceRange: "₹₹",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.value,
          reviewCount: siteConfig.rating.count,
          bestRating: 5,
          worstRating: 1,
        },
        parentOrganization: { "@id": organizationId },
        legalName: siteConfig.name,
      },
      {
        "@type": "ImageObject",
        "@id": portraitImageId,
        url: heroPortrait,
        contentUrl: heroPortrait,
        name: advocatePortraitImage.alt,
        caption: advocatePortraitImage.alt,
        width: advocatePortraitImage.width,
        height: advocatePortraitImage.height,
        representativeOfPage: true,
        inLanguage: "en-IN",
      },
      {
        "@type": "Attorney",
        "@id": attorneyId,
        name: siteConfig.advocateName,
        jobTitle: "High Court Advocate — Criminal, Civil & Family Law",
        description:
          "Experienced High Court advocate specializing in criminal defense, civil litigation, family law, property disputes, NI Act cases, and constitutional matters across Tamil Nadu and India.",
        url: SITE_URL,
        image: { "@id": portraitImageId },
        telephone: siteConfig.phone,
        email: siteConfig.email,
        worksFor: { "@id": businessId },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line1,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        knowsAbout: [...practiceAreas.map((a) => a.title), ...seoKeywords.slice(0, 100)],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: SITE_URL,
        description: siteConfig.seo.description,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        isPartOf: { "@id": websiteId },
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "High Court Advocate",
            item: `${SITE_URL}/#about`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** @deprecated Use SeoJsonLd instead */
export const LegalServiceJsonLd = SeoJsonLd;

/** @deprecated Use SeoJsonLd instead */
export const WebsiteJsonLd = () => null;
