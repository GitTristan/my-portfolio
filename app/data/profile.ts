export const profile = {
  name: "Tristan Parrish",
  initials: "TP",
  title: "Full-Stack Developer",
  tagline: "Building reliable, maintainable web applications.",
  email: "tristan@parrish.work",
  // Canonical host for metadata and social previews. NEXT_PUBLIC_SITE_URL
  // overrides it, which is only useful for testing previews on another host.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://parrish.work",
  linkedin: "https://www.linkedin.com/in/tristan-parrish",
  // The PDF in /public that the hero's download button serves. To update the
  // resume, replace that file and keep the name.
  resume: "/Tristan_Parrish_Resume.pdf",
  description:
    "Full-stack developer building web applications with TypeScript, React, Next.js, and PostgreSQL.",
  about: [
    "I'm a full-stack developer who builds web applications with TypeScript, React, Next.js, and PostgreSQL. I also have a Bachelor's degree in Cybersecurity and professional experience with enterprise systems and integrations.",
    "I currently run Parrish Design, where I design, develop, and deploy custom websites and full-stack web applications for businesses. My work ranges from high-performance business websites to complex SaaS applications incorporating authentication, databases, payment processing, content management systems, APIs, and serverless infrastructure. One of those, PermitFalcon, collects public permit data from county sources on a schedule and makes it searchable, with Postgres row level security separating each organization's data.",
    "Previously, I worked at KnowBe4, where I gained hands-on experience troubleshooting enterprise environments including Microsoft Entra ID, Active Directory, Google Workspace, LDAP/LDAPS, SSL/TLS, permissions, and email infrastructure.",
    "I enjoy solving complex technical problems and building software that people can depend on.",
  ],
  // Closes the About section, so the kind of role being sought is stated
  // near the top of the page and not only in Contact at the bottom.
  seeking: "I'm open to full-time roles in software engineering.",
  contactIntro:
    "I'm open to software engineering opportunities, especially full-stack web development.",
};

export const highlights = [
  {
    value: "4+ years",
    label: "Building websites, applications, and tools for businesses",
  },
  {
    value: "Full-stack",
    label: "React, Next.js, TypeScript, PostgreSQL, and Cloudflare",
  },
  {
    value: "CI/CD",
    label: "Automated testing and monitoring with Vitest, Sentry, and GitHub Actions",
  },
  {
    value: "Bachelor's",
    label: "Degree in Cybersecurity",
  },
];

export const focusAreas = [
  {
    name: "Application Development",
    description:
      "Building reliable, maintainable web applications with TypeScript, React, Next.js, and PostgreSQL, backed by automated tests and monitoring.",
  },
  {
    name: "APIs & Integrations",
    description:
      "Connecting applications to third-party APIs, payment providers, content management systems, and external data sources.",
  },
  {
    name: "Cloud & Infrastructure",
    description:
      "Working with cloud and edge platforms, serverless applications, DNS, APIs, application configuration, and production deployments.",
  },
  {
    name: "Secure Development",
    description:
      "Applying a cybersecurity background to authentication, authorization, and how applications handle user data.",
  },
];
