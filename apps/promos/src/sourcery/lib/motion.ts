import { Easing, interpolate, interpolateColors, spring } from "remotion"

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const

export const ease = {
  out: Easing.bezier(0.16, 1, 0.3, 1),
  in: Easing.bezier(0.7, 0, 0.84, 0),
  inOut: Easing.bezier(0.65, 0, 0.35, 1),
  whip: Easing.bezier(0.87, 0, 0.13, 1),
  snap: Easing.bezier(0.2, 0.9, 0.1, 1),
}

export function tween(frame: number, start: number, duration: number, easing = ease.out) {
  return interpolate(frame, [start, start + duration], [0, 1], { ...clamp, easing })
}

export function track(frame: number, keys: readonly (readonly [number, number])[], easing = ease.inOut) {
  return interpolate(
    frame,
    keys.map(([at]) => at),
    keys.map(([, value]) => value),
    { ...clamp, easing },
  )
}

export function colorTrack(frame: number, keys: readonly (readonly [number, string])[]) {
  return interpolateColors(
    frame,
    keys.map(([at]) => at),
    keys.map(([, value]) => value),
  )
}

export function pop(frame: number, start: number, fps: number, damping = 14, stiffness = 180) {
  return spring({ frame: frame - start, fps, config: { damping, stiffness, mass: 0.8 } })
}

export function settle(frame: number, start: number, fps: number) {
  return spring({ frame: frame - start, fps, config: { damping: 200 } })
}

export function mix(from: number, to: number, t: number) {
  return from + (to - from) * t
}

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export function mixRect(from: Rect, to: Rect, t: number): Rect {
  return { x: mix(from.x, to.x, t), y: mix(from.y, to.y, t), w: mix(from.w, to.w, t), h: mix(from.h, to.h, t) }
}

export function inflate(rect: Rect, by: number): Rect {
  return { x: rect.x - by, y: rect.y - by, w: rect.w + by * 2, h: rect.h + by * 2 }
}

export function center(rect: Rect) {
  return { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }
}

export function wave(frame: number, period: number, phase = 0) {
  return Math.sin(((frame + phase) / period) * Math.PI * 2)
}
