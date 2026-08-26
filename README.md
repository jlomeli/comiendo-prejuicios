# Comiendo Prejuicios

[![CI](https://github.com/jlomeli/comiendo-prejuicios/actions/workflows/ci.yml/badge.svg)](https://github.com/jlomeli/comiendo-prejuicios/actions/workflows/ci.yml)

The marketing site for **Dra. Claudia Gomez**'s private practice — an
Acceptance and Commitment Therapy (ACT) psychologist working with
Spanish-speaking women navigating eating disorders, trauma, and
neurodivergence, based in Ciudad de México.

A single-page, statically-generated site: hero, approach, process, fees,
testimonials, FAQ, and contact — built for WCAG 2.1 AA accessibility from the
ground up.

## Tech stack

| Layer          | Choice                                             |
| -------------- | --------------------------------------------------- |
| Runtime        | [Bun](https://bun.com)                               |
| Framework      | [Astro 6](https://astro.build) (static output) + React 19 islands |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) (`@theme` tokens) |
| Components     | [shadcn/ui](https://ui.shadcn.com) (new-york style) + [Radix](https://www.radix-ui.com) primitives |
| Animation      | [Framer Motion](https://www.framer.com/motion/) (respects `prefers-reduced-motion`) |
| Linting/format | [Biome](https://biomejs.dev)                         |
| Testing        | [Vitest](https://vitest.dev) + React Testing Library + [jest-axe](https://github.com/nickcolley/jest-axe) |
| Hosting        | [Vercel](https://vercel.com) (via `@astrojs/vercel`) |

## Getting started

**Prerequisites:** [Bun](https://bun.com) — this project uses Bun exclusively;
don't substitute `npm`/`yarn`/`pnpm`.

```bash
bun install
bun run dev
```

The dev server prints a local URL (default `http://localhost:4321`).

## Scripts

| Command             | What it does                                      |
| -------------------- | -------------------------------------------------- |
| `bun run dev`         | Start the Astro dev server                          |
| `bun run build`       | Production build, output to `dist/`                 |
| `bun run preview`     | Serve the production build locally                  |
| `bun run check`       | Type check (`astro check`) + Biome lint & autofix   |
| `bun run lint`        | Biome lint only, no fixes                           |
| `bun run format`      | Biome format, writes in place                       |
| `bun run test`        | Vitest in watch mode                                |
| `bun run test:run`    | Vitest once, non-zero exit on failure (CI)          |

A Husky `pre-commit` hook runs lint + format automatically.

## Project structure

```text
src/
├── pages/               # Astro pages — index.astro assembles the sections below
├── layouts/             # Layout.astro — <head>, fonts, skip link
├── components/
│   ├── sections/        # One component per landing-page section (hero, fees, faq, …)
│   ├── ui/               # shadcn/ui primitives (button, input, card, …)
│   └── scroll-reveal.tsx # Shared Framer Motion reveal-on-scroll wrapper
├── lib/                 # Shared utilities (cn(), etc.)
├── assets/images/       # Source photography, optimized at build time via astro:assets
└── test/                # Vitest setup + mocks (framer-motion passthrough, etc.)
styles/globals.css       # Tailwind v4 theme tokens (--brand-*, "Luz de Atardecer" palette)
docs/
├── adr/                 # Architecture Decision Records
├── agents/              # Conventions for AI coding agents (issue tracker, labels, domain docs)
└── design/              # PRD/design source docs (git-ignored — ask the maintainer for access)
```

`@/*` is aliased to `./src/*` throughout (see `tsconfig.json`).

Tests are co-located with the code they cover (`Component.tsx` +
`Component.test.tsx`), not kept in a separate `__tests__` tree.

## Accessibility

This project targets **WCAG 2.1 AA** as a hard requirement, not an
afterthought:

- A skip link, semantic landmarks, and a global 3px `focus-visible` outline
  that brand/design changes are not allowed to weaken (see
  [ADR-0003](docs/adr/0003-accessibility-overrides-brand-spec-on-focus-states.md)).
- All animation respects `prefers-reduced-motion` via Framer Motion's
  `useReducedMotion()`.
- Every component test file asserts `expect(await axe(container)).toHaveNoViolations()`.
- Color tokens are checked against WCAG contrast ratios by calculation, not
  by eye, before shipping.

## Testing

```bash
bun run test:run
```

Runs the full Vitest suite (jsdom environment, React Testing Library,
jest-axe) once and exits non-zero on failure — this is what CI runs on every
PR. Use `bun run test` for watch mode while developing.

## Deployment

The site builds as static output (`output: "static"` in `astro.config.mjs`)
via the `@astrojs/vercel` adapter, deployed on Vercel. There is currently no
server-rendered route or backend of any kind — all interactivity is
client-side.

### Third-party integrations

Two forms submit directly to third-party services from the browser, with no
backend of our own:

- **Contact form** (`src/components/sections/contact.tsx`) — posts to a
  [Formspree](https://formspree.io) endpoint via `fetch()`.
- **Newsletter signup** (`src/components/sections/footer.tsx`) — submits a
  real HTML form to a [Buttondown](https://buttondown.com) subscribe
  endpoint (deliberately *not* via `fetch()` — see the comment in that file
  for why).

Both endpoint IDs are public, non-secret identifiers hardcoded in their
respective components — there are no API keys or environment variables to
configure.

## Documentation map

- **[`CLAUDE.md`](CLAUDE.md)** — conventions for AI coding agents working in
  this repo (also a good source-of-truth for humans: code style, testing
  patterns, accessibility rules).
- **[`CONTEXT.md`](CONTEXT.md)** — domain glossary: brand terminology,
  pricing terms, and the working rule for when a design mockup's content
  conflicts with an existing real fact.
- **[`docs/adr/`](docs/adr)** — architecture decisions, with rationale and
  rejected alternatives.
- **[`docs/agents/`](docs/agents)** — issue-tracker conventions, triage
  labels, and how domain docs are consumed by AI agents.

## Contributing

- **Branches:** `initials-short-description` (e.g. `jl-fix-hero-contrast`),
  branched from `main`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org)
  (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`).
- **PRs:** target `main`; CI (test, lint, typecheck, build) and an automated
  Greptile review both run on every pull request.

## License

Private and proprietary. All rights reserved.
