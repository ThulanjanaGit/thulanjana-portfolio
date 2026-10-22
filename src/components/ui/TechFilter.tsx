import { EXPERIENCES } from "../../data/experience";
import { VISIBLE_PROJECTS } from "../../data/projects";
import { useHydrated } from "../../hooks/useHydrated";
import { alphabetical } from "../../utils/alphabetical";

const list = new Intl.ListFormat("en-GB", { type: "conjunction" });

// Every technology from the roles, A to Z.
const TECHNOLOGIES = alphabetical([
  ...new Set(EXPERIENCES.flatMap(({ technologies }) => technologies)),
]);

// "PHP: Web Developer at Fat Beehive and …; the project Test Your Worth."
const describe = (technology: string) => {
  const roles = EXPERIENCES.filter(({ technologies }) =>
    technologies.includes(technology),
  );
  const projects = VISIBLE_PROJECTS.filter(({ technologies }) =>
    technologies.includes(technology),
  );
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
  return `${technology}: ${parts.join("; ")}.`;
};

interface TechFilterProps {
  selected: string | null;
  onSelect: (technology: string | null) => void;
}

// Buttons from 640px; on phones the same choice is a select, because the
// full list would fill several screens as buttons. Before scripts run it is
// a plain list.
const TechFilter = ({ selected, onSelect }: TechFilterProps) => {
  const hydrated = useHydrated();

  return (
    <div>
      {hydrated ? (
        <>
          <label className="grid gap-2 sm:hidden">
            <span className="font-medium">Filter by technology</span>
            <select
              name="tech"
              value={selected ?? ""}
              onChange={(event) => onSelect(event.target.value || null)}
              className="min-h-11 w-full cursor-pointer bg-ground px-3 text-ink"
            >
              <option value="">All technologies</option>
              {TECHNOLOGIES.map((technology) => (
                <option key={technology} value={technology} translate="no">
                  {technology}
                </option>
              ))}
            </select>
          </label>
          <fieldset className="hidden sm:block">
            <legend className="mb-4 font-medium">Filter by technology</legend>
            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  translate="no"
                  aria-pressed={selected === technology}
                  onClick={() =>
                    onSelect(selected === technology ? null : technology)
                  }
                  className="min-h-11 cursor-pointer bg-ground px-3 underline-offset-[0.18em] [transition:background-color_var(--t-hover)_ease,color_var(--t-hover)_ease,transform_var(--t-press)_var(--ease-out)] hover:underline active:scale-[0.97] aria-pressed:bg-ink aria-pressed:text-ground"
                >
                  {technology}
                </button>
              ))}
            </div>
          </fieldset>
        </>
      ) : (
        <>
          <p id="tech-filter-label" className="mb-4 font-medium">
            Technologies
          </p>
          <ul
            aria-labelledby="tech-filter-label"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {TECHNOLOGIES.map((technology) => (
              <li key={technology} translate="no">
                {technology}
              </li>
            ))}
          </ul>
        </>
      )}
      {/* Room for the longest sentence at each width (measured), so the
          line-up below stays put while you switch technologies. Only the
          result is a live region, so the prompt is not read out on load. */}
      <div className="mt-6 min-h-[4lh] sm:min-h-[3lh] md:min-h-[2lh] 2xl:min-h-[1lh]">
        {hydrated && !selected && <p>Pick one to see where I used it.</p>}
        <p aria-live="polite">{selected && describe(selected)}</p>
      </div>
    </div>
  );
};

export default TechFilter;
