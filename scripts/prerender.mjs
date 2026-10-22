// Runs after both builds: writes the rendered page into dist/index.html, so it
// is complete before JavaScript runs and for crawlers that never run it, and
// preloads the font's Latin file, which the first screen needs.
import { readdir, readFile, rm, writeFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const ssr = new URL("../dist-ssr/", import.meta.url);

const { render } = await import(new URL("entry-server.js", ssr).href);
const page = new URL("index.html", dist);
const html = await readFile(page, "utf8");

const root = '<div id="root"></div>';
if (!html.includes(root)) {
  throw new Error(`${root} not found in dist/index.html`);
}

const font = (await readdir(new URL("assets/", dist))).find((name) =>
  /^hanken-grotesk-latin-wght-normal-.+\.woff2$/.test(name),
);
if (!font) throw new Error("The font's Latin file is missing from dist/assets");
const preload = `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`;

// Replacer functions, so a "$" in the content is never read as a pattern.
await writeFile(
  page,
  html
    .replace("</title>", () => `</title>\n    ${preload}`)
    .replace(root, () => `<div id="root">${render()}</div>`),
);
await rm(ssr, { recursive: true, force: true });
console.log(`Prerendered dist/index.html and preloaded ${font}`);
