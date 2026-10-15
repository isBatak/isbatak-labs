import type { Scope } from "@zag-js/core"

export const getRootId = (ctx: Scope) => ctx.ids?.root ?? `video-player:${ctx.id}`
export const getVideoId = (ctx: Scope) => ctx.ids?.video ?? `video-player:${ctx.id}:video`
export const getTranscriptId = (ctx: Scope) => ctx.ids?.transcript ?? `video-player:${ctx.id}:transcript`
export const getCueId = (ctx: Scope, index: number) => ctx.ids?.cue?.(index) ?? `video-player:${ctx.id}:cue:${index}`

export const getRootEl = (ctx: Scope) => ctx.getById<HTMLElement>(getRootId(ctx))
export const getVideoEl = (ctx: Scope) => ctx.getById<HTMLVideoElement>(getVideoId(ctx))
export const getTranscriptEl = (ctx: Scope) => ctx.getById<HTMLElement>(getTranscriptId(ctx))
export const getCueEl = (ctx: Scope, index: number) => ctx.getById<HTMLElement>(getCueId(ctx, index))
