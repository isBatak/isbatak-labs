import { defineSlotRecipe } from "@pandacss/dev"

export const toneSlotRecipe = defineSlotRecipe({
  className: "tone",
  description: "Profit or loss figure with a caret and a success or error color, picked from the value's sign",
  slots: ["root", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5",
      fontVariantNumeric: "tabular-nums",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      _icon: {
        m: "-px",
        me: "-0.5",
        boxSize: "3",
      },
    },
  },
  variants: {
    tone: {
      positive: {},
      negative: {},
      neutral: {},
    },
    plain: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      tone: "positive",
      plain: false,
      css: {
        root: {
          color: "fg.success",
        },
      },
    },
    {
      tone: "negative",
      plain: false,
      css: {
        root: {
          color: "fg.error",
        },
      },
    },
  ],
  defaultVariants: {
    tone: "neutral",
    plain: false,
  },
})
