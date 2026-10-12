import type { WheelPickerItem, WheelPickerProps, WheelPickerRow } from "./wheel-picker.types"

export const COPIES = 7
export const MIDDLE = Math.floor(COPIES / 2)

const defaults = { itemHeight: 36, visibleCount: 5, loop: false }

export function resolveProps(props: WheelPickerProps) {
  return {
    ...props,
    itemHeight: props.itemHeight ?? defaults.itemHeight,
    visibleCount: props.visibleCount ?? defaults.visibleCount,
    loop: props.loop ?? defaults.loop,
  }
}

export function getRowCount(props: WheelPickerProps) {
  const { items, loop } = resolveProps(props)
  return loop ? items.length * COPIES : items.length
}

export function getRows(props: WheelPickerProps): WheelPickerRow[] {
  return Array.from({ length: getRowCount(props) }, (_, row) => ({ row, item: props.items[row % props.items.length]! }))
}

export function getRowOf(props: WheelPickerProps, value: string, fromRow?: number) {
  const { items, loop } = resolveProps(props)
  const index = items.findIndex((item) => item.value === value)
  if (index === -1) return -1
  if (!loop) return index
  const n = items.length
  const start = fromRow ?? MIDDLE * n + index
  const copy = Math.round((start - index) / n)
  return copy * n + index
}

export function stepRow(props: WheelPickerProps, fromRow: number, step: number) {
  const { items } = props
  const rowCount = getRowCount(props)
  const direction = Math.sign(step)
  let row = fromRow
  let found = fromRow
  let remaining = Math.abs(step)

  while (remaining > 0) {
    row += direction
    if (row < 0 || row >= rowCount) break
    if (items[row % items.length]?.disabled) continue
    found = row
    remaining--
  }

  return found
}

export function getItemAt(items: WheelPickerItem[], row: number) {
  return items[((row % items.length) + items.length) % items.length]
}

export function getCenterRow(props: WheelPickerProps, el: HTMLElement) {
  return Math.round(el.scrollTop / resolveProps(props).itemHeight)
}

export function scrollToRow(props: WheelPickerProps, el: HTMLElement, row: number, behavior: ScrollBehavior) {
  el.scrollTo({ top: row * resolveProps(props).itemHeight, behavior })
}

export function trackScrollEnd(el: HTMLElement, onEnd: () => void) {
  if ("onscrollend" in window) {
    el.addEventListener("scrollend", onEnd)
    return () => el.removeEventListener("scrollend", onEnd)
  }

  let timer: ReturnType<typeof setTimeout>
  const onScroll = () => {
    clearTimeout(timer)
    timer = setTimeout(onEnd, 120)
  }
  el.addEventListener("scroll", onScroll, { passive: true })
  return () => {
    clearTimeout(timer)
    el.removeEventListener("scroll", onScroll)
  }
}
