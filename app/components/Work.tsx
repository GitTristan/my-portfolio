import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { projects } from "../data/projects";
import { builds } from "../data/work";
import Section, { CellGrid, Subheading, TagList } from "./Section";

export default function Work() {
  return (
    <Section id="work" index="03" title="Work">
      <Subheading className="mb-6">What I&apos;ve Built</Subheading>
      <CellGrid items={builds} />

      <Subheading className="mt-16 mb-6">Selected Work</Subheading>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="group bg-surface border-hairline hover:border-primary relative rounded-lg border p-6 transition-colors sm:p-8"
          >
            <p className="text-primary font-mono text-xs">{project.category}</p>
            <h4 className="mt-2 text-xl font-semibold tracking-tight">
              {/* The empty span stretches the link over the whole card. */}
              <Link href={`/work/${project.slug}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {project.name}
              </Link>
            </h4>
            <p className="text-muted mt-3 text-pretty">{project.summary}</p>
            <div className="mt-6">
              <TagList label="Technologies" tags={project.technologies} />
            </div>
            <p
              aria-hidden="true"
              className="text-primary mt-6 inline-flex items-center gap-x-1 text-sm font-bold tracking-wider"
            >
              Read Case Study
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
