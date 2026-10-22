import { EXPERIENCES } from "../../data/experience";
import { PROJECTS } from "../../data/projects";
import { OTHER_USES, SKILLS } from "../../data/skills";
import { useHydrated } from "../../hooks/useHydrated";

const list = new Intl.ListFormat("en-GB", { type: "conjunction" });

const usesOf = (skill: string) => ({
  roles: EXPERIENCES.filter(({ technologies }) => technologies.includes(skill)),
  projects: PROJECTS.filter(({ technologies }) => technologies.includes(skill)),
  other: OTHER_USES[skill],
});

const hasUse = (skill: string) => {
  const { roles, projects, other } = usesOf(skill);
  return roles.length > 0 || projects.length > 0 || other !== undefined;
};

const FILTERABLE = SKILLS.filter(hasUse);
const UNMATCHED = SKILLS.filter((skill) => !hasUse(skill));

// "PHP: Web Developer at Fat Beehive and …; the projects A, B and C."
const describe = (skill: string) => {
  const { roles, projects, other } = usesOf(skill);
  const parts: string[] = [];
  if (roles.length > 0) {
    parts.push(
      list.format(roles.map(({ role, company }) => `${role} at ${company}`)),
    );
  }
  if (projects.length > 0) {
    const noun = projects.length === 1 ? "the project" : "the projects";
    parts.push(`${noun} ${list.format(projects.map(({ title }) => title))}`);
  }
  if (other) parts.push(other);
  return `${skill}: ${parts.join("; ")}.`;
};

interface TechFilterProps {
  selected: string | null;
  onSelect: (skill: string | null) => void;
}

const TechFilter = ({ selected, onSelect }: TechFilterProps) => {
  const hydrated = useHydrated();

  return (
    <div className="max-w-5xl">
      {hydrated ? (
        <fieldset>
          <legend className="mb-4 font-medium">Technologies</legend>
          <div className="flex flex-wrap gap-2">
            {FILTERABLE.map((skill) => (
              <button
                key={skill}
                type="button"
                aria-pressed={selected === skill}
                onClick={() => onSelect(selected === skill ? null : skill)}
                className="min-h-11 cursor-pointer bg-ground px-3 underline-offset-[0.18em] [transition:background-color_var(--t-hover)_ease,color_var(--t-hover)_ease,transform_var(--t-press)_var(--ease-out)] hover:underline active:scale-[0.97] aria-pressed:bg-field aria-pressed:text-field-ink"
              >
                {skill}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <>
          <p id="tech-filter-label" className="mb-4 font-medium">
            Technologies
          </p>
          <ul
            aria-labelledby="tech-filter-label"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {FILTERABLE.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      )}
      <p className="mt-4 text-muted">Also: {list.format(UNMATCHED)}.</p>
      <p aria-live="polite" className="mt-6 min-h-[3lh] max-w-[62ch]">
        {hydrated &&
          (selected ? describe(selected) : "Pick one to see where I used it.")}
      </p>
    </div>
  );
};

export default TechFilter;
