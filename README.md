# Thulanjana Pramod — Portfolio

The personal portfolio of Thulanjana Pramod, a software engineer in Lisbon: experience, education, certifications, skills and recommendations on one page, with a case study page for each project.

**Live site:** <https://thulanjana.vercel.app/>

## Tech stack

- [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org), prerendered to static HTML at build time
- [Vite](https://vite.dev) for development and builds
- [Tailwind CSS](https://tailwindcss.com) for styling
- [oxlint](https://oxc.rs) and [Prettier](https://prettier.io) for linting and formatting
- [Vercel](https://vercel.com) for hosting, GitHub Actions for checks

Exact versions are in `package.json`.

## Getting started

Requires Node.js 24 (see `.nvmrc`; 22.12 or later works) and npm.

```bash
git clone https://github.com/ThulanjanaGit/thulanjana-portfolio.git
cd thulanjana-portfolio
npm install
npm run dev
```

The development server runs at <http://localhost:5173/>.

## Scripts

| Command                | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `npm run dev`          | Start the development server with hot reload                       |
| `npm run build`        | Type-check, build into `dist/` and prerender the pages and sitemap |
| `npm run preview`      | Serve the production build at <http://localhost:4173/>             |
| `npm run lint`         | Lint with oxlint; any warning fails                                |
| `npm run format`       | Format all files with Prettier                                     |
| `npm run format:check` | Check formatting without changing files                            |

## Project structure

```text
├── .github/
│   ├── workflows/deploy.yml   Checks pull requests; publishes the redirect page from main
│   ├── pages/index.html       Redirect from the old GitHub Pages address to Vercel
│   └── dependabot.yml         Monthly dependency updates
├── public/                    Static files: CV, icons, share image, robots.txt
├── scripts/prerender.mjs      Writes the rendered pages and the sitemap into dist/
├── src/
│   ├── assets/                Images (WebP); case study screenshots in assets/projects/<slug>/
│   ├── components/
│   │   ├── layout/            Header, footer and small-screen menu
│   │   ├── sections/          Home page sections
│   │   └── ui/                Shared components
│   ├── data/                  Site content
│   ├── hooks/                 React hooks
│   ├── pages/                 Home and case study pages
│   ├── utils/                 Theme, animation and screenshot helpers
│   ├── App.tsx                Page frame; picks the page from the address
│   ├── entry-server.tsx       Lists the pages and renders them for the prerender
│   ├── main.tsx               Browser entry; hydrates the prerendered page
│   ├── index.css              Tailwind CSS and global styles
│   └── types.ts               Content types
├── index.html                 HTML template with SEO and share metadata
├── vercel.json                Vercel settings
└── vite.config.ts             Vite settings
```

## Editing content

All content lives in `src/data/`:

| File                 | Content                                                                      |
| -------------------- | ---------------------------------------------------------------------------- |
| `profile.ts`         | Hero line, About text, contact details, profile links and CV                 |
| `navigation.ts`      | Section links for the header, menu and footer                                |
| `experience.ts`      | Roles, highlights and technologies; the technology filter is built from them |
| `education.ts`       | Degrees, school qualifications and languages                                 |
| `certifications.ts`  | Certifications, grouped by issuer                                            |
| `projects.ts`        | Projects and their case studies                                              |
| `skills.ts`          | Skill groups, as in the CV                                                   |
| `recommendations.ts` | Recommendations; the first with an `excerpt` supplies the large quote        |

- Lists appear in the order given, so put the most important items first.
- `npm run build` type-checks every entry against `src/types.ts`, where optional fields are marked.
- When the job title, location or summary changes, also update the title, description, Open Graph tags and JSON-LD in `index.html`. Link previews and search results use them.

### Case studies

Each project in `src/data/projects.ts` appears as a tile in the Projects section and as a page at `/projects/<slug>`, with its own title and description and a link to the next project. `hidden: true` keeps a project and its page off the site.

To add a case study:

1. Save its screenshots in `src/assets/projects/<slug>/` (see [Images](#images)).
2. Add an entry to `PROJECTS` in display order, newest first.
3. Run `npm run build` to prerender the page and add it to the sitemap.

Screens are laid out in rows of two. A desktop page and a phone screen share a row at the same height, so listing them page then phone, then phone then page, alternates the sides. Two desktop pages share a row equally.

### Images

- Store images in `src/assets/` as WebP at about twice their displayed size (the portrait is 1024 × 1024), and import them where they are used.
- Capture case study screenshots at 1440 × 900 (desktop) or 390 × 844 (phone), both at 2x. Save each as `src/assets/projects/<slug>/<name>-<width>.webp`: desktop pages at 960, 1600 and 2400 pixels wide, phone screens at 480 and 780, with names starting with `phone-`. `screenshot("<slug>/<name>", "alt text")` from `src/utils/screenshots.ts` turns them into a responsive image, and the build fails if a width is missing.
- `public/og-image-v3.jpg` (1200 × 630) is the preview shown when the site is shared, with the name and "Software Engineer in Lisbon". Apps cache it by its address, so give a replacement a new file name and update both references in `index.html`.
- `public/favicon.svg` is the "TP" tab icon. `favicon-96x96.png` and `apple-touch-icon.png` (180 × 180) are PNG copies of it, so replace all three together.

### CV

Replace `public/Thulanjana-Pramod-Resume.pdf` and keep the file name; every "View CV" link points to it.

## Deployment

The site is hosted on Vercel through its Git integration. Merges into `main` go live at <https://thulanjana.vercel.app/>, and every other pushed branch gets a preview address. `vercel.json` runs `npm run build`, serves the case studies at `/projects/<slug>` and redirects addresses that end in a slash or `.html`.

GitHub Actions (`.github/workflows/deploy.yml`) lints, checks formatting and builds every pull request. After a merge into `main` it runs the same checks and publishes `.github/pages/index.html` to GitHub Pages, which redirects the old address, <https://thulanjanagit.github.io/thulanjana-portfolio/>, to Vercel. This requires **Settings → Pages → Source** set to **GitHub Actions**.

To ship a change:

1. Create a branch, commit and push it.
2. Open a pull request into `main`, check the Vercel preview and wait for the checks to pass.
3. Merge the pull request. The change is live when Vercel's production deployment finishes.

To redeploy without a change, choose **Redeploy** on the latest production deployment in the Vercel dashboard.

To move to a custom domain, update the address in `index.html`, `public/robots.txt`, `scripts/prerender.mjs` (`SITE`), `.github/pages/index.html` and the `homepage` field in `package.json`.

Dependabot opens pull requests every month: one for minor and patch npm updates, one for each major version and one for GitHub Actions. Merge each once its checks pass.

## License

This repository has no open-source license. The code and content, including the photos and CV, are © Thulanjana Pramod. All rights reserved.
