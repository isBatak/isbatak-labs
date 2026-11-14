import { defineSlotRecipe } from "@pandacss/dev"

export const statusSlotRecipe = defineSlotRecipe({
  className: "status",
  description: "Colored dot with a label for online or health state",
  slots: ["root", "indicator"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
    },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      forcedColorAdjust: "none",
      bg: "colorPalette.solid",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: "xs",
        },
        indicator: {
          boxSize: "1.5",
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        indicator: {
          boxSize: "2",
        },
      },
      lg: {
        root: {
          textStyle: "md",
        },
        indicator: {
          boxSize: "2.5",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
