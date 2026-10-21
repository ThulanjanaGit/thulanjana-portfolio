import project1 from "../assets/projects/Projects01.png";
import project2 from "../assets/projects/Projects02.png";
import project3 from "../assets/projects/Projects03.png";
import project4 from "../assets/projects/Projects04.png";
import project5 from "../assets/projects/Projects05.png";

export const RESUME_URL = `${import.meta.env.BASE_URL}Thulanjana-Pramod-Resume.pdf`;

export const SOCIAL = {
  linkedIn: "https://www.linkedin.com/in/thulanjana/",
  github: "https://github.com/ThulanjanaGit",
  xTwitter: "https://x.com/ThulanjanaX",
  instagram: "https://www.instagram.com/__pramod_00__/",
  whatsapp: "http://wa.me/351965617062",
};

export const HERO_CONTENT = ` Experienced Full Stack Web Developer with a first-class Software Engineering degree from the University of Wolverhampton. With 3+ years of expertise in both frontend and backend development, I specialize in building scalable, dynamic systems using technologies like React, Angular, PHP, Node.js, and MySQL. Passionate about creating high-quality, user-centered solutions, I leverage technical excellence to deliver efficient, innovative applications aligned with business goals.`;

export const ABOUT_TEXT = `Armed with a Bachelor of Science Honours in Software Engineering from the University of Wolverhampton, my journey as a Full Stack Web Developer has been shaped by my work at Fat Beehive. I have built dynamic, scalable systems and crafted high-quality websites, leveraging a diverse technology stack including React, Angular, PHP, Node.js, and MySQL. My experience spans both frontend and backend development, optimizing user experiences and functionality across projects.

In addition to customizing WordPress and integrating Salesforce for enhanced marketing automation, I have worked on creating seamless, data-driven solutions that drive customer engagement. Dedicated to continuous growth and innovation, I am passionate about translating complex requirements into user-centric, scalable web applications that align with evolving business goals.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Present",
    role: "Web Developer",
    company: "Fat Beehive - London, UK",
    description: [
      "Developed dynamic, responsive web applications using React for frontend and PHP for backend, implementing reusable components, state management, and seamless API integrations to deliver robust user experiences.",
      "Designed and maintained high-quality websites and applications using JavaScript, HTML, CSS, and PHP, with expertise in frameworks like React, Angular, and WordPress.",
      "Customized WordPress themes and plugins to improve functionality, integrate backend services, and enhance engagement across 30+ sites, aligning with business goals.",
      "Troubleshot and resolved technical issues across frontend and backend systems, documenting solutions to enhance system reliability and streamline workflows.",
    ],
    technologies: [
      "React 17-18",
      "Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js 18",
      "PHP 8",
      "Angular 13",
      "HTML5",
      "CSS3",
      "WordPress",
      "MySQL",
      "MongoDB",
      "Docker",
      "Twig",
    ],
  },
  {
    year: "July 2023 - Dec 2023",
    role: "Junior Web Developer",
    company: "Fat Beehive - London, UK",
    description: [
      "Developed user-friendly web applications using React and PHP, ensuring optimal performance, responsiveness, and seamless integration with RESTful APIs.",
      "Customized WordPress themes and plugins to enhance design, functionality, and user engagement, while integrating backend services and optimizing database performance.",
      "Created dynamic content templates with Twig, PHP, streamlining content management, customization, and efficient backend data handling.",
      "Provided technical support and troubleshooting for applications built with React, PHP, and Salesforce integrations, resolving complex issues across both frontend and backend systems.",
    ],
    technologies: [
      "React 17-18",
      "Redux",
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js 16",
      "PHP 8",
      "Angular 12",
      "HTML5",
      "CSS3",
      "WordPress",
      "MySQL",
      "MongoDB",
      "Symfony",
      "Twig",
    ],
  },
  {
    year: "Aug 2021 - June 2023",
    role: "Application Support Engineer",
    company:
      "Intercontinental Institute of Human Resource Management (iihrm) - Colombo, Sri Lanka",
    description: [
      "Gained extensive experience with React, Angular, PHP, Node.js, HTML, CSS, and MySQL, developing and maintaining, dynamic web applications with robust backend functionality.",
      "Provided technical support for enterprise-level systems, diagnosing and resolving complex issues across both FE and BE components to ensure system reliability and performance.",
      "Managed inquiries and trouble tickets, researching and implementing effective solutions, and optimizing backend services for better data handling and system efficiency.",
      "Documented ticket triage and troubleshooting steps for both frontend and backend technologies, streamlining issue resolution and improving overall system performance.",
    ],
    technologies: [
      "React 17",
      "Angular 11",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PHP 7.4",
      "HTML5",
      "CSS3",
      "Python",
      "MySQL",
      "MongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Learning Website",
    image: project1,
    description:
      "A fully functional e-learning platform featuring user registration, interactive course modules, product listings, a secure shopping cart, online assessments, real-time progress tracking, discussion forums, and integrated payment gateways for seamless transactions.",
    technologies: ["Angular", "PHP", "HTML", "CSS", "MongoDB"],
  },
  {
    title: "Online Booking App",
    image: project5,
    description:
      "An intuitive travel guide app featuring location search, detailed itineraries, and rental options for travel equipment, designed to enhance convenience and streamline your travel experience.",
    technologies: ["ReactNative", "Node.js", "SASS", "MongoDB", "Google API"],
  },
  {
    title: "Community Website",
    image: project2,
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
    image: project3,
    description:
      "A dynamic charity website featuring donation integration, fundraising event management, supporter newsletters, impactful storytelling, online funding applications, and accessibility-focused design to enhance engagement and user experience.",
    technologies: ["JavaScript", "SCSS", "PHP", "WordPress", "Twig", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A vibrant website features include donation options, community program information, charity shop integration with online shopping, event updates, and accessibility-focused design to promote engagement and transform lives.",
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
  address: "R. Nova do Rio 55, 4200-419 Porto, Portugal",
  addressLink: "https://maps.app.goo.gl/t7kL7Pz7JXmjrQWc7",
  phoneNoPT: "+351 965 617 062",
  email: "thulanjana1125@gmail.com",
};
