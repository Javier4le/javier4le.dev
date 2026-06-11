const OVERRIDES: Record<string, string | null> = {
  // Self-hosted: local SVGs take priority over CDN
  n8n: '/icons/n8n.svg',
  opencode: '/icons/opencode.svg',
  astro: '/icons/astro.svg',
  docker: '/icons/docker.svg',
  flutter: '/icons/flutter.svg',
  git: '/icons/git.svg',
  html5: '/icons/html5.svg',
  javascript: '/icons/javascript.svg',
  laravel: '/icons/laravel.svg',
  linux: '/icons/linux.svg',
  mysql: '/icons/mysql.svg',
  nodejs: '/icons/nodejs.svg',
  php: '/icons/php.svg',
  postgresql: '/icons/postgresql.svg',
  react: '/icons/react.svg',
  swagger: '/icons/swagger.svg',
  typescript: '/icons/typescript.svg',
  vuejs: '/icons/vuejs.svg',
  // No icon available — fallback to first letter
  openai: null,
}

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export function deviconUrl(icon: string): string | null {
  if (icon in OVERRIDES) return OVERRIDES[icon]
  return `${CDN_BASE}/${icon}/${icon}-original.svg`
}
