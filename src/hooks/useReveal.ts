import { useEffect } from "react";

// Reveals [data-reveal] elements once, as they scroll into view, by setting
// data-in (index.css holds the hidden and shown states, and opens any
// [data-shutter] picture inside). An attribute rather than a class, because
// React rewrites className on re-render and would hide an element again.
export const useReveal = () => {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const show = (element: HTMLElement) => {
      element.dataset.in = "";
    };

    if (!("IntersectionObserver" in window)) {
      targets.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
};
