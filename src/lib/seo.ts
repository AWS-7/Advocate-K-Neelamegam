import type { Metadata } from "next";
import { SITE_URL, seoKeywords, siteConfig } from "@/lib/site-data";

const ogImage = "/images/og-image.svg";

export function buildSiteMetadata(): Metadata {
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    keywords: [...seoKeywords],
    authors: [{ name: siteConfig.advocateName, url: SITE_URL }],
    creator: siteConfig.advocateName,
    publisher: siteConfig.name,
    category: "Legal Services",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
      languages: {
        "en-IN": SITE_URL,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      siteName: siteConfig.name,
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.advocateName} — High Court Lawyer India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [ogImage],
    },
    other: {
      "geo.region": "IN-TN",
      "geo.placename": "Madurai",
      "geo.position": `${siteConfig.geo.lat};${siteConfig.geo.lng}`,
      ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lng}`,
      "content-language": "en-IN",
    },
    ...(googleVerification
      ? {
          verification: {
            google: googleVerification,
          },
        }
      : {}),
  };
}

export const homePageMetadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: {
    canonical: SITE_URL,
  },
};
