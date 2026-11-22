import type { ComponentType } from "react"

import { IconPullCompareDemo } from "./compare"
import { IconPullOffsetDemo } from "./offset"

export const iconPullDemos: Record<string, ComponentType> = {
  "icon-pull/compare": IconPullCompareDemo,
  "icon-pull/offset": IconPullOffsetDemo,
}
