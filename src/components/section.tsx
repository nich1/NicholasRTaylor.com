import { cn } from "@/lib/cn";
import { Container } from "@/components/container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-24 lg:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-prose", className)}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display font-sans text-fg">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-fg-muted">{description}</p>
      )}
    </div>
  );
}
