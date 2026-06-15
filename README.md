# Lumbini Law Associates — Advocate K. Neelamegam

Premium, SEO-optimized law firm homepage for **Lumbini Law Associates**, High Court Advocate at Madurai Bench.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion, Embla Carousel, React CountUp

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace Placeholder Assets

Place your files in `public/images/`:

| File | Purpose |
|------|---------|
| `logo.png` | Firm logo (update `Header.tsx` src) |
| `advocate-portrait.jpg` | Hero portrait (update `Hero.tsx` src) |
| `og-image.jpg` | Social sharing image (update `layout.tsx`) |

Current placeholders use SVG files until your assets are added.

## Environment

Copy `.env.example` to `.env.local` and set your production URL:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Build & Deploy

```bash
npm run build
npm start
```

## Contact Configuration

All site content is centralized in `src/lib/site-data.ts` — phone, email, address, practice areas, reviews, and stats.

## SEO

- Semantic HTML structure
- Next.js Metadata API (Open Graph, Twitter Cards)
- JSON-LD structured data (`LegalService`, `Attorney`, `WebSite`)
- `robots.ts` and `sitemap.ts`
