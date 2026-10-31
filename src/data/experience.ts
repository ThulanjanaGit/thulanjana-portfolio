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
          "Build React, Next.js and TypeScript frontends backed by Node.js and Python (Django, FastAPI) services on AWS and GCP for telecom, fintech and data governance clients.",
      },
      {
        title: "Cloud Migration & CI/CD",
        description:
          "Contributed to moving the whole platform from AWS (Lambda, S3, SQS, ECR) to GCP (Cloud Run, GKE, BigQuery, Cloud Storage, Artifact Registry), including Bitbucket Pipelines that automate version-gated releases, publish container images to Artifact Registry and sync runtime config to Cloud Storage.",
      },
      {
        title: "LLM Evaluation Platform",
        description:
          "Designed and extracted JudgeKit, a domain-agnostic Python library that uses Bayesian IRT models (PyMC) to calibrate quality scores from multiple LLMs across large datasets.",
      },
      {
        title: "API Integration",
        description:
          "Built REST, GraphQL and MCP endpoints, including a FastAPI service combined with a stateless MCP agent, giving the frontend, microservices and AI workflows a single API layer.",
      },
      {
        title: "Distributed Batch Processing",
        description:
          "Built resumable async batch jobs on Cloud Run, BigQuery and Cloud Storage, keeping heavy scientific dependencies in their own container images.",
      },
      {
        title: "Reusable Libraries",
        description:
          "Wrote a framework-agnostic audit trail library for SQLAlchemy and Django that records data changes at the session flush layer.",
      },
      {
        title: "Quality Assurance & Observability",
        description:
          "Maintain 500+ automated tests across pytest, Jest and React Testing Library, and set up Datadog monitoring and error alerting.",
      },
      {
        title: "Agile Collaboration",
        description:
          "Lead code reviews and take part in sprint planning and architecture documentation in Scrum teams with UI/UX and backend engineers.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "Node.js",
      "Python",
      "FastAPI",
      "Django",
      "SQLAlchemy",
      "PostgreSQL",
      "pytest",
      "REST APIs",
      "GraphQL",
      "MCP",
      "PyMC",
      "Google Cloud",
      "BigQuery",
      "AWS",
      "Docker",
      "Bitbucket",
      "CI/CD",
      "Datadog",
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
          "Built responsive React and TypeScript applications for enterprise clients including Siemens Energy, and a reusable frontend setup used across 30+ UK platforms.",
      },
      {
        title: "Full-Stack & API Architecture",
        description:
          "Built REST APIs with Node.js, Express and TypeScript and connected them to the frontend using test-driven development (TDD). Also customised PHP and headless WordPress backends.",
      },
      {
        title: "Testing & Quality",
        description:
          "Wrote unit and integration tests with Jest, React Testing Library and Supertest, which made releases faster and more reliable.",
      },
      {
        title: "Performance & SEO",
        description:
          "Improved Core Web Vitals, responsiveness and load times through better asset bundling, Sass refactoring and modern JavaScript.",
      },
      {
        title: "Data Processing & Integration",
        description:
          "Wrote Python scripts to speed up data processing and improve content extraction and search across large websites.",
      },
      {
        title: "Cloud Deployment",
        description:
          "Deployed and maintained applications on AWS (EC2, S3, CloudFront, Lambda, API Gateway, RDS, CloudWatch, IAM) across development, staging and production environments.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Sass",
      "Webpack",
      "Node.js",
      "Express",
      "REST APIs",
      "Python",
      "PHP",
      "WordPress",
      "Twig",
      "MySQL",
      "Jest",
      "React Testing Library",
      "Supertest",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "CI/CD",
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
          "Delivered UI improvements, performance upgrades and bug fixes on major UK charity websites using React, TypeScript and Sass.",
      },
      {
        title: "Full-Stack Feature Delivery",
        description:
          "Built custom features with TypeScript, PHP and SQL, including Twilio integrations, shaped around business goals and user needs.",
      },
      {
        title: "Scripting & Automation",
        description:
          "Wrote Node.js and Python scripts for data imports and routine maintenance tasks.",
      },
      {
        title: "System Optimisation",
        description:
          "Diagnosed and fixed processing issues on UNIX and Windows servers, reducing downtime.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Sass",
      "Node.js",
      "Python",
      "PHP",
      "WordPress",
      "Twig",
      "Twilio",
      "MySQL",
      "MongoDB",
      "SQL",
      "AWS",
      "Google Cloud",
      "Docker",
      "CI/CD",
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
          "Developed and maintained Angular 12 and React frontends in TypeScript, with RxJS and Material UI, for enterprise online assessment tools.",
      },
      {
        title: "Backend Services",
        description:
          "Built and maintained backend services with Node.js, TypeScript and MySQL.",
      },
      {
        title: "Cloud Deployment",
        description:
          "Deployed and supported applications on Microsoft Azure and AWS (EC2, S3, RDS, CloudWatch).",
      },
      {
        title: "System Support & Optimisation",
        description:
          "Provided end-to-end support across frontend and backend, documented the ticket triage process to speed up issue resolution, and tuned slow database queries and backend services that handled large volumes of data.",
      },
    ],
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "Material UI",
      "Sass",
      "HTML",
      "CSS",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "MySQL",
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "GitHub",
      "Agile",
    ],
  },
];
