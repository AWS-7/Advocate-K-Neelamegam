import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_DOMAIN, SITE_WWW_DOMAIN } from "@/lib/site-data";
import { isBlockedPath } from "@/lib/security/blocklist";
import { applySecurityHeaders } from "@/lib/security/headers";

function secureResponse(response: NextResponse) {
  applySecurityHeaders(response);
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isBlockedPath(pathname)) {
    return secureResponse(new NextResponse("Not Found", { status: 404 }));
  }

  const host = request.headers.get("host")?.split(":")[0];

  if (host === SITE_WWW_DOMAIN) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = SITE_DOMAIN;
    return secureResponse(NextResponse.redirect(url, 308));
  }

  return secureResponse(NextResponse.next());
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|icon|manifest.webmanifest|google37121122de70cac1.html).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
