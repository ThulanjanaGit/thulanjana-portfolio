import type { Variants } from "motion/react";
import * as m from "motion/react-m";
import profilePic from "../assets/profile.webp";
import { HERO_CONTENT, RESUME_URL } from "../constants";

const container = (delay: number): Variants => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <m.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Thulanjana Pramod
            </m.h1>
            <m.p
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web Developer
            </m.p>
            <m.p
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </m.p>
            <m.div
              variants={container(0.45)}
              initial="hidden"
              animate="visible"
              className="mb-10 flex flex-wrap justify-center gap-4 lg:mb-0"
            >
              <a
                href="#contact"
                className="rounded-lg bg-neutral-300 px-6 py-3 font-medium text-neutral-950 transition-colors hover:bg-white"
              >
                Contact me
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-700 px-6 py-3 font-medium transition-colors hover:border-neutral-400 hover:text-white"
              >
                View Resume
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </m.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <m.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-lg rounded-2xl object-cover"
              src={profilePic}
              alt="Thulanjana Pramod"
              width={1024}
              height={1024}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
