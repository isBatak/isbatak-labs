import { useEffect, useState } from "react"
import { css } from "styled-system/css"

import type { Part } from "../lib/messages"
import { partClassName, partFromClassList, recipes } from "../lib/theme-meta"

/**
 * ⌘/Ctrl-click picks the recipe part under the pointer (like DS Manager). Hovering with the modifier held
 * previews the part; the selected part stays outlined.
 */

interface Box {
  top: number
  left: number
  width: number
  height: number
}

const overlay = css({
  position: "fixed",
  pointerEvents: "none",
  zIndex: "2147483646",
  outline: "2px solid #3b82f6",
  outlineOffset: "1px",
  borderRadius: "2px",
})

const hoverOverlay = css({
  position: "fixed",
  pointerEvents: "none",
  zIndex: "2147483646",
  outline: "1px dashed #3b82f6",
  outlineOffset: "1px",
  bg: "rgba(59, 130, 246, 0.06)",
})

const tag = css({
  position: "absolute",
  bottom: "calc(100% + 4px)",
  left: "-2px",
  bg: "#3b82f6",
  color: "white",
  fontSize: "11px",
  lineHeight: "16px",
  px: "1.5",
  borderRadius: "2px",
  whiteSpace: "nowrap",
  fontFamily: "body",
})

function findPart(target: EventTarget | null) {
  let element = target instanceof Element ? target : null
  while (element && element !== document.body) {
    const part = partFromClassList(element.classList)
    if (part) return { element, part }
    element = element.parentElement
  }
  return undefined
}

export function partLabel(part: Part) {
  const recipe = recipes[part.recipe]
  const name = part.slot ?? recipe?.className ?? part.recipe
  return name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (char) => char.toUpperCase())
}

const toBox = (rect: DOMRect): Box => ({ top: rect.top, left: rect.left, width: rect.width, height: rect.height })

export function SelectionLayer(props: { selected: Part | undefined; onSelect: (part: Part) => void }) {
  const { selected, onSelect } = props
  const [hovered, setHovered] = useState<{ box: Box; part: Part }>()
  const [boxes, setBoxes] = useState<Box[]>([])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.metaKey || event.ctrlKey)) return
      const found = findPart(event.target)
      if (!found) return
      event.preventDefault()
      event.stopPropagation()
      onSelect(found.part)
    }
    const onMove = (event: MouseEvent) => {
      const found = event.metaKey || event.ctrlKey ? findPart(event.target) : undefined
      setHovered(found ? { box: toBox(found.element.getBoundingClientRect()), part: found.part } : undefined)
    }
    const onKeyUp = () => setHovered(undefined)
    document.addEventListener("click", onClick, true)
    document.addEventListener("pointerdown", swallowModifiedPointer, true)
    document.addEventListener("mousemove", onMove)
    document.addEventListener("keyup", onKeyUp)
    return () => {
      document.removeEventListener("click", onClick, true)
      document.removeEventListener("pointerdown", swallowModifiedPointer, true)
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("keyup", onKeyUp)
    }
  }, [onSelect])

  useEffect(() => {
    if (!selected) {
      setBoxes([])
      return
    }
    const recipe = recipes[selected.recipe]
    if (!recipe) return
    const className = partClassName(recipe, selected.slot)
    let frame = 0
    const measure = () => {
      const elements = Array.from(document.getElementsByClassName(className)).slice(0, 40)
      setBoxes((previous) => {
        const next = elements
          .map((element) => toBox(element.getBoundingClientRect()))
          .filter((box) => box.width > 0 || box.height > 0)
        return JSON.stringify(previous) === JSON.stringify(next) ? previous : next
      })
      frame = requestAnimationFrame(measure)
    }
    measure()
    return () => cancelAnimationFrame(frame)
  }, [selected])

  return (
    <>
      {boxes.map((box, index) => (
        <div key={index} className={overlay} style={box}>
          {index === 0 && selected && <span className={tag}>{partLabel(selected)}</span>}
        </div>
      ))}
      {hovered && (
        <div className={hoverOverlay} style={hovered.box}>
          <span className={tag}>{partLabel(hovered.part)}</span>
        </div>
      )}
    </>
  )
}

/** Keeps ⌘-click from also toggling the component underneath (pointerdown drives most Ark interactions) */
function swallowModifiedPointer(event: PointerEvent) {
  if ((event.metaKey || event.ctrlKey) && findPart(event.target)) {
    event.preventDefault()
    event.stopPropagation()
  }
}
