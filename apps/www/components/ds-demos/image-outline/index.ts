import type { ComponentType } from "react"

import { ImageOutlineAvatarDemo } from "./avatar"
import { ImageOutlineCompareDemo } from "./compare"
import { ImageOutlineStrengthDemo } from "./strength"

export const imageOutlineDemos: Record<string, ComponentType> = {
  "image-outline/avatar": ImageOutlineAvatarDemo,
  "image-outline/compare": ImageOutlineCompareDemo,
  "image-outline/strength": ImageOutlineStrengthDemo,
}
