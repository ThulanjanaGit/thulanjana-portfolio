import awsCloudEconomicsEssentials from "../assets/badges/aws-cloud-economics-essentials.webp";
import awsGenerativeAiEssentials from "../assets/badges/aws-generative-ai-essentials.webp";
import awsTechnicalAccredited from "../assets/badges/aws-technical-accredited.webp";
import type { Badge, Certification } from "../types";

// The AWS Partner courses are verified by their Credly badges. AWS has no
// public page to verify its other completion certificates, so those link to
// copies of the certificates in public/certificates.
const CERTIFICATES_URL = `${import.meta.env.BASE_URL}certificates/`;
const AWS_TECHNICAL_ACCREDITED_URL =
  "https://www.credly.com/badges/785897bc-d5e1-450c-9f83-1f2426ce19b1";
const AWS_GENERATIVE_AI_ESSENTIALS_URL =
  "https://www.credly.com/badges/0bcdcad1-d7bf-40ad-914b-771cb7478721";
const AWS_CLOUD_ECONOMICS_ESSENTIALS_URL =
  "https://www.credly.com/badges/93b125ec-a517-426d-b457-7be3a86e7e1f";

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Accreditation (Technical)",
    issuer: "AWS",
    issued: "Nov 2026",
    url: AWS_TECHNICAL_ACCREDITED_URL,
    skills: ["AWS Partner", "Cloud computing"],
  },
  {
    title: "Generative AI Essentials",
    issuer: "AWS",
    issued: "Nov 2026",
    url: AWS_GENERATIVE_AI_ESSENTIALS_URL,
    skills: ["AWS Partner", "Generative AI"],
  },
  {
    title: "Cloud Economics Essentials",
    issuer: "AWS",
    issued: "Nov 2026",
    url: AWS_CLOUD_ECONOMICS_ESSENTIALS_URL,
    skills: ["AWS Partner", "Cloud economics"],
  },
  {
    title: "AWS Technical Essentials",
    issuer: "AWS",
    issued: "Nov 2026",
    url: `${CERTIFICATES_URL}aws-technical-essentials.pdf`,
    skills: ["AWS", "Cloud infrastructure"],
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    issued: "Aug 2026",
    url: "https://verify.skilljar.com/c/c8fabtciown8",
    skills: ["Anthropic API", "Generative AI"],
  },
  {
    title: "Introduction to MCP",
    issuer: "Anthropic",
    issued: "Aug 2026",
    url: "https://verify.skilljar.com/c/4q2efkcfzuq4",
    skills: ["Model Context Protocol (MCP)", "APIs"],
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Aug 2026",
    url: "https://verify.skilljar.com/c/rhkt3sxx52ti",
    skills: ["Claude Code", "Prompt engineering"],
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    issued: "Jul 2026",
    url: "https://verify.skilljar.com/c/faz7mzehczkn",
    skills: ["Claude Code", "AI agents"],
  },
  {
    title: "Angular Certificate",
    issuer: "HackerRank",
    issued: "Nov 2024",
    credentialId: "095E90BC5C4C",
    url: "https://www.hackerrank.com/certificates/095e90bc5c4c",
    skills: ["Angular"],
  },
  {
    title: "JavaScript Certificate",
    issuer: "HackerRank",
    issued: "Nov 2024",
    credentialId: "16C2C2ED1165",
    url: "https://www.hackerrank.com/certificates/16c2c2ed1165",
    skills: ["JavaScript"],
  },
  {
    title: "Problem Solving Certificate",
    issuer: "HackerRank",
    issued: "Nov 2024",
    credentialId: "583335C9F5AB",
    url: "https://www.hackerrank.com/certificates/583335c9f5ab",
    skills: ["Problem solving"],
  },
  {
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    issued: "Nov 2024",
    url: "https://www.linkedin.com/learning/certificates/78bb8b9d7e5120c4f440e10cf2e4def4408b22f473bf3625b7e47b571d9d3bda",
    skills: ["React"],
  },
  {
    title: "JavaScript Essential Training",
    issuer: "LinkedIn Learning",
    issued: "Oct 2024",
    url: "https://www.linkedin.com/learning/certificates/496eb329bf34ecdc44c33624c3f2b86db53807a2087c28804f5429ba82e9de98",
    skills: ["JavaScript"],
  },
  {
    title: "HTML Essential Training",
    issuer: "LinkedIn Learning",
    issued: "Oct 2024",
    url: "https://www.linkedin.com/learning/certificates/d2cd1f0b9502ad19abbb228e965027da20fd96446e244e37c3ec81f45a538e67",
    skills: ["HTML"],
  },
];

// Shown in a row under the certificates, after Toptal's badge.
export const BADGES: Badge[] = [
  {
    title: "AWS Partner: Technical Accredited",
    url: AWS_TECHNICAL_ACCREDITED_URL,
    image: awsTechnicalAccredited,
  },
  {
    title: "AWS Partner: Generative AI Essentials",
    url: AWS_GENERATIVE_AI_ESSENTIALS_URL,
    image: awsGenerativeAiEssentials,
  },
  {
    title: "AWS Partner: Cloud Economics Essentials",
    url: AWS_CLOUD_ECONOMICS_ESSENTIALS_URL,
    image: awsCloudEconomicsEssentials,
  },
];
