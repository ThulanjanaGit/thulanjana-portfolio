import profilePic from "../../assets/profile.webp";
import { ABOUT_LEAD, ABOUT_PARAGRAPHS } from "../../data/profile";
import { stagger } from "../../utils/stagger";
import { SECTION_FRAME } from "../ui/section";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={SECTION_FRAME}
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <div className="grid gap-x-gutter lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p data-reveal style={stagger(1)} className="max-w-[34ch] text-lead">
            {ABOUT_LEAD}
          </p>
          <div
            data-reveal
            style={stagger(2)}
            className="mt-8 max-w-[62ch] space-y-[0.9em]"
          >
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div
          data-reveal
          style={stagger(3)}
          className="mt-12 w-3/5 justify-self-center sm:w-1/2 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:w-full lg:self-center"
        >
          <img
            src={profilePic}
            alt="Portrait of Thulanjana Pramod"
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            data-drift
          />
        </div>
      </div>
    </section>
  );
};

export default About;
