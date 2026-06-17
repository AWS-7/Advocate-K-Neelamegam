import { seoLocations, seoPractices } from "@/lib/seo-keywords";

export type AdvocateLandingPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  location: string;
  focus: string;
};

function capitalize(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildPage(
  slug: string,
  h1: string,
  location: string,
  focus: string,
): AdvocateLandingPage {
  const title = `${h1} | Advocate K. Neelamegam | Lumbini Law Associates`;
  const description = `Looking for ${h1.toLowerCase()}? Advocate K. Neelamegam at Lumbini Law Associates offers trusted ${focus} with 20+ years experience, 4.9★ ratings, and Chamber No. 43, Madurai High Court. Call 080720 21876.`;

  const intro = `Advocate K. Neelamegam at Lumbini Law Associates is a trusted ${focus} serving clients in ${location} and across Tamil Nadu and India. With over 20 years of courtroom experience at the Madras High Court Madurai Bench, Chamber No. 43, Madurai High Court Buildings, clients receive ethical, strategic, and results-driven legal representation for criminal, civil, family, property, NI Act, and constitutional matters.`;

  return { slug, title, h1, description, intro, location, focus };
}

const manualPages: AdvocateLandingPage[] = [
  buildPage(
    "madurai-advocate",
    "Madurai Advocate",
    "Madurai",
    "Madurai advocate and High Court lawyer",
  ),
  buildPage(
    "best-advocate-madurai",
    "Best Advocate in Madurai",
    "Madurai",
    "best advocate in Madurai",
  ),
  buildPage(
    "tamil-nadu-advocate",
    "Tamil Nadu Advocate",
    "Tamil Nadu",
    "Tamil Nadu advocate and High Court lawyer",
  ),
  buildPage(
    "tamilnadu-best-advocate",
    "Best Advocate in Tamil Nadu",
    "Tamil Nadu",
    "best advocate in Tamil Nadu",
  ),
  buildPage(
    "india-advocate",
    "India Advocate",
    "India",
    "Indian advocate for High Court and district court matters",
  ),
  buildPage(
    "indian-advocate",
    "Indian Advocate",
    "India",
    "experienced Indian advocate",
  ),
  buildPage(
    "best-lawyer-tamil-nadu",
    "Best Lawyer in Tamil Nadu",
    "Tamil Nadu",
    "best lawyer in Tamil Nadu",
  ),
  buildPage(
    "madurai-lawyer",
    "Madurai Lawyer",
    "Madurai",
    "Madurai lawyer and legal consultant",
  ),
  buildPage(
    "madurai-high-court-advocate",
    "Madurai High Court Advocate",
    "Madurai High Court",
    "Madurai High Court advocate",
  ),
  buildPage(
    "madras-high-court-advocate",
    "Madras High Court Advocate",
    "Madras High Court Madurai Bench",
    "Madras High Court advocate",
  ),
];

function generateLandingPages(): AdvocateLandingPage[] {
  const pages = new Map<string, AdvocateLandingPage>();

  for (const page of manualPages) {
    pages.set(page.slug, page);
  }

  for (const location of seoLocations) {
    const locTitle = capitalize(location);

    for (const role of ["advocate", "lawyer"] as const) {
      const slug = `${location.replace(/\s+/g, "-")}-${role}`;
      if (!pages.has(slug)) {
        pages.set(
          slug,
          buildPage(slug, `${locTitle} ${capitalize(role)}`, locTitle, `${locTitle} ${role}`),
        );
      }

      const bestSlug = `best-${role}-${location.replace(/\s+/g, "-")}`;
      if (!pages.has(bestSlug)) {
        pages.set(
          bestSlug,
          buildPage(
            bestSlug,
            `Best ${capitalize(role)} in ${locTitle}`,
            locTitle,
            `best ${role} in ${location}`,
          ),
        );
      }
    }
  }

  for (const practice of seoPractices.slice(0, 12)) {
    for (const location of ["madurai", "tamil-nadu", "india"] as const) {
      const locTitle = capitalize(location.replace("-", " "));
      const practiceTitle = capitalize(practice);
      const slug = `${practice.replace(/\s+/g, "-")}-${location}-advocate`;
      if (!pages.has(slug)) {
        pages.set(
          slug,
          buildPage(
            slug,
            `${practiceTitle} Advocate ${locTitle}`,
            locTitle,
            `${practice} advocate in ${location.replace("-", " ")}`,
          ),
        );
      }
    }
  }

  return [...pages.values()];
}

export const advocateLandingPages = generateLandingPages();

export function getAdvocateLandingPage(slug: string) {
  return advocateLandingPages.find((page) => page.slug === slug);
}

export const topAdvocateLandingPages = advocateLandingPages.slice(0, 24);
