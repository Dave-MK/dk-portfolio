import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllWorkSlugs } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const workSlugs = getAllWorkSlugs();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://davidkilgallon.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = workSlugs.map((slug) => ({
    url: `https://davidkilgallon.dev/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://davidkilgallon.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://davidkilgallon.dev/software",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://davidkilgallon.dev/videography",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://davidkilgallon.dev/3d",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://davidkilgallon.dev/photography",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://davidkilgallon.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://davidkilgallon.dev/cv",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...workRoutes,
    ...blogRoutes,
  ];
}
