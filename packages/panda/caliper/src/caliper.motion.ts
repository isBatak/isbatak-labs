import type { CssKeyframes, GlobalVarsDefinition, SystemStyleObject } from "@pandacss/types"

const easeInOut = "cubic-bezier(0.65, 0, 0.35, 1)"
const easeOut = "cubic-bezier(0.16, 1, 0.3, 1)"
const easeIn = "cubic-bezier(0.7, 0, 0.84, 0)"

const progress = { syntax: "<number>", inherits: true, initialValue: "1" } as const

export const caliperMotionVars: GlobalVarsDefinition = {
  "--caliper-line": progress,
  "--caliper-ext": progress,
  "--caliper-label": progress,
  "--caliper-dot": progress,
}

export const caliperKeyframes: CssKeyframes = {
  "caliper-dimension-draw": {
    "0%": { "--caliper-line": "0", "--caliper-ext": "0", "--caliper-label": "0", animationTimingFunction: easeInOut },
    "45%": { "--caliper-line": "1", "--caliper-ext": "0", animationTimingFunction: easeOut },
    "75%": { "--caliper-ext": "1", "--caliper-label": "0", animationTimingFunction: easeOut },
    "100%": { "--caliper-line": "1", "--caliper-ext": "1", "--caliper-label": "1" },
  },
  "caliper-dimension-retract": {
    "0%": { "--caliper-line": "1", "--caliper-ext": "1", "--caliper-label": "1", animationTimingFunction: easeIn },
    "30%": { "--caliper-label": "0", "--caliper-ext": "1", animationTimingFunction: easeIn },
    "60%": { "--caliper-ext": "0", "--caliper-line": "1", animationTimingFunction: easeInOut },
    "100%": { "--caliper-line": "0", "--caliper-ext": "0", "--caliper-label": "0" },
  },
  "caliper-callout-draw": {
    "0%": { "--caliper-dot": "0", "--caliper-line": "0", "--caliper-label": "0", animationTimingFunction: easeOut },
    "25%": { "--caliper-dot": "1", "--caliper-line": "0", animationTimingFunction: easeInOut },
    "70%": { "--caliper-line": "1", "--caliper-label": "0", animationTimingFunction: easeOut },
    "100%": { "--caliper-dot": "1", "--caliper-line": "1", "--caliper-label": "1" },
  },
  "caliper-callout-retract": {
    "0%": { "--caliper-dot": "1", "--caliper-line": "1", "--caliper-label": "1", animationTimingFunction: easeIn },
    "30%": { "--caliper-label": "0", "--caliper-line": "1", animationTimingFunction: easeInOut },
    "75%": { "--caliper-line": "0", "--caliper-dot": "1", animationTimingFunction: easeIn },
    "100%": { "--caliper-dot": "0", "--caliper-line": "0", "--caliper-label": "0" },
  },
  "caliper-fade-in": {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  "caliper-fade-out": {
    from: { opacity: "1" },
    to: { opacity: "0" },
  },
}

const enterDelay = "calc(var(--caliper-delay, 0s) + var(--caliper-order, 0) * var(--caliper-stagger))"
const exitDelay =
  "calc(var(--caliper-delay, 0s) + var(--caliper-exit-order, var(--caliper-order, 0)) * var(--caliper-stagger))"

const played = { animationFillMode: "both", animationTimingFunction: "linear" } satisfies SystemStyleObject

export const markMotion = {
  "[data-animate=in] &[data-enter]": { ...played, animationDelay: enterDelay },
  "[data-animate=out] &[data-exit]": { ...played, animationDelay: exitDelay },
  "[data-animate=in][data-scrub] &[data-enter]": {
    animationPlayState: "paused",
    animationDelay: `calc(${enterDelay} - var(--caliper-time))`,
  },
  "[data-animate=out][data-scrub] &[data-exit]": {
    animationPlayState: "paused",
    animationDelay: `calc(${exitDelay} - var(--caliper-time))`,
  },
  "[data-animate=in] &[data-enter=fade]": {
    animationName: "caliper-fade-in",
    animationDuration: "var(--caliper-duration, 0.3s)",
  },
  "[data-animate=out] &[data-exit=fade]": {
    animationName: "caliper-fade-out",
    animationDuration: "var(--caliper-duration, 0.3s)",
  },
} satisfies SystemStyleObject

const far = "100rem"
const lineStart = "calc((1 - var(--caliper-line)) * 50% - var(--caliper-line) * 4px)"
const lineEnd = "calc(100% - (1 - var(--caliper-line)) * 50% + var(--caliper-line) * 4px)"

const polygon = (points: string[]) => `polygon(${points.join(", ")})`

const topClip = (() => {
  const reach = "calc(var(--caliper-ext) * (100% - 3px) + 3px)"
  return polygon([
    `-${far} -${far}`,
    `calc(100% + ${far}) -${far}`,
    `calc(100% + ${far}) -4px`,
    `${lineEnd} -4px`,
    `${lineEnd} 3px`,
    `${lineStart} 3px`,
    `-4px 3px`,
    `-4px ${reach}`,
    `calc(100% + 4px) ${reach}`,
    `calc(100% + 4px) 3px`,
    `-4px 3px`,
    `${lineStart} 3px`,
    `${lineStart} -4px`,
    `-${far} -4px`,
  ])
})()

const bottomClip = (() => {
  const reach = "calc((1 - var(--caliper-ext)) * (100% - 3px))"
  return polygon([
    `-${far} calc(100% + ${far})`,
    `calc(100% + ${far}) calc(100% + ${far})`,
    `calc(100% + ${far}) calc(100% + 4px)`,
    `${lineEnd} calc(100% + 4px)`,
    `${lineEnd} calc(100% - 3px)`,
    `${lineStart} calc(100% - 3px)`,
    `-4px calc(100% - 3px)`,
    `-4px ${reach}`,
    `calc(100% + 4px) ${reach}`,
    `calc(100% + 4px) calc(100% - 3px)`,
    `-4px calc(100% - 3px)`,
    `${lineStart} calc(100% - 3px)`,
    `${lineStart} calc(100% + 4px)`,
    `-${far} calc(100% + 4px)`,
  ])
})()

const leftClip = (() => {
  const reach = "calc(var(--caliper-ext) * (100% - 3px) + 3px)"
  return polygon([
    `-${far} -${far}`,
    `-${far} calc(100% + ${far})`,
    `-4px calc(100% + ${far})`,
    `-4px ${lineEnd}`,
    `3px ${lineEnd}`,
    `3px ${lineStart}`,
    `3px -4px`,
    `${reach} -4px`,
    `${reach} calc(100% + 4px)`,
    `3px calc(100% + 4px)`,
    `3px -4px`,
    `3px ${lineStart}`,
    `-4px ${lineStart}`,
    `-4px -${far}`,
  ])
})()

const rightClip = (() => {
  const reach = "calc((1 - var(--caliper-ext)) * (100% - 3px))"
  return polygon([
    `calc(100% + ${far}) -${far}`,
    `calc(100% + ${far}) calc(100% + ${far})`,
    `calc(100% + 4px) calc(100% + ${far})`,
    `calc(100% + 4px) ${lineEnd}`,
    `calc(100% - 3px) ${lineEnd}`,
    `calc(100% - 3px) ${lineStart}`,
    `calc(100% - 3px) -4px`,
    `${reach} -4px`,
    `${reach} calc(100% + 4px)`,
    `calc(100% - 3px) calc(100% + 4px)`,
    `calc(100% - 3px) -4px`,
    `calc(100% - 3px) ${lineStart}`,
    `calc(100% + 4px) ${lineStart}`,
    `calc(100% + 4px) -${far}`,
  ])
})()

const tickFromCenter = "calc((1 - var(--caliper-line)) * 50% - var(--caliper-extension-width))"

export const dimensionMotion = {
  ...markMotion,
  "[data-animate=in] &[data-enter=draw]": {
    animationName: "caliper-dimension-draw",
    animationDuration: "var(--caliper-duration, 0.7s)",
  },
  "[data-animate=out] &[data-exit=retract]": {
    animationName: "caliper-dimension-retract",
    animationDuration: "var(--caliper-duration, 0.5s)",
  },
  "&:is([data-enter], [data-exit])[data-placement=top]": { clipPath: topClip },
  "&:is([data-enter], [data-exit])[data-placement=bottom]": { clipPath: bottomClip },
  "&:is([data-enter], [data-exit])[data-placement=left]": { clipPath: leftClip },
  "&:is([data-enter], [data-exit])[data-placement=right]": { clipPath: rightClip },
  "&:is([data-enter], [data-exit]):is([data-placement=top], [data-placement=bottom])[data-ticks]::before": {
    insetInlineStart: tickFromCenter,
  },
  "&:is([data-enter], [data-exit]):is([data-placement=top], [data-placement=bottom])[data-ticks]::after": {
    insetInlineEnd: tickFromCenter,
  },
  "&:is([data-enter], [data-exit]):is([data-placement=left], [data-placement=right])[data-ticks]::before": {
    top: tickFromCenter,
  },
  "&:is([data-enter], [data-exit]):is([data-placement=left], [data-placement=right])[data-ticks]::after": {
    bottom: tickFromCenter,
  },
} satisfies SystemStyleObject

export const dimensionLabelMotion = {
  ":is([data-enter], [data-exit]) > &": { opacity: "var(--caliper-label)" },
  ":is([data-enter], [data-exit])[data-placement=top] > &": {
    transform: "translateY(calc((1 - var(--caliper-label)) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-placement=bottom] > &": {
    transform: "translateY(calc((var(--caliper-label) - 1) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-placement=left] > &": {
    transform: "translateX(calc((1 - var(--caliper-label)) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-placement=right] > &": {
    transform: "translateX(calc((var(--caliper-label) - 1) * 0.5rem))",
  },
} satisfies SystemStyleObject

const callout = "&:is([data-enter], [data-exit])"

export const calloutMotion = {
  ...markMotion,
  "[data-animate=in] &[data-enter=draw]": {
    animationName: "caliper-callout-draw",
    animationDuration: "var(--caliper-duration, 0.8s)",
  },
  "[data-animate=out] &[data-exit=retract]": {
    animationName: "caliper-callout-retract",
    animationDuration: "var(--caliper-duration, 0.5s)",
  },
  [`${callout} [data-caliper-callout-leader] path`]: {
    vectorEffect: "none",
    strokeWidth: "calc(1px / var(--caliper-scale))",
    strokeDasharray: "1",
    strokeDashoffset: "calc(1 - var(--caliper-line))",
  },
  [`${callout} [data-caliper-callout-anchor]`]: {
    r: "calc(var(--caliper-dot) * 4px / var(--caliper-scale))",
  },
} satisfies SystemStyleObject

export const calloutLabelMotion = {
  ":is([data-enter], [data-exit]) > &": { opacity: "var(--caliper-label)" },
  ":is([data-enter], [data-exit])[data-side=left] > &": {
    transform: "translateX(calc((1 - var(--caliper-label)) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-side=right] > &": {
    transform: "translateX(calc((var(--caliper-label) - 1) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-side=top] > &": {
    transform: "translateY(calc((1 - var(--caliper-label)) * 0.5rem))",
  },
  ":is([data-enter], [data-exit])[data-side=bottom] > &": {
    transform: "translateY(calc((var(--caliper-label) - 1) * 0.5rem))",
  },
} satisfies SystemStyleObject
