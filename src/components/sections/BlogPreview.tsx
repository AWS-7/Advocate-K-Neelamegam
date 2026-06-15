import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getLatestPosts } from "@/lib/blog-posts";

export function BlogPreview() {
  const posts = getLatestPosts(3);

  return (
    <section
      id="blog-preview"
      className="bg-white py-16 md:py-24"
      aria-labelledby="blog-preview-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal Blog
            </span>
            <h2
              id="blog-preview-heading"
              className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl"
            >
              Legal Tips &amp; Articles
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted">
              Expert insights on criminal law, family matters, property disputes, NI Act cases,
              and High Court practice.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border border-gold px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-white"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-navy/10 bg-grey-soft/40 p-6 transition-all hover:border-gold/30 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                {post.category}
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy group-hover:text-gold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold"
              >
                Read More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
