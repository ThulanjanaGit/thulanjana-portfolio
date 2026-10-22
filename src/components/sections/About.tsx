import profilePic from "../../assets/profile.webp";
import { ABOUT_PARAGRAPHS, ABOUT_STATEMENT } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

// Each line of the statement starts one grid column further right, and the
// paragraphs continue the step at column 4. The statement spans 8 columns,
// so one column plus its gutter is (100% + gutter) / 8 of its width.
const STEPS = [
  "",
  "pl-[calc((100%+var(--spacing-gutter))/8)]",
  "pl-[calc((100%+var(--spacing-gutter))*2/8)]",
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-page py-chapter"
    >
      <div className="grid gap-x-gutter lg:grid-cols-12">
        <SectionHeading id="about-heading" className="lg:col-span-8">
          About
        </SectionHeading>
        <p className="text-lead lg:col-span-8 lg:row-start-2">
          {ABOUT_STATEMENT.map((line, index) => (
            <span key={line} className={`block ${STEPS[index]}`}>
              {line}
            </span>
          ))}
        </p>
        <img
          src={profilePic}
          alt="Portrait of Thulanjana Pramod in a dark suit"
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="mt-12 w-4/5 justify-self-end sm:w-1/2 lg:col-span-4 lg:col-start-9 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:w-full lg:self-end"
        />
        <div className="mt-12 max-w-[62ch] space-y-[0.9em] lg:col-span-5 lg:col-start-4 lg:row-start-3">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
