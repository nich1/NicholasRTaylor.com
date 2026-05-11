import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Chip } from "@/components/chip";
import { mdxComponents } from "@/components/mdx-components";
import { mdxOptions } from "@/lib/mdx-options";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import "katex/dist/katex.min.css";

type PageParams = { slug: string };

export function generateStaticParams(): PageParams[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: PageParams;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const ogImageUrl = `/og?title=${encodeURIComponent(
    post.title,
  )}&date=${encodeURIComponent(post.date)}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}

export default function PostPage({ params }: { params: PageParams }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main id="main">
        <article className="pt-12 sm:pt-16">
          <Container>
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <span aria-hidden>←</span> All posts
            </Link>

            <header className="mb-10 max-w-prose">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
                <span aria-hidden> · </span>
                <span>{post.readingText}</span>
              </p>
              <h1 className="text-display font-sans text-fg">{post.title}</h1>
              {post.description && (
                <p className="mt-4 text-lg text-fg-muted">{post.description}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <Chip>{tag}</Chip>
                    </li>
                  ))}
                </ul>
              )}
            </header>

            <div className="max-w-prose">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={mdxOptions}
              />
            </div>

            <div className="mt-20 border-t border-border pt-8 max-w-prose">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <span aria-hidden>←</span> Back to all posts
              </Link>
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
