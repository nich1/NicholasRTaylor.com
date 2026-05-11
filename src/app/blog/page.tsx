import Link from "next/link";
import type { Metadata } from "next";
import { format } from "date-fns";
import { Container } from "@/components/container";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getAllPostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about engineering work that taught me something — bugs, tools, side projects, and the occasional deep dive.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Nick Taylor",
    description:
      "Writing about engineering work that taught me something — bugs, tools, side projects, and the occasional deep dive.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostMeta();

  return (
    <>
      <Nav />
      <main id="main">
        <section className="pt-16 sm:pt-24">
          <Container>
            <div className="max-w-prose">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Blog
              </p>
              <h1 className="text-display font-sans text-fg">
                Writing about engineering.
              </h1>

            </div>
          </Container>
        </section>

        <section className="mt-16 sm:mt-20">
          <Container>
            {posts.length === 0 ? (
              <p className="text-fg-muted">No posts yet — check back soon.</p>
            ) : (
              <ul className="divide-y divide-border border-y border-border">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block py-6 transition-colors hover:bg-bg-subtle/60 sm:grid sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8 sm:py-8"
                    >
                      <time
                        dateTime={post.date}
                        className="block font-mono text-xs uppercase tracking-[0.15em] text-fg-muted"
                      >
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </time>
                      <div className="mt-2 sm:mt-0">
                        <h2 className="text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent sm:text-2xl">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-base text-fg-muted">
                          {post.description}
                        </p>
                        <p className="mt-3 font-mono text-xs text-fg-muted">
                          {post.readingText}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
