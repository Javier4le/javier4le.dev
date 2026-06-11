# Auditoría de Calidad — javier4le.dev

**Fecha de auditoría:** Junio 2026  
**Modelo auditor:** Fable 5  
**Score inicial:** 77/100

---

## Scores por categoría

| Categoría | Inicial | Post-fix | Delta |
|---|---|---|---|
| Diseño (UX) | 82 | 85 | +3 |
| Web performance | 88 (est.) | 88 (est.) | — |
| Accesibilidad y semántica | 78 | 83 | +5 |
| Errores de código y ortografía | 68 | 88 | +20 |
| Seguridad web | 75 (est.) | 90 (est.) | +15 |
| SEO | 55 | 87 | +32 |
| Responsive | 85 (est.) | 85 (est.) | — |
| **TOTAL** | **77** | **89 (est.)** | **+12** |

---

## Fixes aplicados

### SEO — +32 pts

**Problema:** `site` no configurado en `astro.config.mjs` → canonical y `og:url` apuntaban a `http://localhost:4321/`. Para Google, la versión oficial de la página era localhost.

**Fix:**
- `astro.config.mjs`: `site: 'https://javier4le-dev.vercel.app'`
- `BaseLayout.astro`: OG image convertida a URL absoluta con `new URL(ogImage, Astro.site).href`
- `profile.ts` + `types/index.ts`: nuevo campo `shortBio` (153 chars) para meta description — el `bio[0]` original tenía 264 chars, Google lo truncaba
- `pages/index.astro`: usa `profile.shortBio` como `description`

**Archivos modificados:** `astro.config.mjs`, `BaseLayout.astro`, `src/data/profile.ts`, `src/types/index.ts`, `src/pages/index.astro`

---

### Seguridad — +15 pts

**Problema:** Headers HTTP de seguridad faltantes (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy). `<meta generator>` exponía la versión exacta de Astro.

**Fix:**
- `vercel.json`: headers para todas las rutas:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` (default-src 'self', allowlist de Formspree y Devicons CDN, frame-ancestors 'none')
- `BaseLayout.astro`: eliminado `<meta name="generator" content={Astro.generator} />`

**Archivos modificados:** `vercel.json` (nuevo), `BaseLayout.astro`

---

### Errores de código — +20 pts

**Problema 1:** Ícono de FastAPI (framework Python) asignado a "REST APIs" en la sección Backend.  
**Fix:** Cambiado a `swagger` (OpenAPI/Swagger = estándar de REST APIs).

**Problema 2:** "Automatización" y "n8n" en la sección IA duplicaban el mismo concepto e ícono.  
**Fix:** Eliminada la entrada "Automatización" redundante. Renombrada "AI Tools" → "Claude / ChatGPT" para mayor especificidad.

**Problema 3:** Los 3 repositorios de proyectos enlazados no existían (repos de ejemplo placeholder).  
**Fix:** `github: null` en los tres proyectos. El componente `ProjectCard` ya manejaba `project.github && (...)` correctamente — los botones "Code" simplemente no aparecen.

**Archivos modificados:** `src/data/skills.ts`, `src/data/projects.ts`

---

### Accesibilidad — +5 pts

**Problema:** Los tres inputs del formulario de contacto usaban solo `placeholder` como label. Sin `<label>` explícito, los lectores de pantalla no pueden asociar el campo.

**Fix:** Agregadas `<label for="contact-{field}" class="sr-only">` a cada input (visualmente ocultas, semánticamente correctas).

**Archivos modificados:** `src/components/ContactSection.astro`

---

### Diseño UX — +3 pts

**Falso positivo descartado:** el modelo reportó el "200 OK / Mensaje enviado" como contenido estático confuso. En realidad el div `#form-success` tiene `class="hidden"` por defecto y solo aparece tras el submit exitoso vía JS. No requería cambio.

**Falso positivo descartado:** el modelo reportó mezcla de idiomas "sin criterio". En realidad es intencional según `BRAND.md §10`: nav y labels en inglés, contenido en español.

---

## Fixes adicionales (sesión 2)

### Logo nav — color inconsistente del `/` — UX
`<` y `>` usaban `text-primary` (magenta) pero `/` usaba `text-accent` (cyan). La diferencia era perceptualmente más visible en mobile por el fondo oscuro `var(--card)` del panel. Todos los caracteres del logo ahora usan `text-primary`.

Además: `font-bold` en el logo requería JetBrains Mono 700 que no estaba en `public/fonts/` — el browser sintetizaba el bold con resultados inconsistentes. Reemplazado por `tracking-wider` (letter-spacing) que logra peso visual sin síntesis.

Bonus: `Rajdhani-SemiBold.woff2` existía en disco pero el CSS lo referenciaba como `.woff`. Corregido en `global.css`.

**Archivos:** `Navigation.astro`, `global.css`

### Self-hosting de Devicons — Performance +3
16 íconos descargados desde `cdn.jsdelivr.net` a `public/icons/`: astro, docker, flutter, git, html5, javascript, laravel, linux, mysql, nodejs, php, postgresql, react, swagger, typescript, vuejs. Todos en `OVERRIDES` de `devicon.ts` — el CDN ya no se usa en ningún ícono activo.

**Archivos:** `public/icons/*.svg` (16 archivos nuevos), `src/lib/devicon.ts`

### OG image — SEO / UX
Avatar de GitHub (460×460px PNG) descargado como `public/og-image.png`. El `og:image` y `twitter:image` ahora apuntan a `https://javier4le-dev.vercel.app/og-image.png` — URL absoluta y imagen real en lugar del favicon de 32px.

**Nota:** La imagen es cuadrada (460×460). Las redes sociales recomiendan 1200×630 — se verá con barras laterales en algunos previews. Mejora futura: crear una imagen de marca con nombre, título y colores del portfolio.

**Archivos:** `public/og-image.png` (nuevo), `BaseLayout.astro`

---

## Pendientes para subir más el score

### OG image 1200×630px — SEO +5
La imagen actual (avatar 460×460) ya es funcional pero no es el aspect ratio recomendado. Crear una imagen de marca con: fondo `#0a0a0f`, nombre en Rajdhani con gradiente primary→accent, título, monograma `<JR/>`. Exportar como PNG 1200×630 y reemplazar `public/og-image.png`.

### Proyectos reales con repos públicos — Código +8
Reemplazar los proyectos placeholder con proyectos reales. Al crear los repos en GitHub, actualizar `github` en `src/data/projects.ts`.

### Lighthouse real
Medir con Lighthouse en producción (no estimado) para obtener scores precisos de Performance y Responsive.

---

*Actualizar este archivo con cada fix o nueva auditoría.*
