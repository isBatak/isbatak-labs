import type { Axis, CalloutProps, Placement, Span } from "./caliper.types"

export const unit = (value: number) => `calc(${value} * var(--caliper-px))`

export const axisOf = (placement: Placement): Axis => (placement === "top" || placement === "bottom" ? "x" : "y")

export function spanStyle(span: Span | undefined, axis: Axis): Record<string, string | number> {
  const [from, to, length] =
    axis === "x" ? (["left", "right", "width"] as const) : (["top", "bottom", "height"] as const)
  if (!span || (span.start === undefined && span.end === undefined && span.size === undefined)) {
    return { [from]: 0, [to]: 0 }
  }
  const style: Record<string, string | number> = {}
  if (span.start !== undefined) style[from] = unit(span.start)
  if (span.end !== undefined) style[to] = unit(span.end)
  if (span.size !== undefined) style[length] = unit(span.size)
  if (span.start === undefined && span.end === undefined) style[from] = 0
  return style
}

const nearest = (anchors: CalloutProps["anchors"], toY: number) =>
  anchors.reduce((best, point) => (Math.abs(toY - point.y) < Math.abs(toY - best) ? point.y : best), anchors[0]?.y ?? 0)

export function calloutPath({ anchors, to, bend }: CalloutProps): string {
  const turn = bend ?? (nearest(anchors, to.y) + to.y) / 2
  return anchors.map((point) => `M${point.x} ${point.y}V${turn}H${to.x}V${to.y}`).join("")
}
