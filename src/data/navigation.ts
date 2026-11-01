import type { NavLink } from "../types";
import { VISIBLE_PROJECTS } from "./projects";

export const NAV_LINKS: NavLink[] = [
  { label: "Experience", href: "#experience" },
  ...(VISIBLE_PROJECTS.length > 0
    ? [{ label: "Projects", href: "#projects" }]
    : []),
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// A link to a home page section: in-page on the home page, and leading back
// to it from other pages.
export const sectionHref = (href: string, home: boolean) =>
  home ? href : `/${href}`;
