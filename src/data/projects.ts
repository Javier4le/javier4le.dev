import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: "Sistema de Gestión Educativa",
    description: "Plataforma web para la gestión integral de instituciones educativas: matrícula, asistencia, calificaciones y comunicación entre docentes, estudiantes y apoderados. Desarrollada con arquitectura REST y roles diferenciados.",
    stack: ["Vue.js", "TypeScript", "Laravel", "MySQL"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "App Móvil Empresarial",
    description: "Aplicación multiplataforma para gestión de campo: registro de visitas, reportes en tiempo real y sincronización offline-first con backend REST. Publicada en Android e iOS con autenticación JWT y roles de usuario.",
    stack: ["Flutter", "Dart", "Firebase", "REST API"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description: "Panel interactivo para análisis de datos de negocio con gráficos en tiempo real, filtros dinámicos y exportación de reportes. Backend con API GraphQL y autenticación por sesión.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: null,
    live: null,
    featured: false,
  },
]
