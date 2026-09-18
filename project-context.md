# UK Transport Manager CPC Prep Web — Project Context

## Scope
- One-app marketing and study-guide site for `GLB-0668` only.
- App source is read-only at `/Users/youngjunma/.codex/worktrees/glb-0668-dev-review/services/glb/06/glb-0668`.
- Web repository is this directory and is intended to be public.
- Production base URL: `https://mcyj.github.io/uk-transport-manager-cpc-prep-web/`.

## Verified identity and release state (2026-09-18)
- Store title: `UK Transport Manager CPC Prep`.
- Android package / iOS bundle: `app.mcyj.examprep.glb0668`.
- Google Play: closed-test changes submitted for review; approval and publication are not verified.
- App Store Connect: version 1.0 build 2 is waiting for review; approval and publication are not verified.
- Therefore both Store CTAs must remain disabled and labelled `Coming soon` until live publication is verified.

## Content and source rules
- Primary official source: CILT(UK) Road Haulage Qualification Specification v4.2, updated March 2026.
- Additional official source: CILT(UK) Learning Partner Resources for current assessment timetables and sample papers.
- English (`en-GB`) is the only implemented locale because the qualification and verified audience are UK/English.
- Do not claim affiliation, endorsement, guaranteed results, official-paper reproduction, ratings, download counts, or unverified fees/dates.
- Keep annual timetable details out of evergreen copy; link to CILT(UK) for current dates.
- No cross-promotion or portfolio listing.

## Product facts used on the site
- 40 reviewed multiple-choice practice questions with explanations.
- 24 case-study sets containing 72 scenarios for constructed-response practice.
- Local-first progress, saved questions, focused concepts and offline bundled learning material.
- Paper 1: 40 multiple-choice questions, 120 minutes, pass mark 28/40, closed book.
- Paper 2: three case studies, 135 minutes, 60 marks, pass mark 30/60, open book.
- Both papers must be passed independently.

## Privacy and support
- Provider: RushLabs.
- Support: `june1012june@gmail.com`.
- Current app has no RushLabs account, advertising or analytics integration and keeps learning records locally, per the existing Store policy source.
- Website analytics is not enabled unless a real identifier and updated disclosure/consent basis are supplied.

## QA and deployment log
- Append build, deployment, production URL and remaining external tasks here after verification.

### 2026-09-18 — Initial website implementation
- Created a dependency-free static generator with a responsive English landing page, 12 substantive study guides, FAQ, Privacy, Terms, Support, Contact and a real 404 page.
- Reused only the app-owned current icon and three current-production Store screenshots; the app repository was not modified.
- Added canonical URLs, `en-GB`/`x-default` hreflang, Open Graph metadata, SoftwareApplication/Article/FAQ JSON-LD, sitemap and robots.
- Both Store controls are disabled and say `Coming soon` because Play and ASC approval/publication remain unverified.
- `npm run build`, `npm run check` and `git diff --check` pass locally. The checker covered 21 generated HTML files, required metadata and local asset/page references.
- Local base-path preview returned HTTP 200 at `/uk-transport-manager-cpc-prep-web/en/`.
- GitHub repository, workflow run and production QA are pending at this checkpoint.
