import { skillGroups } from "../data/skills";
import Section, { TagList } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Technical Skills">
      <dl className="divide-hairline border-hairline divide-y border-y">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-4 py-7 sm:grid-cols-3">
            <dt className="font-semibold">{group.name}</dt>
            <dd className="sm:col-span-2">
              <TagList label={group.name} tags={group.skills} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
