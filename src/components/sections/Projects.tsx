import { PROJECTS } from "../../data/projects";

// Tiles step down like the About statement. The heading fills cell 0; on
// phones the tiles alternate sides, with two columns the second column starts
// one step lower, and with three columns the second and third start one and
// two steps lower. Class names stay whole so Tailwind can find them.
const tileOffset = (cell: number) => {
  const twoColumns =
    cell % 2 === 1
      ? "max-sm:ml-[20%] sm:max-xl:mt-(--step)"
      : "max-sm:mr-[20%]";
  const threeColumns =
    cell % 3 === 1
      ? "xl:mt-(--step)"
      : cell % 3 === 2
        ? "xl:mt-[calc(var(--step)*2)]"
        : "";
  return `${twoColumns} ${threeColumns}`;
};

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      data-chapter="invert"
      className="px-page py-chapter [--step:clamp(2rem,6vw,6rem)]"
    >
      <ul className="grid items-start gap-x-gutter gap-y-16 sm:grid-cols-2 sm:gap-y-20 xl:grid-cols-3">
        <li>
          <h2 id="projects-heading" className="text-head">
            Projects
          </h2>
        </li>
        {PROJECTS.map(
          ({ title, kind, image, description, technologies, link }, index) => (
            <li key={title} className={tileOffset(index + 1)}>
              <div className="grid aspect-square place-items-center bg-surface p-[14%]">
                <img
                  src={image}
                  alt={`Screenshot of the ${title} ${kind.toLowerCase()}`}
                  width={480}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
              </div>
              <h3 className="mt-6 text-lead">{title}</h3>
              <p className="text-muted">{kind}</p>
              <p className="mt-4">{description}</p>
              <p className="mt-4 text-small text-muted">
                {technologies.join(", ")}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center underline"
                >
                  Visit site
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Projects;
