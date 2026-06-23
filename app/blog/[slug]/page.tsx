import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { Footer } from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://davidkilgallon.dev";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, "David Kilgallon", "web development", "front-end developer"],
    authors: [{ name: "David Kilgallon", url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["David Kilgallon"],
      tags: post.tags,
      siteName: "David Kilgallon Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const morePosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const url = `${SITE_URL}/blog/${slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "David Kilgallon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "David Kilgallon",
    },
    image: `${url}/opengraph-image`,
    keywords: post.tags.join(", "),
    wordCount: post.content.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${post.readingTime}M`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
        <article className="mx-auto max-w-3xl">
          {/* Back */}
          <Link
            href="/blog"
            className="text-sm text-[#7B8CA0] hover:text-[#9BA7B7] transition-colors mb-10 inline-block"
          >
            ← Back to blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mt-6 mb-4 text-xs text-[#7B8CA0] uppercase tracking-widest">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-white/10 rounded-full px-2 py-0.5 normal-case tracking-normal"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FB] mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#9BA7B7] mb-12 border-l-2 border-sky-400 pl-4">
            {post.description}
          </p>

          {/* Body */}
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* More from the blog */}
        {morePosts.length > 0 && (
          <div className="mx-auto max-w-3xl mt-20 pt-10 border-t border-white/[0.07]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7B8CA0] mb-6">
              More from the blog
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {morePosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-sky-400/25 hover:bg-white/[0.055]"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#7B8CA0] mb-2">
                    {new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "short" })}
                    {" · "}{p.readingTime} min read
                  </p>
                  <h3 className="text-sm font-semibold text-[#F4F7FB] leading-snug mb-2 group-hover:text-sky-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#9BA7B7] leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
