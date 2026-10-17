import type { Scope } from "@zag-js/core"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `video-player:${ctx.id}`
export const getFrameId = (ctx: Scope) => ctx.ids?.frame ?? `video-player:${ctx.id}:frame`
export const getVideoId = (ctx: Scope) => ctx.ids?.video ?? `video-player:${ctx.id}:video`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))
export const getFrameEl = (ctx: Scope) => ctx.getById<HTMLElement>(getFrameId(ctx))
export const getVideoEl = (ctx: Scope) => ctx.getById<HTMLVideoElement>(getVideoId(ctx))

export const getFullscreenElement = (ctx: Scope) => {
  const root = getFrameEl(ctx)?.getRootNode()
  return (root instanceof ShadowRoot ? root : ctx.getDoc()).fullscreenElement
}
