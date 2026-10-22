export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
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
  honours?: string;
  institution: string;
  location: string;
  period: string;
  skills?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  url: string;
  credentialId?: string;
  skills: string[];
}

export interface Project {
  title: string;
  kind: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  // Kept in the data but not shown on the page.
  hidden?: boolean;
}

export interface Recommendation {
  name: string;
  role: string;
  organisation?: string;
  // How they worked together, e.g. "Managed Thulanjana directly".
  relationship?: string;
  paragraphs: string[];
  // A short quote from the paragraphs, broken by hand into two lines and
  // shown large above the letters.
  excerpt?: string[];
  image: string;
  linkedIn?: string;
}
