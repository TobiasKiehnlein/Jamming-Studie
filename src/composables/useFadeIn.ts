export function useFadeIn() {
  function observe(selector: string) {
    const els = document.querySelectorAll<HTMLElement>(selector)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
  }
  return { observe }
}
