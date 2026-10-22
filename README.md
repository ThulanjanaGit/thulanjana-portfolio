# Thulanjana Pramod — Portfolio

Source code for Thulanjana Pramod's personal portfolio website.

**Live site:** <https://thulanjana.vercel.app/>

## Tech stack

- [React](https://react.dev) with [TypeScript](https://www.typescriptlang.org), prerendered to HTML at build time
- [Vite](https://vite.dev) for development and builds
- [Tailwind CSS](https://tailwindcss.com) for styling
- [oxlint](https://oxc.rs) for linting and [Prettier](https://prettier.io) for formatting
- [Vercel](https://vercel.com) for hosting and GitHub Actions for checks

Exact versions are in `package.json`.

## Getting started

Requirements: Node.js 24 (the version in `.nvmrc`; any version from 22.12 works) and npm.

```bash
git clone https://github.com/ThulanjanaGit/thulanjana-portfolio.git
cd thulanjana-portfolio
npm install
npm run dev
```

Open <http://localhost:5173/>.

## Scripts

| Command                | What it does                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `npm run dev`          | Starts the development server with hot reload                                            |
| `npm run build`        | Type-checks, builds the site into `dist/` and prerenders the page into `dist/index.html` |
| `npm run preview`      | Serves the production build at <http://localhost:4173/>                                  |
| `npm run lint`         | Runs oxlint; any warning fails the run                                                   |
| `npm run format`       | Formats all files with Prettier                                                          |
| `npm run format:check` | Checks formatting without changing files                                                 |

## Project structure

```text
├── .github/
│   ├── workflows/deploy.yml   Checks pull requests; publishes the redirect page from main
│   ├── pages/index.html       Redirect from the old GitHub Pages address to Vercel
│   └── dependabot.yml         Monthly dependency update pull requests
├── public/                    Files served as they are: CV, icons, link-preview image, robots.txt, sitemap
├── scripts/prerender.mjs      Writes the rendered page into dist/index.html after the build
├── src/
│   ├── assets/                Images (WebP)
│   ├── components/
│   │   ├── layout/            Header and footer
│   │   ├── sections/          One component per page section
│   │   └── ui/                Small shared components
│   ├── data/                  All site content; edit these files to update the site
│   ├── hooks/                 Small React hooks
│   ├── utils/                 Theme switch and a helper for staggered animations
│   ├── types.ts               Types for the content data
│   ├── App.tsx                Page layout and section order
│   ├── entry-server.tsx       Renders the page to HTML for the prerender
│   ├── main.tsx               Entry point; hydrates the prerendered page
│   └── index.css              Tailwind CSS and global styles
├── index.html                 Page title, SEO and link-preview metadata
├── vercel.json                Vercel build settings
└── vite.config.ts
```

## Updating content

All text and lists live in `src/data/`:

| File                 | Content                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `profile.ts`         | Hero line, About lead and text, LinkedIn and GitHub links, Toptal link, location and email, CV                                                                                    |
| `navigation.ts`      | Header and footer links                                                                                                                                                           |
| `experience.ts`      | Jobs, highlights and technologies; the technology filter lists every technology used here                                                                                         |
| `education.ts`       | Degrees and school qualifications; `honours` and `skills` are optional                                                                                                            |
| `certifications.ts`  | Certifications, grouped by issuer on the page; `credentialId` is optional                                                                                                         |
| `projects.ts`        | Projects; an optional `link` adds a "Visit site" link, and `hidden: true` keeps a project off the page (with every project hidden, so are the Projects section and its menu link) |
| `skills.ts`          | Skills grouped as in the CV, shown in the Skills section                                                                                                                          |
| `recommendations.ts` | Recommendations in the order shown, each with a `relationship` line and a `linkedIn` link; the first one with an `excerpt` gives the two-line quote shown large                   |

Lists of technologies and skills appear A to Z on the page, so their order in these files does not matter.

TypeScript checks every entry, so `npm run build` reports a missing or misspelled field.

When your job title, location or summary changes, also update `index.html` (title, description, Open Graph tags and the JSON-LD block). Link previews on LinkedIn, X and messaging apps use only these tags, and search engines use them for the result title and description.

### CV

Replace `public/Thulanjana-Pramod-Resume.pdf` with the new file and keep the same name. The "View CV" links in the hero and the contact section point to it.

### Images

- Put images in `src/assets/` as WebP, at about twice the size they are shown so they stay sharp on high-density screens (for example 1024 × 1024 for the portrait and 480 × 480 for project screenshots).
- Import the image in the data file or component that uses it.
- `public/og-image.jpg` (1200 × 630) is the preview shown when the link is shared. It shows your name and the line "Full-stack software engineer in Lisbon", so replace it if either changes.
- `public/favicon.svg` is the "TP" tab icon. `favicon-96x96.png` and `apple-touch-icon.png` (180 × 180) are PNG copies of it for browsers and phones that don't use SVG icons, so replace all three together.

## Deployment

The site is hosted on [Vercel](https://vercel.com) through its Git integration:

- **Merges into `main`** go live at <https://thulanjana.vercel.app/>.
- **Every other pushed branch** gets its own preview address, linked from the pull request.

`vercel.json` makes Vercel run `npm run build`, so every deployment is prerendered like a local build.

`.github/workflows/deploy.yml` runs on GitHub Actions:

- **Pull requests:** installs dependencies, lints, checks formatting and builds. Merge only when this check passes.
- **Merges into `main`:** runs the same checks, then publishes `.github/pages/index.html` to GitHub Pages, so links to the old address, <https://thulanjanagit.github.io/thulanjana-portfolio/>, lead to Vercel. GitHub Pages must have **Source** set to **GitHub Actions** (**Settings → Pages**).

To make a change:

1. Create a branch, commit your changes and push the branch.
2. Open a pull request into `main`, check its Vercel preview and wait for the checks to pass.
3. Merge the pull request. The new version is live when Vercel's production deployment finishes.

To redeploy without a change, open the latest production deployment in the Vercel dashboard and choose **Redeploy**.

If the site moves to a custom domain, update the address in `index.html`, `public/robots.txt`, `public/sitemap.xml`, `.github/pages/index.html` and the `homepage` field in `package.json`.

### Dependency updates

Dependabot opens pull requests every month: one grouped pull request for minor and patch npm updates, a separate one for each major version, and one for GitHub Actions. Each runs the same checks; merge it when they pass.

## To do

- [ ] Confirm I can publicly name each client project.
- [ ] All projects are hidden for now, and with them the Projects section and its menu link. To show a project again, remove its `hidden: true` in `src/data/projects.ts`.
- [ ] Update `src/data/projects.ts`: add live links with the `link` field, larger screenshots (1600 px or wider) and recent work.

## License

This repository has no open-source license. The code and content, including the photos and CV, are © Thulanjana Pramod. All rights reserved.
