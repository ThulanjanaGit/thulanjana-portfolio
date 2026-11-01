import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/hanken-grotesk";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// Builds arrive prerendered (scripts/prerender.mjs); the dev server sends an
// empty root.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
