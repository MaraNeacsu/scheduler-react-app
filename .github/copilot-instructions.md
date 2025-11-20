## Repository: scheduler-react-app — quick AI guidance

This file gives concise, actionable guidance for AI coding agents to be productive in this Vite + React app.

- Project type: React (JSX) app built with Vite. See `package.json` scripts (`dev`, `build`, `preview`, `lint`). Use `npm run dev` to start local development.
- Entry points: `src/main.jsx` mounts `App` inside `index.html`. Main UI pieces live in `src/components/`.

Key patterns and architecture
- UI is component-driven. Each component is a default-exported functional component using JSX (examples: `src/components/Schedule.jsx`, `FeaturedShows.jsx`, `NowPlaying.jsx`). Follow existing naming and file placement conventions.
- Data fetching uses a single `axios` instance configured in `src/api.js` with `baseURL: "https://localhost:7192"`. Calls use relative endpoints (e.g. `api.get('/schedule/week')` in `Schedule.jsx`). When changing API host, update `src/api.js` (there are no .env conventions in the repo today).
- Static assets (images) are referenced from `public/` via absolute paths (e.g. `<img src="/dj1.jpg" />` in `FeaturedShows.jsx`). Keep that pattern — do not import images from `src/` unless adding build config changes.
- Styling: global CSS files `index.css` and `App.css` are used. Add component styles in the existing CSS files unless the change requires scoped CSS; the project currently does not use CSS modules.

Developer workflows and commands
- Start dev server with: `npm run dev` (Vite with HMR). This is the primary iteration loop.
- Build for production: `npm run build` and test locally with `npm run preview`.
- Linting: `npm run lint` (ESLint config is at project root; keep new code consistent with existing lint rules).

Conventions to follow
- Use default exports for React components like the current components — keep component filenames matching the exported component name (e.g., `Schedule.jsx` exports `Schedule`).
- Keep API usage centralized in `src/api.js`. For new endpoints, add calls via `api.<method>(...)` and handle promise results the same way `Schedule.jsx` does (set state inside `then` or use async/await in `useEffect`).
- Date handling in UI: `Schedule.jsx` converts timestamps with `new Date(...).toLocaleString()` — match this simple rendering approach when adding schedule-like displays.

Integration notes and edge cases
- Backend expectations: the `axios` base URL points at `https://localhost:7192` (likely a local ASP.NET Core or similar backend). Expect CORS and HTTPS during local dev; if backend is remote, update `src/api.js` accordingly or add env-based switching.
- Network failure handling: current components assume successful responses (e.g., empty-list guard in `Schedule.jsx`). If adding error states, follow existing minimal UX (show a message in place of lists), and avoid changing global state shape without updating all consumers.

Examples to reference
- Fetch schedule: `src/components/Schedule.jsx` — uses `useEffect` + `api.get('/schedule/week')` and renders `events.map(e => ...)` with date conversion.
- Static assets: `src/components/FeaturedShows.jsx` — references images as `/dj1.jpg` from `public/`.

What not to change without discussion
- Build tooling: `vite` configuration (top-level `vite.config.js`) is intentionally minimal. Significant changes to bundling or asset handling should be proposed before implementation.
- Project-wide export conventions: switching to named exports or TypeScript requires repository-wide updates (tests, types, lint rules). Do not introduce halfway conversions.

If you need to add tests or CI
- There are no tests or CI configs in the repo. If adding tests, prefer lightweight unit tests that target pure functions or component render outputs; add a follow-up note to README and update package.json scripts.

When in doubt, look at these files first
- `package.json` — scripts and deps
- `src/api.js` — central API configuration
- `src/main.jsx`, `src/App.jsx` — app mounting and layout
- `src/components/*.jsx` — component patterns and small UI examples

Ask the user if any of the following are ambiguous:
- Should the `axios` base URL become env-driven (e.g., VITE_API_URL)?
- Are we adding test tooling and CI now, or later?

End of file — keep this short and update when the repo adds CI, tests, or env conventions.
