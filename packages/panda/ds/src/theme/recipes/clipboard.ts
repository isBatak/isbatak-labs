import { defineSlotRecipe } from "@pandacss/dev"

import { fieldLabel, fieldOrientation, fieldRoot } from "./field"

export const clipboardSlotRecipe = defineSlotRecipe({
  className: "clipboard",
  description: "Copy a value to the clipboard, with a label, an input and a copy trigger",
  slots: ["root", "control", "trigger", "indicator", "input", "label", "valueText"],
  base: {
    root: {
      ...fieldRoot,
      ...fieldOrientation.vertical.root,
      alignItems: "flex-start",
    },
    label: fieldLabel,
    indicator: {
      display: "inline-flex",
      _icon: {
        boxSize: "1.25em",
      },
    },
    control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
    },
  },
  variants: {
    orientation: {
      horizontal: fieldOrientation.horizontal,
      vertical: fieldOrientation.vertical,
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})
