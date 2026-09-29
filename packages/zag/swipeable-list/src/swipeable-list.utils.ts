import type { Direction } from "@zag-js/types"
import type { DragSample, SwipeSide } from "./swipeable-list.types"

export const FLICK_VELOCITY = 110
export const MAX_VELOCITY = 1500
export const VELOCITY_WINDOW = 100
export const PROJECTION_TIME = 0.2
export const MIN_FULL_SWIPE_GAP = 40
export const SETTLE_DURATION = 0.3
export const FLICK_DURATION = 0.4
export const REST_DELTA = 0.5
export const REST_SPEED = 10

export type SwipeAxis = "x" | "y"

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

export function getSideSign(side: SwipeSide, dir: Direction) {
  return (side === "start") === (dir !== "rtl") ? 1 : -1
}

export function getSideFromSign(sign: number, dir: Direction): SwipeSide {
  return sign > 0 === (dir !== "rtl") ? "start" : "end"
}

export function getSwipeAxis(dx: number, dy: number, threshold: number): SwipeAxis | null {
  if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) return null
  return Math.abs(dx) > Math.abs(dy) ? "x" : "y"
}

export function rubberBand(overflow: number, dimension: number, resistance: number) {
  if (dimension <= 0) return 0
  return (overflow * dimension * resistance) / (dimension + resistance * Math.abs(overflow))
}

export function applyResistance(raw: number, min: number, max: number, dimension: number, resistance: number) {
  const c = clamp(resistance, 0.05, 1)
  if (raw > max) return max + rubberBand(raw - max, dimension, c)
  if (raw < min) return min + rubberBand(raw - min, dimension, c)
  return raw
}

export function getVelocity(samples: DragSample[]) {
  const last = samples.at(-1)
  if (!last) return 0

  const recent = samples.filter((sample) => last.time - sample.time <= VELOCITY_WINDOW)
  const first = recent[0]
  if (!first || recent.length < 2 || last.time === first.time) return 0

  const velocity = ((last.offset - first.offset) / (last.time - first.time)) * 1000
  return clamp(velocity, -MAX_VELOCITY, MAX_VELOCITY)
}

export function getFullSwipeDistance(itemWidth: number, actionsWidth: number, threshold: number) {
  return Math.max(itemWidth * threshold, actionsWidth + MIN_FULL_SWIPE_GAP)
}

interface SnapOptions {
  offset: number
  velocity: number
  positiveWidth: number
  negativeWidth: number
  threshold: number
}

export function getSnapSign({ offset, velocity, positiveWidth, negativeWidth, threshold }: SnapOptions): 1 | -1 | 0 {
  if (Math.abs(velocity) >= FLICK_VELOCITY) {
    if (velocity > 0) return offset < 0 || positiveWidth <= 0 ? 0 : 1
    return offset > 0 || negativeWidth <= 0 ? 0 : -1
  }

  const projected = offset + velocity * PROJECTION_TIME
  if (positiveWidth > 0 && projected >= positiveWidth * threshold) return 1
  if (negativeWidth > 0 && projected <= -negativeWidth * threshold) return -1
  return 0
}

export interface SpringOptions {
  from: number
  to: number
  velocity: number
  bounce: number
  duration: number
}

export interface SpringFrame {
  value: number
  velocity: number
  done: boolean
}

export function createSpring({ from, to, velocity, bounce, duration }: SpringOptions) {
  const damping = clamp(1 - bounce, 0.05, 1)
  const stiffness = (2 * Math.PI) / Math.max(duration, 0.001)
  const displacement = from - to

  function position(time: number) {
    if (damping < 1) {
      const frequency = stiffness * Math.sqrt(1 - damping * damping)
      const decay = Math.exp(-damping * stiffness * time)
      const sine = ((velocity + damping * stiffness * displacement) / frequency) * Math.sin(frequency * time)
      return to + decay * (displacement * Math.cos(frequency * time) + sine)
    }

    return to + Math.exp(-stiffness * time) * (displacement + (velocity + stiffness * displacement) * time)
  }

  return function frame(time: number): SpringFrame {
    const value = position(time)
    const currentVelocity = (position(time + 0.0005) - position(time - 0.0005)) / 0.001
    const done = Math.abs(value - to) < REST_DELTA && Math.abs(currentVelocity) < REST_SPEED
    return done ? { value: to, velocity: 0, done } : { value, velocity: currentVelocity, done }
  }
}

export function getSpringOptions(from: number, to: number, velocity: number, snapBounce: number): SpringOptions {
  const flick = Math.abs(velocity) >= FLICK_VELOCITY
  return {
    from,
    to,
    velocity: clamp(velocity, -MAX_VELOCITY, MAX_VELOCITY),
    bounce: flick ? clamp(snapBounce, 0, 1) : 0,
    duration: flick ? FLICK_DURATION : SETTLE_DURATION,
  }
}
