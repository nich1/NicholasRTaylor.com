import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type AnchorProps = ComponentPropsWithoutRef<"a">;

function Anchor({ href = "", className, children, ...props }: AnchorProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  const classes = cn(
    "text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent",
    className,
  );
  if (isInternal) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function InlineCode(props: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-[0.9em] text-fg before:content-none after:content-none"
      {...props}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, any> = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-12 scroll-mt-24 text-3xl font-bold tracking-tight text-fg first:mt-0 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-fg"
      {...props}
    />
  ),
  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="mt-8 scroll-mt-24 text-lg font-semibold tracking-tight text-fg"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="my-5 leading-7 text-fg" {...props} />
  ),
  a: Anchor,
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-fg" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-fg" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-5 text-fg-muted italic [&>p]:my-2"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const hasLanguage =
      typeof props.className === "string" &&
      props.className.startsWith("language-");
    // Inline code only — fenced code blocks flow through rehype-pretty-code
    // which emits its own styled <code> inside <pre> and injects the language className.
    if (hasLanguage || "data-language" in props) {
      return <code {...props} />;
    }
    return <InlineCode {...props} />;
  },
  img: (props: ComponentPropsWithoutRef<"img">) => (
    // biome-ignore lint/a11y/useAltText: alt flows through from MDX
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="my-6 rounded-lg border border-border" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table
        className="w-full border-collapse text-left text-sm text-fg"
        {...props}
      />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-border bg-bg-subtle px-4 py-2 font-semibold text-fg"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td
      className="border-b border-border px-4 py-2 text-fg-muted"
      {...props}
    />
  ),
};
