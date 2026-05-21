# Manual de Marca — Javier Rojas Portfolio
**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Basado en:** Prototipo v0.app — portfolio-landing-page

---

## 1. Identidad

### Concepto
**"Terminal meets Synthwave"** — Un desarrollador que domina el stack moderno y la inteligencia artificial, con raíces en el código limpio y la seguridad. La marca comunica competencia técnica real sin perder la personalidad: serio pero con carácter, estructurado pero llamativo.

### Tagline
```
Full-Stack Developer · IA · Ciberseguridad
```

### Firma visual del nombre
- **Display:** `Javier` en foreground sólido con efecto glitch
- **Acento:** `Rojas` en gradiente primario → secundario → accent (magenta → violeta → cyan)
- **Monogram:** `JR` en JetBrains Mono, usado en favicon y nav logo

---

## 2. Paleta de Colores

### Tokens principales
| Token | HEX | Uso |
|---|---|---|
| `--background` | `#0a0a0f` | Fondo global — casi negro con tinte azul-índigo |
| `--foreground` | `#e0e0e8` | Texto principal — blanco frío |
| `--card` | `#12121a` | Fondo de cards y terminal windows |
| `--muted` | `#1a1a24` | Fondos secundarios, inputs |
| `--border` | `#2a2a3a` | Bordes sutiles |
| `--muted-foreground` | `#888899` | Texto secundario, placeholders |

### Acentos (la personalidad)
| Token | HEX | Nombre | Uso |
|---|---|---|---|
| `--primary` | `#ff0080` | Magenta Neón | CTAs, hover primario, glitch, neon glow principal |
| `--secondary` | `#7c3aed` | Violeta Profundo | Gradientes, categorías IA, secundario |
| `--accent` | `#00f5ff` | Cyan Eléctrico | Links, código, monitor secundario, accents |
| `chart-5` | `#00ff88` | Verde Terminal | Plantas, éxito, elementos vivos |
| `chart-4` | `#ff6b35` | Naranja Señal | Alertas suaves, puntos de atención |

### Reglas de uso
- **Nunca** usar fondos blancos ni grises claros
- El magenta (`#ff0080`) es el color de marca — el que más aparece en hover y CTAs
- Los gradientes van siempre de primary → secondary → accent (izquierda a derecha)
- Neon glow se aplica solo a elementos interactivos o de alto énfasis, nunca en todo

### Gradiente de marca
```css
background: linear-gradient(to right, #ff0080, #7c3aed, #00f5ff);
```

---

## 3. Tipografía

### Fuentes
| Rol | Fuente | Uso |
|---|---|---|
| Display / Headings | **Rajdhani** | Títulos H1, H2, nombre hero, navegación |
| Monospace / Code | **JetBrains Mono** | Código, tags, labels técnicos, comentarios, terminal |

### Import (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### Escala tipográfica
| Nivel | Tamaño | Peso | Fuente |
|---|---|---|---|
| Hero H1 | `5rem–8rem` responsive | 700 | Rajdhani |
| H2 sección | `2.25rem–3rem` | 700 | Rajdhani |
| H3 card | `1.25rem` | 700 | Rajdhani |
| Body | `1rem` | 400 | Rajdhani |
| Código / labels | `0.75rem–0.875rem` | 400–700 | JetBrains Mono |
| Tracking widths | `0.1em–0.15em` | — | Labels en mayúsculas |

### Convenciones de texto en código
```
// comentarios de sección → font-mono, text-accent, opacity 70%
> prefijo de heading → text-primary, font-mono
$ comandos → text-accent, font-mono
```

---

## 4. Efectos Visuales

### Grid de fondo
```css
background-image:
  linear-gradient(rgba(255, 0, 128, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 0, 128, 0.03) 1px, transparent 1px);
background-size: 50px 50px;
```
Aplica en hero y secciones destacadas. Sutil, no en toda la página.

### Glitch (solo en el nombre "Javier")
```css
@keyframes glitch {
  0%   { text-shadow: 2px 0 #ff0080, -2px 0 #00f5ff; }
  25%  { text-shadow: -2px 0 #ff0080, 2px 0 #00f5ff; }
  50%  { text-shadow: 2px -2px #ff0080, -2px 2px #00f5ff; }
  75%  { text-shadow: -2px 2px #ff0080, 2px -2px #00f5ff; }
  100% { text-shadow: 2px 0 #ff0080, -2px 0 #00f5ff; }
}
animation: glitch 3s infinite;
```

### Gradient Mesh (fondos de sección)
```css
background:
  radial-gradient(at 20% 30%, rgba(255, 0, 128, 0.15) 0%, transparent 50%),
  radial-gradient(at 80% 70%, rgba(0, 245, 255, 0.10) 0%, transparent 50%),
  radial-gradient(at 50% 50%, rgba(124, 58, 237, 0.10) 0%, transparent 50%);
```

### Neon Glow (botones e interactivos)
```css
/* Pink */
box-shadow: 0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 20px rgba(255, 0, 128, 0.5);
/* Cyan */
box-shadow: 0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px rgba(0, 245, 255, 0.5);
```

### Terminal Window (componente reutilizable)
- Fondo: `#12121a` con gradiente sutil hacia `#0a0a0f`
- Header: `#2a2a3a` con tres dots (rojo/amarillo/verde) + filename en mono
- Borde: `1px solid #2a2a3a`
- Border-radius: `0.25rem` (casi sharp)

### Scanlines (opcional, solo hero)
```css
/* Overlay con opacidad 0.3, pointer-events: none */
repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
```

---

## 5. Componentes UI

### Botón primario (CTA)
- Background: `--primary` (`#ff0080`)
- Text: blanco
- Sin border-radius (o mínimo `0.25rem`)
- On hover: neon-glow-pink + `translateY(-2px)`
- Font: Rajdhani, `font-semibold`

### Botón secundario (outline)
- Border: `1px solid --accent` (`#00f5ff`)
- Text: `--accent`
- Background: transparent
- On hover: background `--accent`, text `--accent-foreground` (`#0a0a0f`)

### Tech chip (stack tags en About)
- Logo SVG de la tecnología (24×24px) + nombre en texto
- `bg-muted border border-border font-mono text-sm`
- On hover: `border-primary text-primary`, el logo hace un sutil glow del color de la marca
- Padding: `px-3 py-2`, gap entre logo y texto: `8px`
- Fuente de logos: **Devicons** (CDN gratuito) o SVGs descargados en `public/icons/`

### Skill card (sección Skills) — SIN PORCENTAJES
Los porcentajes son arbitrarios y no comunican nada real. En su lugar, las skills se muestran como **tech cards con categoría de contexto**:
- Logo de la tecnología (32×32px)
- Nombre de la tecnología
- Etiqueta de contexto en mono pequeño: `"3+ años"`, `"producción"`, `"en aprendizaje"`, `"certificando"`
- Color del borde según categoría (magenta/cyan/violeta/verde)
- On hover: el card levita con neon glow del color de su categoría
- Layout: grid de 3-4 columnas, responsive

### Certification badge
- Estilo "achievement unlock" — más visual que una card de texto
- Logo/ícono de la cert
- Nombre de la cert + institución
- Estado: `OBTENIDA` (verde, glow) o `EN PROGRESO` (ambar, pulsante) o `PLANIFICADA` (gris)
- Año de obtención o fecha estimada
- Se ubica en una subsección dentro de Skills o sección propia si hay 3+ certs

### Heading de sección
```
> Nombre Sección    ← font-mono, text-primary
────────────────    ← w-20 h-1, gradiente primary→accent
```

---

## 6. Ilustración 3D (Hero)

### Concepto
Escena isométrica de home/gaming setup con:
- Dos monitores (principal con código, secundario con stats)
- Teclado mecánico con RGB (`#ff0080`, `#00f5ff`, `#7c3aed`)
- Mouse con glow cyan
- Planta pequeña con verde terminal (`#00ff88`)
- Iluminación ambiental RGB inferior (gradiente de marca)
- Filter: `drop-shadow(0 0 30px rgba(255, 0, 128, 0.3))`

### Implementación recomendada
1. **Opción A (en uso):** SVG inline con paths isométricos — cero dependencias
2. **Opción B (upgrade):** Escena Spline3D embebida via `<script>` — interactiva al mouse
3. **Opción C (futuro):** Three.js custom con `@react-three/fiber` y controles de órbita

Para la versión inicial del portfolio, el SVG inline del prototipo funciona bien. El upgrade a Spline es el next step natural.

---

## 7. Layout y Espaciado

### Contenedor máximo
`max-w-6xl mx-auto px-6` → 1152px de ancho, 24px de padding lateral

### Secciones
- Padding vertical: `py-24` (96px arriba y abajo)
- Separación entre secciones: solo padding, sin líneas divisoras

### Grid
- About: `md:grid-cols-2`
- Skills: `md:grid-cols-2`
- Projects: `md:grid-cols-2 lg:grid-cols-3`

### Border-radius global
`0.25rem` — angular, casi sin redondeo. Coherente con la estética tech/terminal.

---

## 8. Animaciones

### Principios
- **Stagger:** Los elementos entran en secuencia con delays de `100ms–500ms`
- **Tipo:** `opacity 0→1` + `translateY(30px → 0)` — siempre desde abajo
- **Trigger:** IntersectionObserver al 20% de visibilidad
- **Duración:** `600ms–700ms` con `ease-out`
- **Nada de bounces ni overshoot** — el estilo es tech, no juguetón

### En el hero (page load)
```
0ms   → subtitle aparece
100ms → H1 "Javier"
200ms → H1 "Rojas"
300ms → párrafo descriptor
400ms → botones CTA
500ms → ilustración 3D (desde la derecha: translateX)
```

### Skill cards y cert badges (Skills section)
- Trigger: cuando la sección es visible
- Cada card entra con stagger de `50ms` entre elementos del mismo grupo
- Los cert badges `EN PROGRESO` tienen un pulso continuo en el borde

---

## 9. Secciones y Contenido

### Navegación
`JR` · About · Projects · Skills · Contact

### Hero
- Eyebrow: `Full-Stack Developer · IA · Ciberseguridad`
- H1: `Javier / Rojas`
- Descriptor: 1 línea, directo al grano
- CTAs: `Ver Proyectos` (primary) + `Contactar` (outline)
- Elemento derecho: ilustración 3D setup

### About
- Formato terminal window con `about.astro` como filename
- Bio en 2-3 párrafos cortos
- Tech stack chips CON LOGOS a la derecha (ver spec de componente)

### Projects
- Cards estilo terminal window
- Placeholder visual hasta tener screenshots reales
- Stack tags + links GitHub/Live

### Skills
- 4 categorías: Frontend (magenta), Backend (cyan), IA & Automatización (violeta), DevOps (verde)
- **Tech cards con logo + contexto** — SIN porcentajes
- Subsección "Certificaciones" al final: badges con estado visual

### Contact
- Formulario minimalista: Nombre, Email, Mensaje
- **Sin número de teléfono ni ubicación** — esa info es privada y va en el CV, no en la web pública
- Links: GitHub + LinkedIn
- CTA final: `Let's build something.`

---

## 10. Tone of Voice

- **Directo:** Sin relleno. Cada línea tiene que ganarse su lugar.
- **Técnico pero accesible:** Jerga de dev sí, pero explicada cuando es necesario.
- **Español en contenido, inglés en código/labels:** `> About`, `// TECH_STACK`, `$ npm run dev`
- **Confianza sin arrogancia:** El contexto habla (`"3+ años"`, `"en producción"`) — no los adjetivos ni los números inventados.

---

*Este documento es la fuente de verdad para cualquier decisión visual del portfolio.*  
*Actualizar cada vez que se haga un cambio significativo al diseño.*
