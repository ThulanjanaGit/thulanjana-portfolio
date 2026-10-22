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
