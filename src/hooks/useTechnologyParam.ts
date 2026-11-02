import { useMemo, useSyncExternalStore } from "react";
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

// The query string rather than a parsed list, so the snapshot stays the same
// between renders until the address changes.
const read = () => window.location.search;

const isKnown = (technology: string) =>
  EXPERIENCES.some(({ technologies }) => technologies.includes(technology));

// The technologies picked in the filter live in the address
// (?tech=React&tech=Python), in the order they were picked, so a filtered
// view can be shared. Server-rendered HTML shows none picked; unknown values
// are dropped.
export const useTechnologyParam = () => {
  const search = useSyncExternalStore(subscribe, read, () => "");
  const selected = useMemo(
    () =>
      [...new Set(new URLSearchParams(search).getAll(PARAM))].filter(isKnown),
    [search],
  );

  const select = (technologies: string[]) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(PARAM);
    for (const technology of technologies) {
      url.searchParams.append(PARAM, technology);
    }
    // Replace, not push: switching technologies should not fill the history.
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new Event(CHANGE));
  };

  return [selected, select] as const;
};
