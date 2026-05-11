import { getAllPostMeta } from "@/lib/posts";

const SITE_URL = "https://nicholasrtaylor.com";
const AUTHOR_NAME = "Nicholas Taylor";
const AUTHOR_EMAIL = "nichtaylor516@gmail.com";

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPostMeta();
  const lastBuildDate =
    posts[0]?.date != null
      ? new Date(posts[0].date).toUTCString()
      : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escape(post.description)}</description>
      <author>${AUTHOR_EMAIL} (${AUTHOR_NAME})</author>
    </item>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${AUTHOR_NAME}</title>
    <link>${SITE_URL}</link>
    <description>Writing about engineering work by ${AUTHOR_NAME}.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
