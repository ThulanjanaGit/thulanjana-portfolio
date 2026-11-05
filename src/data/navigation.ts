import type { NavLink } from "../types";
import { VISIBLE_PROJECTS } from "./projects";

// In page order. Contact is left out because Email sits beside these links.
export const NAV_LINKS: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  ...(VISIBLE_PROJECTS.length > 0
    ? [{ label: "Projects", href: "#projects" }]
    : []),
  { label: "Recommendations", href: "#recommendations" },
];

// A link to a home page section: in-page on the home page, and leading back
// to it from other pages.
export const sectionHref = (href: string, home: boolean) =>
  home ? href : `/${href}`;
