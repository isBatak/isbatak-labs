import type { ComponentType } from "react"

import { IconGlazeCompareDemo } from "./compare"
import { IconGlazeFolderDemo } from "./folder"
import { IconGlazeHomeScreenDemo } from "./home-screen"
import { IconGlazeIntensityDemo } from "./intensity"
import { IconGlazeSizesDemo } from "./sizes"

export const iconGlazeDemos: Record<string, ComponentType> = {
  "icon-glaze/compare": IconGlazeCompareDemo,
  "icon-glaze/folder": IconGlazeFolderDemo,
  "icon-glaze/home-screen": IconGlazeHomeScreenDemo,
  "icon-glaze/intensity": IconGlazeIntensityDemo,
  "icon-glaze/sizes": IconGlazeSizesDemo,
}
