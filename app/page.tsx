import type { Metadata } from "next";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { education } from "./data/experience";
import { profile } from "./data/profile";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.description,
  url: profile.url,
  email: `mailto:${profile.email}`,
  // Where Tristan lives today. profile.location already advertises the move
  // to Nashville; change this once the move has actually happened.
  address: {
    "@type": "PostalAddress",
    addressLocality: "St. Petersburg",
    addressRegion: "FL",
    addressCountry: "US",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  sameAs: [profile.linkedin],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
