import nunoOliveira from "../assets/recommendations/nuno-oliveira.webp";
import rajindPamoda from "../assets/recommendations/rajind-pamoda.webp";
import kamoshSamaraweera from "../assets/recommendations/kamosh-samaraweera.webp";
import achiniFernando from "../assets/recommendations/achini-fernando.webp";
import type { Recommendation } from "../types";

export const RECOMMENDATIONS: Recommendation[] = [
  {
    name: "Nuno Oliveira",
    role: "Head of Platform Engineering",
    relationship: "Managed Thulanjana directly",
    paragraphs: [
      "I had the pleasure of working alongside Pramod and I highly recommend him as a team member. He is a dependable, conscientious colleague who brings a fantastic work ethic and a warm, professional attitude to work every day.",
      "What stands out most about Pramod is his autonomy and commitment. He takes high-level direction well, manages his time independently, and takes great pride in meeting deadlines. He approaches every initiative with curiosity and an eagerness to continuously learn and expand his capabilities. On an interpersonal level, he treats everyone with complete respect and builds great relationships across the entire team. He will be a fantastic asset to any organization.",
    ],
    image: nunoOliveira,
  },
  {
    name: "Rajind Pamoda",
    role: "Advanced Engineer",
    organisation: "Capgemini Engineering",
    paragraphs: [
      "I've had the privilege of working alongside Thulanjana, in my role as a Lead Support Developer at Fatbeehive in the UK. It has been a true pleasure to witness his progression from an entry-level developer to a highly proficient and accomplished team member.",
      "Thulanjana possesses an impressive and diverse skill set, which includes proficiency in PHP, MySQL, HTML, Cascading Style Sheets (CSS), Project Management, Databases, Collaboration & Teamwork, Communication, and Problem Solving. His remarkable ability to swiftly grasp new concepts and devise effective solutions has made a substantial contribution to our team's success.",
      "What sets Thulanjana apart is his exceptional aptitude for teamwork and his proactive approach. He seamlessly integrates into our team's dynamics, consistently fostering a positive work environment. Thulanjana not only consistently delivers outstanding performance but also takes the initiative in introducing innovative ideas and refining our processes.",
      "I have no doubt that Thulanjana's career will continue to thrive, and I wholeheartedly endorse him for any role in development or problem-solving. He is a professional who not only meets but consistently exceeds expectations. It has been a pleasure working alongside him, and I eagerly anticipate witnessing his ongoing success.",
    ],
    image: rajindPamoda,
    linkedIn: "https://www.linkedin.com/in/rajind-pamoda/",
  },
  {
    name: "Kamosh Samaraweera",
    role: "Senior Frontend Developer",
    organisation: "Fat Beehive",
    excerpt: ["An exceptional talent", "in web development."],
    paragraphs: [
      "I had the pleasure of working with Thulanjana, and I can confidently say that he is an exceptional talent in web development. Thulanjana is a fast learner who catches up quickly on new technologies and methodologies. His proficiency in both backend and frontend development is impressive, demonstrating a deep understanding and skill in PHP, SASS, MySQL, and WordPress.",
      "He excels in custom development as well as utilizing page builders, which showcases his versatility and adaptability in any project environment. His dedication to delivering high-quality work and his ability to seamlessly integrate into any team make him a valuable asset. I highly recommend Thulanjana for any development role; his expertise and enthusiasm are truly commendable.",
    ],
    image: kamoshSamaraweera,
    linkedIn: "https://www.linkedin.com/in/kamosh-samaraweera/",
  },
  {
    name: "Achini Fernando",
    role: "Head of Coordination",
    organisation: "Fat Beehive",
    paragraphs: [
      "I have the pleasure of working with Thulanjana at Fatbeehive, where he quickly distinguished himself as a talented web developer. His rapid growth and proficiency in PHP, HTML, CSS and MySQL combined with his excellent collaboration and communication skills, make him an invaluable team member. Thulanjana’s ability to learn quickly and his technical expertise ensure he consistently delivers high-quality work. He is an asset to any development team. I highly recommend Thulanjana for any development role and am confident he will continue to excel in his career.",
    ],
    image: achiniFernando,
    linkedIn: "https://www.linkedin.com/in/achini-fernando-8848761a1/",
  },
];
