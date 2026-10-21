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
  experience: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string[];
  technologies: string[];
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
