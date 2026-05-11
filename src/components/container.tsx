import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
