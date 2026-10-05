# Tristan Parrish Portfolio

Source for [parrish.work](https://parrish.work), my personal portfolio. It covers my background in full-stack development, application security, and identity and access management, with case studies of projects I've built.

## Pages

- **Home** (`/`): a hero followed by About, Experience, Work, Technical Skills, Education, and Contact sections, all on one page with section links in the navbar.
- **Case studies** (`/work/[slug]`): one page per featured project, generated from data.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Headless UI and Heroicons

Every page is statically prerendered. There is no backend: no database and no API routes.

## Notable details

- **Theming.** The site follows the system color scheme by default, and a Light/Dark switch overrides it. An inline script sets the theme before first paint, so the page never flashes in the wrong one. Colors are defined once as CSS custom properties in `app/globals.css`.
- **Content as data.** All copy lives in typed modules under `app/data`, so text changes never touch the components that render it.
- **Case studies from data.** Adding a project means adding one entry to `app/data/projects.ts`. Its page, route, and metadata are generated from that entry.
- **SEO.** Each page sets its own title, description, and canonical URL. The home page publishes Person structured data, and the favicon and social preview image are generated with `next/og`.
- **Accessibility.** Navigation works from the keyboard, the mobile menu traps focus, focus rings are visible, and smooth scrolling is turned off for visitors who prefer reduced motion.

## Project structure

```
app/
  components/           UI components: navbar, hero, page sections, theme switch
  data/                 Site copy and project data
  lib/theme.ts          Theme helpers and the pre-paint script
  work/[slug]/          Case study page
  layout.tsx            Root layout, fonts, and site-wide metadata
  page.tsx              Home page
  globals.css           Design tokens and base styles
  icon.tsx              Generated favicon
  opengraph-image.tsx   Generated social preview image
public/
  portrait.webp
  projects/             Case study images, one folder per project
```

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Editing content

| To change                                                   | Edit                     |
| ----------------------------------------------------------- | ------------------------ |
| Name, title, tagline, location, About text, hero highlights | `app/data/profile.ts`    |
| Work history and education                                  | `app/data/experience.ts` |
| Technical skills                                            | `app/data/skills.ts`     |
| "What I've Built" entries                                   | `app/data/work.ts`       |
| Case studies                                                | `app/data/projects.ts`   |

### Adding a case study image

1. Put the file in `public/projects/<project-slug>/`.
2. Set `src` on the matching figure in `app/data/projects.ts`.

A figure without a `src` renders as a labelled placeholder, so a page can be written before its screenshots exist. For a device mockup with a transparent background, also set `contain: true` so it is shown whole instead of being cropped to fill the frame.

## Configuration

| Variable               | Required | Purpose                                                                                      |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Origin used for canonical URLs and social preview links. Defaults to `https://parrish.work`. |

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
