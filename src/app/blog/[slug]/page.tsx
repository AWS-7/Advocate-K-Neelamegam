import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { SITE_URL, siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.advocateName],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <main className="bg-white py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link href="/blog" className="text-sm font-medium text-gold hover:underline">
            ← All Articles
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
            {post.category}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
            <span>By {siteConfig.advocateName}</span>
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-gold/30 bg-grey-soft p-6">
            <h2 className="font-heading text-lg font-semibold text-navy">
              Need Legal Advice?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Contact {siteConfig.name} for a confidential consultation on {post.category}{" "}
              matters.
            </p>
            <Link
              href="/#appointment"
              className="mt-4 inline-flex rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#b8922a]"
            >
              Book Appointment
            </Link>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
