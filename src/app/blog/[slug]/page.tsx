import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

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
    authors: [{ name: post.author }],
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 font-heading text-xl font-semibold text-navy">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mt-3 list-disc space-y-1.5 pl-5">
          {items.map((item, j) => (
            <li key={j}>{item.replace("- ", "")}</li>
          ))}
        </ul>
      );
    }
    if (block.startsWith("*") && block.endsWith("*")) {
      return (
        <p key={i} className="mt-6 text-sm italic text-muted">
          {block.replace(/^\*|\*$/g, "")}
        </p>
      );
    }
    return (
      <p key={i} className="mt-3 leading-relaxed">
        {block}
      </p>
    );
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <main className="bg-white py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <Link href="/blog" className="text-sm font-medium text-gold hover:text-navy">
            &larr; All Articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
              {post.category}
            </span>
            <span className="text-sm text-muted">{post.readTime}</span>
            <span className="text-sm text-muted">
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-muted">By {post.author} &middot; {siteConfig.name}</p>

          <div className="mt-8 border-t border-navy/10 pt-8 text-base text-muted">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
            <p className="font-heading text-lg font-semibold text-navy">Need Legal Advice?</p>
            <p className="mt-2 text-sm text-muted">
              Contact {siteConfig.advocateName} for a confidential consultation.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex rounded-md bg-gold px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#b8922a]"
            >
              Book Consultation
            </Link>
          </div>
        </article>
      </main>
    </PageShell>
  );
}
