import type { NextConfig } from "next";
import path from "path";
import { securityHeaders } from "./src/lib/security/headers";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lumbinilawassociates.in" }],
        destination: "https://lumbinilawassociates.in/:path*",
        permanent: true,
      },
      {
        source: "/images/hero/advocate-court-attire-portrait.webp",
        destination: "/images/advocate-k-neelamegam-high-court-portrait.webp",
        permanent: true,
      },
      {
        source: "/images/hero/advocate-ceremonial-portrait.webp",
        destination: "/images/advocate-k-neelamegam-high-court-portrait.webp",
        permanent: true,
      },
      {
        source: "/images/hero/advocate-outdoor-portrait.webp",
        destination: "/images/advocate-k-neelamegam-high-court-portrait.webp",
        permanent: true,
      },
      {
        source: "/images/gallery/advocate-court-attire-portrait.webp",
        destination: "/images/advocate-k-neelamegam-high-court-portrait.webp",
        permanent: true,
      },
      {
        source: "/images/og-image.svg",
        destination: "/images/og-image.webp",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: Object.entries(securityHeaders).map(([key, value]) => ({
          key,
          value,
        })),
      },
    ];
  },
  images: {    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
