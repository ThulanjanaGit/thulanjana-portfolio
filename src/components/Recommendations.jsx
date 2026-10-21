import { useState } from "react";
import { RECOMMENDATIONS } from "../constants/recommendations.js";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % RECOMMENDATIONS.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + RECOMMENDATIONS.length) % RECOMMENDATIONS.length,
    );
  };

  const formattedDescription = RECOMMENDATIONS[currentIndex].description
    .split("\n")
    .map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Recommendations
      </motion.h2>

      <motion.div
        className="relative mx-auto max-w-5xl"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="mx-12 flex flex-col items-center justify-center lg:flex-row">
          <motion.div
            className="m-3 mb-6 flex min-h-172 w-full flex-col items-center justify-center lg:mb-0 lg:w-1/3"
            key={currentIndex}
          >
            <img
              src={RECOMMENDATIONS[currentIndex].image}
              alt={RECOMMENDATIONS[currentIndex].name}
              className="m-6 size-72 rounded-full object-cover"
            />
            <div className="flex items-center justify-center gap-4 text-4xl">
              {[
                {
                  href: RECOMMENDATIONS[currentIndex].linkedIn,
                  icon: <FaLinkedin />,
                },
                {
                  href: RECOMMENDATIONS[currentIndex].email,
                  icon: <TbMailFilled />,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-2/3">
            <h6 className="mb-2 text-xl font-semibold">
              {RECOMMENDATIONS[currentIndex].name}
            </h6>
            <p className="mb-2 text-lg font-medium text-neutral-400">
              {RECOMMENDATIONS[currentIndex].position}
            </p>
            <div className="text-neutral-500">{formattedDescription}</div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 right-0 left-0 mt-4 flex justify-between">
          <button
            onClick={handlePrev}
            className="cursor-pointer rounded-full bg-neutral-800 px-4 py-2 text-white shadow-lg hover:bg-neutral-700"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer rounded-full bg-neutral-800 px-4 py-2 text-white shadow-lg hover:bg-neutral-700"
          >
            &gt;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Recommendations;
