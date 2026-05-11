import { Chip } from "@/components/chip";
import { Section, SectionHeading } from "@/components/section";

const NOTABLE_CLASSES = [
  "Software Engineering",
  "Foundations of Cybersecurity",
  "Algorithms",
  "Software Testing & Empirical Methods",
  "Systems Programming",
  "Data Structures & Algorithms",
  "Programming Languages",
  "Fundamentals of Database Systems",
  "Computer Networks",
  "Digital Logic",
  "Assembly Language",
  "Linear Algebra",
  "Calculus II",
];

export default function Education({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow="Education" title="Where I studied." />

      <div className="rounded-lg border border-border bg-bg-subtle/40 p-6 sm:p-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
              Degree
            </p>
            <p className="text-lg font-semibold text-fg">
              B.S. Computer Science
            </p>
            <p className="text-base text-fg-muted">
              University of North Texas
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:block">
            <div>
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                Graduated
              </p>
              <p className="text-lg font-semibold text-fg">Summer 2025</p>
            </div>
            <div className="sm:mt-6">
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                GPA
              </p>
              <p className="text-lg font-semibold text-fg">3.3</p>
            </div>
          </div>
        </div>

        <details className="group mt-8 border-t border-border pt-6">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-fg-muted transition-colors hover:text-fg">
            <span>Notable coursework</span>
            <ChevronIcon />
          </summary>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {NOTABLE_CLASSES.map((course) => (
              <li key={course}>
                <Chip>{course}</Chip>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </Section>
  );
}

function ChevronIcon() {
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
      className="transition-transform group-open:rotate-180"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
