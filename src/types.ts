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
}

export interface Recommendation {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedIn: string;
  email: string;
}
