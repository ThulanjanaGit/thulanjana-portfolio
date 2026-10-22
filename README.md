# Thulanjana Pramod — Portfolio

Source code for Thulanjana Pramod's personal portfolio website.

**Live site:** <https://thulanjanagit.github.io/thulanjana-portfolio/>

## Tech stack

- [React](https://react.dev) with [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for development and builds
- [Tailwind CSS](https://tailwindcss.com) for styling
- [oxlint](https://oxc.rs) for linting and [Prettier](https://prettier.io) for formatting
- GitHub Actions and GitHub Pages for deployment

Exact versions are in `package.json`.

## Getting started

Requirements: Node.js 24 (the version in `.nvmrc`; any version from 22.12 works) and npm.

```bash
git clone https://github.com/ThulanjanaGit/thulanjana-portfolio.git
cd thulanjana-portfolio
npm install
npm run dev
```

Open <http://localhost:5173/thulanjana-portfolio/>. The `/thulanjana-portfolio/` path matches the GitHub Pages URL and is set by `base` in `vite.config.ts`. Vercel builds use `/` instead (see [Vercel](#vercel)).

## Scripts

| Command                | What it does                                                                 |
| ---------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`          | Starts the development server with hot reload                                |
| `npm run build`        | Type-checks, then builds the site into `dist/`                               |
| `npm run preview`      | Serves the production build at <http://localhost:4173/thulanjana-portfolio/> |
| `npm run lint`         | Runs oxlint; any warning fails the run                                       |
| `npm run format`       | Formats all files with Prettier                                              |
| `npm run format:check` | Checks formatting without changing files                                     |

## Project structure

```text
├── .github/
│   ├── workflows/deploy.yml   Checks pull requests, deploys main
│   └── dependabot.yml         Monthly dependency update pull requests
├── public/                    Files served as they are: CV, favicons, link-preview image
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
│   ├── main.tsx               Entry point
│   └── index.css              Tailwind CSS and global styles
├── index.html                 Page title, SEO and link-preview metadata
└── vite.config.ts
```

## Updating content

All text and lists live in `src/data/`:

| File                 | Content                                                                                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `profile.ts`         | Hero line, About lead and text, LinkedIn and GitHub links, Toptal link, location and email, CV                                                                  |
| `navigation.ts`      | Header and footer links                                                                                                                                         |
| `experience.ts`      | Jobs, highlights and technologies; the technology filter lists every technology used here, most used first                                                      |
| `education.ts`       | Degrees and school qualifications; `honours` and `skills` are optional                                                                                          |
| `certifications.ts`  | Certifications, grouped by issuer on the page; `credentialId` is optional                                                                                       |
| `projects.ts`        | Projects; an optional `link` adds a "Visit site" link, and `hidden: true` keeps a project off the page                                                          |
| `skills.ts`          | Skills grouped as in the CV, shown in the Skills section                                                                                                        |
| `recommendations.ts` | Recommendations in the order shown, each with a `relationship` line and a `linkedIn` link; the first one with an `excerpt` gives the two-line quote shown large |

TypeScript checks every entry, so `npm run build` reports a missing or misspelled field.

When your job title, location or summary changes, also update `index.html` (title, description, Open Graph tags and the JSON-LD block). Link previews on LinkedIn, X and messaging apps use only these tags, and search engines use them for the result title and description.

### CV

Replace `public/Thulanjana-Pramod-Resume.pdf` with the new file and keep the same name. The "View CV" links in the hero and the contact section point to it.

### Images

- Put images in `src/assets/` as WebP, at about twice the size they are shown so they stay sharp on high-density screens (for example 1024 × 1024 for the portrait and 480 × 480 for project screenshots).
- Import the image in the data file or component that uses it.
- `public/og-image.jpg` (1200 × 630) is the preview shown when the link is shared. Replace it if your title or photo changes.
- `public/favicon.svg` is the "TP" tab icon. `favicon-96x96.png` and `apple-touch-icon.png` (180 × 180) are PNG copies of it for browsers and phones that don't use SVG icons, so replace all three together.

## Deployment

`.github/workflows/deploy.yml` builds and publishes the site to GitHub Pages:

- **Pull requests:** installs dependencies, lints, checks formatting and builds. Merge only when this check passes.
- **Merges into `main`:** runs the same checks, then publishes the site.

To make a change:

1. Create a branch, commit your changes and push the branch.
2. Open a pull request into `main` and wait for the check to pass.
3. Merge the pull request. The new version is live when the deploy job in the **Actions** tab finishes.

To redeploy `main` without a change, open the **Actions** tab, select **CI and deploy** and choose **Run workflow**.

**One-time setup:** go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. After the first successful deploy, the old `gh-pages` branch is no longer used and can be deleted.

If the repository is renamed or the site moves to a custom domain, update `base` in `vite.config.ts` and the absolute URLs in `index.html`.

### Vercel

The site can also be deployed on Vercel with the default Vite settings. Vercel sets the `VERCEL` environment variable during its builds, and `vite.config.ts` then sets `base` to `/`, so the site is served from the root. GitHub Pages builds are unchanged.

The canonical and Open Graph URLs in `index.html` still point to GitHub Pages. If Vercel becomes the main address, update them.

### Dependency updates

Dependabot opens pull requests every month: one grouped pull request for minor and patch npm updates, a separate one for each major version, and one for GitHub Actions. Each runs the same checks; merge it when they pass.

## To do

- [ ] Confirm I can publicly name each client project.
- [ ] HelpAge International, Barts Charity and FARA are hidden for now. To show one again, remove its `hidden: true` in `src/data/projects.ts`.
- [ ] Update `src/data/projects.ts`: add live links with the `link` field, larger screenshots (1600 px or wider) and recent work.

## License

This repository has no open-source license. The code and content, including the photos and CV, are © Thulanjana Pramod. All rights reserved.
