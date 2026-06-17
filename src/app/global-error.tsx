"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en-IN">
      <body className="bg-[#0a1f3d] text-white antialiased">
        <main className="flex min-h-screen items-center justify-center px-4 py-16">
          <div className="max-w-md rounded-2xl border border-white/10 bg-[#0d2a4a] p-8 text-center">
            <h1 className="text-2xl font-bold">Website Recovery Mode</h1>
            <p className="mt-3 text-sm text-white/75">
              An unexpected error occurred. Please reload the page to continue browsing.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-full bg-[#c59d5f] px-5 py-2.5 text-sm font-semibold text-[#0a1f3d] transition-colors hover:bg-[#d4b07a]"
            >
              Reload website
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
