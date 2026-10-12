import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-text-flip/anatomy"
import { defineKeyframes, defineSlotRecipe } from "@pandacss/dev"
import type { CssKeyframes, SlotRecipeConfig } from "@pandacss/types"

export const textFlipSlots = anatomy.keys()

type TextFlipStyles = SlotRecipeDefinition<(typeof textFlipSlots)[number]>

export const textFlipKeyframes: CssKeyframes = defineKeyframes({
  "text-flip-in": {
    from: { opacity: "0", translate: "0 40%", filter: "blur(4px)" },
    to: { opacity: "1", translate: "0 0", filter: "blur(0)" },
  },
  "text-flip-out": {
    from: { opacity: "1", translate: "0 0", filter: "blur(0)" },
    to: { opacity: "0", translate: "0 -40%", filter: "blur(4px)" },
  },
})

export const textFlipRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "text-flip",
  jsx: ["TextFlip", /TextFlip\.\w+/],
  slots: textFlipSlots,
  base: {
    root: {
      verticalAlign: "bottom",
    },
    item: {
      whiteSpace: "nowrap",
      animationDuration: "slower",
      animationTimingFunction: "ease-in-smooth",
      animationFillMode: "both",
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
  } satisfies TextFlipStyles["base"],
})
