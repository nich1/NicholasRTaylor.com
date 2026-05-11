import { Chip } from "@/components/chip";
import { Section, SectionHeading } from "@/components/section";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Junior Software Engineer",
    company: "Rocktop.io",
    period: "SUMMER 2025 – Present",
    description:
      "My team is primarily focused on developing AI-based doc intelligence microservices at scale. My work ranges from scaling LLM API calls to making embeddings based classification services. My time at Rocktop has been spent developing and maintaining the core GenAI microservices as well as building two full stack products leveraging the GenAI ecosystem.",

    tags: ["FastAPI", "ASP.NET", "Vector Search", "Azure Service Bus", "Angular", "C#", "Python"],
  },
  {
    role: "Software Engineering Intern",
    company: "Rocktop.io",
    period: "Summer 2025",
    description:
      "Application development with a focus on generative-AI tooling. Built a VSCode extension, a standalone CLI, and an Azure DevOps extension that integrated an Angular front-end with C# and Python back-end services.",
    tags: [
      "VsCode Extension",
      "Azure CLI Extension",
      "Angular",
      "C#",
      "Python",
    ],
  },
  {
    role: "Software Engineer",
    company: "Viscosity NA",
    period: "SUMMER 2022",
    description:
      "Worked on Incorta Cloud data pipelines and analytics integrations using SQL and Python.",
    tags: ["Incorta Cloud", "SQL", "Python"],
  },
];

export default function Experience({ id }: { id: string }) {
  return (
    <Section id={id}>
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked."
      />

      <ol className="relative space-y-12 border-l border-border pl-8 sm:space-y-14 sm:pl-10">
        {EXPERIENCE.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(0.5rem+2px)] top-2 inline-block size-2.5 rounded-full border-[3px] border-bg bg-accent sm:-left-[calc(0.625rem+2px)]"
            />
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
              {job.period}
            </p>
            <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
              {job.role}{" "}
              <span className="text-fg-muted">· {job.company}</span>
            </h3>
            <p className="mt-3 max-w-prose text-base text-fg-muted">
              {job.description}
            </p>
            {job.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <li key={tag}>
                    <Chip>{tag}</Chip>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
