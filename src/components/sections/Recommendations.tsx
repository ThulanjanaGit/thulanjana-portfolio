import { RECOMMENDATIONS } from "../../data/recommendations";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";

const featured = RECOMMENDATIONS.find(({ excerpt }) => excerpt);

// The quote stays on two lines at every width: its longer line measures 909px
// at 100px, so 10.8cqw fits a phone and the heading size takes over above.
const Recommendations = () => {
  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-heading"
      className={`@container ${SECTION_FRAME}`}
    >
      <SectionHeading id="recommendations-heading">
        Recommendations
      </SectionHeading>
      {featured?.excerpt && (
        <figure>
          <blockquote className="text-[min(var(--text-head),10.8cqw)] leading-[0.95] font-medium tracking-[-0.04em]">
            <p>
              {featured.excerpt.map((line, index, lines) => (
                <span
                  key={line}
                  data-reveal
                  style={stagger(index + 1)}
                  className="block"
                >
                  {index === 0 && "“"}
                  {line}
                  {index === lines.length - 1 && "”"}
                </span>
              ))}
            </p>
          </blockquote>
          <figcaption
            data-reveal
            style={stagger(3)}
            className="mt-6 text-muted"
          >
            {featured.name}, {featured.role}
            {featured.organisation && ` at ${featured.organisation}`}
          </figcaption>
        </figure>
      )}
      <ul className="mt-20 grid gap-x-gutter gap-y-16 md:grid-cols-2">
        {RECOMMENDATIONS.map(
          ({
            name,
            role,
            organisation,
            relationship,
            paragraphs,
            image,
            linkedIn,
          }) => {
            const [first, ...rest] = paragraphs;
            return (
              <li key={name}>
                <div className="flex items-center gap-5 lg:block">
                  <img
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="size-20 shrink-0 bg-surface object-cover lg:size-28"
                  />
                  <div className="lg:mt-6">
                    <h3 className="text-lead">{name}</h3>
                    <p className="text-muted">
                      {organisation ? `${role}, ${organisation}` : role}
                    </p>
                    <p className="text-small text-muted">{relationship}</p>
                  </div>
                </div>
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center underline"
                >
                  LinkedIn
                  <span className="sr-only">: {name} (opens in a new tab)</span>
                </a>
                <blockquote className="mt-4">
                  <p>{first}</p>
                  {rest.length > 0 && (
                    <details className="group">
                      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center underline [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">
                          Read the full recommendation
                        </span>
                        <span className="hidden group-open:inline">
                          Show less
                        </span>
                      </summary>
                      <div className="space-y-[0.9em]">
                        {rest.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  )}
                </blockquote>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Recommendations;
