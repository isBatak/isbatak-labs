import { anatomy } from "@isbatak/zag-masonry/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const masonrySlots = anatomy.keys()

export const masonryRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "masonry",
  jsx: ["Masonry", /Masonry\.\w+/],
  slots: masonrySlots,
  base: {
    root: {
      width: "full",
    },
    item: {
      minWidth: "0",
      overflow: "hidden",
      borderRadius: "l3",
      bg: "bg.emphasized",
    },
  },
  variants: {
    gap: {
      none: { root: { gap: "0" } },
      sm: { root: { gap: "2" } },
      md: { root: { gap: "4" } },
      lg: { root: { gap: "6" } },
    },
  },
  defaultVariants: {
    gap: "md",
  },
})
