import { defineSlotRecipe } from "@pandacss/dev"

export const progressCircleSlotRecipe = defineSlotRecipe({
  className: "progress-circle",
  description: "Circular progress indicator",
  slots: ["root", "label", "track", "range", "valueText", "view", "circle", "circleTrack", "circleRange"],
  base: {
    root: {
      display: "inline-flex",
      textStyle: "sm",
      position: "relative",
    },
    circle: {
      _indeterminate: {
        animation: "spin 2s linear infinite",
      },
    },
    circleTrack: {
      stroke: "border.muted",
    },
    circleRange: {
      stroke: "colorPalette.solid",
      transitionProperty: "stroke-dashoffset, stroke-dasharray",
      transitionDuration: "slow",
      _indeterminate: {
        animation: "circular-progress 1.5s linear infinite",
      },
    },
    label: {
      display: "inline-flex",
    },
    valueText: {
      color: "fg",
      lineHeight: "1",
      fontWeight: "medium",
      fontVariantNumeric: "tabular-nums",
    },
  },
  variants: {
    round: {
      true: {
        circleRange: {
          strokeLinecap: "round",
        },
      },
      false: {
        circleRange: {
          strokeLinecap: "butt",
        },
      },
    },
    size: {
      xs: {
        circle: {
          "--size": "sizes.6",
          "--thickness": "sizes.1",
        },
        valueText: {
          textStyle: "2xs",
        },
      },
      sm: {
        circle: {
          "--size": "sizes.8",
          "--thickness": "sizes.1",
        },
        valueText: {
          textStyle: "2xs",
        },
      },
      md: {
        circle: {
          "--size": "sizes.10",
          "--thickness": "sizes.1.5",
        },
        valueText: {
          textStyle: "xs",
        },
      },
      lg: {
        circle: {
          "--size": "sizes.12",
          "--thickness": "sizes.1.5",
        },
        valueText: {
          textStyle: "md",
        },
      },
      xl: {
        circle: {
          "--size": "sizes.16",
          "--thickness": "sizes.1.5",
        },
        valueText: {
          textStyle: "xl",
        },
      },
      "2xl": {
        circle: {
          "--size": "sizes.20",
          "--thickness": "sizes.2",
        },
        valueText: {
          textStyle: "3xl",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    round: false,
  },
})
