# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Runtime & Package Manager

Always use `bun` — never `node`, `npm`, `pnpm`, or `yarn`.

| Command | Purpose |
|---------|---------|
| `bun run dev` | Dev server (Astro) |
| `bun run build` | Production build (outputs to `dist/`) |
| `bun run preview` | Preview production build locally |
| `astro check` | Type check only |
| `bun run lint` | Check for lint errors (Biome) |
| `bun run format` | Auto-format source files (Biome) |
| `bun run check` | `astro check` + Biome lint + fix in one pass |
| `bun run test` | Run tests in watch mode (Vitest) |
| `bun run test:run` | Run tests once, exit with code (CI) |

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Project Structure

- `src/pages/` — Astro pages (`index.astro`)
- `src/layouts/` — Astro layouts (`Layout.astro`)
- `src/components/ui/` — shadcn/ui components (new-york style, lucide icons)
- `src/components/sections/` — page section components
- `src/lib/` — utilities and shared logic
- `src/test/` — test setup and mocks (`setup.ts`, `__mocks__/`)
- `styles/globals.css` — Tailwind v4 theme config using `@theme` directive

## Code Style

- No enums — use `const` objects or string literal types instead.
- New directories: lowercase-with-dashes (e.g., `my-feature/`).
- Prefer named exports over default exports.
- Use early returns and guard clauses over nested conditionals.

## Git Workflow

- **Commits:** Conventional Commits — `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`
- **Branches:** `initials-short-description` format (e.g., `jl-add-contact-form`)
- **PRs:** Branch from `main`, target `main`

## Testing

- **Framework:** Vitest + React Testing Library + jsdom
- **Config:** `vitest.config.ts` at the root — uses esbuild JSX transform (no `@vitejs/plugin-react` needed), maps `@/*` alias, and aliases `framer-motion` to a passthrough mock
- **Setup file:** `src/test/setup.ts` — registers `@testing-library/jest-dom/vitest` matchers and RTL cleanup
- **Framer Motion mock:** `src/test/__mocks__/framer-motion.tsx` — renders `motion.*` as plain HTML elements since animation APIs don't work in jsdom
- **Co-locate tests:** place `*.test.ts` / `*.test.tsx` files next to the source file they test
- **Import test utilities explicitly** — `import { describe, it, expect } from "vitest"` (globals not enabled)

## Claude Behavior

- Explain tradeoffs when suggesting architectural changes or new dependencies.
- This is an Astro 6 + React 19 + Tailwind v4 stack — use Astro conventions (`.astro` files, SSG/SSR boundaries) and prefer Bun as the package manager.
