import type {
  Axis,
  CalloutProps,
  FrameProps,
  IconGridLayer,
  IconGridProps,
  MotionProps,
  Placement,
  Span,
} from "./caliper.types"

export const unit = (value: number) => `calc(${value} * var(--caliper-px))`

const seconds = (value: number) => `${value}s`

export function frameMotion({ animate, time, stagger }: FrameProps) {
  return {
    attrs: { "data-animate": animate || undefined, "data-scrub": time === undefined ? undefined : "" },
    style: {
      ...(time === undefined ? {} : { "--caliper-time": seconds(time) }),
      ...(stagger === undefined ? {} : { "--caliper-stagger": seconds(stagger) }),
    },
  }
}

export function markMotion({ enter, exit, order, exitOrder, delay, duration }: MotionProps<string, string>) {
  return {
    attrs: { "data-enter": enter, "data-exit": exit },
    style: {
      ...(order === undefined ? {} : { "--caliper-order": order }),
      ...(exitOrder === undefined ? {} : { "--caliper-exit-order": exitOrder }),
      ...(delay === undefined ? {} : { "--caliper-delay": seconds(delay) }),
      ...(duration === undefined ? {} : { "--caliper-duration": seconds(duration) }),
    },
  }
}

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

const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, index) => from + index)

const rect = (x: number, y: number, width: number, height: number, radius: number) =>
  `M${x + radius} ${y}H${x + width - radius}A${radius} ${radius} 0 0 1 ${x + width} ${y + radius}` +
  `V${y + height - radius}A${radius} ${radius} 0 0 1 ${x + width - radius} ${y + height}` +
  `H${x + radius}A${radius} ${radius} 0 0 1 ${x} ${y + height - radius}` +
  `V${y + radius}A${radius} ${radius} 0 0 1 ${x + radius} ${y}Z`

const lines = (positions: number[], size: number) => positions.map((at) => `M${at} 0V${size}M0 ${at}H${size}`).join("")

export function iconGridPath(layer: IconGridLayer, { units = 24, trim = 2 }: IconGridProps = {}): string {
  const center = units / 2
  const safe = units - trim * 2
  if (layer === "minor") return lines(range(0, Math.floor(units)), units)
  if (layer === "major") return lines([center - units / 8, center, center + units / 8], units)
  const square = units / 8
  const narrow = units / 6
  const radius = units / 12
  return [
    `M0 0L${units} ${units}M${units} 0L0 ${units}`,
    `M${trim} ${center}A${safe / 2} ${safe / 2} 0 1 0 ${units - trim} ${center}A${safe / 2} ${safe / 2} 0 1 0 ${trim} ${center}Z`,
    rect(square, square, units - square * 2, units - square * 2, radius),
    rect(narrow, trim, units - narrow * 2, safe, radius),
    rect(trim, narrow, safe, units - narrow * 2, radius),
  ].join("")
}
