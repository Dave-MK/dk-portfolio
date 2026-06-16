import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on web development, creative technology, and building things on the web.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4">
            Writing
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FB] mb-4">
            Blog
          </h1>
          <p className="text-[#9BA7B7] text-sm sm:text-base mb-14">
            Thoughts on web development, creative technology, and building things.
          </p>

          {posts.length === 0 ? (
            <p className="text-[#9BA7B7]">No posts yet — check back soon.</p>
          ) : (
            <ul className="flex flex-col divide-y divide-white/[0.07]">
              {posts.map((post) => (
                <li key={post.slug} className="py-7 sm:py-10">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-[#64748B] uppercase tracking-widest">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 rounded-full px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4F7FB] mb-2 group-hover:text-sky-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#9BA7B7]">{post.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
