# Ochoche — Portfolio

Personal portfolio of **Ochoche (Charles Adakole)** — backend developer based in Nigeria, working in NestJS and TypeScript and building toward Go.

A one-page resume site with dedicated project detail pages, dark/light mode, and zero runtime dependencies beyond the framework itself.

**Built with:** SvelteKit 5 (Svelte 5 runes) · TypeScript · Tailwind CSS 4

## Features

- **One-page resume** — hero, skills, projects, and education on a single scrollable page
- **Project pages** — each project lives at `/projects/[slug]` with a full write-up, screenshot gallery with captions, tech stack, live/GitHub links, and previous/next navigation
- **Dark & light mode** — toggle in the nav, persisted to `localStorage`, respects `prefers-color-scheme` on first visit, no flash on load
- **Shareable links** — every project is its own route (with prerendered entries and proper 404s)
- **No heavy client JS** — static content, CSS variables for theming, inline SVG icons

## Getting started

```sh
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check
npm run check

# lint & format
npm run lint
npm run format

# production build + local preview
npm run build
npm run preview
```

## Project structure

```
src/
├── lib/
│   ├── data.ts            # profile, skills, education, contact links
│   ├── projects.ts        # project entries: copy, tech, links, screenshots
│   └── components/
│       └── ThemeToggle.svelte
├── routes/
│   ├── +layout.svelte     # nav + footer shell
│   ├── +page.svelte       # one-page resume
│   └── projects/[slug]/   # project detail pages
└── static/projects/       # project screenshots
```

## Editing content

All content is plain data — no CMS, no markdown files:

- **Bio, skills, education, contact links** → `src/lib/data.ts`
- **Projects** (descriptions, tech, links, screenshots) → `src/lib/projects.ts`
- **Screenshots** → `static/projects/`, referenced by path in `projects.ts`

Adding a project is a single object in `projects.ts` — the route, card, and prev/next navigation are generated from it.

## License

[MIT](./LICENSE) © Ochoche (Charles Adakole)

## Contact

- GitHub: [@ochochecharles](https://github.com/ochochecharles)
- Email: mccharles769@gmail.com
- LinkedIn: [charles-adakole](https://www.linkedin.com/in/charles-adakole-740199388)
