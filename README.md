# javier4le.dev

Personal portfolio. Terminal + Synthwave aesthetic — dark background, neon pink/cyan accents, monospace type, and CSS glitch effects.

**Live:** [javier4le-dev.vercel.app](https://javier4le-dev.vercel.app)

---

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 4** — CSS-first config via `@theme` block
- **TypeScript** — strict mode, no `any`
- **Formspree** — contact form without a backend

Fonts served locally from `public/fonts/`. No Google Fonts CDN.

---

## How it was built

### Design

The aesthetic was defined through a conversation with [v0.dev](https://v0.dev) (Vercel's AI design tool): Terminal + Synthwave, dark theme, neon pink/cyan, JetBrains Mono, glitch effect on the hero name. v0 produced a visual prototype in Next.js — not as production code, but as a design artifact to validate the concept quickly.

That prototype was then discarded. What mattered was the design language it proved out.

### Implementation

The actual site was built from scratch in Astro, making deliberate technology choices:

- **SSG over a React SPA** — a portfolio is static content; no reason to ship a runtime
- **Tailwind 4's CSS-first config** — design tokens in `:root`, no JS config file
- **Fonts locally** — performance and no external dependency
- **AJAX form submission** — Formspree without page redirect or bfcache issues

### Workflow

Development followed a spec-driven process (SDD) with AI assistance:

```
explore → propose → spec → design → tasks → apply → verify → archive
```

Each feature was specified before being coded, and verified against its spec before merging. AI agents handled implementation under human direction — reviewing plans, catching edge cases, writing code to spec. The human role was architecture, decisions, and review.

This is the opposite of vibecoding: no prompting until something "looks right," no generating and hoping. Every change had a clear intent, a written spec, and a verification step.

---

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output → dist/
pnpm preview    # preview the build locally
```

## Configuration

All personal content lives in:

| File | Content |
|------|---------|
| `src/data/profile.ts` | Name, title, bio, tech stack, social links, Formspree ID |
| `src/data/projects.ts` | Projects with title, description, stack, and links |
| `src/data/skills.ts` | Skill categories |
| `src/data/certifications.ts` | Certifications |

## License

MIT
