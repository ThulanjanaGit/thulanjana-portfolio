import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiMysql,
  DiPhp,
  DiRedis,
} from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconData = [
  {
    icon: <RiReactjsLine className="text-7xl text-cyan-400" />,
    name: "React",
    experience: "3 years",
    variantDelay: 2.5,
  },
  {
    icon: <TbBrandNextjs className="text-7xl" />,
    name: "Next.js",
    experience: "2 years",
    variantDelay: 2,
  },
  {
    icon: <SiMongodb className="text-7xl text-green-500" />,
    name: "MongoDB",
    experience: "2 years",
    variantDelay: 3,
  },
  {
    icon: <DiRedis className="text-7xl text-red-700" />,
    name: "Redis",
    experience: "1.5 years",
    variantDelay: 2.5,
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
    variantDelay: 3,
  },
  {
    icon: <DiCss3 className="text-7xl text-red-700" />,
    name: "CSS",
    experience: "4 years",
    variantDelay: 2.5,
  },
  {
    icon: <DiPhp className="text-7xl text-purple-600" />,
    name: "PHP",
    experience: "2 years",
    variantDelay: 2,
  },
  {
    icon: <DiMysql className="text-7xl text-green-500" />,
    name: "MySQL",
    experience: "3 years",
    variantDelay: 2,
  },
];

export default iconData;
