export const SEGMENT_LENGTHS = {
  hook: 56,
  hunt: 180,
  open: 80,
  jumps: 130,
  editors: 115,
  card: 80,
  config: 130,
  panda: 180,
  swarm: 95,
  outro: 120,
} as const

export type SegmentName = keyof typeof SEGMENT_LENGTHS

const SEGMENT_ORDER: SegmentName[] = [
  "hook",
  "hunt",
  "open",
  "jumps",
  "editors",
  "card",
  "config",
  "panda",
  "swarm",
  "outro",
]

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

export const T = {
  hookWords: [at("hook", 6), at("hook", 20), at("hook", 34)],
  hookExpand: at("hook", 48),
  pageIn: at("hunt", 0),
  keysIn: at("hunt", 28),
  keysDown: at("hunt", 42),
  hunt: [at("hunt", 48), at("hunt", 78), at("hunt", 108), at("hunt", 138)],
  click: at("hunt", 170),
  open: at("open", 0),
  jumps: [at("jumps", 0), at("jumps", 40), at("jumps", 80)],
  editors: at("editors", 0),
  roll: [
    at("editors", 16),
    at("editors", 30),
    at("editors", 42),
    at("editors", 54),
    at("editors", 66),
    at("editors", 80),
  ],
  pandaCard: at("card", 0),
  config: at("config", 0),
  typeFrom: at("config", 30),
  typeTo: at("config", 70),
  pandaBack: at("panda", 0),
  altDown: at("panda", 50),
  pandaClick: at("panda", 90),
  pandaOpen: at("panda", 96),
  swarm: at("swarm", 0),
  outro: at("outro", 0),
} as const

export const sourcery = {
  violet: "#8b5cf6",
  violetLabel: "#7c3aed",
  pink: "#db2777",
  violetFill: "rgba(139, 92, 246, 0.12)",
  pinkFill: "rgba(219, 39, 119, 0.12)",
} as const

export const vscode = {
  editor: "#ffffff",
  chrome: "#f8f8f8",
  border: "#e5e5e5",
  lineNumber: "#6e7681",
  lineNumberActive: "#171184",
  text: "#3b3b3b",
  muted: "#616161",
  accent: "#005fb8",
  token: {
    identifier: "#001080",
    keyword: "#0000ff",
    string: "#a31515",
    class: "#267f99",
    property: "#001080",
    entity: "#800000",
    jsxliterals: "#000000",
    sign: "#3b3b3b",
    comment: "#008000",
    break: "#3b3b3b",
    space: "#3b3b3b",
  },
} as const
