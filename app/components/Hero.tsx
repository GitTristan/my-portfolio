import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { highlights, profile } from "../data/profile";
import { LinkedInIcon } from "./icons";
import SectionLink from "./SectionLink";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-backdrop absolute inset-0 -z-10"
      />
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8 lg:pt-44 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              {profile.name}
            </h1>
            <p className="text-primary mt-5 font-mono text-sm sm:text-base">
              {profile.title}
            </p>
            <p className="text-muted mt-6 max-w-2xl text-lg text-pretty sm:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <SectionLink
                href="/#contact"
                className="bg-primary text-on-primary hover:bg-primary-hover rounded px-6 py-3 text-sm font-bold tracking-wider transition-colors"
              >
                Get in Touch
              </SectionLink>
              <SectionLink
                href="/#work"
                className="border-hairline-strong bg-background hover:border-primary hover:text-primary rounded border px-6 py-3 text-sm font-bold tracking-wider transition-colors"
              >
                View Work
              </SectionLink>
            </div>

            <ul className="text-muted mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li className="flex items-center gap-x-2">
                <MapPinIcon aria-hidden="true" className="size-4 flex-none" />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary flex items-center gap-x-2 transition-colors"
                >
                  <LinkedInIcon
                    aria-hidden="true"
                    className="size-4 flex-none"
                  />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Sits above the text as a small portrait on phones and tablets,
              and fills the right column on desktop. The offset outline behind
              it is decorative. */}
          <div className="order-first lg:order-last lg:col-span-5">
            {/* The right margin on desktop leaves room for the offset outline,
                so its edge lines up with the stats bar below. */}
            <div className="relative w-32 sm:w-40 lg:mr-4 lg:ml-auto lg:w-auto lg:max-w-96">
              <div
                aria-hidden="true"
                className="border-primary/50 absolute inset-0 translate-x-2 translate-y-2 rounded-lg border lg:translate-x-4 lg:translate-y-4"
              />
              <Image
                src="/portrait.webp"
                alt={`Portrait of ${profile.name}`}
                width={1000}
                height={1250}
                preload
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 160px, 128px"
                className="border-hairline relative h-auto w-full rounded-lg border"
              />
            </div>
          </div>
        </div>

        <dl className="bg-hairline border-hairline mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border lg:mt-20 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.value}
              className="bg-background flex flex-col-reverse justify-end gap-y-2 p-5 sm:p-6"
            >
              <dt className="text-muted text-sm/6 text-pretty">{item.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
