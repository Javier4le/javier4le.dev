const OVERRIDES: Record<string, string | null> = {
  n8n: '/icons/n8n.svg',
  opencode: '/icons/opencode.svg',
  openai: null,
}

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export function deviconUrl(icon: string): string | null {
  if (icon in OVERRIDES) return OVERRIDES[icon]
  return `${CDN_BASE}/${icon}/${icon}-original.svg`
}
