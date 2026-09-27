import { anatomy } from "@isbatak/zag-swipeable-list/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const swipeableListSlots = anatomy.keys()

const easing = "cubic-bezier(0.32, 0.72, 0, 1)"

export const swipeableListRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "swipeable-list",
  jsx: ["SwipeableList", /SwipeableList\.\w+/],
  slots: swipeableListSlots,
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--swipe-list-gap)",
      width: "full",
      margin: "0",
      padding: "0",
      listStyle: "none",
      _disabled: { opacity: "0.5" },
    },
    item: {
      overflowClipMargin: "4px",
    },
    itemContent: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      borderRadius: "var(--swipe-radius)",
      color: "fg",
      cursor: "grab",
      "&[data-swiping]": { cursor: "grabbing" },
      _disabled: { cursor: "default" },
    },
    itemActions: {
      gap: "var(--swipe-actions-gap)",
      "&[data-side=start]": { paddingInlineEnd: "var(--swipe-actions-gap)" },
      "&[data-side=end]": { paddingInlineStart: "var(--swipe-actions-gap)" },
    },
    itemAction: {
      colorPalette: "gray",
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--swipe-action-width)",
      borderRadius: "var(--swipe-radius)",
      bg: "colorPalette.solid",
      color: "colorPalette.contrast",
      fontWeight: "semibold",
      cursor: "pointer",
      userSelect: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      transitionProperty: "flex-grow, width, margin, opacity",
      transitionDuration: "200ms",
      transitionTimingFunction: easing,
      focusVisibleRing: "inside",
      "& > *": {
        opacity: "clamp(0, calc((var(--swipe-progress, 0) - 0.35) * 2), 1)",
        scale: "clamp(0.6, calc(0.6 + var(--swipe-progress, 0) * 0.4), 1)",
      },
      "[data-side=start][data-armed] > &:not(:first-child)": {
        flexGrow: "0",
        width: "0",
        opacity: "0",
        marginInlineStart: "calc(var(--swipe-actions-gap) * -1)",
      },
      "[data-side=end][data-armed] > &:not(:last-child)": {
        flexGrow: "0",
        width: "0",
        opacity: "0",
        marginInlineEnd: "calc(var(--swipe-actions-gap) * -1)",
      },
      _motionReduce: { transition: "none" },
    },
  },
  variants: {
    variant: {
      elevated: {
        itemContent: { bg: "bg", boxShadow: "xs" },
      },
      outline: {
        itemContent: { bg: "bg", borderWidth: "1px", borderColor: "border" },
      },
      subtle: {
        itemContent: { bg: "bg.muted" },
      },
    },
    size: {
      sm: {
        root: {
          "--swipe-list-gap": "{spacing.2}",
          "--swipe-actions-gap": "{spacing.1.5}",
          "--swipe-action-width": "{sizes.14}",
          "--swipe-radius": "{radii.l2}",
        },
        itemContent: { px: "3", py: "2", textStyle: "sm" },
        itemAction: { textStyle: "xs" },
      },
      md: {
        root: {
          "--swipe-list-gap": "{spacing.3}",
          "--swipe-actions-gap": "{spacing.2}",
          "--swipe-action-width": "{sizes.16}",
          "--swipe-radius": "{radii.l3}",
        },
        itemContent: { px: "4", py: "3", textStyle: "sm" },
        itemAction: { textStyle: "sm" },
      },
      lg: {
        root: {
          "--swipe-list-gap": "{spacing.4}",
          "--swipe-actions-gap": "{spacing.2.5}",
          "--swipe-action-width": "{sizes.20}",
          "--swipe-radius": "{radii.l3}",
        },
        itemContent: { px: "5", py: "4", textStyle: "md" },
        itemAction: { textStyle: "md" },
      },
    },
  },
  defaultVariants: {
    variant: "elevated",
    size: "md",
  },
})
