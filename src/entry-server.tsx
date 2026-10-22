import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

// The page as HTML, for scripts/prerender.mjs to write into the build.
export const render = () =>
  renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
