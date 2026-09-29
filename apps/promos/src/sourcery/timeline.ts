import { T, VIDEO } from "./theme"

const range = (from: number, to: number) => ({ from, durationInFrames: to - from })

export const LAYERS = {
  hook: range(0, T.pageIn + 8),
  editorHero: range(T.open, T.pandaCard + 4),
  editorConfig: range(T.config, T.pandaBack + 16),
  editorStyled: range(T.pandaOpen, T.swarm + 16),
  hunt: range(T.keysIn - 4, T.open + 30),
  open: range(T.open + 25, T.jumps[0] + 1),
  jumps: range(T.jumps[0] - 22, T.editors + 7),
  editors: range(T.editors - 2, T.pandaCard),
  card: range(T.pandaCard - 8, T.config + 11),
  config: range(T.config + 9, T.pandaBack + 7),
  panda: range(T.pandaBack - 2, T.swarm + 7),
  swarm: range(T.swarm + 9, T.outro + 4),
  outro: range(T.outro - 6, VIDEO.duration),
} as const
