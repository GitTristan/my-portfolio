import { education } from "../data/experience";
import Section, { Subheading, TagList } from "./Section";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="bg-surface border-hairline rounded-lg border p-6 sm:p-8">
        <p className="text-muted font-mono text-xs">
          {education.period}
          <span aria-hidden="true"> / </span>
          <span className="sr-only">, </span>
          {education.location}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">
          {education.degree}
        </h3>
        <p className="text-primary mt-1 font-semibold">{education.school}</p>
        <p className="text-muted mt-4">{education.note}</p>

        <Subheading className="mt-8 mb-4">Areas of Study</Subheading>
        <TagList label="Areas of study" tags={education.areasOfStudy} />
      </div>
    </Section>
  );
}
