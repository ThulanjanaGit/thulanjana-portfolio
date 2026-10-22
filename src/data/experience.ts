import type { Experience } from "../types";

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
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "Django",
      "FastAPI",
      "SQLAlchemy",
      "REST APIs",
      "GraphQL",
      "MCP",
      "AWS",
      "Google Cloud",
      "BigQuery",
      "Docker",
      "DevOps",
      "Bitbucket",
      "Datadog",
      "pytest",
      "Jest",
      "Jira",
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
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Sass",
      "Webpack",
      "Node.js",
      "Express",
      "NestJS",
      "PHP",
      "WordPress",
      "Twig",
      "MySQL",
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Jest",
      "React Testing Library",
      "Supertest",
      "GitHub",
      "Figma",
      "Agile",
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
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "Redux",
      "Sass",
      "Node.js",
      "PHP",
      "WordPress",
      "Twig",
      "SQL",
      "MySQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket",
      "Figma",
      "Agile",
    ],
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
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "AngularJS",
      "Material UI",
      "HTML",
      "CSS",
      "Sass",
      "Node.js",
      "PHP",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "MySQL",
      "Google Cloud",
      "GitHub",
      "Agile",
    ],
  },
];
