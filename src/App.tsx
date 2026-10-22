import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Recommendations from "./components/sections/Recommendations";
import Projects from "./components/sections/Projects";
import Toptal from "./components/sections/Toptal";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div id="top" className="overflow-x-clip">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="container mx-auto px-page">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Recommendations />
            <Projects />
            <Toptal />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
