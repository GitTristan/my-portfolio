import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import Figure from "../../components/Figure";
import Section, { BulletList, TagList } from "../../components/Section";
import { getProject, projects } from "../../data/projects";

// Only the projects listed in app/data/projects.ts have a page; any other
// slug is a 404 instead of being rendered on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} Case Study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

// "Automated Ingestion" becomes "automated-ingestion", for the section anchor.
function toAnchor(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Wraps around, so the last case study leads back to the first.
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="flex-1">
      <header className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-backdrop absolute inset-0 -z-10"
        />
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <Link
            href="/#work"
            className="text-muted hover:text-primary group inline-flex items-center gap-x-1.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeftIcon
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-x-0.5"
            />
            All Work
          </Link>

          <p className="text-primary mt-10 font-mono text-sm">
            {project.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {project.name}
          </h1>
          <p className="text-muted mt-6 max-w-3xl text-lg text-pretty sm:text-xl">
            {project.summary}
          </p>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-hairline-strong bg-background hover:border-primary hover:text-primary group mt-8 inline-flex items-center gap-x-1.5 rounded border px-5 py-2.5 text-sm font-bold tracking-wider transition-colors"
            >
              Visit Site
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}

          <div className="mt-10">
            <TagList label="Technologies" tags={project.technologies} />
          </div>

          {project.cover && (
            <div className="mt-12 lg:mt-16">
              <Figure
                figure={project.cover}
                sizes="(min-width: 1152px) 1088px, 100vw"
                preload
              />
            </div>
          )}
        </div>
      </header>

      {project.sections.map((section, index) => (
        <Section
          key={section.title}
          id={toAnchor(section.title)}
          index={String(index + 1).padStart(2, "0")}
          title={section.title}
        >
          <div className="space-y-5 text-lg/8 text-pretty">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets && (
            <div className="mt-8">
              <BulletList items={section.bullets} />
            </div>
          )}
          {section.href && (
            <a
              href={section.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover group mt-6 inline-flex items-center gap-x-1 text-sm font-bold tracking-wider transition-colors"
            >
              Visit Site
              <span className="sr-only">: {section.title}</span>
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
          {section.figures && (
            <div className="mt-10 space-y-6">
              {section.figures.map((figure) => (
                <Figure
                  key={figure.description}
                  figure={figure}
                  sizes="(min-width: 1152px) 710px, 100vw"
                />
              ))}
            </div>
          )}
        </Section>
      ))}

      <nav aria-label="More work" className="border-hairline border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link
            href="/#work"
            className="text-muted hover:text-primary group inline-flex items-center gap-x-1.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeftIcon
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-x-0.5"
            />
            All Work
          </Link>
          <Link href={`/work/${next.slug}`} className="group sm:text-right">
            <span className="text-muted block font-mono text-xs tracking-widest uppercase">
              Next Case Study
            </span>
            <span className="group-hover:text-primary mt-2 inline-flex items-center gap-x-2 text-2xl font-semibold tracking-tight transition-colors">
              {next.name}
              <ArrowRightIcon
                aria-hidden="true"
                className="size-5 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
