import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section
      id="legal-blog"
      className="bg-grey-soft py-16 md:py-24"
      aria-labelledby="blog-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal Insights
            </span>
            <h2
              id="blog-preview-heading"
              className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl"
            >
              Legal Tips &amp; Articles
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Practical legal guidance on criminal law, family matters, property disputes, and
              High Court practice.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                  {post.category}
                </span>
                <span className="text-xs text-muted">{post.readTime}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
