import type { ComponentType } from "react"

import { TocDemo } from "./basic"
import { TocSizesDemo } from "./sizes"
import { TocTrackDemo } from "./track"

export const tocDemos: Record<string, ComponentType> = {
  toc: TocDemo,
  "toc/sizes": TocSizesDemo,
  "toc/track": TocTrackDemo,
}
