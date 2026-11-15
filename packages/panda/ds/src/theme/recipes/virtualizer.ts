import { defineSlotRecipe } from "@pandacss/dev"

const odd = '&:is([data-index$="1"], [data-index$="3"], [data-index$="5"], [data-index$="7"], [data-index$="9"])'

export const virtualizerSlotRecipe = defineSlotRecipe({
  slots: ["root", "content", "item", "row", "cell"],
  className: "virtualizer",
  jsx: [/^(List|Grid|Window)Virtualizer(\.|Root$)/],
  description:
    "Scroll container that renders only the visible part of a long list or grid (thousands of rows). Use ScrollArea for content that fits in the DOM, Table for a short data table.",
  base: {
    root: {
      width: "full",
      color: "fg",
      rounded: "l2",
      outline: "none",
      focusVisibleRing: "outside",
    },
    content: {},
    item: {
      display: "flex",
      alignItems: "center",
      borderColor: "border.muted",
    },
    row: {
      borderColor: "border.muted",
    },
    cell: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "border.muted",
      borderInlineEndWidth: "1px",
      borderBlockEndWidth: "1px",
      fontVariantNumeric: "tabular-nums",
    },
  },
  variants: {
    variant: {
      plain: {},
      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        root: {
          bg: "bg.subtle",
        },
      },
    },
    orientation: {
      vertical: {
        item: {
          borderBlockEndWidth: "1px",
        },
      },
      horizontal: {
        item: {
          justifyContent: "center",
          whiteSpace: "nowrap",
          borderInlineEndWidth: "1px",
        },
      },
    },
    size: {
      sm: {
        item: { textStyle: "xs", px: "3", gap: "0.5" },
        cell: { textStyle: "xs", px: "2" },
      },
      md: {
        item: { textStyle: "sm", px: "4", gap: "1" },
        cell: { textStyle: "xs", px: "3" },
      },
      lg: {
        item: { textStyle: "md", px: "5", gap: "1" },
        cell: { textStyle: "sm", px: "4" },
      },
    },
    striped: {
      true: {
        item: {
          [odd]: { bg: "bg.muted" },
        },
        row: {
          [odd]: { bg: "bg.muted" },
        },
      },
    },
  },
  compoundVariants: [
    { orientation: "vertical", size: "sm", css: { item: { minH: "10", py: "2" } } },
    { orientation: "vertical", size: "md", css: { item: { minH: "12", py: "3" } } },
    { orientation: "vertical", size: "lg", css: { item: { minH: "14", py: "3.5" } } },
    { orientation: "horizontal", size: "sm", css: { item: { minW: "16" } } },
    { orientation: "horizontal", size: "md", css: { item: { minW: "20" } } },
    { orientation: "horizontal", size: "lg", css: { item: { minW: "24" } } },
  ],
  defaultVariants: {
    variant: "outline",
    orientation: "vertical",
    size: "md",
  },
})
