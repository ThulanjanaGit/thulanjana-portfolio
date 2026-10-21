import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface Technology {
  name: string;
  icon: IconType;
  colorClass: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: Highlight[];
  technologies: string[];
}

export interface Education {
  degree: string;
  honours: string;
  institution: string;
  location: string;
  period: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Recommendation {
  name: string;
  position: string;
  paragraphs: string[];
  image: string;
  linkedIn: string;
}
