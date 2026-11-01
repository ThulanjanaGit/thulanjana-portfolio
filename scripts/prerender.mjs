// Runs after both builds. Writes every page, rendered, into dist: the home
// page into index.html and each case study into projects/<slug>.html (served
// at /projects/<slug>) with its own title, description and address. Pages are
// complete before JavaScript runs and for crawlers that never run it, and
// each preloads the font's Latin file, which the first screen needs. Then it
// writes the sitemap.
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";

const SITE = "https://thulanjana.vercel.app";
const dist = new URL("../dist/", import.meta.url);
const ssr = new URL("../dist-ssr/", import.meta.url);

const { PAGES, render } = await import(new URL("entry-server.js", ssr).href);
const template = await readFile(new URL("index.html", dist), "utf8");

const root = '<div id="root"></div>';
if (!template.includes(root)) {
  throw new Error(`${root} not found in dist/index.html`);
}

const font = (await readdir(new URL("assets/", dist))).find((name) =>
  /^hanken-grotesk-latin-wght-normal-.+\.woff2$/.test(name),
);
if (!font) throw new Error("The font's Latin file is missing from dist/assets");
const preload = `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin />`;

const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

// Replacer functions, so a "$" in the content is never read as a pattern.
const replace = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`${pattern} not found in dist/index.html`);
  }
  return html.replace(pattern, () => replacement);
};

// The tags in index.html that describe the home page, rewritten for a case
// study. Link previews and search results read these.
const describe = (html, { title, description, url }) =>
  [
    [/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`],
    [
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escape(description)}" />`,
    ],
    [
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${url}" />`,
    ],
    [
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escape(title)}" />`,
    ],
    [
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escape(description)}" />`,
    ],
    [
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${url}" />`,
    ],
  ].reduce((page, [pattern, tag]) => replace(page, pattern, tag), html);

for (const { path, title, description } of PAGES) {
  let html = template
    .replace("</title>", () => `</title>\n    ${preload}`)
    .replace(root, () => `<div id="root">${render(path)}</div>`);
  if (title) html = describe(html, { title, description, url: SITE + path });

  const file = new URL(path === "/" ? "index.html" : `.${path}.html`, dist);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, html);
}

const urls = PAGES.map(
  ({ path }) => `  <url>\n    <loc>${SITE}${path}</loc>\n  </url>`,
);
await writeFile(
  new URL("sitemap.xml", dist),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`,
);

await rm(ssr, { recursive: true, force: true });
console.log(
  `Prerendered ${PAGES.length} pages and the sitemap, preloading ${font}`,
);
