import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accentVar: "--primary",
    skills: [
      { name: "Vue.js", icon: "vuejs", context: "3+ años" },
      { name: "React", icon: "react", context: "Producción" },
      { name: "TypeScript", icon: "typescript", context: "Producción" },
      { name: "JavaScript", icon: "javascript", context: "5+ años" },
      { name: "Astro", icon: "astro", context: "En aprendizaje" },
      { name: "HTML/CSS", icon: "html5", context: "Producción" },
    ],
  },
  {
    name: "Backend",
    accentVar: "--accent",
    skills: [
      { name: "Laravel", icon: "laravel", context: "Producción" },
      { name: "PHP", icon: "php", context: "3+ años" },
      { name: "Node.js", icon: "nodejs", context: "Producción" },
      { name: "MySQL", icon: "mysql", context: "Producción" },
      { name: "PostgreSQL", icon: "postgresql", context: "En uso" },
      { name: "REST APIs", icon: "swagger", context: "Producción" },
    ],
  },
  {
    name: "IA & Automatización",
    accentVar: "--secondary",
    skills: [
      { name: "Prompt Engineering", icon: "openai", context: "En aprendizaje" },
      { name: "Claude / ChatGPT", icon: "openai", context: "Uso diario" },
      { name: "n8n", icon: "n8n", context: "En aprendizaje" },
    ],
  },
  {
    name: "DevOps & Tools",
    accentVar: "--chart-5",
    skills: [
      { name: "Git/GitHub", icon: "git", context: "Producción" },
      { name: "Linux", icon: "linux", context: "Uso diario" },
      { name: "Docker", icon: "docker", context: "En aprendizaje" },
      { name: "Flutter", icon: "flutter", context: "Producción" },
    ],
  },
]
