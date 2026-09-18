import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");
const htmlFiles = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}

await walk(out);
const failures = [];
for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  for (const required of ["<title>", 'name="description"', 'rel="canonical"', 'lang="']) {
    if (!html.includes(required)) failures.push(`${file}: missing ${required}`);
  }
  if (!html.includes("404") && !html.includes('id="main"')) failures.push(`${file}: missing main content target`);
  for (const match of html.matchAll(/(?:src|href)="(\/uk-transport-manager-cpc-prep-web\/[^"?#]+)"/g)) {
    const pathname = match[1].replace("/uk-transport-manager-cpc-prep-web/", "");
    if (/^(en\/|assets\/)/.test(pathname)) {
      let target = resolve(out, pathname);
      if (!target.includes(".")) target = join(target, "index.html");
      try { await access(target); } catch { failures.push(`${file}: broken local reference ${match[1]}`); }
    }
  }
}
for (const expected of ["index.html", "404.html", "sitemap.xml", "robots.txt", ".nojekyll", "en/index.html", "en/privacy/index.html", "en/terms/index.html", "en/support/index.html", "en/contact/index.html"]) {
  try { await access(join(out, expected)); } catch { failures.push(`missing ${expected}`); }
}
if (htmlFiles.length !== 21) failures.push(`expected 21 HTML files, found ${htmlFiles.length}`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} HTML files; required metadata and local references passed.`);
