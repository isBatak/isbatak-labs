import type { ComponentType } from "react"

import { IconsBasicDemo } from "./basic"
import { IconsFontSizeDemo } from "./font-size"
import { IconsSizesDemo } from "./sizes"

export const iconsDemos: Record<string, ComponentType> = {
  "icons/basic": IconsBasicDemo,
  "icons/font-size": IconsFontSizeDemo,
  "icons/sizes": IconsSizesDemo,
}
