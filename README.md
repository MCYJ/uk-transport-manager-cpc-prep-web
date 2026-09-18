# UK Transport Manager CPC Prep Web

Public marketing and study-guide site for **UK Transport Manager CPC Prep** (`GLB-0668`). This repository contains only the website; the app source remains separate and private.

Production: <https://mcyj.github.io/uk-transport-manager-cpc-prep-web/>

## Local build

```bash
npm run build
npm run check
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173/uk-transport-manager-cpc-prep-web/en/` only when serving with a matching base path. For a quick root preview, create a parent directory named `uk-transport-manager-cpc-prep-web` that points to `dist`, or verify the generated files directly.

## Structure

- `content/articles.mjs` — 12 English study guides
- `scripts/build.mjs` — dependency-free static generator
- `scripts/check.mjs` — generated-page, metadata and local-link checks
- `assets/` — approved app icon and current Store screenshots
- `.github/workflows/deploy-pages.yml` — GitHub Pages build and deployment

## Add a guide

Add one original, source-checked entry to `content/articles.mjs`, link it from related guides where useful, then run `npm run build && npm run check`. Do not copy official papers or publish unverified dates, fees or rules.

## Add a locale

Add fully localised UI, metadata, legal/support content and substantive guides under a new locale directory in the generator. Then add correct `lang`, canonical and `hreflang` output. Do not create machine-translated thin pages or locales without real audience demand.

## Deployment

Every push to `main` builds `dist`, checks it, uploads the Pages artifact and deploys through the official GitHub Pages Actions workflow. Project Pages base-path URLs are generated for `/uk-transport-manager-cpc-prep-web/`.
