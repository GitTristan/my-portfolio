import { focusAreas, profile } from "../data/profile";
import Section, { CellGrid, Subheading } from "./Section";

export default function About() {
  const [lead, ...rest] = profile.about;

  return (
    <Section id="about" index="01" title="About">
      <div className="space-y-5 text-pretty">
        <p className="text-xl/8">{lead}</p>
        {rest.map((paragraph) => (
          <p key={paragraph} className="text-muted text-lg/8">
            {paragraph}
          </p>
        ))}
        <p className="text-lg/8">{profile.seeking}</p>
      </div>

      <Subheading className="mt-16 mb-6">Areas of Focus</Subheading>
      <CellGrid items={focusAreas} />
    </Section>
  );
}
