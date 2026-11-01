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

export interface Language {
  name: string;
  level: string;
  cefr: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  url: string;
  credentialId?: string;
  skills: string[];
}

// A screenshot saved at several widths; see src/utils/screenshots.ts.
export interface Screenshot {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  // A phone screen rather than a desktop page.
  phone: boolean;
  alt: string;
}

// A project and its case study, shown at /projects/<slug>.
export interface Project {
  slug: string;
  title: string;
  kind: string;
  // One sentence: the tile text, the page's lead and its meta description.
  summary: string;
  year: string;
  role: string;
  link: string;
  technologies: string[];
  cover: Screenshot;
  brief: string[];
  build: Highlight[];
  screens: { image: Screenshot; caption: string }[];
  result: string[];
  // Kept in the data but left off the site, page included.
  hidden?: boolean;
}

export interface Recommendation {
  name: string;
  role: string;
  organisation?: string;
  // How they worked together, as LinkedIn states it, e.g. "Managed Thulanjana
  // directly".
  relationship: string;
  paragraphs: string[];
  // A short quote from the paragraphs, broken by hand into two lines and
  // shown large above the letters.
  excerpt?: string[];
  image: string;
  linkedIn: string;
}
