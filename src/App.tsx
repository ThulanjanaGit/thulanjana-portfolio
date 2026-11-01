import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { projectPath, VISIBLE_PROJECTS } from "./data/projects";
import { useReveal } from "./hooks/useReveal";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";

interface AppProps {
  // The page's address, such as "/" or "/projects/garci-lanka".
  path: string;
}

// The address picks the page: a case study, or else the home page. Each page
// is prerendered to its own HTML file, so moving between them is an ordinary
// page load.
const App = ({ path }: AppProps) => {
  useReveal();

  const project = VISIBLE_PROJECTS.find(
    ({ slug }) => projectPath(slug) === path,
  );

  return (
    <div id="top" className="relative overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ground"
      >
        Skip to content
      </a>
      <Header home={!project} />
      <main id="main">
        {project ? <CaseStudy project={project} /> : <Home />}
      </main>
      <Footer home={!project} />
    </div>
  );
};

export default App;
