import { defineSlotRecipe } from "@pandacss/dev"

export const avatar = defineSlotRecipe({
  className: "avatar",
  slots: ["root", "image", "fallback"],
  variants: {
    shape: {
      full: {
        root: { cornerShape: "round" },
        image: { cornerShape: "round" },
        fallback: { cornerShape: "round" },
      },
    },
  },
})
