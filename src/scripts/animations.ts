export function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15 }
  )
  document.querySelectorAll<Element>('[data-animate]').forEach((el) => {
    observer.observe(el)
  })
}

export function initHeroOnLoad(): void {
  const elements = document.querySelectorAll<Element>('[data-animate-on-load]')
  requestAnimationFrame(() => {
    elements.forEach((el) => {
      el.classList.add('is-visible')
    })
  })
}
