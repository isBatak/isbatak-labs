import type { ComponentType } from "react"

import { BadgeDemo } from "./basic"
import { BadgeColorsDemo } from "./colors"
import { BadgeSizesDemo } from "./sizes"
import { BadgeStatusDemo } from "./status"
import { BadgeVariantsDemo } from "./variants"
import { BadgeWithIconDemo } from "./with-icon"

export const badgeDemos: Record<string, ComponentType> = {
  badge: BadgeDemo,
  "badge/colors": BadgeColorsDemo,
  "badge/sizes": BadgeSizesDemo,
  "badge/status": BadgeStatusDemo,
  "badge/variants": BadgeVariantsDemo,
  "badge/with-icon": BadgeWithIconDemo,
}
