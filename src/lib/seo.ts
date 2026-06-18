import type { Metadata } from "next";
import { SITE_URL, primarySeoKeywords, siteConfig } from "@/lib/site-data";
import { advocatePortraitImage, ogShareImage } from "@/lib/seo-images";

export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "udFtVtTxsqvryhu6jqpX5jeO-hWhthuaWx5qE798yhk";

const sharedOpenGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
  {
    url: ogShareImage.path,
    width: ogShareImage.width,
    height: ogShareImage.height,
    alt: ogShareImage.alt,
    type: "image/webp",
  },
  {
    url: advocatePortraitImage.path,
    width: advocatePortraitImage.width,
    height: advocatePortraitImage.height,
    alt: advocatePortraitImage.alt,
    type: "image/webp",
  },
];

export function buildSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    keywords: [...primarySeoKeywords],
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
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [ogShareImage.path, advocatePortraitImage.path],
    },
    other: {
      "geo.region": "IN-TN",
      "geo.placename": "Madurai",
      "geo.position": `${siteConfig.geo.lat};${siteConfig.geo.lng}`,
      ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lng}`,
      "content-language": "en-IN",
    },
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
  };
}

export const homePageMetadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: SITE_URL,
    images: sharedOpenGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [ogShareImage.path, advocatePortraitImage.path],
  },
};

export function buildPageShareMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogShareImage.path, advocatePortraitImage.path],
    },
  };
}
