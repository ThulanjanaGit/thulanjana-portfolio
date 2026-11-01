import type { Screenshot } from "../types";

// Case-study screenshots, saved as src/assets/projects/<slug>/<name>-<width>.webp.
// Desktop pages are 1440 × 900 at 2x, saved 960, 1600 and 2400 pixels wide;
// phone screens are 390 × 844 at 2x, saved 480 and 780 wide, and their names
// start with "phone-".
const FILES = import.meta.glob<string>("../assets/projects/*/*.webp", {
  eager: true,
  import: "default",
});

const SIZES = {
  desktop: { widths: [960, 1600, 2400], ratio: 900 / 1440 },
  phone: { widths: [480, 780], ratio: 844 / 390 },
};

// Every saved width of a screenshot, such as "garci-lanka/home". A missing
// file stops the build.
export const screenshot = (name: string, alt: string): Screenshot => {
  const phone = name.split("/")[1]?.startsWith("phone-") ?? false;
  const { widths, ratio } = SIZES[phone ? "phone" : "desktop"];
  const urls = widths.map((width) => {
    const url = FILES[`../assets/projects/${name}-${width}.webp`];
    if (!url) throw new Error(`Screenshot ${name}-${width}.webp is missing`);
    return url;
  });
  const width = widths[widths.length - 1];

  return {
    src: urls[urls.length - 2],
    srcSet: urls.map((url, index) => `${url} ${widths[index]}w`).join(", "),
    width,
    height: Math.round(width * ratio),
    phone,
    alt,
  };
};
