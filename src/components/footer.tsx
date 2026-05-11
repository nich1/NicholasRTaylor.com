import { Container } from "@/components/container";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/nich1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nichtaylor/" },
  { label: "X", href: "https://x.com/nich_main?lang=en" },
  { label: "Email", href: "mailto:nichtaylor516@gmail.com" },
  { label: "RSS", href: "/rss.xml" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 text-sm text-fg-muted sm:flex-row sm:items-center">
        <p>
          &copy; {year} Nick Taylor. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
          >
            Next.js
          </a>
          .
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {SOCIALS.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
}
