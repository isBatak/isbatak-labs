import type { ComponentType } from "react"

import { ConcentricBleedDemo } from "./bleed"
import { ConcentricCardDemo } from "./card"
import { ConcentricCardImageDemo } from "./card-image"
import { ConcentricCompareDemo } from "./compare"
import { ConcentricDialogDemo } from "./dialog"
import { ConcentricFloorDemo } from "./floor"
import { ConcentricGapDemo } from "./gap"
import { ConcentricNestedDemo } from "./nested"
import { ConcentricPlaygroundDemo } from "./playground"
import { ConcentricPricingDemo } from "./pricing"
import { ConcentricRingDemo } from "./ring"
import { ConcentricSearchDemo } from "./search"
import { ConcentricSegmentedDemo } from "./segmented"
import { ConcentricWrapperDemo } from "./wrapper"

export const concentricDemos: Record<string, ComponentType> = {
  "concentric/bleed": ConcentricBleedDemo,
  "concentric/card": ConcentricCardDemo,
  "concentric/card-image": ConcentricCardImageDemo,
  "concentric/compare": ConcentricCompareDemo,
  "concentric/dialog": ConcentricDialogDemo,
  "concentric/floor": ConcentricFloorDemo,
  "concentric/gap": ConcentricGapDemo,
  "concentric/nested": ConcentricNestedDemo,
  "concentric/playground": ConcentricPlaygroundDemo,
  "concentric/pricing": ConcentricPricingDemo,
  "concentric/ring": ConcentricRingDemo,
  "concentric/search": ConcentricSearchDemo,
  "concentric/segmented": ConcentricSegmentedDemo,
  "concentric/wrapper": ConcentricWrapperDemo,
}
