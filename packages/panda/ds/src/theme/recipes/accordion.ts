import { defineSlotRecipe } from "@pandacss/dev"

export const accordionSlotRecipe = defineSlotRecipe({
  className: "accordion",
  description: "Expandable sections, e.g. FAQs, settings groups, filters. Use collapsible for a single toggle",
  slots: ["root", "item", "itemTrigger", "itemContent", "itemIndicator", "itemBody"],
  base: {
    root: {
      width: "full",
      "--accordion-radius": "radii.l2",
      "--accordion-border-color": "colors.border.muted",
    },
    item: {
      overflowAnchor: "none",
      borderColor: "var(--accordion-border-color)",
    },
    itemTrigger: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      width: "full",
      outline: "0",
      gap: "2",
      fontWeight: "medium",
      borderRadius: "var(--accordion-radius)",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    itemBody: {
      pt: "var(--accordion-padding-y)",
      pb: "calc(var(--accordion-padding-y) * 2)",
    },
    itemContent: {
      overflow: "hidden",
      borderRadius: "var(--accordion-radius)",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
      },
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.muted",
      flexShrink: "0",
      ms: "auto",
      _open: {
        rotate: "180deg",
      },
      _icon: {
        width: "1.2em",
        height: "1.2em",
      },
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: "1px",
        },
      },
      subtle: {
        itemTrigger: {
          px: "var(--accordion-padding-x)",
        },
        itemContent: {
          px: "var(--accordion-padding-x)",
        },
        item: {
          borderRadius: "var(--accordion-radius)",
          _open: {
            bg: "bg.muted",
          },
        },
      },
      enclosed: {
        root: {
          borderWidth: "1px",
          borderColor: "var(--accordion-border-color)",
          borderRadius: "var(--accordion-radius)",
          divideY: "1px",
          divideColor: "var(--accordion-border-color)",
          overflow: "hidden",
        },
        itemTrigger: {
          px: "var(--accordion-padding-x)",
        },
        itemContent: {
          px: "var(--accordion-padding-x)",
        },
        item: {
          _open: {
            bg: "bg.muted",
          },
        },
      },
      plain: {},
    },
    size: {
      sm: {
        root: {
          "--accordion-padding-x": "spacing.3",
          "--accordion-padding-y": "spacing.2",
        },
        itemTrigger: {
          textStyle: "sm",
          py: "var(--accordion-padding-y)",
        },
        itemContent: {
          textStyle: "sm",
        },
      },
      md: {
        root: {
          "--accordion-padding-x": "spacing.4",
          "--accordion-padding-y": "spacing.2",
        },
        itemTrigger: {
          textStyle: "md",
          py: "var(--accordion-padding-y)",
        },
        itemContent: {
          textStyle: "md",
        },
      },
      lg: {
        root: {
          "--accordion-padding-x": "spacing.4.5",
          "--accordion-padding-y": "spacing.2.5",
        },
        itemTrigger: {
          textStyle: "lg",
          py: "var(--accordion-padding-y)",
        },
        itemContent: {
          textStyle: "lg",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
