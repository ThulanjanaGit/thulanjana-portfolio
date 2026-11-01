import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Recommendations from "../components/sections/Recommendations";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Skills />
      <Recommendations />
      <Contact />
    </>
  );
};

export default Home;
