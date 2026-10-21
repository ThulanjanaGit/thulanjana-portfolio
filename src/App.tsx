import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div
          id="top"
          className="overflow-x-clip text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        >
          <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          />
          <a
            href="#main"
            className="sr-only rounded-lg bg-neutral-100 text-neutral-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
          >
            Skip to content
          </a>

          <div className="container mx-auto px-8">
            <Navbar />
            <main id="main">
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Recommendations />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};

export default App;
