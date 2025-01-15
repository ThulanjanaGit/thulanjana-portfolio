import {
  DiAngularSimple,
  DiNodejs,
  DiCss3,
  DiHtml5,
  DiJava,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiPython,
  DiWordpress,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const iconData = [
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    name: "React",
    experience: "3 years",
    variantDelay: 3,
  },
  {
    icon: <DiAngularSimple className="text-7xl text-indigo-500" />,
    name: "Angular",
    experience: "3 years",
    variantDelay: 2.5,
  },
  {
    icon: <DiWordpress className="text-7xl text-gray-600" />,
    name: "WordPress",
    experience: "2 years",
    variantDelay: 2,
  },
  {
    icon: <DiNodejs className="text-7xl text-blue-500" />,
    name: "Node.js",
    experience: "3 years",
    variantDelay: 3,
  },
  {
    icon: <DiJavascript className="text-7xl text-yellow-500" />,
    name: "JavaScript",
    experience: "4 years",
    variantDelay: 2.5,
  },
  {
    icon: <DiHtml5 className="text-7xl text-green-500" />,
    name: "HTML",
    experience: "4 years",
    variantDelay: 2,
  },
  {
    icon: <DiCss3 className="text-7xl text-red-700" />,
    name: "CSS",
    experience: "4 years",
    variantDelay: 3,
  },
  {
    icon: <DiPhp className="text-7xl text-purple-600" />,
    name: "PHP",
    experience: "3 years",
    variantDelay: 2.5,
  },
  {
    icon: <DiPython className="text-7xl text-yellow-700" />,
    name: "Python",
    experience: "2 years",
    variantDelay: 2,
  },
  {
    icon: <DiJava className="text-7xl text-red-600" />,
    name: "Java",
    experience: "2 years",
    variantDelay: 3,
  },
  {
    icon: <DiMysql className="text-7xl text-green-500" />,
    name: "MySQL",
    experience: "3 years",
    variantDelay: 2.5,
  },
  {
    icon: <DiMongodb className="text-7xl text-green-500" />,
    name: "MongoDB",
    experience: "3 years",
    variantDelay: 2,
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-col justify-center items-center">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-3xl flex flex-wrap justify-center gap-4"
      >
        {iconData.map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants(item.variantDelay)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative my-3 rounded-2xl border-4 border-neutral-800 p-4 group hover:bg-white"
          >
            <div
              className={
                "group-hover:text-white transition-colors duration-300 group-hover:opacity-0"
              }
            >
              <div className={item.icon.props.className}>{item.icon}</div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300">
              <div className="text-center">
                <p>{item.name}</p>
                <p>{item.experience}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
