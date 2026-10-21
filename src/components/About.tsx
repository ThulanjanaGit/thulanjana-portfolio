import { ABOUT_TEXT, RESUME_URL } from "../constants";
import aboutImg from "../assets/about.webp";
import { motion } from "motion/react";

const About = () => {
  const formattedText = ABOUT_TEXT.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex max-w-lg items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="About Me"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">{formattedText}</div>
          </div>
          <div className="mt-6 flex max-w-xl justify-center lg:justify-center">
            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-lg bg-neutral-300 px-6 py-3 text-black"
            >
              Open Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
