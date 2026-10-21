import * as m from "motion/react-m";
import aboutImg from "../assets/about.webp";
import { ABOUT_PARAGRAPHS } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-neutral-900 pb-4"
    >
      <SectionHeading id="about-heading">
        About <span className="text-neutral-500">Me</span>
      </SectionHeading>
      <div className="flex flex-wrap">
        <m.div {...fadeIn("left")} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex max-w-lg items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt=""
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </m.div>
        <m.div {...fadeIn("right")} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl space-y-6 py-6">
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
