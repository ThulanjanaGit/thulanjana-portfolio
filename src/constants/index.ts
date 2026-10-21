import testYourWorth from "../assets/projects/test-your-worth.webp";
import helpAgeInternational from "../assets/projects/helpage-international.webp";
import bartsCharity from "../assets/projects/barts-charity.webp";
import fara from "../assets/projects/fara.webp";
import travelGuider from "../assets/projects/travel-guider.webp";
import {
  FaAws,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  SiAngular,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type {
  Education,
  Experience,
  NavLink,
  Project,
  SocialLink,
  Technology,
} from "../types";

export const RESUME_URL = `${import.meta.env.BASE_URL}Thulanjana-Pramod-Resume.pdf`;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thulanjana/",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/ThulanjanaGit", icon: FaGithub },
  {
    label: "X (Twitter)",
    href: "https://x.com/ThulanjanaX",
    icon: FaSquareXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__pramod_00__/",
    icon: FaInstagram,
  },
  { label: "WhatsApp", href: "https://wa.me/351965617062", icon: FaWhatsapp },
];

export const HERO_TITLE = ["Software Engineer", "Frontend Developer"];

export const HERO_CONTENT =
  "Frontend-focused Software Engineer with 4 years of experience building high-performance, scalable web applications across telecom, fintech, data governance and charity sectors. I specialise in React and TypeScript, with solid full-stack experience in Node.js, Python and PHP.";

export const ABOUT_PARAGRAPHS = [
  "I'm a Software Engineer at Opplane in Lisbon, building high-performance React, Next.js and Python (Django, FastAPI) applications on AWS and GCP for telecom, fintech and data governance clients. Recently I designed JudgeKit, a domain-agnostic Python library that calibrates multi-LLM quality scores, and built REST, GraphQL and MCP services that connect frontend, microservice and AI workflows.",
  "Before Opplane, I spent two years at Fat Beehive in the UK, engineering responsive React applications for enterprise clients including Siemens Energy and extensible frontend frameworks for 30+ leading UK platforms. I care about frontend performance, clean architecture and automated testing, and I hold a First Class Honours degree in Software Engineering from the University of Wolverhampton.",
];

export const TECHNOLOGIES: Technology[] = [
  { name: "React", icon: SiReact, colorClass: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, colorClass: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, colorClass: "text-neutral-100" },
  { name: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "text-sky-400" },
  { name: "Redux", icon: SiRedux, colorClass: "text-violet-500" },
  { name: "Angular", icon: SiAngular, colorClass: "text-red-500" },
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-green-500" },
  { name: "Python", icon: SiPython, colorClass: "text-yellow-300" },
  { name: "FastAPI", icon: SiFastapi, colorClass: "text-teal-400" },
  { name: "Django", icon: SiDjango, colorClass: "text-emerald-500" },
  { name: "PHP", icon: SiPhp, colorClass: "text-indigo-400" },
  { name: "GraphQL", icon: SiGraphql, colorClass: "text-pink-500" },
  { name: "PostgreSQL", icon: SiPostgresql, colorClass: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, colorClass: "text-green-500" },
  { name: "Docker", icon: SiDocker, colorClass: "text-sky-500" },
  { name: "AWS", icon: FaAws, colorClass: "text-orange-400" },
  { name: "Google Cloud", icon: SiGooglecloud, colorClass: "text-blue-300" },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Opplane",
    location: "Portugal",
    period: "Sep 2025 – Present",
    highlights: [
      {
        title: "Scalable Applications",
        description:
          "Built high-performance React, Next.js and Python (Django, FastAPI) applications on AWS and GCP for telecom, fintech, and data governance clients.",
      },
      {
        title: "LLM Evaluation Platform",
        description:
          "Designed and extracted JudgeKit, a domain-agnostic Python library using Bayesian IRT models (PyMC) to calibrate multi-LLM quality scores across large datasets.",
      },
      {
        title: "API Integration",
        description:
          "Built and integrated REST, GraphQL, and MCP endpoints, including a combined FastAPI and stateless MCP agent service to unify frontend, microservice, and AI workflows.",
      },
      {
        title: "Distributed Batch Processing",
        description:
          "Built asynchronous, resumable batch jobs on Cloud Run, BigQuery, and GCS, isolating scientific dependencies into dedicated container images.",
      },
      {
        title: "Reusable Libraries",
        description:
          "Authored a framework-agnostic SQLAlchemy and Django audit trail library that logs data changes at the session flush layer.",
      },
      {
        title: "Quality Assurance & Observability",
        description:
          "Maintained 300+ automated tests using pytest, Jest, and React Testing Library while integrating Datadog for system observability and automated error alerting.",
      },
      {
        title: "CI/CD & Cloud Infrastructure",
        description:
          "Built Bitbucket Pipelines to automate version-gated releases, publish Artefact Registry container images, and sync runtime config to GCS.",
      },
      {
        title: "Agile Collaboration",
        description:
          "Led code reviews, sprint planning, and architecture documentation in Scrum teams alongside UI/UX and backend engineers.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Python",
      "Django",
      "FastAPI",
      "GraphQL",
      "MCP",
      "AWS",
      "Google Cloud",
      "BigQuery",
      "SQLAlchemy",
      "pytest",
      "Jest",
      "Datadog",
    ],
  },
  {
    role: "Web Developer",
    company: "Fat Beehive",
    location: "UK",
    period: "Dec 2023 – Sep 2025",
    highlights: [
      {
        title: "Enterprise FE Solutions",
        description:
          "Engineered high-performance, responsive React web applications for enterprise clients, including Siemens Energy, and created extensible frontend frameworks for 30+ leading UK platforms.",
      },
      {
        title: "Full-Stack & API Architecture",
        description:
          "Built and integrated robust Node.js, Express REST APIs and customised PHP, WordPress backends, seamlessly connecting frontend components with server-side logic using Test-Driven Development (TDD).",
      },
      {
        title: "Testing & Quality",
        description:
          "Spearheaded unit and integration testing using Jest, React Testing Library, and Supertest, accelerating deployment pipelines and improving code reliability.",
      },
      {
        title: "Performance & SEO",
        description:
          "Optimised Core Web Vitals, responsiveness, and load times using modern JavaScript, CSS, Sass, and asset bundling strategies.",
      },
      {
        title: "Data Processing & Integration",
        description:
          "Researched and optimised data processing workflows to enable efficient information extraction and retrieval across complex web platforms.",
      },
    ],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "PHP",
      "WordPress",
      "Jest",
      "React Testing Library",
      "Supertest",
      "Sass",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Fat Beehive",
    location: "UK",
    period: "Aug 2023 – Dec 2023",
    highlights: [
      {
        title: "UI Refinement",
        description:
          "Refined existing web applications with UI enhancements, performance upgrades, and error resolutions across top UK charity platforms.",
      },
      {
        title: "Full-Stack Feature Delivery",
        description:
          "Leveraged PHP, TypeScript, and SQL to develop custom functionality aligned with business objectives and user needs.",
      },
      {
        title: "System Optimisation",
        description:
          "Diagnosed and resolved complex processing issues on UNIX and Windows environments, reducing system downtime and boosting platform efficiency.",
      },
    ],
    technologies: ["PHP", "TypeScript", "SQL"],
  },
  {
    role: "Application Support Engineer",
    company: "IIHRM",
    location: "Sri Lanka",
    period: "Aug 2021 – Jul 2023",
    highlights: [
      {
        title: "Application Maintenance",
        description:
          "Developed and maintained dynamic frontend interfaces and backend services using React, PHP (Laravel), and MySQL for enterprise online assessment tools.",
      },
      {
        title: "System Triage & Support",
        description:
          "Provided end-to-end technical support across FE and BE components, documenting ticket-triage processes to streamline issue resolution and maximise system reliability.",
      },
      {
        title: "Data Handling Optimisation",
        description:
          "Researched, troubleshot, and optimised backend database queries and services for high-volume data processing.",
      },
    ],
    technologies: ["React", "PHP", "Laravel", "MySQL"],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "BSc (Hons) Software Engineering",
    honours: "First Class Honours",
    institution: "University of Wolverhampton",
    location: "UK",
    period: "2020 – 2023",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Learning Website",
    image: testYourWorth,
    description:
      "A fully functional e-learning platform featuring user registration, interactive course modules, product listings, a secure shopping cart, online assessments, real-time progress tracking, discussion forums, and integrated payment gateways for seamless transactions.",
    technologies: ["Angular", "PHP", "HTML", "CSS", "MongoDB"],
  },
  {
    title: "Online Booking App",
    image: travelGuider,
    description:
      "An intuitive travel guide app featuring location search, detailed itineraries, and rental options for travel equipment, designed to enhance convenience and streamline your travel experience.",
    technologies: ["React Native", "Node.js", "Sass", "MongoDB", "Google API"],
  },
  {
    title: "Community Website",
    image: helpAgeInternational,
    description:
      "A comprehensive website featuring information on humanitarian efforts, healthy ageing programs, climate action, and gender equality. Includes global network integration, data-driven insights on ageing, advocacy resources, donation functionality, and accessibility-focused design to support older people worldwide.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "WordPress",
      "Google API",
      "SQL",
    ],
  },
  {
    title: "Charity Website",
    image: bartsCharity,
    description:
      "A dynamic charity website featuring donation integration, fundraising event management, supporter newsletters, impactful storytelling, online funding applications, and accessibility-focused design to enhance engagement and user experience.",
    technologies: ["JavaScript", "SCSS", "PHP", "WordPress", "Twig", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    image: fara,
    description:
      "A vibrant website featuring donation options, community program information, charity shop integration with online shopping, event updates, and accessibility-focused design to promote engagement and transform lives.",
    technologies: [
      "HTML",
      "CSS",
      "PHP",
      "WordPress",
      "Google API",
      "MySQL",
      "PayPal",
    ],
  },
];

export const CONTACT = {
  location: "Lisbon, Portugal",
  phone: "+351 965 617 062",
  email: "thulanjana1125@gmail.com",
};
