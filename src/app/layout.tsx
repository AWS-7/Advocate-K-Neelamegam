import type { Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { Preloader } from "@/components/layout/Preloader";
import { SecurityShell } from "@/components/security/SecurityShell";
import { ErrorBoundary } from "@/components/security/ErrorBoundary";
import { buildSiteMetadata, GOOGLE_SITE_VERIFICATION } from "@/lib/seo";
import { advocatePortraitImage } from "@/lib/seo-images";
import { SITE_URL } from "@/lib/site-data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1d3a",
};

export const metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
        <link
          rel="image_src"
          href={`${SITE_URL}${advocatePortraitImage.path}`}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-navy-dark focus:font-semibold"
        >
          Skip to main content
        </a>
        <SeoJsonLd />
        <ErrorBoundary section="preloader" fallback={null}>
          <Preloader />
        </ErrorBoundary>
        <SecurityShell>{children}</SecurityShell>
      </body>
    </html>
  );
}
