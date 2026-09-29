import type { Scope } from "@zag-js/core"
import type { Direction } from "@zag-js/types"
import type { ActionsLayout, OpenItem, SwipeSide } from "./swipeable-list.types"
import { clamp, getSideFromSign, getSideSign } from "./swipeable-list.utils"

const OFFSET_VAR = "--swipe-offset"
const PROGRESS_VAR = "--swipe-progress"
const ACTION_PROGRESS_VAR = "--swipe-action-progress"

export const DISTANCE_VAR: Record<SwipeSide, string> = {
  start: "--swipe-start-distance",
  end: "--swipe-end-distance",
}

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

function getOutermostFirst(actionEls: HTMLElement[], side: SwipeSide) {
  return side === "start" ? actionEls : actionEls.toReversed()
}

export function measureActions(ctx: Scope, value: string, side: SwipeSide, dir: Direction): ActionsLayout {
  const actionsEl = getItemActionsEl(ctx, value, side)
  const actionEls = getActionEls(actionsEl)
  if (!actionsEl || actionEls.length === 0) return { width: 0, stops: [] }

  const width = actionsEl.style.width
  const progress = actionEls.map((el) => el.style.getPropertyValue(ACTION_PROGRESS_VAR))
  actionsEl.style.width = "max-content"
  for (const el of actionEls) el.style.setProperty(ACTION_PROGRESS_VAR, "1")

  const rect = actionsEl.getBoundingClientRect()
  const outerIsRight = (side === "end") === (dir === "ltr")
  const stops = getOutermostFirst(actionEls, side).map((el) => {
    const actionRect = el.getBoundingClientRect()
    return outerIsRight ? rect.right - actionRect.left : actionRect.right - rect.left
  })

  actionsEl.style.width = width
  actionEls.forEach((el, index) => el.style.setProperty(ACTION_PROGRESS_VAR, progress[index] ?? ""))
  return { width: rect.width, stops }
}

export function getOutermostActionEl(ctx: Scope, value: string, side: SwipeSide) {
  return getOutermostFirst(getActionEls(getItemActionsEl(ctx, value, side)), side)[0]
}

function hideActions(ctx: Scope, value: string, side: SwipeSide) {
  for (const el of getActionEls(getItemActionsEl(ctx, value, side))) el.style.setProperty(ACTION_PROGRESS_VAR, "0")
}

function setActionsProgress(ctx: Scope, value: string, side: SwipeSide, distance: number, layout: ActionsLayout) {
  const actionEls = getOutermostFirst(getActionEls(getItemActionsEl(ctx, value, side)), side)
  const revealed = distance - layout.width + (layout.stops.at(-1) ?? 0)

  let start = 0
  actionEls.forEach((el, index) => {
    const stop = layout.stops[index] ?? start
    const progress = stop > start ? clamp((revealed - start) / (stop - start), 0, 1) : 1
    el.style.setProperty(ACTION_PROGRESS_VAR, `${Math.round(progress * 1000) / 1000}`)
    start = stop
  })
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
  return measureActions(ctx, value, side, dir).width > 0 ? { value, side } : undefined
}

export function setItemOffset(
  ctx: Scope,
  value: string,
  offset: number,
  progress: number,
  dir: Direction,
  layout?: ActionsLayout,
) {
  const contentEl = getItemContentEl(ctx, value)
  if (contentEl) contentEl.style.transform = offset === 0 ? "" : `translate3d(${offset}px, 0, 0)`

  const itemEl = getItemEl(ctx, value)
  if (!itemEl) return

  const side = offset === 0 ? null : getSideFromSign(offset, dir)
  itemEl.style.setProperty(OFFSET_VAR, `${offset}px`)
  itemEl.style.setProperty(PROGRESS_VAR, `${progress}`)
  itemEl.style.setProperty(DISTANCE_VAR.start, `${side === "start" ? Math.abs(offset) : 0}px`)
  itemEl.style.setProperty(DISTANCE_VAR.end, `${side === "end" ? Math.abs(offset) : 0}px`)
  if (side !== "start") hideActions(ctx, value, "start")
  if (side !== "end") hideActions(ctx, value, "end")
  if (side && layout) setActionsProgress(ctx, value, side, Math.abs(offset), layout)
}

export function setItemSelectable(ctx: Scope, value: string, selectable: boolean) {
  const contentEl = getItemContentEl(ctx, value)
  if (!contentEl) return
  contentEl.style.userSelect = selectable ? "" : "none"
  contentEl.style.setProperty("-webkit-user-select", selectable ? "" : "none")
}
