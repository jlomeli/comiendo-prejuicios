# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Runtime & Package Manager

Always use `bun` — never `node`, `npm`, `pnpm`, or `yarn`.

| Command | Purpose |
|---------|---------|
| `bun --hot src/index.ts` | Dev server with HMR |
| `bun run build.ts` | Production build (outputs to `dist/`) |
| `bun tsc --noEmit` | Type check only |
| `bun run lint` | Check for lint errors (Biome) |
| `bun run format` | Auto-format source files (Biome) |
| `bun run check` | Lint + format + fix in one pass (Biome) |

## Bun-Specific Behavior

- HTML imports (`<script src="./frontend.tsx">` and `import './frontend.tsx'`) are Bun-specific — do not convert to standard module syntax.
- Bun auto-loads `.env` files — no `dotenv` package needed.
- `bunfig.toml` configures the Tailwind plugin and env prefix (`BUN_PUBLIC_*` for public env vars).

## Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Project Structure

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
- This is a Bun + React 19 + Tailwind v4 stack — prefer native Bun APIs over Node.js equivalents.
