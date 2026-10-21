import * as m from "motion/react-m";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../../data/projects";
import { fadeIn } from "../../utils/motion";
import SectionHeading from "../ui/SectionHeading";
import TagList from "../ui/TagList";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <ul>
        {PROJECTS.map((project) => (
          <li
            key={project.title}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <m.div {...fadeIn("left")} className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={180}
                height={180}
                loading="lazy"
                alt={`Screenshot of the ${project.title}`}
                className="mb-6 rounded-sm"
              />
            </m.div>
            <m.div {...fadeIn("right")} className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <TagList items={project.technologies} />
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  Visit site
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </m.div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
