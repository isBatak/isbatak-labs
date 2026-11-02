export const SEGMENT_LENGTHS = {
  hook: 90,
  boring: 150,
  setup: 270,
  swap: 320,
  frameworks: 120,
  outro: 130,
} as const

export type SegmentName = keyof typeof SEGMENT_LENGTHS

const SEGMENT_ORDER: SegmentName[] = ["hook", "boring", "setup", "swap", "frameworks", "outro"]

export const SEGMENTS = SEGMENT_ORDER.reduce(
  (segments, name, index) => {
    const previous = SEGMENT_ORDER[index - 1]
    const from = previous ? segments[previous].from + segments[previous].duration : 0
    segments[name] = { from, duration: SEGMENT_LENGTHS[name] }
    return segments
  },
  {} as Record<SegmentName, { from: number; duration: number }>,
)

const at = (segment: SegmentName, offset: number) => SEGMENTS[segment].from + offset

export const VIDEO = {
  fps: 30,
  duration: at("outro", SEGMENT_LENGTHS.outro),
  wide: { width: 1920, height: 1080 },
  tall: { width: 1080, height: 1920 },
} as const

export type IconSet = "boring" | "lucide" | "phosphor" | "material" | "pixel"

export const SWAPS: readonly (readonly [number, IconSet])[] = [
  [0, "boring"],
  [at("swap", 0), "boring"],
  [at("swap", 64), "lucide"],
  [at("swap", 128), "phosphor"],
  [at("swap", 192), "material"],
  [at("swap", 256), "pixel"],
  [at("frameworks", 0), "boring"],
]

export const T = {
  hookLines: [6, 22, 38],
  boringPanel: 8,
  boringCredit: 30,
  setupSteps: [at("setup", 0), at("setup", 90), at("setup", 180)],
  swapTitle: 4,
  frameworksTitle: 4,
  frameworksLogos: 20,
  outroLines: [6, 22, 44],
} as const
