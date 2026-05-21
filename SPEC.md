# Spec — my-landing-portfolio v1.0
**Fecha:** Mayo 2026  
**Estado:** Aprobada para implementación  
**Para:** OpenCode con /sdd-new

---

## El problema que resuelve

Javier Rojas necesita una presencia digital profesional para presentarse a clientes freelance (Workana) y empleadores tech de Chile. Actualmente no tiene un portfolio online. Los reclutadores y clientes no tienen dónde ver su trabajo ni evaluar su perfil de manera independiente del CV.

---

## Quién lo usa

- **Reclutadores tech** en Chile buscando devs full-stack con perfil actualizado
- **Potenciales clientes freelance** evaluando si contratar a Javier para proyectos web
- **Otros developers** que llegan por referencia o redes sociales

---

## Lo que TIENE que hacer — v1.0

### 1. Navegación
- Nav sticky con: logo `JR` + links `About`, `Projects`, `Skills`, `Contact`
- En móvil: menú hamburguesa o links apilados
- Scroll suave a cada sección al hacer click

### 2. Hero section
- Nombre "Javier Rojas" centrado/izquierda con efecto glitch en "Javier" y gradiente en "Rojas"
- Eyebrow: `Full-Stack Developer · IA · Ciberseguridad`
- Descripción corta (1-2 líneas)
- Dos botones CTA: `Ver Proyectos` (primario) + `Contactar` (secundario outline)
- Ilustración isométrica SVG de home setup (derecha en desktop, abajo en mobile)
- Fondo con grid sutil y gradient mesh

### 3. About section
- Terminal window con bio personal (2-3 párrafos)
- Grilla de tech chips CON LOGOS (Devicons) a la derecha: Vue.js, React, TypeScript, Laravel, PHP, SQL, Flutter, Astro, Git, Linux
- Animación de entrada al hacer scroll (IntersectionObserver)

### 4. Projects section
- 3 cards estilo terminal window
- Cada card: nombre del proyecto, descripción corta, stack chips, links (GitHub + Live)
- Placeholder visual mientras no hay screenshots (el número de proyecto `{1}` con terminal output)
- Animación stagger al entrar en viewport

### 5. Skills section
- 4 categorías: Frontend (magenta), Backend (cyan), IA & Automatización (violeta), DevOps & Tools (verde)
- **Tech cards con logo (Devicons) + nombre + etiqueta de contexto** — SIN porcentajes ni barras
  - Etiquetas posibles: `"3+ años"`, `"producción"`, `"en aprendizaje"`, `"certificando"`
  - Layout: grid 3-4 cols responsive
  - On hover: el card levita con neon glow del color de su categoría
- **Subsección "Certificaciones"** al pie de Skills:
  - Cada cert: badge visual con logo/ícono + nombre + emisor + estado + fecha
  - Estados: `OBTENIDA` (verde glow), `EN PROGRESO` (ambar pulsante), `PLANIFICADA` (gris)
  - Datos en `src/data/certifications.ts` — agregar nuevas certs solo editando ese archivo

### 6. Contact section
- Formulario con campos: Nombre, Email, Mensaje
- Botón de envío con neon glow
- Integración: Formspree (sin backend propio en v1.0)
- **Sin número de teléfono** — privacidad, eso va en el CV
- **Sin ubicación/ciudad** — privacidad, eso va en el CV
- Links secundarios: GitHub, LinkedIn
- Texto CTA: `Let's build something.`

### 7. Footer
- `© 2026 Javier Rojas` + link GitHub + `Built with Astro & ❤️`

### 8. SEO y meta
- `<title>` y `<meta description>` personalizados
- Open Graph tags (og:title, og:description, og:image)
- Favicon `JR` generado como SVG

---

## Lo que NO entra en v1.0

- Blog / artículos técnicos
- Sistema de CMS (el contenido se edita directamente en `src/data/`)
- Dark/Light mode toggle (solo dark)
- Animaciones con Three.js o Spline3D (el SVG inline es suficiente para v1.0)
- Página de detalle de proyecto
- Sección de "Experiencia laboral" o timeline (va en el CV, no en el portfolio)
- Multiidioma (español primero, inglés en v2)
- Analytics (agregar en v1.1 si se necesita)

---

## Cómo sabemos que v1.0 funciona

- [ ] La página carga en menos de 3 segundos en 4G (Lighthouse Performance > 85)
- [ ] El efecto glitch en "Javier" se ejecuta correctamente
- [ ] El gradiente en "Rojas" es visible
- [ ] Los logos de tech aparecen correctamente en About y Skills
- [ ] Las skill cards muestran etiqueta de contexto (sin porcentajes)
- [ ] Los cert badges muestran el estado visual correcto
- [ ] El formulario de contacto envía el mensaje (Formspree confirma recepción)
- [ ] No aparece número de teléfono ni ubicación en ninguna parte de la web
- [ ] La página se ve bien en mobile (375px) y desktop (1280px)
- [ ] Los links de GitHub/LinkedIn abren en tab nueva
- [ ] Lighthouse Accessibility > 90

---

## Stack técnico

```
Directorio:   my-landing-portfolio
Package mgr:  pnpm (siempre — nunca npm ni yarn)
Framework:    Astro 5.x (SSG — sin SSR por ahora)
Estilos:      Tailwind CSS 4.x + custom CSS para efectos de marca
Tipos:        TypeScript strict
Iconos UI:    lucide-astro
Tech logos:   Devicons CDN
Formulario:   Formspree
Fuentes:      Rajdhani + JetBrains Mono (servidas localmente)
Deploy:       Vercel (desde GitHub, rama main)
```

---

## Estructura de archivos esperada al final de v1.0

```
my-landing-portfolio/
├── AGENTS.md
├── BRAND.md
├── SPEC.md                          ← este archivo
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json                     ← con pnpm como package manager
├── pnpm-lock.yaml
├── .gitignore
├── .env.example                     ← FORMSPREE_ID
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── fonts/
│       ├── Rajdhani-Regular.woff2
│       ├── Rajdhani-SemiBold.woff2
│       ├── Rajdhani-Bold.woff2
│       └── JetBrainsMono-Regular.woff2
└── src/
    ├── data/
    │   ├── profile.ts               ← nombre, bio, links (sin teléfono ni ubicación)
    │   ├── projects.ts              ← array de proyectos con stack, links, descripción
    │   ├── skills.ts                ← categorías, skills con logo y etiqueta de contexto
    │   └── certifications.ts        ← certs con estado, fecha y badge (agregar aquí nuevas)
    ├── types/
    │   └── index.ts                 ← Project, Skill, SkillCategory, Certification interfaces
    ├── layouts/
    │   └── BaseLayout.astro         ← head, fonts, global meta
    ├── styles/
    │   └── global.css               ← variables CSS de BRAND.md + efectos custom
    ├── components/
    │   ├── Navigation.astro
    │   ├── HeroSection.astro
    │   ├── HeroIllustration.astro   ← SVG isométrico del setup
    │   ├── AboutSection.astro
    │   ├── TechChip.astro           ← logo Devicon + nombre (reutilizable)
    │   ├── ProjectsSection.astro
    │   ├── ProjectCard.astro
    │   ├── SkillsSection.astro
    │   ├── SkillCard.astro          ← logo + nombre + etiqueta contexto (sin %)
    │   ├── CertificationsSection.astro
    │   ├── CertBadge.astro          ← badge con estado visual
    │   ├── ContactSection.astro
    │   ├── Footer.astro
    │   └── TerminalWindow.astro     ← componente reutilizable
    └── pages/
        └── index.astro
```

---

## Datos iniciales para src/data/

### profile.ts
```typescript
// ⚠️ Sin teléfono ni ubicación — esa info es privada y va en el CV
export const profile = {
  name: "Javier Rojas",
  title: "Full-Stack Developer · IA · Ciberseguridad",
  bio: [
    "Técnico Universitario en Informática de la UTFSM, con experiencia en desarrollo de software full-stack.",
    "Una persona metódica, con alta motivación por aprender constantemente y aplicar buenas prácticas. Capaz de trabajar en equipo y adaptarme a distintas circunstancias.",
    "Actualmente explorando el ecosistema de IA aplicada al desarrollo y la automatización de negocios."
  ],
  github: "https://github.com/TU_USUARIO",         // TODO: actualizar
  linkedin: "https://linkedin.com/in/TU_PERFIL",   // TODO: actualizar
  formspreeId: "TU_FORMSPREE_ID",                  // TODO: crear en formspree.io
}
```

### skills.ts (etiquetas de contexto, sin porcentajes)
```typescript
export const skillCategories = [
  {
    name: "Frontend",
    color: "#ff0080",
    skills: [
      { name: "Vue.js",       icon: "vuejs",       context: "3+ años" },
      { name: "React",        icon: "react",       context: "producción" },
      { name: "TypeScript",   icon: "typescript",  context: "3+ años" },
      { name: "JavaScript",   icon: "javascript",  context: "5+ años" },
      { name: "HTML/CSS",     icon: "html5",       context: "5+ años" },
      { name: "Astro",        icon: "astro",       context: "en aprendizaje" },
    ],
  },
  {
    name: "Backend",
    color: "#00f5ff",
    skills: [
      { name: "Laravel",      icon: "laravel",     context: "3+ años" },
      { name: "PHP",          icon: "php",         context: "3+ años" },
      { name: "MySQL",        icon: "mysql",       context: "producción" },
      { name: "PostgreSQL",   icon: "postgresql",  context: "producción" },
      { name: "Node.js",      icon: "nodejs",      context: "en aprendizaje" },
    ],
  },
  {
    name: "IA & Automatización",
    color: "#7c3aed",
    skills: [
      { name: "OpenCode",     icon: "openai",      context: "en aprendizaje" },
      { name: "n8n",          icon: "n8n",         context: "en aprendizaje" },
      { name: "Prompt Eng.",  icon: "openai",      context: "en uso activo" },
    ],
  },
  {
    name: "DevOps & Tools",
    color: "#00ff88",
    skills: [
      { name: "Git",          icon: "git",         context: "5+ años" },
      { name: "Linux",        icon: "linux",       context: "en aprendizaje" },
      { name: "Docker",       icon: "docker",      context: "básico" },
      { name: "Flutter",      icon: "flutter",     context: "producción" },
    ],
  },
]
```

### certifications.ts — agregar aquí cada nueva cert obtenida o planificada
```typescript
export const certifications = [
  {
    name: "eJPTv2",
    fullName: "Junior Penetration Tester",
    issuer: "eLearnSecurity",
    status: "planned",           // "obtained" | "in-progress" | "planned"
    date: "Dic 2026",            // fecha obtenida o estimada
    badgeUrl: null,              // URL de imagen del badge (null hasta obtenerla)
    credentialUrl: null,         // URL de verificación pública
  },
  // Agregar aquí futuras certs: eCPPTv2, eWPT, AWS, etc.
]
```

### projects.ts
```typescript
export const projects = [
  {
    title: "my-landing-portfolio",
    description: "Portfolio personal construido con Astro, Tailwind CSS y TypeScript. Diseño cyberpunk/synthwave con ilustración 3D isométrica.",
    stack: ["Astro", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/TU_USUARIO/my-landing-portfolio",  // TODO
    live: "https://javier-rojas.vercel.app",                        // TODO
    featured: true,
  },
  // TODO: agregar proyectos reales
]
```

---

## Prompt de inicio para OpenCode

Cuando abras OpenCode dentro de `my-landing-portfolio/`, usa este prompt:

```
/sdd-new

Contexto: Estoy construyendo mi portfolio personal con Astro 5 + Tailwind CSS 4 + TypeScript.
Package manager: pnpm (siempre, nunca npm).
El AGENTS.md y BRAND.md están en la raíz con todas las reglas de marca y de código.
La spec completa está en SPEC.md.

Primera tarea: crear el proyecto base de Astro con la estructura de carpetas definida en SPEC.md,
instalar las dependencias aprobadas con pnpm, configurar Tailwind con las variables de marca del BRAND.md,
y descargar las fuentes Rajdhani y JetBrains Mono para servirlas localmente en public/fonts/.

No empezar a implementar secciones todavía — solo el setup inicial que pasa `pnpm build` sin errores.
```
