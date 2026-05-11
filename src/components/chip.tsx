import { cn } from "@/lib/cn";

type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 font-mono text-xs text-fg-muted transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
