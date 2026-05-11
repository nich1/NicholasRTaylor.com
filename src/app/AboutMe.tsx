import Link from "next/link";
import { Chip } from "@/components/chip";
import { Section, SectionHeading } from "@/components/section";

const TECH_GROUPS: { heading: string; items: string[] }[] = [
  {
    heading: "Frameworks & libraries",
    items: ["Pydantic", "FastAPI", "SqlAlchemy", "Alembic","React", "Angular", "Next.js", "Tailwind CSS", "Flutter", "Gin"],
  },
  {
    heading: "Cloud Services",
    items: [
      "Azure Blob Storage",
      "Azure Service Bus",
      "AWS Lambda",
      "AWS S3",
      "AWS RDS",
      "AWS Route 53", 
    ],
  },
  {
    heading: "Tools & platforms",
    items: ["Azure", "ADO", "AWS", "GitHub", "Docker", "Git"],
  },
];

export default function AboutMe() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A quick introduction."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)] lg:gap-16">
        <div className="max-w-prose space-y-4 text-base text-fg-muted sm:text-lg">
          <p>
            I started learning Java when I was 11 years old because I wanted
            to make Minecraft mods. I loved overcoming
            the challenges of programming and the feeling of creating something of
            my own. Throughout the rest of grade school I learned Python and C#, the 
            two languages I use professionally today. 
          </p>
          <p>
          I am a first year Software Engineer who&apos;s had the pleasure of helping develop several backend servers, microservices, and full stack applications.

          </p>
          <p>
            Outside of work I manage a handful of side projects and write about what I&apos;m learning in{" "}
            <Link
              href="/blog"
              className="font-medium text-fg underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            >
              my blog
            </Link>
            .
          </p>
        </div>

        <div className="space-y-8">
          {TECH_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                {group.heading}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
