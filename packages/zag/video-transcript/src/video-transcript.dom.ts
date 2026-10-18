import type { Scope } from "@zag-js/core"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `video-transcript:${ctx.id}`
export const getCueId = (ctx: Scope, index: number) =>
  ctx.ids?.cue?.(index) ?? `video-transcript:${ctx.id}:cue:${index}`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))
export const getCueEl = (ctx: Scope, index: number) => ctx.getById<HTMLElement>(getCueId(ctx, index))
