import { RECOMMENDATIONS } from "../../data/recommendations";
import { stagger } from "../../utils/stagger";
import SectionHeading from "../ui/SectionHeading";

const featured = RECOMMENDATIONS.find(({ excerpt }) => excerpt);

// The excerpt's lines run from margin to margin, a word at each edge. The
// longer line measures 909px at 100px, plus at least 0.3em between words, so
// 10.2cqw keeps it inside the page width; it stops growing at the display size.
interface QuoteLineProps {
  index: number;
  line: string;
  first: boolean;
  last: boolean;
}

const QuoteLine = ({ index, line, first, last }: QuoteLineProps) => {
  const words = line.split(" ");
  return (
    <span
      data-reveal
      style={stagger(index + 1)}
      className="flex justify-between gap-x-[0.3em]"
    >
      {words.map((word, index) => (
        <span key={word}>
          {first && index === 0 && "“"}
          {word}
          {last && index === words.length - 1 && "”"}
        </span>
      ))}
    </span>
  );
};

const Recommendations = () => {
  return (
    <section id="recommendations" aria-labelledby="recommendations-heading">
      <div data-chapter="field" className="@container px-page py-chapter">
        <SectionHeading id="recommendations-heading">
          Recommendations
        </SectionHeading>
        {featured?.excerpt && (
          <figure>
            <blockquote className="text-[min(8.75rem,10.2cqw)] leading-none font-medium tracking-[-0.04em]">
              <p>
                {featured.excerpt.map((line, index, lines) => (
                  <QuoteLine
                    key={line}
                    index={index}
                    line={line}
                    first={index === 0}
                    last={index === lines.length - 1}
                  />
                ))}
              </p>
            </blockquote>
            <figcaption
              data-reveal
              style={stagger(3)}
              className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:gap-x-gutter"
            >
              <span>{featured.name}</span>
              <span>{featured.role}</span>
              <span>{featured.organisation}</span>
            </figcaption>
          </figure>
        )}
      </div>
      <ul className="grid gap-x-gutter gap-y-16 px-page py-chapter lg:grid-cols-3">
        {RECOMMENDATIONS.map(
          ({ name, role, organisation, paragraphs, image, linkedIn }) => {
            const [first, ...rest] = paragraphs;
            return (
              <li key={name}>
                <div className="flex items-center gap-5 lg:block">
                  <img
                    src={image}
                    alt=""
                    width={576}
                    height={576}
                    loading="lazy"
                    decoding="async"
                    className="size-20 shrink-0 bg-surface object-cover lg:size-28"
                  />
                  <div className="lg:mt-6">
                    <h3 className="text-lead">{name}</h3>
                    <p className="text-muted">
                      {role}, {organisation}
                    </p>
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
