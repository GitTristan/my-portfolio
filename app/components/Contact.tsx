import { ArrowUpRightIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { profile } from "../data/profile";
import { LinkedInIcon } from "./icons";
import Section from "./Section";

// Drops the scheme, "www.", and trailing slash so a profile link reads as a
// handle: "https://www.linkedin.com/in/name/" becomes "linkedin.com/in/name".
function displayUrl(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

const rowClass =
  "flex flex-col gap-y-1.5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-x-6";
const valueClass =
  "min-w-0 pl-8 font-semibold break-words sm:pl-0 sm:text-right";

export default function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <p className="text-xl/8 text-pretty">{profile.contactIntro}</p>

      <a
        href={`mailto:${profile.email}`}
        className="decoration-primary hover:text-primary mt-10 inline-block text-3xl font-semibold tracking-tight break-words underline decoration-2 underline-offset-8 transition-colors sm:text-5xl"
      >
        {profile.email}
      </a>

      <dl className="divide-hairline border-hairline mt-14 divide-y border-y">
        {/* Rows stack on phones, where a label and a full profile URL do not
            fit side by side. The value indents to line up with the label. */}
        <div className={rowClass}>
          <dt className="text-muted flex items-center gap-x-3 text-sm">
            <MapPinIcon aria-hidden="true" className="size-5 flex-none" />
            Location
          </dt>
          <dd className={valueClass}>{profile.location}</dd>
        </div>
        <div className={rowClass}>
          <dt className="text-muted flex items-center gap-x-3 text-sm">
            <LinkedInIcon aria-hidden="true" className="size-5 flex-none" />
            LinkedIn
          </dt>
          <dd className={valueClass}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary group inline-flex items-center gap-x-1 transition-colors"
            >
              {displayUrl(profile.linkedin)}
              <ArrowUpRightIcon
                aria-hidden="true"
                className="text-muted group-hover:text-primary size-4 flex-none transition-colors"
              />
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
