import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy } from "@isbatak/zag-wheel-picker/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const wheelPickerSlots = anatomy.keys()

type WheelPickerStyles = SlotRecipeDefinition<(typeof wheelPickerSlots)[number]>

export const wheelPickerRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "wheel-picker",
  jsx: ["WheelPicker", /WheelPicker\.\w+/],
  slots: wheelPickerSlots,
  base: {
    root: {
      width: "full",
      _disabled: { opacity: "0.5" },
    },
    label: {
      srOnly: true,
    },
    control: {
      minWidth: "16",
    },
    viewport: {
      cursor: "grab",
      perspective: "400px",
      maskImage: "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
      "&::-webkit-scrollbar": { display: "none" },
      _disabled: { cursor: "not-allowed" },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingInline: "4",
      color: "fg.subtle",
      fontWeight: "medium",
      fontVariantNumeric: "tabular-nums",
      userSelect: "none",
      _disabled: { opacity: "0.35", textDecoration: "line-through" },
      "@supports (animation-timeline: view())": {
        animationName: "wheelPickerTilt",
        animationTimingFunction: "linear",
        animationFillMode: "both",
        animationTimeline: "view()",
      },
    },
    highlight: {
      borderRadius: "l2",
      "[data-wheel-picker-viewport]:focus-visible + &": {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
        outlineOffset: "-2px",
      },
    },
  } satisfies WheelPickerStyles["base"],
  variants: {
    variant: {
      subtle: {
        highlight: { bg: "bg.muted" },
        item: { "&[data-selected]": { color: "fg" } },
      },
      outline: {
        highlight: { borderWidth: "1px", borderColor: "border" },
        item: { "&[data-selected]": { color: "fg" } },
      },
      solid: {
        highlight: { bg: "colorPalette.solid" },
        item: { "&[data-selected]": { color: "colorPalette.contrast" } },
      },
    },
    size: {
      sm: { item: { textStyle: "sm" } },
      md: { item: { textStyle: "md" } },
      lg: { item: { textStyle: "xl" } },
    },
  } satisfies WheelPickerStyles["variants"],
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
})
