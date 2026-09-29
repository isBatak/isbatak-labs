import { center, ease, mixRect, type Rect, track, tween } from "../lib/motion"
import { TARGETS } from "../site/layout"
import { T } from "../theme"
import type { Camera, Viewport } from "./camera"
import { EDITOR } from "./editor"
import type { SpotName } from "./labels"

type Shot = readonly [frame: number, x: number, y: number, zoom: number]

const WIDE: Shot[] = [
  [0, 720, 432, 0.9],
  [T.pageIn, 720, 432, 0.9],
  [T.pageIn + 40, 720, 380, 1.18],
  [T.hunt[0] + 8, 720, 290, 1.34],
  [T.hunt[1] + 8, 720, 320, 1.44],
  [T.hunt[2] + 8, 700, 470, 1.5],
  [T.hunt[3] + 8, 662, 540, 1.82],
  [T.click, 662, 548, 1.86],
  [T.open + 36, 1210, 320, 0.9],
  [T.pandaBack, 1210, 320, 0.9],
  [T.pandaBack + 24, 720, 430, 1.45],
  [T.pandaClick, 720, 430, 1.52],
  [T.pandaOpen + 36, 1210, 320, 0.9],
  [T.swarm, 1210, 320, 0.9],
  [T.swarm + 32, 720, 340, 0.9],
  [T.outro, 720, 430, 0.86],
]

const TALL: Shot[] = [
  [0, 720, 432, 0.62],
  [T.pageIn, 720, 432, 0.62],
  [T.pageIn + 40, 720, 400, 0.74],
  [T.hunt[0] + 8, 720, 250, 1.0],
  [T.hunt[1] + 8, 720, 290, 1.06],
  [T.hunt[2] + 8, 720, 480, 1.12],
  [T.hunt[3] + 8, 662, 556, 1.5],
  [T.click, 662, 556, 1.55],
  [T.open + 36, 720, 985, 0.72],
  [T.pandaBack, 720, 985, 0.72],
  [T.pandaBack + 24, 720, 530, 1.3],
  [T.pandaClick, 720, 530, 1.32],
  [T.pandaOpen + 36, 720, 985, 0.72],
  [T.swarm, 720, 985, 0.72],
  [T.swarm + 32, 720, 560, 0.74],
  [T.outro, 720, 560, 0.62],
]

export function camera(frame: number, tall: boolean): Camera {
  const shots = tall ? TALL : WIDE
  return {
    x: track(
      frame,
      shots.map(([at, x]) => [at, x] as const),
    ),
    y: track(
      frame,
      shots.map(([at, , y]) => [at, y] as const),
    ),
    zoom: track(
      frame,
      shots.map(([at, , , zoom]) => [at, zoom] as const),
    ),
  }
}

export function editorFrame(viewport: Viewport) {
  const tall = viewport.height > viewport.width
  if (tall) {
    const scale = (viewport.width - 80) / EDITOR.width
    return { x: 40, y: 900, scale }
  }
  return { x: 880, y: 272, scale: 0.9 }
}

export function markRect(viewport: Viewport, line: number, column: number, mark: number, scroll: number): Rect {
  const { x, y, scale } = editorFrame(viewport)
  const char = EDITOR.font * 0.6
  const top = 36 + 36 + 24 + 12 + (line - scroll) * EDITOR.line
  return {
    x: x + scale * (48 + EDITOR.sidebar + EDITOR.gutter + (column - 1) * char - 3),
    y: y + scale * (top + 1),
    w: scale * (mark * char + 6),
    h: scale * (EDITOR.line - 2),
  }
}

export interface Hop {
  at: number
  target: SpotName
  point: readonly [number, number]
}

export const HUNT: Hop[] = [
  { at: T.hunt[0], target: "eyebrow", point: [756, 221] },
  { at: T.hunt[1], target: "title", point: [700, 282] },
  { at: T.hunt[2], target: "install", point: [640, 531] },
  { at: T.hunt[3], target: "npm", point: [662, 556] },
]

export const JUMPS: Hop[] = [
  { at: T.jumps[0], target: "title", point: [690, 280] },
  { at: T.jumps[1], target: "install", point: [610, 530] },
  { at: T.jumps[2], target: "eyebrow", point: [740, 221] },
]

export function hopRect(frame: number, hops: Hop[]): { rect: Rect; target: SpotName } {
  let current = hops[0] as Hop
  let previous = current
  for (const hop of hops) {
    if (frame >= hop.at - 4) {
      previous = current
      current = hop
    }
  }
  const t = tween(frame, current.at - 4, 5, ease.snap)
  return { rect: mixRect(TARGETS[previous.target], TARGETS[current.target], t), target: current.target }
}

export function hopPoint(frame: number, hops: Hop[], from: readonly [number, number], lead = 12) {
  const keys: [number, number, number][] = [[hops[0]!.at - lead - 8, from[0], from[1]]]
  for (const hop of hops) {
    keys.push([hop.at - 2, hop.point[0], hop.point[1]])
    keys.push([hop.at + 6, hop.point[0] + 8, hop.point[1] + 3])
  }
  return {
    x: track(
      frame,
      keys.map(([at, x]) => [at, x] as const),
    ),
    y: track(
      frame,
      keys.map(([at, , y]) => [at, y] as const),
    ),
  }
}

export function targetCenter(name: SpotName) {
  return center(TARGETS[name])
}
