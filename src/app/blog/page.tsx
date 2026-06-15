import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Legal Blog & Tips",
  description:
    "Legal articles and tips on criminal law, family law, property disputes, NI Act cases, and High Court practice by Advocate K. Neelamegam.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <PageShell>
      <main className="bg-grey-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/" className="text-sm font-medium text-gold hover:underline">
            ← Back to Home
          </Link>

          <h1 className="mt-6 font-heading text-3xl font-bold text-navy md:text-4xl">
            Legal Blog &amp; Tips
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Expert legal insights from Advocate K. Neelamegam — criminal, civil, family, property,
            and High Court matters explained in plain language.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:border-gold/30 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.category}
                </div>
                <h2 className="font-heading text-xl font-semibold text-navy group-hover:text-gold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-gold hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}
