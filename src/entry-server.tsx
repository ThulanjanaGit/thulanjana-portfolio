import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import { projectPath, VISIBLE_PROJECTS } from "./data/projects";

// Every page, for scripts/prerender.mjs to write into the build. The home
// page keeps the title and description in index.html; a case study gets its
// own.
export const PAGES = [
  { path: "/" },
  ...VISIBLE_PROJECTS.map(({ slug, title, summary }) => ({
    path: projectPath(slug),
    title: `${title} case study | Thulanjana Pramod`,
    description: summary,
  })),
];

// A page as HTML.
export const render = (path: string) =>
  renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
