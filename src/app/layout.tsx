import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { LegalServiceJsonLd, WebsiteJsonLd } from "@/components/SeoJsonLd";
import { SITE_URL, siteConfig } from "@/lib/site-data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1d3a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.advocateName} | ${siteConfig.name} — High Court Advocate Madurai`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Advocate K. Neelamegam at Lumbini Law Associates — trusted High Court Advocate at Madurai Bench. Expert in criminal, civil, family, property disputes, cheque bounce (NI Act) & writ matters. 20+ years experience. Free consultation.",
  keywords: [
    "Advocate K Neelamegam",
    "Lumbini Law Associates",
    "High Court Advocate Madurai",
    "Madurai Bench lawyer",
    "criminal lawyer Madurai",
    "civil lawyer Madurai",
    "family law advocate Madurai",
    "property dispute lawyer Madurai",
    "cheque bounce lawyer Madurai",
    "NI Act advocate Madurai",
    "best advocate Madurai High Court",
    "chamber 43 Madurai High Court",
    "legal services Madurai",
    "Madras High Court Madurai Bench advocate",
  ].join(", "),
  authors: [{ name: siteConfig.advocateName, url: SITE_URL }],
  creator: siteConfig.name,
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
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: siteConfig.name,
    title: `${siteConfig.advocateName} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.advocateName} — ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.advocateName} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/images/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-dark focus:font-semibold"
        >
          Skip to main content
        </a>
        <LegalServiceJsonLd />
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
