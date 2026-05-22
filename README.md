# Javier Rojas — Portfolio

Personal portfolio built with Astro 5 and Tailwind CSS 4. Terminal + Synthwave aesthetic — dark background, neon pink/cyan accents, monospace type, and glitch effects.

---

## Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 4** — CSS-first config via `@theme` block
- **TypeScript** — strict mode, no `any`
- **Formspree** — contact form without a backend

## Design

Ported from a Next.js/React prototype. The aesthetic draws from hacker terminals and 80s synthwave: `Rajdhani` for headings, `JetBrains Mono` for code-style labels, scroll-snap navigation, CSS glitch animation on the hero name, and IntersectionObserver-based scroll-reveal on every section.

Fonts are served locally from `public/fonts/` — no Google Fonts CDN.

## Process

Built using a spec-driven workflow (SDD): explore → propose → spec → design → tasks → apply → verify → archive. Each feature was planned before implementation and verified against its spec before merging. This kept scope tight and the codebase coherent across multiple sessions.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output → dist/
pnpm preview    # preview the build locally
```

## Configuration

All personal content lives in two files:

| File | Content |
|------|---------|
| `src/data/profile.ts` | Name, title, bio, tech stack, social links, Formspree ID |
| `src/data/projects.ts` | Project list with title, description, stack, and links |

Skill categories and certifications are in `src/data/skills.ts` and `src/data/certifications.ts`.

## Deployment

Deployed to Vercel (static). No build environment variables required — all configuration is in source.

Connect the GitHub repo to Vercel and it auto-deploys on every push to `main`.

## License

MIT
