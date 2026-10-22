// Skills in the order of the technology filter. Each one is matched against
// the technologies of the roles and projects; those with no match and no
// entry in OTHER_USES are listed on their own.
export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Redux",
  "Angular",
  "Node.js",
  "Python",
  "FastAPI",
  "Django",
  "PHP",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Google Cloud",
];

// Where a skill was used outside the roles and projects on the page.
export const OTHER_USES: Partial<Record<string, string>> = {
  "Tailwind CSS": "this site",
};
