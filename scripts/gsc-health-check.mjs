/**
 * Weekly health check for search visibility prerequisites.
 * Usage: npm run gsc:health
 */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumbinilawassociates.in";

const pages = [
  "/",
  "/sitemap.xml",
  "/robots.txt",
  "/google37121122de70cac1.html",
  "/advocate/madurai-advocate",
  "/advocate/best-advocate-madurai",
  "/advocate/tamil-nadu-advocate",
  "/practice-areas/criminal-cases",
  "/blog",
];

async function check(url) {
  const start = Date.now();
  const res = await fetch(url, { redirect: "follow" });
  const ms = Date.now() - start;
  return { url, status: res.status, ok: res.ok, ms };
}

async function main() {
  console.log(`\nSearch health check — ${new Date().toISOString()}\n`);
  let issues = 0;

  for (const path of pages) {
    const url = `${SITE}${path}`;
    try {
      const result = await check(url);
      const icon = result.ok ? "✓" : "✗";
      console.log(`${icon} ${result.status} ${result.ms}ms  ${path}`);
      if (!result.ok) issues++;
    } catch (error) {
      issues++;
      console.log(`✗ FAIL  ${path} — ${error instanceof Error ? error.message : error}`);
    }
  }

  try {
    const res = await fetch(`${SITE}/sitemap.xml`);
    const xml = await res.text();
    const urls = (xml.match(/<loc>/g) ?? []).length;
    console.log(`\nSitemap URL count: ${urls}`);
  } catch {
    console.log("\nSitemap URL count: unavailable");
  }

  console.log(issues === 0 ? "\nAll checks passed.\n" : `\n${issues} issue(s) found.\n`);
  if (issues > 0) process.exit(1);
}

main();
