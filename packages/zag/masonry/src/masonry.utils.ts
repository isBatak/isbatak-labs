import type { ItemLayout, Layout } from "./masonry.types"

export interface MeasuredItem {
  value: string
  height: number
  span: number
}

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

export function toLength(value: number | string | undefined) {
  return typeof value === "number" ? `${value}px` : value
}

export function countTracks(gridTemplateColumns: string) {
  return gridTemplateColumns.split(/\s+/).filter((track) => /^[\d.]+px$/.test(track)).length
}

function getShortestColumn(heights: number[], span: number) {
  let column = 0
  let top = Infinity
  for (let start = 0; start + span <= heights.length; start++) {
    const candidate = Math.max(...heights.slice(start, start + span))
    if (candidate < top) {
      top = candidate
      column = start
    }
  }
  return column
}

export function computeLayout(items: MeasuredItem[], columns: number, gap: number, sequential: boolean): Layout {
  const count = Math.max(1, columns)
  const heights: number[] = Array.from({ length: count }, () => 0)
  const placed: Record<string, ItemLayout> = {}
  let next = 0

  for (const item of items) {
    const span = clamp(Math.round(item.span), 1, count)
    let column: number
    if (sequential) {
      if (next + span > count) next = 0
      column = next
      next = (next + span) % count
    } else {
      column = getShortestColumn(heights, span)
    }

    const top = Math.max(...heights.slice(column, column + span))
    heights.fill(top + item.height + gap, column, column + span)
    placed[item.value] = { column, span, top }
  }

  const height = items.length > 0 ? Math.max(0, Math.max(...heights) - gap) : 0
  return { columns: count, height, items: placed }
}

export function isLayoutEqual(a: Layout | null, b: Layout | null | undefined) {
  if (a === b) return true
  if (!a || !b || a.columns !== b.columns || a.height !== b.height) return false
  const keys = Object.keys(a.items)
  if (keys.length !== Object.keys(b.items).length) return false
  return keys.every((key) => {
    const x = a.items[key]!
    const y = b.items[key]
    return !!y && x.column === y.column && x.span === y.span && x.top === y.top
  })
}
