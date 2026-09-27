import { definePreset, defineSlotRecipe } from "@pandacss/dev"
import type { Preset, SlotRecipeConfig } from "@pandacss/types"

export const swipeableListSlots = ["root", "item", "itemContent", "itemActions", "itemAction"] as const

export const swipeableListRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "swipeable-list",
  jsx: ["SwipeableList", /SwipeableList\.\w+/],
  slots: [...swipeableListSlots],
  base: {
    root: {
      width: "full",
      margin: "0",
      padding: "0",
      listStyle: "none",
      _disabled: { opacity: "0.5" },
    },
    item: {
      "&:not(:first-of-type)": { borderTopWidth: "1px", borderColor: "border" },
    },
    itemContent: {
      display: "grid",
      gap: "0.5",
      bg: "bg",
      color: "fg",
      cursor: "grab",
      "&[data-swiping]": { cursor: "grabbing" },
      _disabled: { cursor: "default" },
    },
    itemActions: {
      bg: "bg.muted",
    },
    itemAction: {
      colorPalette: "gray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.5",
      bg: "colorPalette.solid",
      color: "colorPalette.contrast",
      fontWeight: "semibold",
      cursor: "pointer",
      userSelect: "none",
      width: "var(--swipe-action-width)",
      overflow: "hidden",
      whiteSpace: "nowrap",
      transitionProperty: "flex-grow, width, padding",
      transitionDuration: "180ms",
      transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
      focusVisibleRing: "inside",
      "[data-side=start][data-armed] > &:first-child": { flexGrow: "1", justifyContent: "flex-end", px: "5" },
      "[data-side=end][data-armed] > &:last-child": { flexGrow: "1", justifyContent: "flex-start", px: "5" },
      "[data-side=start][data-armed] > &:not(:first-child), [data-side=end][data-armed] > &:not(:last-child)": {
        width: "0",
        px: "0",
      },
      _motionReduce: { transition: "none" },
    },
  },
  variants: {
    variant: {
      outline: {
        root: { borderWidth: "1px", borderColor: "border", borderRadius: "l3", overflow: "hidden" },
      },
      plain: {},
    },
    size: {
      sm: {
        root: { "--swipe-action-width": "{sizes.16}" },
        itemContent: { px: "3", py: "2", textStyle: "sm" },
        itemAction: { textStyle: "xs" },
      },
      md: {
        root: { "--swipe-action-width": "{sizes.20}" },
        itemContent: { px: "4", py: "3", textStyle: "sm" },
        itemAction: { textStyle: "sm" },
      },
      lg: {
        root: { "--swipe-action-width": "{sizes.24}" },
        itemContent: { px: "5", py: "4", textStyle: "md" },
        itemAction: { textStyle: "md" },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})

export const swipeableListPreset: Preset = definePreset({
  name: "@isbatak/panda-swipeable-list",
  theme: {
    extend: {
      slotRecipes: {
        swipeableList: swipeableListRecipe,
      },
    },
  },
})

export default swipeableListPreset
