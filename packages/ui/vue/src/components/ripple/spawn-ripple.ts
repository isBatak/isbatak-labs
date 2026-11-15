export function spawnRipple(element: HTMLElement, point?: { x: number; y: number }) {
  const rect = element.getBoundingClientRect()
  const x = point ? point.x - rect.left : rect.width / 2
  const y = point ? point.y - rect.top : rect.height / 2
  const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y))

  const ripple = document.createElement("span")
  ripple.setAttribute("data-ripple", "")
  ripple.setAttribute("aria-hidden", "true")
  ripple.style.setProperty("--ripple-x", `${x}px`)
  ripple.style.setProperty("--ripple-y", `${y}px`)
  ripple.style.setProperty("--ripple-size", `${radius * 2}px`)

  const remove = () => ripple.remove()
  ripple.addEventListener("animationend", remove, { once: true })
  ripple.addEventListener("animationcancel", remove, { once: true })

  element.appendChild(ripple)
}
