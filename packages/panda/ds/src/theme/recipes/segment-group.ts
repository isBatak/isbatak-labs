import { defineSlotRecipe } from "@pandacss/dev"

import {
  segmentFitted,
  segmentIndicator,
  segmentItem,
  segmentJustify,
  segmentSizes,
  segmentVariants,
  segmentVars,
} from "./shared/segment"

export const segmentGroupSlotRecipe = defineSlotRecipe({
  className: "segment-group",
  description: "Segmented control for switching between a few options",
  slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
  base: {
    root: {
      ...segmentVars,
      ...segmentVariants.enclosed.list,
      display: "inline-flex",
      position: "relative",
      isolation: "isolate",
      _vertical: {
        flexDirection: "column",
      },
    },
    item: {
      ...segmentItem,
      ...segmentVariants.enclosed.item,
      "&:has(input:focus-visible)": {
        focusRing: "outside",
      },
    },
    indicator: segmentIndicator,
  },
  variants: {
    fitted: {
      true: {
        root: segmentFitted.list,
        item: segmentFitted.item,
      },
    },
    justify: {
      start: {
        root: segmentJustify.start,
      },
      center: {
        root: segmentJustify.center,
      },
      end: {
        root: segmentJustify.end,
      },
    },
    size: segmentSizes,
    tinted: {
      true: {
        root: {
          "--segment-indicator-bg": "colors.colorPalette.subtle",
        },
        indicator: {
          transitionProperty: "colors",
          transitionDuration: "moderate",
        },
        item: {
          transitionProperty: "colors",
          transitionDuration: "moderate",
          _checked: {
            color: "colorPalette.fg",
          },
        },
      },
    },
    icon: {
      true: {
        item: {
          px: "0",
          aspectRatio: "square",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
