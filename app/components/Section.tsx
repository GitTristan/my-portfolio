type SectionProps = {
  /** Anchor target for the navbar links. */
  id: string;
  /** Two-digit position shown above the heading, e.g. "01". */
  index: string;
  title: string;
  children: React.ReactNode;
};

/**
 * Shared frame for every section below the hero: the numbered heading sits in
 * a narrow left column and stays pinned while the content column scrolls.
 */
export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-hairline border-t"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p
              aria-hidden="true"
              className="text-primary font-mono text-sm tracking-widest"
            >
              {index}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              {title}
            </h2>
          </div>
        </header>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}

/** Small mono label that introduces a block inside a section. */
export function Subheading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-muted font-mono text-xs tracking-widest uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

/** Hairline-divided grid of short name and description pairs. */
export function CellGrid({
  items,
}: {
  items: { name: string; description: string }[];
}) {
  return (
    <ul className="bg-hairline border-hairline grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.name} className="bg-background p-6">
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-muted mt-2 text-sm/6 text-pretty">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Dash-marked list for runs of full sentences. */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="text-muted space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-x-3 text-pretty">
          <span
            aria-hidden="true"
            className="bg-hairline-strong mt-3 h-px w-3 flex-none"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Wrapping row of mono tags, used for technologies and skills. */
export function TagList({ label, tags }: { label: string; tags: string[] }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-hairline rounded px-2.5 py-1 font-mono text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
