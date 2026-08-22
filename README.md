# Minseo Cho portfolio — static GitHub Pages structure

This site uses plain HTML, CSS, and JavaScript. It has no build step.

## Main navigation

- Home
- Research
- Design
- Publications
- About

`Research` replaces the former Work tab and loads `content/research.html`.
`Design` replaces the former Notes tab and loads `content/design.html`.

## Research case studies

Research case-study pages live in `research/`.

- F-01 / F-02 — ForMe
- D-01–D-04 — REDI
- M-01 — Multimodal Digital Phenotyping
- R-01–R-04 — RECO / Reflective Companion
- C-01 — Community Care AI
- T-01 — AI Evaluation

The case studies use `research/styles.css`.

## Design projects

Design cards are data-driven: `content/design.html` is a thin wrapper, and the actual card
content lives in `assets/data/design-projects.json`, rendered client-side by
`renderDesignCards()` in `assets/js/site.js`. To add, edit, or reorder a card, edit the JSON —
do not add card markup to `content/design.html`. See `docs/ADDING_PROJECTS.md`.

Standalone project detail pages remain in `projects/`, and their back links now return to `#design`.

Cards without a completed detail page (`"href": null` in the JSON) are rendered as static cards
rather than dead `href="#"` links.

## Adding new projects or case studies

See `docs/ADDING_PROJECTS.md` for the step-by-step checklist (Design cards, Research case
studies, and how the shared colour tokens work).

## Shared design tokens

The site's colour palette (`--bg`, `--text-main`, `--text-muted`, `--accent`, `--border`) lives
in one place: `assets/css/tokens.css`. `assets/css/styles.css`, `research/styles.css`, and the
inline styles in `research/f01_dialogue.html` all `@import` it. Change a colour once in
`tokens.css` and it applies everywhere — don't redefine these variables elsewhere.

## Publications

Publication entries live in `content/publications.html`.
Titles that do not yet have a real URL are plain text rather than placeholder links.

## Preview locally

Do not open `index.html` via `file://`, because browsers may block fragment loading.
From the site folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
