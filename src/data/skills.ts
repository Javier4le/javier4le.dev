import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accentVar: "--primary",
    skills: [
      { name: "Vue.js", icon: "vuejs", context: "3+ años" },
      { name: "React", icon: "react", context: "producción" },
      { name: "TypeScript", icon: "typescript", context: "producción" },
      { name: "JavaScript", icon: "javascript", context: "5+ años" },
      { name: "Astro", icon: "astro", context: "en aprendizaje" },
      { name: "HTML/CSS", icon: "html5", context: "producción" },
    ],
  },
  {
    name: "Backend",
    accentVar: "--accent",
    skills: [
      { name: "Laravel", icon: "laravel", context: "producción" },
      { name: "PHP", icon: "php", context: "3+ años" },
      { name: "Node.js", icon: "nodejs", context: "producción" },
      { name: "MySQL", icon: "mysql", context: "producción" },
      { name: "PostgreSQL", icon: "postgresql", context: "en uso" },
      { name: "REST APIs", icon: "swagger", context: "producción" },
    ],
  },
  {
    name: "IA & Automatización",
    accentVar: "--secondary",
    skills: [
      { name: "Prompt Engineering", icon: "openai", context: "en aprendizaje" },
      { name: "Claude / ChatGPT", icon: "openai", context: "uso diario" },
      { name: "n8n", icon: "n8n", context: "en aprendizaje" },
    ],
  },
  {
    name: "DevOps & Tools",
    accentVar: "--chart-5",
    skills: [
      { name: "Git/GitHub", icon: "git", context: "producción" },
      { name: "Linux", icon: "linux", context: "uso diario" },
      { name: "Docker", icon: "docker", context: "en aprendizaje" },
      { name: "Flutter", icon: "flutter", context: "producción" },
    ],
  },
]
