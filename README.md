# Minseo Cho portfolio — static GitHub Pages structure

This version uses plain HTML, CSS, and JavaScript. It does not require Astro,
Node.js, npm, or a build step.

## Editing the three lists

- Projects: `content/projects.html`
- Notes: `content/notes.html`
- Publications: `content/publications.html`

The main `index.html` loads these files with `fetch()`.

## Add a project

1. Create `assets/images/your-project/` and add the project images.
2. Copy one card in `content/projects.html` and edit its title, description,
   metadata, image/icon, and link.
3. Copy an existing page in `projects/`, rename it, and edit its content.
4. Project-page image paths start with `../assets/images/` because the page is
   inside the `projects/` folder.

## Add a note

Copy one complete `<details class="note-item">…</details>` block in
`content/notes.html`. Update the machine-readable `datetime`, displayed
date, title, and body.

## Add a publication

Copy one complete publication list item in `content/publications.html` and
update its title, venue, and year.

## Preview locally

Do not open `index.html` with a `file://` URL because browsers often block
fragment loading. Use GitHub Pages, VS Code Live Server, or run this from the
site folder if Python is available:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

Upload the contents of this folder to the branch currently used by your GitHub
Pages site. Keep the folder structure unchanged.
