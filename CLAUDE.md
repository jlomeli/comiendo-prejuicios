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

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Project Structure

- `src/pages/` — Astro pages (`index.astro`)
- `src/layouts/` — Astro layouts (`Layout.astro`)
- `src/components/ui/` — shadcn/ui components (new-york style, lucide icons)
- `src/components/sections/` — page section components
- `src/lib/` — utilities and shared logic
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

## Claude Behavior

- Explain tradeoffs when suggesting architectural changes or new dependencies.
- This is an Astro 6 + React 19 + Tailwind v4 stack — use Astro conventions (`.astro` files, SSG/SSR boundaries) and prefer Bun as the package manager.
