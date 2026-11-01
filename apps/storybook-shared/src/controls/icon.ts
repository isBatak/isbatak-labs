import { type IconName, iconNames } from "@isbatak/icons"
import { type IconVariant, icon } from "@isbatak/panda-ds/recipes"

export interface IconControls {
  name: IconName
  size: NonNullable<IconVariant["size"]>
}

export const iconArgs: IconControls = { name: "star", size: "xl" }

export const iconArgTypes = {
  name: { control: "select", options: iconNames },
  size: { control: "select", options: icon.variantMap.size },
} as const
