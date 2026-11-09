import { defineSlotRecipe } from "@pandacss/dev"

export const tooltipSlotRecipe = defineSlotRecipe({
  slots: ["trigger", "arrow", "arrowTip", "positioner", "content"],
  className: "tooltip",
  description: "Short hint shown on hover or focus",
  base: {
    content: {
      "--tooltip-bg": "colors.bg.inverted",
      bg: "var(--tooltip-bg)",
      color: "fg.inverted",
      fontWeight: "medium",
      boxShadow: "md",
      maxW: "xs",
      zIndex: "tooltip",
      transformOrigin: "var(--transform-origin)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "fast",
      },
    },
    arrow: {
      "--arrow-size": "sizes.2",
      "--arrow-background": "var(--tooltip-bg)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderInlineStartWidth: "1px",
      borderColor: "var(--tooltip-bg)",
    },
  },
  variants: {
    size: {
      sm: {
        content: {
          px: "1.5",
          py: "1",
          textStyle: "xs",
          borderRadius: "l1",
        },
      },
      md: {
        content: {
          px: "2",
          py: "1",
          textStyle: "sm",
          borderRadius: "l1",
        },
      },
      lg: {
        content: {
          px: "2.5",
          py: "1.5",
          textStyle: "md",
          borderRadius: "l2",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
