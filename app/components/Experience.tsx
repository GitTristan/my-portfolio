import { roles } from "../data/experience";
import Section, { BulletList } from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      {/* The rule down the left edge is drawn once on the list so it runs
          unbroken between roles; each role adds its own marker on top. */}
      <ol className="before:bg-hairline relative space-y-16 before:absolute before:inset-y-2 before:left-1 before:w-px">
        {roles.map((role) => (
          <li key={role.company} className="relative pl-8">
            <span
              aria-hidden="true"
              className="border-primary bg-background absolute top-1 left-0 size-2.25 rounded-full border-2"
            />
            <p className="text-muted font-mono text-xs">
              {role.period}
              <span aria-hidden="true"> / </span>
              <span className="sr-only">, </span>
              {role.location}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">
              {role.title}
            </h3>
            <p className="text-primary mt-1 font-semibold">{role.company}</p>
            <p className="mt-4 text-lg/8 text-pretty">{role.summary}</p>
            <div className="mt-5">
              <BulletList items={role.bullets} />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
