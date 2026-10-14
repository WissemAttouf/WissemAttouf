# Wissem Attouf — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Personal portfolio of Wissem Attouf, Software Engineer and Full Stack Developer based in Tunis, Tunisia.**

🌐 **Live website:** https://wissem-portfolio.vercel.app/  
💼 **LinkedIn:** https://www.linkedin.com/in/wissem-attouf-452509226/  
📧 **Email:** wattouf35@gmail.com

[English](#english) · [Français](#français)

---

## English

### Overview

A responsive, bilingual portfolio presenting my professional profile, technical skills, experience, and selected software projects. The site is built with Next.js and TypeScript, with dedicated French and English routes.

### Features

- **Bilingual content:** French and English pages.
- **Project case studies:** project summaries, technology stacks, features, workflows, and technical details where available.
- **Professional profile:** about section, skills, work experience, and education.
- **Contact links:** email, GitHub, and LinkedIn.
- **Responsive interface:** layouts designed for mobile, tablet, and desktop.
- **Motion and interaction:** subtle animations with Framer Motion.
- **SEO foundations:** localized metadata, canonical URLs, language alternates, Open Graph metadata, and sitemap/robots support.
- **Accessibility considerations:** semantic structure, keyboard focus styles, and reduced-motion support.

### Tech stack

| Technology | Purpose |
| --- | --- |
| Next.js 15 | React framework and application routing |
| React 19 | UI components |
| TypeScript | Static typing |
| Tailwind CSS | Styling and responsive layouts |
| Framer Motion | Interface animations |
| Lucide React | Icons |

### Featured projects

#### Neivos Facture

A mobile invoicing application concept focused on invoice scanning, AI-assisted extraction of financial data, user review, and PDF/Excel reporting.

**Technologies listed in the portfolio:** Flutter, Dart.

#### Camping Management Platform

A web application focused on campsite operations, reservations, user roles, and administration.

**Technologies listed in the portfolio:** PHP, Laravel, MySQL, JavaScript, Bootstrap.

> Project descriptions reflect the information currently documented in the portfolio. Public demo and source-code links should only be added when they are available and can be verified.

### Run locally

#### Requirements

- Node.js **20.9.0 or newer**
- npm

#### Installation

```bash
git clone https://github.com/WissemAttouf/WissemAttouf.git
cd WissemAttouf
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality checks

Run the configured checks before opening a pull request or deploying:

```bash
npm run lint
npm run typecheck
npm run build
```

Or run all three in sequence:

```bash
npm run check
```

These commands are provided for verification; their presence in this README does not imply that the checks have already passed in every environment.

### Deployment

The project can be deployed on [Vercel](https://vercel.com/) by importing this GitHub repository and using the standard Next.js build settings.

If you configure a custom production domain, set `NEXT_PUBLIC_SITE_URL` to the canonical site origin (for example, `https://your-domain.com`) in the Vercel environment variables, then redeploy. Ensure the value matches the public URL used by the site.

### Repository structure

```text
app/                 Next.js routes and layouts
components/          Reusable UI and page sections
data/                Site content, projects, experience, skills, translations
lib/                 Shared helpers, metadata, and locale utilities
public/              Static assets, images, and documents
```

### Contact

- **Portfolio:** https://wissem-portfolio.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/wissem-attouf-452509226/
- **GitHub:** https://github.com/WissemAttouf
- **Email:** wattouf35@gmail.com

---

## Français

### Présentation

Portfolio personnel bilingue présentant mon profil professionnel, mes compétences techniques, mon expérience et une sélection de projets logiciels. Le site est développé avec Next.js et TypeScript, avec des routes dédiées au français et à l'anglais.

### Fonctionnalités

- **Contenu bilingue :** pages en français et en anglais.
- **Études de cas :** présentation des projets, technologies, fonctionnalités, parcours utilisateur et détails techniques disponibles.
- **Profil professionnel :** présentation, compétences, expériences et formation.
- **Contact :** liens vers l'e-mail, GitHub et LinkedIn.
- **Interface responsive :** adaptation aux mobiles, tablettes et ordinateurs.
- **Animations discrètes :** interactions réalisées avec Framer Motion.
- **Bases SEO :** métadonnées localisées, URL canoniques, alternates linguistiques, Open Graph et prise en charge du sitemap et de robots.txt.
- **Accessibilité :** structure sémantique, focus clavier et prise en compte de la préférence de réduction des animations.

### Technologies

- **Next.js 15** — framework React et routage.
- **React 19** — composants d'interface.
- **TypeScript** — typage statique.
- **Tailwind CSS** — styles et mise en page responsive.
- **Framer Motion** — animations.
- **Lucide React** — icônes.

### Projets présentés

- **Neivos Facture :** application mobile de facturation axée sur le scan de factures, l'extraction assistée par IA, la vérification des données et l'export PDF/Excel. Technologies indiquées : Flutter et Dart.
- **Camping Management Platform :** application web orientée gestion de camping, réservations, rôles utilisateurs et administration. Technologies indiquées : PHP, Laravel, MySQL, JavaScript et Bootstrap.

Les descriptions correspondent aux informations actuellement documentées dans le portfolio. N'ajouter des liens de démonstration ou de code source que lorsqu'ils sont disponibles et vérifiables.

### Installation locale

**Prérequis :** Node.js 20.9.0 ou plus récent et npm.

```bash
git clone https://github.com/WissemAttouf/WissemAttouf.git
cd WissemAttouf
npm install
npm run dev
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000).

### Vérifications

```bash
npm run lint
npm run typecheck
npm run build
```

Ou lancer les trois contrôles à la suite :

```bash
npm run check
```

Ces commandes permettent de vérifier le projet ; leur présence dans la documentation ne signifie pas que les contrôles ont déjà réussi dans tous les environnements.

### Déploiement

Le projet peut être déployé sur [Vercel](https://vercel.com/) en important ce dépôt GitHub et en conservant les paramètres de build Next.js standards.

Si tu utilises un domaine de production personnalisé, configure la variable d'environnement `NEXT_PUBLIC_SITE_URL` avec l'URL canonique du site, puis redéploie.

### Structure du dépôt

```text
app/                 Routes et layouts Next.js
components/          Composants réutilisables et sections
data/                Contenus, projets, expériences, compétences, traductions
lib/                 Fonctions partagées, métadonnées et outils de langue
public/              Ressources statiques, images et documents
```

### Contact

- **Portfolio :** https://wissem-portfolio.vercel.app/
- **LinkedIn :** https://www.linkedin.com/in/wissem-attouf-452509226/
- **GitHub :** https://github.com/WissemAttouf
- **E-mail :** wattouf35@gmail.com

---

Built with Next.js, TypeScript, and Tailwind CSS by Wissem Attouf.
