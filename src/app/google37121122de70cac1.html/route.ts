export function GET() {
  return new Response("google-site-verification: google37121122de70cac1.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
