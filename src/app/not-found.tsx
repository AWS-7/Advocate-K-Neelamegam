import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="font-heading text-4xl font-bold text-navy">Page Not Found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-gold px-6 py-3 font-semibold text-white hover:bg-[#b8922a]"
      >
        Back to Home
      </Link>
    </main>
  );
}
