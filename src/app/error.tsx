"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-grey-soft px-4 py-16">
      <div className="max-w-md rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-sm">
        <h1 className="font-heading text-2xl font-bold text-navy">Page Error</h1>
        <p className="mt-3 text-sm text-muted">
          We hit a temporary issue. Your data is safe — please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-grey-soft"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
