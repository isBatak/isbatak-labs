import { defineSlotRecipe } from "@pandacss/dev"

export const collapsibleSlotRecipe = defineSlotRecipe({
  slots: ["root", "trigger", "content", "indicator"],
  className: "collapsible",
  description: "Single section that expands and collapses",
  base: {
    indicator: {
      display: "inline-flex",
      transitionProperty: "rotate",
      transitionDuration: "moderate",
      transformOrigin: "center",
      _open: {
        rotate: "180deg",
      },
    },
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "expand-height",
        },
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "collapse-height",
        },
      },
    },
  },
})
