import { defineTokens } from "@pandacss/dev"

export { createColors, type ColorOptions } from "./colors"

export const tokenAdditions = defineTokens({
  sizes: {
    grain: { value: "192px" },
  },
})
