import { Section, SectionHeading } from "@/components/section";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  handle?: string;
};

const EMAIL = "nichtaylor516@gmail.com";

const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nich1",
    handle: "@nich1",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nichtaylor/",
    handle: "nichtaylor",
    icon: LinkedinIcon,
  },
  {
    label: "X",
    href: "https://x.com/nich_main",
    handle: "@nich_main",
    icon: XLogoIcon,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's get in touch."
        description="I'm always happy to talk about software, interesting projects, or opportunities to build something worthwhile."
      />

      <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6">
        <a
          href={`mailto:${EMAIL}`}
          className="group flex flex-col justify-between rounded-lg border border-border bg-bg-subtle/40 p-6 transition-colors hover:border-accent hover:bg-bg-subtle/80"
        >
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
              Email
            </p>
            <p className="text-lg font-semibold text-fg">{EMAIL}</p>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors group-hover:text-accent">
            Send me a note
            <ArrowRightIcon />
          </p>
        </a>

        <ul className="grid gap-3 sm:grid-cols-3">
          {SOCIALS.map(({ label, href, handle, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-lg border border-border bg-bg-subtle/40 p-5 transition-colors hover:border-fg-muted/40 hover:bg-bg-subtle/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-bg text-fg-muted transition-colors group-hover:border-fg-muted/40 group-hover:text-fg">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-fg">{label}</span>
                </div>
                {handle && (
                  <p className="mt-3 truncate font-mono text-xs text-fg-muted">
                    {handle}
                  </p>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 .296a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.86.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .296z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.54 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7v7.45h-4.55v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.72-2.53 3.49V22H7.76V8z" />
    </svg>
  );
}

function XLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  );
}
