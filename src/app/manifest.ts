import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.seo.title,
    short_name: siteConfig.name,
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b1d3a",
    theme_color: "#0b1d3a",
    lang: "en-IN",
    icons: [
      {
        src: "/images/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
