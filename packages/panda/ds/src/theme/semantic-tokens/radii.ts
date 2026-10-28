import { defineSemanticTokens } from "@pandacss/dev"

import { defaultRadiusPreset, radiusCondition, radiusPresets, radiusScale } from "../radius"

const level = (key: "l1" | "l2" | "l3", description: string) => ({
  description,
  value: {
    base: `{radii.${radiusScale[defaultRadiusPreset][key]}}`,
    ...Object.fromEntries(
      radiusPresets.map((preset) => [`_${radiusCondition(preset)}`, `{radii.${radiusScale[preset][key]}}`]),
    ),
  },
})

export const radii = defineSemanticTokens.radii({
  l1: level("l1", "Smallest radius, for nested parts like checkboxes, list items and menu items"),
  l2: level("l2", "Control radius for buttons, inputs, badges, tags and tooltips"),
  l3: level("l3", "Container radius for cards, alerts, dialogs, drawers and popovers"),
})
