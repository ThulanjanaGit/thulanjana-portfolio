import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Recommendations from "./components/sections/Recommendations";
import Contact from "./components/sections/Contact";
import { useReveal } from "./hooks/useReveal";

const App = () => {
  useReveal();

  return (
    <div id="top" className="relative overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
