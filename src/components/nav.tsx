"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/blog" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  function isActive(href: string): boolean {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-bg/0",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Nick Taylor — home"
        >
          <span className="inline-flex size-7 items-center justify-center rounded-sm bg-fg font-mono text-[0.75rem] font-bold text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
            NT
          </span>
          <span className="hidden sm:inline">Nick Taylor</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded px-3 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded border border-border px-3 text-sm text-fg-muted transition-colors hover:border-fg-muted hover:text-fg md:inline-flex"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded border border-border text-fg-muted transition-colors hover:border-fg-muted hover:text-fg md:hidden"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-bg md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded px-3 py-3 text-base transition-colors",
                isActive(item.href)
                  ? "bg-bg-subtle text-fg"
                  : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/Resume2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded px-3 py-3 text-base text-fg-muted hover:bg-bg-subtle hover:text-fg"
          >
            Résumé
          </a>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
