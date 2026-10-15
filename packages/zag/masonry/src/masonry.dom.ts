import { queryAll } from "@zag-js/dom-query"
import { parts } from "./masonry.anatomy"
import type { MasonryProps } from "./masonry.types"
import { countTracks, type MeasuredItem } from "./masonry.utils"

export const getRootId = (props: MasonryProps) => props.ids?.root ?? `masonry:${props.id}`
export const getItemId = (props: MasonryProps, value: string) =>
  props.ids?.item?.(value) ?? `masonry:${props.id}:item:${value}`

export const getRootEl = (props: MasonryProps) => document.getElementById(getRootId(props))

export const isItemEl = (props: MasonryProps, node: Node): node is HTMLElement =>
  node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).dataset.ownedby === getRootId(props)

export const getItemEls = (props: MasonryProps) =>
  queryAll<HTMLElement>(getRootEl(props), `:scope > [${parts.item.attr}]`).filter((el) => isItemEl(props, el))

export function getColumnCount(rootEl: HTMLElement) {
  return Math.max(1, countTracks(getComputedStyle(rootEl).gridTemplateColumns))
}

export function getRowGap(rootEl: HTMLElement) {
  return parseFloat(getComputedStyle(rootEl).rowGap) || 0
}

export function measureItems(props: MasonryProps): MeasuredItem[] {
  return getItemEls(props)
    .filter((el) => el.getClientRects().length > 0)
    .map((el) => ({
      value: el.dataset.value ?? "",
      height: el.offsetHeight,
      span: Number(el.dataset.span) || 1,
    }))
}
