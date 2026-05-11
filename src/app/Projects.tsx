import Image from "next/image";
import { Chip } from "@/components/chip";
import { Section, SectionHeading } from "@/components/section";

type ProjectData = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
};

const PROJECTS: ProjectData[] = [
  {
    title: "Bit Bastion",
    tagline: "CLI password manager + encrypted file tree",
    description:
      "Portable encrypted file tree and password manager CLI, written in Rust. A master password unlocks a SHA-256-derived AES-GCM key that encrypts both secrets and arbitrary files in a single vault.",
    image: "/lock.png",
    imageAlt: "Bit Bastion lock icon",
    tags: ["Rust", "AES-GCM", "SHA-256"],
    link: "https://github.com/nich1/BitBastion",
    linkLabel: "GitHub",
  },
  {
    title: "Eagle Hub",
    tagline: "Cross-platform mobile app",
    description:
      "Helps UNT students navigate campus food resources around dietary needs and preferences. Team project following an AGILE workflow.",
    image: "/eagle.png",
    imageAlt: "Eagle Hub mascot",
    tags: ["Flutter", "Dart", "Google Maps API"],
    link: "https://github.com/nich1/EagleHub",
    linkLabel: "GitHub",
  },
  {
    title: "Nich Neuron",
    tagline: "Concurrent personal server in Go",
    description:
      "Locally hosted server that concurrently runs FTP, HTTP, and email services plus a cron-like scheduler using Go's concurrency primitives. Tested end-to-end with Postman.",
    image: "/brain.png",
    imageAlt: "Brain icon",
    tags: ["Go", "Gin", "REST", "Postman"],
    link: "https://github.com/nich1/nich-neuron-original",
    linkLabel: "GitHub",
  },
  {
    title: "This website",
    tagline: "Next.js portfolio + blog",
    description:
      "The site you're reading — built with Next.js App Router, Tailwind, and MDX for the blog. Deployed on AWS.",
    image: "/internet.png",
    imageAlt: "Internet icon",
    tags: ["Next.js", "TypeScript", "Tailwind", "MDX", "AWS"],
    link: "https://github.com/nich1/NicholasRTaylor.com",
    linkLabel: "GitHub",
  },
];

export default function Projects({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        eyebrow="Projects"
        title="What I've built."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  title,
  tagline,
  description,
  image,
  imageAlt,
  tags,
  link,
  linkLabel,
}: ProjectData) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border bg-bg-subtle/40 p-6 transition-colors hover:border-fg-muted/40 hover:bg-bg-subtle/80">
      <div className="mb-5 flex items-start gap-4">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-md bg-white ring-1 ring-black/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="48px"
            className="object-contain p-1.5"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-fg">
            {title}
          </h3>
          <p className="text-sm text-fg-muted">{tagline}</p>
        </div>
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-fg-muted sm:text-base">
        {description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            {linkLabel ?? "Open"}
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
