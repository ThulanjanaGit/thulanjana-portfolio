import type { Education, Language } from "../types";

export const EDUCATION: Education[] = [
  {
    degree: "BSc (Hons) Software Engineering",
    honours: "First Class Honours",
    institution: "University of Wolverhampton",
    location: "UK",
    period: "Oct 2020 – Oct 2023",
    skills: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "C",
      "PHP",
      "React",
      "React Native",
      "HTML",
      "CSS",
      "MySQL",
      "AWS",
      "Java development",
      "Software development",
      "Project management",
      "Teamwork",
      "Written communication",
      "English",
    ],
  },
  {
    degree: "G.C.E. (A/L), Physical Sciences",
    institution: "Maliyadeva College",
    location: "Sri Lanka",
    period: "May 2017 – Aug 2019",
  },
  {
    degree: "G.C.E. (O/L)",
    institution: "Maliyadeva College",
    location: "Sri Lanka",
    period: "Jan 2015 – Dec 2016",
  },
];

export const LANGUAGES: Language[] = [
  { name: "English", level: "Professional working proficiency", cefr: "C1" },
  { name: "Portuguese", level: "Basic", cefr: "A1" },
];
