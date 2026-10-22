import testYourWorth from "../assets/projects/test-your-worth.webp";
import helpAgeInternational from "../assets/projects/helpage-international.webp";
import bartsCharity from "../assets/projects/barts-charity.webp";
import fara from "../assets/projects/fara.webp";
import travelGuider from "../assets/projects/travel-guider.webp";
import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: "Test Your Worth",
    kind: "E-learning website",
    image: testYourWorth,
    description:
      "A fully functional e-learning platform featuring user registration, interactive course modules, product listings, a secure shopping cart, online assessments, real-time progress tracking, discussion forums, and integrated payment gateways for seamless transactions.",
    technologies: ["Angular", "PHP", "HTML", "CSS", "MongoDB"],
  },
  {
    title: "Travel Guider",
    kind: "Online booking app",
    image: travelGuider,
    description:
      "An intuitive travel guide app featuring location search, detailed itineraries, and rental options for travel equipment, designed to enhance convenience and streamline your travel experience.",
    technologies: ["React Native", "Node.js", "Sass", "MongoDB", "Google API"],
  },
  {
    title: "HelpAge International",
    kind: "Community website",
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
    title: "Barts Charity",
    kind: "Charity website",
    image: bartsCharity,
    description:
      "A dynamic charity website featuring donation integration, fundraising event management, supporter newsletters, impactful storytelling, online funding applications, and accessibility-focused design to enhance engagement and user experience.",
    technologies: ["JavaScript", "SCSS", "PHP", "WordPress", "Twig", "MongoDB"],
  },
  {
    title: "FARA",
    kind: "E-commerce website",
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
