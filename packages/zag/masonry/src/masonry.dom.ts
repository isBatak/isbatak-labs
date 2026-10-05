import type { Scope } from "@zag-js/core"
import { queryAll } from "@zag-js/dom-query"
import { countTracks, type MeasuredItem } from "./masonry.utils"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `masonry:${ctx.id}`
export const getItemId = (ctx: Scope, value: string) => ctx.ids?.item?.(value) ?? `masonry:${ctx.id}:item:${value}`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))

export const isItemEl = (ctx: Scope, node: Node): node is HTMLElement =>
  node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).dataset.ownedby === getRootId(ctx)

export const getItemEls = (ctx: Scope) =>
  queryAll<HTMLElement>(getRootEl(ctx), ":scope > [data-part=item]").filter((el) => isItemEl(ctx, el))

export function getColumnCount(rootEl: HTMLElement) {
  return Math.max(1, countTracks(getComputedStyle(rootEl).gridTemplateColumns))
}

export function getRowGap(rootEl: HTMLElement) {
  return parseFloat(getComputedStyle(rootEl).rowGap) || 0
}

export function measureItems(ctx: Scope): MeasuredItem[] {
  return getItemEls(ctx)
    .filter((el) => el.getClientRects().length > 0)
    .map((el) => ({
      value: el.dataset.value ?? "",
      height: el.offsetHeight,
      span: Number(el.dataset.span) || 1,
    }))
}
