import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="text-sm text-[#64748B] hover:text-[#9BA7B7] transition-colors mb-10 inline-block"
          >
            ← Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mt-6 mb-4 text-xs text-[#64748B] uppercase tracking-widest">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 rounded-full px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FB] mb-6">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-[#9BA7B7] mb-12 border-l-2 border-sky-400 pl-4">
            {post.description}
          </p>

          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
