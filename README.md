
# Wissem Attouf — Portfolio

Bilingual (English / French) portfolio built with **Next.js (App Router)**, **TypeScript (strict)**,
**Tailwind CSS**, **Framer Motion** and **Lucide** icons. Ready to deploy on **Vercel**.

- Routes: `/en`, `/fr`, `/en/projects/<slug>`, `/fr/projects/<slug>` (`/` redirects to `/en`)
- Static generation for every page, sitemap, robots, Open Graph and hreflang metadata
- Accessible navigation (skip link, keyboard-friendly mobile menu, focus management), reduced-motion support

> **Status:** this repository was generated in an environment without access to the npm registry, so
> `npm install`, `npm run lint`, `npm run typecheck`, `npm run build` and Lighthouse have **not** been run yet.
> Run `npm run check` once after installing; fix anything it reports before deploying.
>
> What *was* verified before delivery (offline): every source file parses; the data, i18n and lib layers pass
> `tsc --strict` (English and French dictionaries are forced to stay identical in shape); and all pages
> (`/en`, `/fr`, both case studies in both languages, the localized 404, sitemap, robots, metadata) were
> server-rendered with stubbed Next/Framer/Lucide modules and checked for structure, links, translations and
> missing data. What was **not** verified: real Tailwind styling / visual layout in a browser, `next lint`,
> `next build`, responsive behaviour, and Lighthouse scores.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev          # http://localhost:3000  (redirects to /en)
```

| Command             | What it does                              |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Development server                        |
| `npm run lint`      | ESLint (Next.js core-web-vitals + TS)     |
| `npm run typecheck` | `tsc --noEmit` with strict mode           |
| `npm run build`     | Production build                          |
| `npm run start`     | Serve the production build                |
| `npm run check`     | lint + typecheck + build in one go        |

## Environment variables

See `.env.example`. Only one optional variable exists, and it is public:

| Variable               | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for sitemap / Open Graph. Leave empty on Vercel (the production domain is detected). Set it for a custom domain. |

There is no contact form and no secret: the contact section uses a real `mailto:` link, LinkedIn and GitHub.

## Project structure

```
app/
  [locale]/            layout, home page, case-study page, localized 404
  sitemap.ts robots.ts icon.svg globals.css
components/
  layout/              Navbar, LanguageSwitcher, Footer, SkipLink
  sections/            Hero, About, Projects, Experience, Education, Skills, Contact
  projects/            ProjectCard, ProjectsExplorer (filters), ProjectVisual, CaseStudy
  ui/                  ButtonLink, SectionHeading, Reveal, MotionProvider, CopyEmailButton, Icons
data/
  site.ts              identity, links, section order
  projects.ts          project data + localization helpers  <- add projects here
  experience.ts education.ts skills.ts
  i18n/                en.ts, fr.ts, types.ts (the compiler forces both languages to stay in sync)
lib/                   locale helpers, metadata, formatting, CV detection
public/
  images/              portrait, Open Graph image, projects/
  cv/                  put the CV PDFs here
```

## Content rules (nothing is invented)

Only facts supplied by Wissem are shown. Optional fields are hidden when empty.

### Add or update a project

Edit `data/projects.ts`. A new entry automatically gets a card, a case-study page, a sitemap entry and both languages.

```ts
{
  slug: 'my-project',
  category: 'backend',               // 'mobile' | 'web' | 'backend' (a filter appears automatically)
  featured: false,
  title: 'My Project',
  tech: ['Node.js', 'Express.js'],
  summary: { en: '...', fr: '...' },
  image: { src: '/images/projects/my-project/cover.png', alt: { en: '...', fr: '...' } }, // real screenshot only
  demoUrl: 'https://...',            // only if a real demo exists -> "Live demo" button appears
  githubUrl: 'https://github.com/...', // only if a real repo exists -> "GitHub" button appears
  overview: { en: ['...'], fr: ['...'] },
  objectives: { en: ['...'], fr: ['...'] },
  features: [{ status: 'implemented', label: { en: '...', fr: '...' } }], // implemented | inProgress | planned
  // optional: problem, workflow, roles, architecture, implementation, challenges, lessons, contributions, screenshots
}
```

Without an `image`, cards show a neutral decorative frame (never a fake screenshot). Put real screenshots in
`public/images/projects/<slug>/` and reference them as above.

### Case studies still to enrich

Neivos Facture and the Camping Management Platform currently show only verified information. To make their
pages richer, add (when true): your role, architecture / backend, AI provider, challenges and decisions,
lessons learned, screenshots, repository and demo URLs, and the real implementation status of each feature.

### CV buttons

Drop `Wissem-Attouf-CV-EN.pdf` and/or `Wissem-Attouf-CV-FR.pdf` into `public/cv/`. The buttons appear automatically.

### Availability badge

Not included on purpose. Add it only once you confirm the wording.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repository. The framework preset (Next.js) is detected;
   keep the default build command (`next build`) and output.
3. (Optional) Add `NEXT_PUBLIC_SITE_URL` if you use a custom domain.
4. Deploy, then open `/en` and `/fr`, test the language switcher, the case studies, `/sitemap.xml` and `/robots.txt`.
5. Run Lighthouse on the deployed URL and record real scores.

Deployment has not been performed from this repository.
=======
# Hi, I'm Wissem Attouf 👋

### Software Engineer | Full Stack Developer

I'm a software engineer based in **Tunis, Tunisia**, focused on building reliable mobile and backend applications.

I enjoy designing clean APIs, developing mobile experiences with Flutter, and building maintainable software backed by structured databases.

- 📍 Based in Tunis, Tunisia
- 📱 Mobile development with Flutter and Dart
- ⚙️ Backend development with Node.js and Express.js
- 🗄️ Database design with MySQL
- 🧪 Software quality, API documentation, testing, Docker and CI/CD

## 🌐 Connect with me

- **Portfolio:** https://wissem-portfolio.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/wissem-attouf-452509226/
- **GitHub:** https://github.com/WissemAttouf
- **Email:** wattouf35@gmail.com

## 🛠️ Technical Skills

**Mobile Development**
- Flutter
- Dart

**Backend Development**
- Node.js
- Express.js
- REST APIs

**Database**
- MySQL

**Software Quality & Tools**
- Swagger
- Docker
- CI/CD
- Unit Testing

## 🚀 Featured Projects

### Neivos Facture
A mobile invoicing application designed to scan invoices, extract financial information using AI, review extracted data, and support PDF and Excel reporting.

**Technologies:** Flutter, Dart

[View my portfolio](https://wissem-portfolio.vercel.app/)

### Camping Management Platform
A web application focused on camping management, user roles, and reservation organization.

**Technologies:** PHP, Laravel, MySQL, JavaScript, Bootstrap

[View my portfolio](https://wissem-portfolio.vercel.app/)

## 💼 Professional Experience

**Neivos Groupe** — September 2025 to June 2026  
Mobile and backend development using Flutter, Dart, Node.js, Express.js, REST APIs and MySQL.

**HexaByte** — June 2025 to August 2025  
Technical and commercial responsibilities.

**Enda Tamweel** — April 2023 to November 2024  
Credit Agent.

## 🎓 Education

**National Engineering Degree in Computer Science**  
Software Engineering and Information Systems — iTeam University, July 2026.

**National Bachelor's Degree in Computer Science**  
ISI Kef, 2019–2022.

---

*Interested in software engineering, mobile development, backend systems, and building useful digital products.*
>>>>>>> 98a25de39ee39d3d7bfc572ceb51a0226ad6c461
