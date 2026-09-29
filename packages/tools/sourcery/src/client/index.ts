import { type HotKey, getDefaultHotKeys } from "../core/hot-keys"
import type { ClientOptions } from "../core/options"

declare global {
  interface Window {
    __sourcery?: boolean
  }
}

const OVERLAY_STYLES = `
  :host {
    all: initial;
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    pointer-events: none;
  }
  .box {
    position: fixed;
    display: none;
    border: 1.5px solid #8b5cf6;
    border-radius: 3px;
    background: rgb(139 92 246 / 0.12);
  }
  .box[data-styled] {
    border-color: #db2777;
    background: rgb(219 39 119 / 0.12);
  }
  .label[data-styled] {
    background: #db2777;
  }
  .label {
    position: fixed;
    display: none;
    padding: 3px 6px;
    border-radius: 4px;
    background: #7c3aed;
    color: #fff;
    font: 500 11px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.25);
  }
`

export function startSourcery(options: ClientOptions) {
  if (typeof window === "undefined" || window.__sourcery) return
  window.__sourcery = true

  const hotKeys = options.hotKeys ?? getDefaultHotKeys(/Mac|iPhone|iPad/.test(navigator.userAgent))
  const styledKey: HotKey | null = options.styledAttribute && !hotKeys.includes("altKey") ? "altKey" : null
  const overlay = createOverlay()

  let pointer: { x: number; y: number; styled: boolean } | null = null
  let target: Element | null = null

  const isHeld = (event: KeyboardEvent | MouseEvent) => hotKeys.every((key: HotKey) => event[key])
  const isStyled = (event: KeyboardEvent | MouseEvent) => styledKey !== null && event[styledKey]
  const attributeFor = (styled: boolean) => (styled && options.styledAttribute) || options.attribute
  const findTarget = (x: number, y: number, styled: boolean) =>
    document.elementFromPoint(x, y)?.closest(`[${attributeFor(styled)}]`) ?? null

  function highlight(element: Element | null, styled = false) {
    target = element
    if (!element) {
      overlay.hide()
      return
    }
    const location = element.getAttribute(attributeFor(styled)) ?? ""
    const hint = !styled && styledKey && options.styledAttribute && element.hasAttribute(options.styledAttribute)
    const label = styled
      ? `styled  ${location}`
      : `${element.tagName.toLowerCase()}  ${location}${hint ? "  ⌥ styled" : ""}`
    overlay.show(element, label, styled)
  }

  function refresh(event: KeyboardEvent | MouseEvent) {
    if (!pointer || !isHeld(event)) {
      highlight(null)
      return
    }
    pointer.styled = isStyled(event)
    highlight(findTarget(pointer.x, pointer.y, pointer.styled), pointer.styled)
  }

  function onPointerMove(event: PointerEvent) {
    pointer = { x: event.clientX, y: event.clientY, styled: isStyled(event) }
    refresh(event)
  }

  function onPointerDown(event: PointerEvent) {
    if (!isHeld(event) || !findTarget(event.clientX, event.clientY, isStyled(event))) return
    event.preventDefault()
    event.stopImmediatePropagation()
  }

  function onClick(event: MouseEvent) {
    if (!isHeld(event)) return
    const styled = isStyled(event)
    const element = findTarget(event.clientX, event.clientY, styled)
    if (!element) return
    event.preventDefault()
    event.stopImmediatePropagation()
    openSource(element.getAttribute(attributeFor(styled)) ?? "", options.port)
  }

  window.addEventListener("pointermove", onPointerMove, true)
  window.addEventListener("pointerdown", onPointerDown, true)
  window.addEventListener("click", onClick, true)
  window.addEventListener("keydown", refresh, true)
  window.addEventListener("keyup", refresh, true)
  window.addEventListener("blur", () => highlight(null))
  window.addEventListener("scroll", () => highlight(target, pointer?.styled), true)
}

function openSource(location: string, port: number) {
  const match = /^(.*):(\d+):(\d+)$/.exec(location)
  if (!match) return
  const [, file = "", line = "1", column = "1"] = match
  const params = new URLSearchParams({ file, line, column })
  void requestOpen(port, params)
}

const HOSTS = ["127.0.0.1", "localhost"]
let preferredHost: string | null = null

async function requestOpen(port: number, params: URLSearchParams) {
  const hosts = preferredHost ? [preferredHost, ...HOSTS.filter((host) => host !== preferredHost)] : HOSTS
  for (const host of hosts) {
    try {
      await fetch(`http://${host}:${port}/open?${params}`, { mode: "no-cors" })
      preferredHost = host
      return
    } catch {}
  }
}

function createOverlay() {
  let parts: { box: HTMLElement; label: HTMLElement } | null = null

  function mount() {
    const host = document.createElement("sourcery-overlay")
    const root = host.attachShadow({ mode: "open" })
    const style = document.createElement("style")
    const box = document.createElement("div")
    const label = document.createElement("div")
    style.textContent = OVERLAY_STYLES
    box.className = "box"
    label.className = "label"
    root.append(style, box, label)
    document.documentElement.append(host)
    return { box, label }
  }

  return {
    show(element: Element, text: string, styled: boolean) {
      parts ??= mount()
      const { box, label } = parts
      const rect = element.getBoundingClientRect()

      Object.assign(box.style, {
        display: "block",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      })

      box.toggleAttribute("data-styled", styled)
      label.toggleAttribute("data-styled", styled)
      label.textContent = text
      label.style.display = "block"
      const above = rect.top - label.offsetHeight - 6
      const left = Math.min(Math.max(rect.left, 4), window.innerWidth - label.offsetWidth - 4)
      label.style.top = `${above < 4 ? rect.bottom + 6 : above}px`
      label.style.left = `${left}px`
    },
    hide() {
      if (!parts) return
      parts.box.style.display = "none"
      parts.label.style.display = "none"
    },
  }
}
