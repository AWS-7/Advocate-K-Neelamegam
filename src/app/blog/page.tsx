import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Legal Blog & Tips",
  description: `Legal articles and tips from ${siteConfig.advocateName} — criminal law, family law, property disputes, NI Act, and High Court practice.`,
};

export default function BlogPage() {
  return (
    <PageShell>
      <main className="bg-grey-soft py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal Blog
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
              Legal Tips &amp; Articles
            </h1>
            <p className="mt-4 text-base text-muted md:text-lg">
              Expert insights on criminal law, civil litigation, family matters, property disputes,
              and High Court practice in India.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-semibold text-navy group-hover:text-gold">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted">{post.readTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    Read
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link href="/" className="text-sm font-medium text-gold hover:text-navy">
              &larr; Back to Home
            </Link>
          </p>
        </div>
      </main>
    </PageShell>
  );
}
