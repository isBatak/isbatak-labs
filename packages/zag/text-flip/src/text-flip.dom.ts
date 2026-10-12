import type { Scope } from "@zag-js/core"
import { queryAll } from "@zag-js/dom-query"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `text-flip:${ctx.id}`
export const getItemId = (ctx: Scope, index: number) => ctx.ids?.item?.(index) ?? `text-flip:${ctx.id}:item:${index}`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))

export const getItemEls = (ctx: Scope) =>
  queryAll<HTMLElement>(getRootEl(ctx), `[data-part=item][data-ownedby="${CSS.escape(getRootId(ctx))}"]`)

export const getItemCount = (ctx: Scope) => getItemEls(ctx).length
