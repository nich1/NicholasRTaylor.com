import Link from "next/link";
import { Container } from "@/components/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
      {/* subtle background accent — a soft radial glow in the top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <div className="h-[480px] w-[820px] rounded-full bg-accent opacity-[0.07] blur-3xl dark:opacity-[0.12]" />
      </div>

      <Container>
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3 py-1 text-xs font-medium text-fg-muted">
            <span
              aria-hidden
              className="inline-block size-1.5 rounded-full bg-accent"
            />
            Software Engineer, currently working full-time
          </p>

          <h1 className="text-hero font-sans text-fg">
            Nick Taylor
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-fg-muted sm:text-xl">
            Passionate Junior Software Engineer at Rocktop.io&apos;s Generative AI Team
            developing Scalable, Cutting-Edge, AI-Empowered Applications in the Mortgage Space.
            Take a look at my Projects and Blog to learn more about my software and interests.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center rounded bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View work
              <ArrowRightIcon />
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-11 items-center rounded border border-border bg-bg px-5 text-sm font-medium text-fg transition-colors hover:border-fg-muted"
            >
              Read the blog
            </Link>
            <a
              href="#contact"
              className="inline-flex h-11 items-center px-3 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
