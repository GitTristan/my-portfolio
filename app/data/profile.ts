export const profile = {
  name: "Tristan Parrish",
  initials: "TP",
  title: "Full-Stack Developer & Cybersecurity Professional",
  tagline: "Building, securing, and managing reliable web applications.",
  // Shown in the hero, the Contact section, and the social preview image.
  location: "Relocating to Nashville, Tennessee",
  email: "tristan@parrish.work",
  // Canonical host for metadata and social previews. NEXT_PUBLIC_SITE_URL
  // overrides it, which is only useful for testing previews on another host.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://parrish.work",
  linkedin: "https://www.linkedin.com/in/tristan-parrish",
  // The PDF in /public that the hero's download button serves. To update the
  // resume, replace that file and keep the name.
  resume: "/Tristan_Parrish_Resume.pdf",
  description:
    "Full-stack developer and cybersecurity professional relocating to Nashville, Tennessee. Web applications, identity and access management, and application security.",
  about: [
    "I'm a full-stack developer with a Bachelor's degree in Cybersecurity and professional experience spanning web application development, enterprise identity environments, technical troubleshooting, and systems integration.",
    "I currently run Parrish Design, where I design, develop, and deploy custom websites and full-stack web applications for businesses. My work ranges from high-performance business websites to complex SaaS applications incorporating authentication, databases, payment processing, content management systems, APIs, and serverless infrastructure.",
    "Previously, I worked at KnowBe4, where I gained hands-on experience troubleshooting enterprise environments including Microsoft Entra ID, Active Directory, Google Workspace, LDAP/LDAPS, SSL/TLS, permissions, and email infrastructure.",
    "I enjoy solving complex technical problems, building reliable applications, and working at the intersection of software engineering and cybersecurity.",
  ],
  // Closes the About section, so the kind of role being sought is stated
  // near the top of the page and not only in Contact at the bottom.
  seeking:
    "I'm looking for a full-time role in application security, security engineering, identity and access management, or software engineering.",
  contactIntro:
    "I'm interested in technical opportunities involving application security, security engineering, identity and access management, and software engineering.",
};

export const highlights = [
  {
    value: "4+ years",
    label: "Designing and building websites for businesses",
  },
  {
    value: "Bachelor's",
    label: "Degree in Cybersecurity",
  },
  {
    value: "Full-stack",
    label: "React, Next.js, TypeScript, Supabase, and Cloudflare",
  },
  {
    value: "IAM",
    label: "Microsoft Entra ID, Active Directory, and LDAP/LDAPS",
  },
];

export const focusAreas = [
  {
    name: "Application Development",
    description:
      "Building reliable, maintainable web applications using modern JavaScript and TypeScript technologies.",
  },
  {
    name: "Application Security",
    description:
      "Applying a cybersecurity background to the design, development, deployment, and evaluation of modern web applications.",
  },
  {
    name: "Identity & Access Management",
    description:
      "Experience with Microsoft Entra ID, Active Directory, LDAP/LDAPS, permissions, authentication, and enterprise identity environments.",
  },
  {
    name: "Cloud & Infrastructure",
    description:
      "Working with cloud and edge platforms, serverless applications, DNS, APIs, application configuration, and production deployments.",
  },
];
