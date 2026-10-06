import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-swipeable-list/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { GlobalVarsDefinition, SlotRecipeConfig } from "@pandacss/types"

export const swipeableListSlots = anatomy.keys()

type SwipeableListStyles = SlotRecipeDefinition<(typeof swipeableListSlots)[number]>

export const swipeableListGlobalVars: GlobalVarsDefinition = {
  "--swipe-action-progress": { syntax: "<number>", inherits: false, initialValue: "0" },
}

const easing = "cubic-bezier(0.32, 0.72, 0, 1)"
const actionProgress = "var(--swipe-action-progress)"
const actionCollapse = `calc(var(--swipe-action-width) * (${actionProgress} - 1) / 2)`
const actionCollapseWithGap = `calc(var(--swipe-action-width) * (${actionProgress} - 1) / 2 + var(--swipe-actions-gap) * ${actionProgress})`

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
      bg: "color-mix(in srgb, {colors.bg.muted} calc(clamp(0, var(--swipe-progress, 0) * 8, 1) * 100%), transparent)",
      color: "fg",
      cursor: "grab",
      "&[data-swiping]": { cursor: "grabbing" },
      _disabled: { cursor: "default" },
    },
    itemActions: {
      alignItems: "center",
      "&[data-side=start]": { paddingInlineEnd: "var(--swipe-actions-gap)" },
      "&[data-side=end]": { paddingInlineStart: "var(--swipe-actions-gap)" },
    },
    itemAction: {
      colorPalette: "gray",
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      width: "var(--swipe-action-width)",
      height: "var(--swipe-action-height)",
      px: "3",
      marginInline: actionCollapse,
      borderRadius: "full",
      bg: "colorPalette.solid",
      color: "colorPalette.contrast",
      fontWeight: "semibold",
      cursor: "pointer",
      userSelect: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      scale: actionProgress,
      opacity: actionProgress,
      transitionProperty: "filter",
      transitionDuration: "200ms",
      transitionTimingFunction: easing,
      focusVisibleRing: "inside",
      "&::before, &::after": {
        content: '""',
        flexGrow: "1",
        transition: `flex-grow 200ms ${easing}`,
      },
      "&[data-side=start]:first-child, &[data-side=end]:last-child": {
        flexGrow: "1",
      },
      "&[data-side=start]:not(:first-child)": {
        marginInlineStart: actionCollapseWithGap,
      },
      "&[data-side=end]:not(:last-child)": {
        marginInlineEnd: actionCollapseWithGap,
      },
      "&[data-side=start][data-armed]:first-child::after, &[data-side=end][data-armed]:last-child::before": {
        flexGrow: "0",
      },
      "&[data-side=start][data-armed]:not(:first-child), &[data-side=end][data-armed]:not(:last-child)": {
        filter: "opacity(0.4)",
      },
      _motionReduce: {
        transition: "none",
        "&::before, &::after": { transition: "none" },
      },
    },
  } satisfies SwipeableListStyles["base"],
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
          "--swipe-actions-gap": { base: "{spacing.1.5}", md: "{spacing.2}" },
          "--swipe-action-width": "{sizes.14}",
          "--swipe-action-height": "{sizes.8}",
          "--swipe-radius": "{radii.2xl}",
        },
        itemContent: { px: "3", py: "2", textStyle: "sm" },
        itemAction: { textStyle: "xs" },
      },
      md: {
        root: {
          "--swipe-list-gap": "{spacing.3}",
          "--swipe-actions-gap": { base: "{spacing.2}", md: "{spacing.3}" },
          "--swipe-action-width": "{sizes.16}",
          "--swipe-action-height": "{sizes.9}",
          "--swipe-radius": "{radii.3xl}",
        },
        itemContent: { px: "4", py: "3", textStyle: "sm" },
        itemAction: { textStyle: "sm" },
      },
      lg: {
        root: {
          "--swipe-list-gap": "{spacing.4}",
          "--swipe-actions-gap": "{spacing.2.5}",
          "--swipe-action-width": "{sizes.20}",
          "--swipe-action-height": "{sizes.11}",
          "--swipe-radius": "{radii.3xl}",
        },
        itemContent: { px: "5", py: "4", textStyle: "md" },
        itemAction: { textStyle: "md" },
      },
    },
  } satisfies SwipeableListStyles["variants"],
  defaultVariants: {
    size: "md",
  },
})
