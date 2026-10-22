import { useSyncExternalStore } from "react";
import { EXPERIENCES } from "../data/experience";

const PARAM = "tech";
const CHANGE = "technologychange";

const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(CHANGE, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(CHANGE, onChange);
  };
};

const read = () => new URLSearchParams(window.location.search).get(PARAM);

const isKnown = (technology: string | null): technology is string =>
  technology !== null &&
  EXPERIENCES.some(({ technologies }) => technologies.includes(technology));

// The technology picked in the filter lives in the address (?tech=Python), so
// a filtered view can be shared. Server-rendered HTML shows none picked; an
// unknown value counts as none.
export const useTechnologyParam = () => {
  const value = useSyncExternalStore(subscribe, read, () => null);

  const select = (technology: string | null) => {
    const url = new URL(window.location.href);
    if (technology) url.searchParams.set(PARAM, technology);
    else url.searchParams.delete(PARAM);
    // Replace, not push: switching technologies should not fill the history.
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new Event(CHANGE));
  };

  return [isKnown(value) ? value : null, select] as const;
};
