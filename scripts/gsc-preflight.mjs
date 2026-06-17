/**
 * Google Search Console preflight — run before verifying in Search Console.
 * Usage: npm run gsc:check
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumbinilawassociates.in";
const META_CODE =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "udFtVtTxsqvryhu6jqpX5jeO-hWhthuaWx5qE798yhk";
const VERIFY_FILE = "google37121122de70cac1.html";
const VERIFY_CONTENT = `google-site-verification: ${VERIFY_FILE}`;

const checks = [
  {
    name: "Homepage loads",
    url: SITE,
    test: (html) => html.includes("<!DOCTYPE html") || html.includes("<html"),
  },
  {
    name: "Google meta verification tag",
    url: SITE,
    test: (html) =>
      html.includes('name="google-site-verification"') &&
      html.includes(META_CODE),
  },
  {
    name: "Google HTML verification file",
    url: `${SITE}/${VERIFY_FILE}`,
    test: (html) => html.trim() === VERIFY_CONTENT,
  },
  {
    name: "Sitemap accessible",
    url: `${SITE}/sitemap.xml`,
    test: (html) => html.includes("<urlset") && html.includes(SITE),
  },
  {
    name: "Robots.txt references sitemap",
    url: `${SITE}/robots.txt`,
    test: (html) => html.includes("Sitemap:") && html.includes("sitemap.xml"),
  },
  {
    name: "Key SEO page — madurai advocate",
    url: `${SITE}/advocate/madurai-advocate`,
    test: (html) => html.includes("Madurai Advocate"),
  },
  {
    name: "Key SEO page — best advocate madurai",
    url: `${SITE}/advocate/best-advocate-madurai`,
    test: (html) => html.includes("Best Advocate"),
  },
  {
    name: "Key SEO page — tamil nadu advocate",
    url: `${SITE}/advocate/tamil-nadu-advocate`,
    test: (html) => html.includes("Tamil Nadu Advocate"),
  },
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { status: res.status, text, url: res.url };
}

async function main() {
  console.log(`\nGoogle Search Console preflight for ${SITE}\n`);
  let passed = 0;
  let failed = 0;

  for (const check of checks) {
    try {
      const { status, text, url } = await fetchText(check.url);
      const ok = status === 200 && check.test(text);
      if (ok) {
        passed++;
        console.log(`✓ ${check.name}`);
      } else {
        failed++;
        console.log(`✗ ${check.name} (HTTP ${status}, final URL: ${url})`);
      }
    } catch (error) {
      failed++;
      console.log(`✗ ${check.name} — ${error instanceof Error ? error.message : error}`);
    }
  }

  // Count sitemap URLs
  try {
    const { text } = await fetchText(`${SITE}/sitemap.xml`);
    const count = (text.match(/<loc>/g) ?? []).length;
    console.log(`\nSitemap URLs: ${count}`);
  } catch {
    console.log("\nSitemap URL count: unavailable");
  }

  console.log(`\nResult: ${passed} passed, ${failed} failed\n`);

  if (failed === 0) {
    console.log("Site is ready for Google Search Console.\n");
    console.log("Manual steps (client Gmail login required):");
    console.log("1. https://search.google.com/search-console");
    console.log(`2. Add property: ${SITE}`);
    console.log("3. Verify → HTML tag method → Verify");
    console.log("4. Sitemaps → submit: sitemap.xml");
    console.log(`5. URL Inspection → ${SITE} → Request indexing`);
    console.log("6. Google Business: https://business.google.com");
    console.log("");
  } else {
    process.exit(1);
  }
}

main();
