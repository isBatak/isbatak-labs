import type { ComponentType } from "react"

import { CaliperMark, CaliperWordmark } from "./caliper-art"

interface ToolArt {
  Logo?: ComponentType<{ className?: string }>
  Wordmark?: ComponentType<{ title: string }>
}

/** Logos and wordmarks drawn as components, so they follow the theme. Keyed by tool slug. */
export const toolArt: Record<string, ToolArt> = {
  caliper: { Logo: CaliperMark, Wordmark: CaliperWordmark },
}
