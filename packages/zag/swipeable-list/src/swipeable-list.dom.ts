import type { Scope } from "@zag-js/core"
import type { Direction } from "@zag-js/types"
import type { OpenItem, SwipeSide } from "./swipeable-list.types"
import { getSideFromSign, getSideSign } from "./swipeable-list.utils"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `swipeable-list:${ctx.id}`
export const getItemId = (ctx: Scope, value: string) =>
  ctx.ids?.item?.(value) ?? `swipeable-list:${ctx.id}:item:${value}`
export const getItemContentId = (ctx: Scope, value: string) =>
  ctx.ids?.itemContent?.(value) ?? `swipeable-list:${ctx.id}:item-content:${value}`
export const getItemActionsId = (ctx: Scope, value: string, side: SwipeSide) =>
  ctx.ids?.itemActions?.(value, side) ?? `swipeable-list:${ctx.id}:item-actions:${value}:${side}`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))
export const getItemEl = (ctx: Scope, value: string) => ctx.getById<HTMLElement>(getItemId(ctx, value))
export const getItemContentEl = (ctx: Scope, value: string) => ctx.getById<HTMLElement>(getItemContentId(ctx, value))
export const getItemActionsEl = (ctx: Scope, value: string, side: SwipeSide) =>
  ctx.getById<HTMLElement>(getItemActionsId(ctx, value, side))

export function getActionEls(actionsEl: HTMLElement | null) {
  return Array.from(actionsEl?.querySelectorAll<HTMLElement>("[data-part=item-action]") ?? [])
}

export function getActionsWidth(ctx: Scope, value: string, side: SwipeSide) {
  return getActionEls(getItemActionsEl(ctx, value, side)).reduce((width, el) => width + el.offsetWidth, 0)
}

export function getOutermostActionEl(ctx: Scope, value: string, side: SwipeSide) {
  const actionEls = getActionEls(getItemActionsEl(ctx, value, side))
  return side === "start" ? actionEls[0] : actionEls.at(-1)
}

export function getRestOffset(ctx: Scope, dir: Direction, openItem: OpenItem | null, value: string) {
  if (openItem?.value !== value) return 0
  return getSideSign(openItem.side, dir) * getActionsWidth(ctx, value, openItem.side)
}

export function getKeySwipeTarget(
  ctx: Scope,
  dir: Direction,
  openItem: OpenItem | null,
  value: string,
  direction: 1 | -1,
): OpenItem | null | undefined {
  const openSign = openItem?.value === value ? getSideSign(openItem.side, dir) : 0
  if (openSign === -direction) return null
  if (openSign !== 0) return undefined

  const side = getSideFromSign(direction, dir)
  return getActionsWidth(ctx, value, side) > 0 ? { value, side } : undefined
}

export function setItemOffset(ctx: Scope, value: string, offset: number) {
  const transform = offset === 0 ? "" : `translate3d(${offset}px, 0, 0)`
  const contentEl = getItemContentEl(ctx, value)
  if (contentEl) contentEl.style.transform = transform

  for (const side of ["start", "end"] as const) {
    const actionsEl = getItemActionsEl(ctx, value, side)
    if (actionsEl) actionsEl.style.transform = transform
  }

  getItemEl(ctx, value)?.style.setProperty("--swipe-offset", `${offset}px`)
}

export function setItemSelectable(ctx: Scope, value: string, selectable: boolean) {
  const contentEl = getItemContentEl(ctx, value)
  if (!contentEl) return
  contentEl.style.userSelect = selectable ? "" : "none"
  contentEl.style.setProperty("-webkit-user-select", selectable ? "" : "none")
}
