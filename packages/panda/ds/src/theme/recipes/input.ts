import { defineRecipe } from "@pandacss/dev"

import { inputBase, inputSizes, inputVariants } from "./shared/input"

export const inputRecipe = defineRecipe({
  className: "input",
  description: "Single-line text input",
  base: inputBase,
  variants: {
    size: inputSizes,
    variant: inputVariants,
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
