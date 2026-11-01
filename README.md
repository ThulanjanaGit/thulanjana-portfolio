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

| Command                | What it does                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`          | Starts the development server with hot reload                                       |
| `npm run build`        | Type-checks, builds the site into `dist/` and prerenders every page and the sitemap |
| `npm run preview`      | Serves the production build at <http://localhost:4173/>                             |
| `npm run lint`         | Runs oxlint; any warning fails the run                                              |
| `npm run format`       | Formats all files with Prettier                                                     |
| `npm run format:check` | Checks formatting without changing files                                            |

## Project structure

```text
├── .github/
│   ├── workflows/deploy.yml   Checks pull requests; publishes the redirect page from main
│   ├── pages/index.html       Redirect from the old GitHub Pages address to Vercel
│   └── dependabot.yml         Monthly dependency update pull requests
├── public/                    Files served as they are: CV, icons, link-preview image, robots.txt
├── scripts/prerender.mjs      Writes each rendered page and the sitemap into dist/ after the build
├── src/
│   ├── assets/                Images (WebP); case-study screenshots in assets/projects/<slug>/
│   ├── components/
│   │   ├── layout/            Header, footer and the menu for small screens
│   │   ├── sections/          One component per home page section
│   │   └── ui/                Small shared components
│   ├── data/                  All site content; edit these files to update the site
│   ├── hooks/                 Small React hooks
│   ├── pages/                 The home page (section order) and the case-study page
│   ├── utils/                 Theme switch and helpers for staggered animations and screenshots
│   ├── types.ts               Types for the content data
│   ├── App.tsx                Page frame; picks the page from the address
│   ├── entry-server.tsx       Lists the pages and renders each to HTML for the prerender
│   ├── main.tsx               Entry point; hydrates the prerendered page
│   └── index.css              Tailwind CSS and global styles
├── index.html                 Page title, SEO and link-preview metadata
├── vercel.json                Vercel build settings
└── vite.config.ts
```

## Updating content

All text and lists live in `src/data/`:

| File                 | Content                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `profile.ts`         | Hero line, About lead and text, LinkedIn and GitHub links, Toptal link, location and email, CV                                                                                                |
| `navigation.ts`      | Header and footer links                                                                                                                                                                       |
| `experience.ts`      | Jobs, highlights and technologies; the technology filter lists every technology used here                                                                                                     |
| `education.ts`       | Degrees and school qualifications (`honours` and `skills` are optional), and the languages shown under them                                                                                   |
| `certifications.ts`  | Certifications, grouped by issuer on the page; `credentialId` is optional                                                                                                                     |
| `projects.ts`        | Projects, each with its case study at `/projects/<slug>`; `hidden: true` keeps a project and its page off the site (with every project hidden, so are the Projects section and its menu link) |
| `skills.ts`          | Skills grouped as in the CV, shown in the Skills section                                                                                                                                      |
| `recommendations.ts` | Recommendations in the order shown, each with a `relationship` line and a `linkedIn` link; the first one with an `excerpt` gives the two-line quote shown large                               |

Lists of technologies and skills appear on the page in the order given in these files, so put the most important first. The technology filter lists each technology where it first appears, starting with the current role.

TypeScript checks every entry, so `npm run build` reports a missing or misspelled field.

When your job title, location or summary changes, also update `index.html` (title, description, Open Graph tags and the JSON-LD block). Link previews on LinkedIn, X and messaging apps use only these tags, and search engines use them for the result title and description.

### Case studies

Each entry in `src/data/projects.ts` is a tile in the Projects section and a page at `/projects/<slug>`. The page shows `title`, `summary` (also its meta description), `year`, `kind`, `role`, `technologies` and `link`, the `cover` screenshot, then `brief` (paragraphs), `build` (titled highlights), `screens` (screenshots with captions) and `result`, and ends with a link to the next project.

To add one:

1. Save its screenshots in `src/assets/projects/<slug>/` (see [Images](#images)).
2. Add an entry to `PROJECTS` in the order it should appear, newest first.
3. Run `npm run build`: the prerender writes the page with its own title and description and adds it to the sitemap.

List screens in pairs: a desktop page and a phone screen share a row at the same height, so ordering them page, phone, then phone, page makes the rows alternate sides. Two desktop pages share a row equally.

### CV

Replace `public/Thulanjana-Pramod-Resume.pdf` with the new file and keep the same name. The "View CV" links in the hero and the contact section point to it.

### Images

- Put images in `src/assets/` as WebP, at about twice the size they are shown so they stay sharp on high-density screens (for example 1024 × 1024 for the portrait).
- Import the image in the data file or component that uses it.
- Case-study screenshots are saved at several widths so each screen downloads only the size it needs. Capture a desktop page at 1440 × 900 and a phone screen at 390 × 844, both at 2x, and save them as `src/assets/projects/<slug>/<name>-<width>.webp`: desktop pages 960, 1600 and 2400 pixels wide, phone screens 480 and 780 (their names start with `phone-`). In `projects.ts`, `screenshot("<slug>/<name>", "alt text")` (from `src/utils/screenshots.ts`) picks them up, and the build stops if a width is missing.
- `public/og-image-v3.jpg` (1200 × 630) is the preview shown when the link is shared. It shows your name and the line "Software Engineer in Lisbon", so replace it if either changes. Apps cache the preview by its address, so give a new image a new name (for example `og-image-v4.jpg`) and update both references in `index.html`.
- `public/favicon.svg` is the "TP" tab icon. `favicon-96x96.png` and `apple-touch-icon.png` (180 × 180) are PNG copies of it for browsers and phones that don't use SVG icons, so replace all three together.

## Deployment

The site is hosted on [Vercel](https://vercel.com) through its Git integration:

- **Merges into `main`** go live at <https://thulanjana.vercel.app/>.
- **Every other pushed branch** gets its own preview address, linked from the pull request.

`vercel.json` makes Vercel run `npm run build`, so every deployment is prerendered like a local build. It also serves `projects/<slug>.html` at `/projects/<slug>` and redirects addresses that end in a slash or `.html` to that form.

`.github/workflows/deploy.yml` runs on GitHub Actions:

- **Pull requests:** installs dependencies, lints, checks formatting and builds. Merge only when this check passes.
- **Merges into `main`:** runs the same checks, then publishes `.github/pages/index.html` to GitHub Pages, so links to the old address, <https://thulanjanagit.github.io/thulanjana-portfolio/>, lead to Vercel. GitHub Pages must have **Source** set to **GitHub Actions** (**Settings → Pages**).

To make a change:

1. Create a branch, commit your changes and push the branch.
2. Open a pull request into `main`, check its Vercel preview and wait for the checks to pass.
3. Merge the pull request. The new version is live when Vercel's production deployment finishes.

To redeploy without a change, open the latest production deployment in the Vercel dashboard and choose **Redeploy**.

If the site moves to a custom domain, update the address in `index.html`, `public/robots.txt`, `scripts/prerender.mjs` (`SITE`, used for the sitemap and each case study's address), `.github/pages/index.html` and the `homepage` field in `package.json`.

### Dependency updates

Dependabot opens pull requests every month: one grouped pull request for minor and patch npm updates, a separate one for each major version, and one for GitHub Actions. Each runs the same checks; merge it when they pass.

## To do

- [ ] Confirm I can publicly name each client project.

## License

This repository has no open-source license. The code and content, including the photos and CV, are © Thulanjana Pramod. All rights reserved.
