# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `yarn develop` (or `npm run develop` / `yarn start`) — run the Gatsby dev server at `http://localhost:8000` (GraphiQL at `/___graphql`).
- `yarn build` — production build into `public/`.
- `yarn serve` — serve the production build locally.
- `yarn clean` — wipe `.cache/` and `public/` (run this when Gatsby behaves oddly after dependency or config changes).
- `yarn format` — Prettier across `**/*.{js,jsx,json,md}`.

No test runner is configured (`yarn test` intentionally exits 1).

This is an older Gatsby v2 codebase pinned to `node-sass@4` and `react@16`. Recent Node versions (>=16) will likely fail to build `node-sass` — use Node 14 (e.g. `nvm use 14`) if installs break.

## Architecture

Single-page personal portfolio rendered as a rotating 3D CSS cube. There is one Gatsby page (`src/pages/index.js`); navigation does not change the route — it rotates the cube to a different face.

**State flow (top-down via React Context):**

`src/pages/index.js` is the app root. It owns three pieces of state — `face` (which cube face is forward), `transitionOut` (mid-spin flag), `inMotion` (lockout during animation) — plus viewport info from `useCheckIfMobile`. All of it is published through `AppContext` (`src/App-context.js`) and consumed by `CubeWrapper` and `Cube` deep in the tree. `spinCube(value)` is the only mutator: it sets `transitionOut`, then `face` after 500ms, then clears `transitionOut` after `spinTimeout` (2700ms). The two timeouts must stay in sync with the CSS transition durations in `src/components/Cube/cube.scss` and the animations in `src/Styles/animations.scss` — changing one without the others breaks the spin.

**Cube rendering:**

`CubeWrapper` (`src/components/CubeWrapper/CubeWrapper.js`) reads `face` and looks up `activeIndex` in `["home", "project_management", "portfolio", "contact"]`. It maps over `Content.js` (which is the registry of cube-face → React component) and, as an optimization, renders only the active face when not mid-spin; during a spin (`shrink === true`) it renders all faces so the rotation is visible. `Cube.js` applies the actual `transform: rotateX/Y/Z` based on `face` via a direct `ref` (not React state), keyed off the same `face` value.

**Mobile vs desktop:**

`useCheckIfMobile` returns `{ mobile, mobileLand, tablet, width, height }`. `index.js` swaps `<Navigation>` for `<MobileNavigation>` (wrapped in a `Transition`) based on those flags. Several components branch on the same flags read from context — when adding responsive behavior, prefer reading from `AppContext` over re-running viewport math.

**Styling:**

All SCSS is aggregated through `src/Styles/main.scss`, which `@import`s every component stylesheet. New component stylesheets must be added there to be included in the build — there is no per-component CSS-in-JS or CSS modules. `mediaQueryManager.scss` and `mixins.scss` define the responsive breakpoints and shared mixins used everywhere.

**Dark mode:**

`ModeSwitch` (`src/components/ModeSwitch/ModeSwitch.js`) toggles `data-theme="dark|light"` on `document.documentElement` and persists to `localStorage`. SCSS files key off the `[data-theme="dark"]` attribute selector. SSR-safety: `getInitialState` guards `typeof localStorage !== "undefined"` and `getPreferredColourScheme` guards `window.matchMedia` — preserve those guards when editing, otherwise Gatsby build will throw.

**Assets:**

SVGs in `src/images/icons/` are loaded as React components via `gatsby-plugin-svgr-loader` (scoped to the `icons/` path in `gatsby-config.js`). Other images go through `gatsby-plugin-sharp` / `gatsby-transformer-sharp` and are queried with GraphQL.

**Hooks (`src/Hooks/`):**

- `useCheckIfMobile` — viewport size + device-class flags.
- `useCheckMobileViewport` — sets a CSS variable for real mobile viewport height (works around the iOS Safari `100vh` issue).
- `useInMotion` — flips the `inMotion` lock for the spin duration.
- `useIgnoreMountEffect` — `useEffect` that skips the initial render (used by `CubeWrapper` to drive transitions only on subsequent `face`/`transitionOut` changes).
- `useFitText` — scales text to fit its container.
