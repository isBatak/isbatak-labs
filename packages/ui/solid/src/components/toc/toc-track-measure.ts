const CURVE = 6

export interface Track {
  path: string
  width: number
  height: number
  x: Record<string, number>
}

function resolveLength(parentEl: HTMLElement, value: string) {
  const probe = document.createElement("div")
  probe.style.cssText = `position:absolute;visibility:hidden;inline-size:${value}`
  parentEl.append(probe)
  const length = probe.getBoundingClientRect().width
  probe.remove()
  return length
}

export function measureTrack(listEl: HTMLElement): Track {
  const indent = resolveLength(listEl, "var(--toc-indent)")
  const x: Record<string, number> = {}
  let path = ""
  let prevX: number | null = null
  let maxX = 0
  let bottom = 0

  for (const el of listEl.querySelectorAll<HTMLElement>(":scope > li[data-value]")) {
    const top = el.offsetTop
    const itemX = 1 + (Number(el.dataset.depth ?? 1) - 1) * indent
    x[el.dataset.value ?? ""] = itemX
    maxX = Math.max(maxX, itemX)
    bottom = top + el.offsetHeight

    if (prevX === null) path += `M ${itemX} ${top}`
    else if (prevX === itemX) path += ` L ${itemX} ${top}`
    else path += ` L ${prevX} ${top - CURVE} C ${prevX} ${top} ${itemX} ${top} ${itemX} ${top + CURVE}`
    prevX = itemX
  }

  if (prevX !== null) path += ` L ${prevX} ${bottom}`
  return { path, width: maxX + 2, height: listEl.offsetHeight, x }
}

export function watchScrollDirection(
  getScrollEl: (() => HTMLElement | null) | undefined,
  onChange: (direction: "up" | "down") => void,
) {
  const target: HTMLElement | Window = getScrollEl?.() ?? window
  const read = () => (target instanceof Window ? target.scrollY : target.scrollTop)
  let last = read()
  const onScroll = () => {
    const current = read()
    if (current !== last) onChange(current > last ? "down" : "up")
    last = current
  }
  target.addEventListener("scroll", onScroll, { passive: true })
  return () => target.removeEventListener("scroll", onScroll)
}
