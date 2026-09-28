export const theme = {
  background: "#0b0b0f",
  surface: "#15151c",
  surfaceRaised: "#1d1d26",
  border: "#2a2a36",
  text: "#f4f4f6",
  muted: "#9a9aab",
  accent: "#8b5cf6",
  accentStrong: "#7c3aed",
  accentSoft: "rgb(139 92 246 / 0.14)",
  green: "#34d399",
  sans: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, monospace',
} as const

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  intro: 90,
  demo: 210,
  outro: 90,
} as const

export const DURATION = VIDEO.intro + VIDEO.demo + VIDEO.outro
