import { SPOTS, type SpotName } from "../stage/labels"
import { markRect } from "../stage/shots"
import type { Viewport } from "../stage/camera"

export function markLength(name: SpotName) {
  return SPOTS[name].needle.split(/[\s>]/)[0]?.length ?? 1
}

export function scrollFor(line: number) {
  return Math.max(1, line - 8)
}

export const STYLED_MARK = 'styled("div"'.length

export function styledSpot() {
  return { line: SPOTS.install.styled?.at.line ?? 1, column: SPOTS.install.styled?.at.column ?? 1 }
}

export function heroLanding(viewport: Viewport) {
  const line = SPOTS.npm.at.line
  return markRect(viewport, line, SPOTS.npm.at.column, markLength("npm"), scrollFor(line))
}

export function styledLanding(viewport: Viewport) {
  const { line, column } = styledSpot()
  return markRect(viewport, line, column, STYLED_MARK, scrollFor(line))
}
