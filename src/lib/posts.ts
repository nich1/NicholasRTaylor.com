import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
  published?: boolean;
  /**
   * Optional manual override for reading time, in minutes.
   * If present, takes precedence over the auto-computed value from word count.
   */
  readingMinutes?: number;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readingMinutes: number;
  readingText: string;
};

export type Post = PostMeta & {
  content: string;
};

function getAllFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function readPost(filename: string): Post {
  const slug = filename.replace(/\.(mdx|md)$/i, "");
  const filepath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;
  const autoStats = readingTime(content);

  const minutes =
    typeof frontmatter.readingMinutes === "number" &&
    frontmatter.readingMinutes > 0
      ? Math.round(frontmatter.readingMinutes)
      : Math.max(1, Math.round(autoStats.minutes));

  const readingText = `${minutes} min read`;

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    tags: frontmatter.tags ?? [],
    published: frontmatter.published ?? true,
    readingMinutes: minutes,
    readingText,
    content,
  };
}

function compareByDateDesc(a: PostMeta, b: PostMeta): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

const isDev = process.env.NODE_ENV === "development";

export function getAllPosts(): Post[] {
  const posts = getAllFiles()
    .map(readPost)
    .filter((post) => isDev || post.published !== false);
  return posts.sort(compareByDateDesc);
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map((post) => {
    const {
      slug,
      title,
      date,
      description,
      tags,
      published,
      readingMinutes,
      readingText,
    } = post;
    return {
      slug,
      title,
      date,
      description,
      tags,
      published,
      readingMinutes,
      readingText,
    };
  });
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
