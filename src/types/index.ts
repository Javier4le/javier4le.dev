// Shared TypeScript interfaces

export interface Profile {
  name: string
  title: string
  shortBio: string
  bio: string[]
  tech: string[]
  github: string
  linkedin: string
  formspreeId: string
}

export interface Project {
  title: string
  description: string
  stack: string[]
  github: string | null
  live: string | null
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  context: string
}

export interface SkillCategory {
  name: string
  accentVar: string
  skills: Skill[]
}

export type CertificationStatus = 'obtained' | 'in-progress' | 'planned'

export interface Certification {
  name: string
  fullName: string
  issuer: string
  status: CertificationStatus
  date: string
  badgeUrl?: string | null
  credentialUrl: string | null
}
