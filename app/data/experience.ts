export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const roles: Role[] = [
  {
    company: "Parrish Design",
    title: "Founder & Full-Stack Web Developer",
    period: "September 2022 – Present",
    location: "Remote",
    summary:
      "Design, develop, and deploy production websites and full-stack web applications for businesses, owning projects from architecture and development through deployment and ongoing maintenance.",
    bullets: [
      "Build modern applications using React, Next.js, JavaScript, TypeScript, Supabase, Payload CMS, Sanity CMS, Cloudflare, and Cloudflare Workers.",
      "Integrate third-party APIs and cloud services based on application requirements.",
      "Develop SaaS and e-commerce functionality incorporating Stripe and PayPal payment processing.",
      "Implement database, authentication, CMS, API, and serverless functionality.",
      "Use AI-assisted development workflows to accelerate implementation and debugging while independently reviewing, testing, and validating production functionality.",
      "Manage production deployments, DNS, application configuration, third-party integrations, troubleshooting, and performance optimization.",
      "Develop projects ranging from high-performance business websites to complex SaaS web applications.",
      "Work with consulting firms, e-commerce brands, and service businesses across the United States.",
    ],
  },
  {
    company: "KnowBe4",
    title: "Core Support Technician",
    period: "July 2024 – April 2026",
    location: "Clearwater, Florida",
    summary:
      "Diagnosed and resolved enterprise integration and technical issues across identity, directory, email, and cloud environments.",
    bullets: [
      "Worked extensively with Microsoft Entra ID, Active Directory, Google Workspace, and other enterprise environments.",
      "Investigated on-premises Active Directory integration failures involving LDAP connectivity, ports, SSL configuration, permissions, and authentication-related issues.",
      "Debugged LDAP and LDAPS integrations.",
      "Diagnosed configuration, connectivity, synchronization, and permissions issues.",
      "Investigated email delivery and mail server configuration problems.",
      "Resolved allowlisting, filtering, and email delivery issues across customer environments.",
      "Analyzed system configurations, reproduced technical issues, isolated root causes, and documented solutions.",
      "Ranked #1 in ticket resolutions for two consecutive months.",
      "Received more than 200 positive customer satisfaction reviews.",
      "Maintained a 100% positive customer satisfaction rating throughout 2025 and 2026 up to my departure.",
    ],
  },
  {
    company: "Camandras",
    title: "Smart Home Technician",
    period: "February 2021 – July 2024",
    location: "Tampa, Florida",
    summary:
      "Installed, configured, automated, and supported network-connected smart home systems across short-term rental properties.",
    bullets: [
      "Installed and configured smart home technology.",
      "Diagnosed hardware, connectivity, configuration, and integration issues.",
      "Implemented conditional automation workflows and if-then based smart events.",
      "Created technical documentation and usage guides for installed systems.",
    ],
  },
];

export const education = {
  school: "St. Petersburg College",
  degree: "Bachelor's Degree in Cybersecurity",
  period: "January 2021 – December 2025",
  location: "St. Petersburg, Florida",
  note: "Member of the TitanSec Cybersecurity Club.",
  areasOfStudy: [
    "Cybersecurity",
    "Networking",
    "Security Assessment",
    "Security Auditing",
  ],
};
