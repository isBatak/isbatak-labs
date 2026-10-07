import { defineSlotRecipe } from "@pandacss/dev"

export const textFlip = defineSlotRecipe({
  className: "text-flip",
  slots: ["root", "item"],
  base: {
    root: {
      display: "inline-grid",
      verticalAlign: "bottom",
    },
    item: {
      gridArea: "1 / 1",
      whiteSpace: "nowrap",
      animationDuration: "slower",
      animationTimingFunction: "ease-in-smooth",
      animationFillMode: "both",
      "&[data-state=hidden]": {
        visibility: "hidden",
      },
      "&[data-state=entering]": {
        animationName: "text-flip-in",
      },
      "&[data-state=exiting]": {
        animationName: "text-flip-out",
      },
      _motionReduce: {
        animationName: "none!",
        "&[data-state=exiting]": { visibility: "hidden" },
      },
    },
  },
})
