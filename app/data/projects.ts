export type Figure = {
  /** What the image shows. Used as the placeholder label and as alt text. */
  description: string;
  /**
   * Path under /public, e.g. "/projects/permitfalcon/dashboard.jpg". Until it is
   * set, a labelled placeholder is rendered in the image's place.
   */
  src?: string;
  /**
   * Show the whole image, unframed, instead of cropping it to fill the frame.
   * For device mockups with transparent backgrounds.
   */
  contain?: boolean;
};

export type CaseStudySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Shown in order, stacked under the section's text. */
  figures?: Figure[];
  /** Public URL for this section's subject, shown as a "Visit Site" link. */
  href?: string;
};

export type Project = {
  /** URL segment: the case study lives at /work/<slug>. */
  slug: string;
  name: string;
  category: string;
  /** Shown on the home page card and as the case study's opening line. */
  summary: string;
  technologies: string[];
  /** Public URL, linked from the case study when there is one. */
  href?: string;
  /** Large image under the page header. Left out when each section has its own. */
  cover?: Figure;
  sections: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "permitfalcon",
    name: "PermitFalcon",
    category: "Full-Stack SaaS Platform",
    summary:
      "A B2B platform that turns municipal building permit data into sales opportunities for contractors, tradespeople, and building material suppliers.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe API",
      "Cloudflare Workers",
      "Turborepo",
      "Resend",
      "Sentry",
      "Zod",
      "Vitest",
      "GitHub Actions",
    ],
    cover: {
      description:
        "PermitFalcon permit list with one permit's details open in the side panel",
      src: "/projects/permitfalcon/dashboard.jpg",
    },
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "A newly filed building permit is an early signal that a property owner is about to start a project, which makes it valuable to anyone who wants to bid on the work. The data is public but hard to use: every county publishes it through its own portal, in its own format, on its own schedule.",
          "PermitFalcon collects those filings into a single catalog. Teams search and filter permits, open any record to see the property and the people and companies attached to it, and organize what they find with shared lists, color-coded tags, and notes.",
        ],
      },
      {
        title: "Automated Ingestion",
        paragraphs: [
          "Permit data reaches the catalog without anyone touching it. A Cloudflare Worker wakes on a schedule, asks the database which sources are due, and starts a durable Workflow for each one. Only the first step knows anything about a particular county. Once the file exists, every source follows the same path through storage, deduplication, parsing, and import.",
        ],
        bullets: [
          "Connectors handle the formats counties actually publish in: session-based report exports, permitting portal searches, and public GIS feature layers, merged into one file per run.",
          "Each file is hashed before it is stored, so an export that has not changed is recognized and skipped.",
          "Imports read the stored file in byte ranges and upsert on stable identity keys, so a run can resume where it stopped and importing the same data twice never creates duplicates.",
          "Scheduling lives in Postgres, not in the Worker. Each source carries its own interval, sources are claimed with a lease, and a failed fetch is retried on a later tick.",
          "A daily check opens each source's live page and verifies that the form controls its connector depends on are still there, sending an alert when they are not.",
        ],
        figures: [
          {
            description:
              "Staff automation page showing ingestion health and recent fetch activity for each county source",
            src: "/projects/permitfalcon/automation.jpg",
          },
        ],
      },
      {
        title: "The Permit Workspace",
        paragraphs: [
          "The catalog is too large to send to the browser, so the list sorts, filters, and pages in Postgres and the browser renders one page at a time. Sort order, filters, and the open permit all live in the URL, which keeps any view shareable and stable across a refresh.",
        ],
        bullets: [
          "Full-text search that finds a permit by its address, owner, or contractor as well as its own text, backed by a search index that database triggers keep current.",
          "County-specific permit types and statuses mapped onto one standard vocabulary, so a single filter works across every source.",
          "Shared lists, tags, and notes for each organization, with bulk actions across selected permits.",
        ],
        figures: [
          {
            description:
              "A saved list of permits with tags applied and the filter panel open",
            src: "/projects/permitfalcon/filtering.jpg",
          },
        ],
      },
      {
        title: "Security and Data Isolation",
        paragraphs: [
          "Access control is enforced by the database. Every member-facing query runs under the signed-in user's own session with Postgres row level security, so an organization can only read and write its own lists, tags, and notes, even if application code gets a query wrong.",
        ],
        bullets: [
          "The privileged service-role client is confined to imports and background jobs, in modules marked server-only so they cannot be bundled into client code.",
          "The ingestion Worker has no public URL. It runs only from its schedule, so the credentials it holds are not reachable from the internet.",
          "Server Actions check authorization themselves instead of relying on the page that renders them.",
          "Confidential contacts are left out of the search index, so a search cannot reveal a name that the permit page withholds.",
        ],
      },
      {
        title: "Engineering Practices",
        paragraphs: [
          "The project is a Turborepo monorepo: a marketing site, the application, the ingestion Worker, and shared packages for database access, email, and the import pipeline.",
        ],
        bullets: [
          "Schema changes ship as versioned SQL migrations, with TypeScript types generated from the database.",
          "The import and ingestion packages are covered by Vitest unit tests.",
          "GitHub Actions runs format, lint, and type checks plus a Worker bundle check on every pull request.",
          "Transactional email is built with React Email and sent through Resend.",
        ],
      },
    ],
  },
  {
    slug: "berryessa-tnt",
    name: "Berryessa TNT",
    category: "Full-Stack Web Application",
    summary:
      "A membership and tournament registration platform for a bass fishing tournament series on Lake Berryessa, California.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Stripe API",
      "Resend",
      "Sentry",
      "Cloudflare Turnstile",
      "Tailwind CSS",
    ],
    href: "https://www.berryessatnt.com/",
    cover: {
      description: "Berryessa TNT home page",
      src: "/projects/berryessa-tnt/homepage.jpg",
    },
    sections: [
      {
        title: "The Challenge",
        paragraphs: [
          "The organizers ran a yearly, two-series bass fishing tournament by hand, which made memberships, registrations, and event logistics slow to manage. They needed one platform where anglers could buy a membership and register for tournaments themselves, and where admins could manage users, oversee registrations, and handle logistics like the boat launch order.",
        ],
      },
      {
        title: "What I Built",
        paragraphs: [
          "I designed and built a full-stack web application with a member-facing site and an admin dashboard. Anglers create an account, purchase a membership, and register a team for each tournament, paying online through Stripe. Each member has a profile and a page listing the tournaments they have entered.",
        ],
        bullets: [
          "Event management: admins create and edit tournaments, upload event images, and set entry prices and membership requirements.",
          "Member management: a user list with controls for memberships and admin access.",
          "Blast off: a randomized boat launch order for each event, generated with a cryptographically fair shuffle.",
        ],
        figures: [
          {
            description:
              "Membership page explaining what a membership unlocks, with a purchase button",
            src: "/projects/berryessa-tnt/membership-page.jpg",
          },
          {
            description:
              "Tournament registration form with team name, partner, and team captain fields",
            src: "/projects/berryessa-tnt/tournament-register-page.jpg",
          },
        ],
      },
      {
        title: "Payments",
        paragraphs: [
          "Memberships and tournament entries are sold through Stripe Checkout. Entry prices are read from the database on the server when a session is created, never taken from the browser, and membership requirements are enforced before checkout begins.",
          "A webhook verifies each event's Stripe signature and then records the membership or registration in Supabase. The writes are upserts, so Stripe's automatic retries are safe to process more than once. If processing fails, the error is captured in Sentry and an alert email goes out.",
        ],
        figures: [
          {
            description: "Stripe Checkout page for a membership purchase",
            src: "/projects/berryessa-tnt/stripe-checkout.jpg",
          },
        ],
      },
      {
        title: "Accounts and Security",
        paragraphs: [
          "Authentication runs on Supabase with cookie-based sessions that are refreshed on the server. The sign-up, login, and password reset forms are protected with Cloudflare Turnstile, and admin API routes confirm the caller's session and admin role on the server before making any change.",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "The client went from managing everything manually to a purpose-built platform that handles the full tournament lifecycle. Administrative overhead dropped, and members have a self-service path from sign-up to tournament day.",
        ],
        figures: [
          {
            description:
              "Admin dashboard with user, event, registration, and member totals, quick actions, and upcoming tournaments",
            src: "/projects/berryessa-tnt/admin-dashboard.jpg",
          },
        ],
      },
    ],
  },
  {
    slug: "small-business-websites",
    name: "Small Business Websites",
    category: "Website Design and Development",
    summary:
      "Featured websites I've built for small businesses, including a dog daycare, a veterinary clinic, a consulting firm, a welder, a general contractor, and an industrial controls integrator.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Resend",
      "Cloudflare Turnstile",
      "Vercel",
    ],
    // One section per site, each with its own home page image and link, so
    // there is no single cover image or site link for the page as a whole.
    sections: [
      {
        title: "Your Pet Space",
        paragraphs: [
          "A cage-free dog daycare, boarding, grooming, and training facility in Las Cruces, New Mexico. I rebuilt its 12-year-old WordPress site around the space theme the business is known for, gave each service its own page, and redirected every old address so the domain kept its search history.",
          "Content is managed in Sanity CMS, so the owners update text, team members, gallery photos, and form fields themselves. Within four weeks of launch the site received more than 200 clicks from Google Search and ranked on page one for 15 local searches, according to Google Search Console.",
        ],
        href: "https://www.yourpetspace.com/",
        figures: [
          {
            description:
              "Your Pet Space home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/yourpetspace.png",
            contain: true,
          },
        ],
      },
      {
        title: "Automated Controls of Tampa",
        paragraphs: [
          "A Tampa systems integrator for PLC, HMI, and SCADA that has served food, water, and manufacturing plants since 2000. I rebuilt the site to present the company's services, industries, technologies, and past projects, with a page for each service.",
          "The contact form submits through a Server Action that verifies a Cloudflare Turnstile token before sending the message through Resend, then emails the visitor a confirmation. Addresses from the previous site redirect to their new pages.",
        ],
        href: "https://www.automatedcontrols.us/",
        figures: [
          {
            description:
              "Automated Controls of Tampa home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/automatedcontrols.png",
            contain: true,
          },
        ],
      },
      {
        title: "Peak Stride Advisors",
        paragraphs: [
          "A newly launched management consulting firm that needed a professional, fast-loading website to communicate expertise and trust. I designed and built a custom site with structured service sections, a contact form, and consultation scheduling.",
          "The site is built to grow with the firm, with room for additional services and pages.",
        ],
        href: "https://www.peakstrideadvisors.com/",
        figures: [
          {
            description:
              "Peak Stride Advisors home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/peakstride.png",
            contain: true,
          },
        ],
      },
      {
        title: "Warner Homes",
        paragraphs: [
          "A general contractor in southeastern Connecticut whose range of work, from new construction and remodeling to site work, concrete, and landscaping, was hard to present without overwhelming visitors. I rebuilt the site around a clear service menu, a four-step process section, and an FAQ covering pricing and timelines, with free estimate requests throughout.",
          'The local SEO foundation targets the towns the company serves. As of August 7, 2026, the site ranked first on Google for "Southeastern Connecticut General Contractor".',
        ],
        href: "https://www.warnerhomesct.com/",
        figures: [
          {
            description: "Warner Homes home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/warnerhomes.png",
            contain: true,
          },
        ],
      },
      {
        title: "Tampa Welding",
        paragraphs: [
          "A local welding business whose existing site was cluttered, hard to navigate, and nearly invisible in local search. I redesigned it with a cleaner layout, simplified messaging, a page for each service, and clear calls to action.",
          "Shortly after launch, the site began appearing on the first page of Google for local welding searches.",
        ],
        href: "https://www.welderintampa.com/",
        figures: [
          {
            description:
              "Tampa Welding home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/welder.png",
            contain: true,
          },
        ],
      },
      {
        title: "KindVet Sarasota",
        paragraphs: [
          "A veterinary urgent care clinic in Sarasota, Florida, whose outdated site was not clearly communicating its services, hours, or walk-in policy. I redesigned it around urgency and clarity, with visual service cards, prominent booking and call buttons, and walk-in hours front and center.",
          "Content is managed in Sanity CMS. The clinic has since been acquired by a different company, so the link below goes to a preserved copy of the site.",
        ],
        href: "https://client-kindvetsarasota.vercel.app/",
        figures: [
          {
            description:
              "KindVet Sarasota home page shown on a laptop and a phone",
            src: "/projects/small-business-websites/kindvet.png",
            contain: true,
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
