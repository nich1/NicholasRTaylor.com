import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/posts";

const SITE_URL = "https://nicholasrtaylor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPostMeta();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: posts[0]?.date ? new Date(posts[0].date) : now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
