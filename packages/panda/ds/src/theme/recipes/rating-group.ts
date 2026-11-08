import { defineSlotRecipe } from "@pandacss/dev"

export const ratingGroupSlotRecipe = defineSlotRecipe({
  className: "rating-group",
  description: "Star rating input",
  slots: ["root", "label", "item", "control", "itemIndicator"],
  base: {
    root: {
      colorPalette: "gray",
      display: "inline-flex",
      flexDirection: "column",
      gap: "1.5",
    },
    label: {
      textStyle: "sm",
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    item: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      cursor: "button",
      outline: "0",
      borderRadius: "l1",
      focusVisibleRing: "outside",
      _readOnly: {
        cursor: "radio",
      },
      _disabled: {
        cursor: "disabled",
      },
    },
    itemIndicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1em",
      height: "1em",
      position: "relative",
      "--clip-path": {
        base: "inset(0 50% 0 0)",
        _rtl: "inset(0 0 0 50%)",
      },
      _icon: {
        stroke: "currentColor",
        width: "100%",
        height: "100%",
        display: "inline-block",
        flexShrink: 0,
        position: "absolute",
        left: 0,
        top: 0,
      },
      "& [data-bg]": {
        color: "bg.emphasized",
      },
      "& [data-fg]": {
        color: "transparent",
      },
      "&[data-highlighted]:not([data-half])": {
        "& [data-fg]": {
          color: "colorPalette.solid",
        },
      },
      "&[data-half]": {
        "& [data-fg]": {
          color: "colorPalette.solid",
          clipPath: "var(--clip-path)",
        },
      },
    },
  },
  variants: {
    size: {
      xs: {
        item: {
          textStyle: "sm",
        },
      },
      sm: {
        item: {
          textStyle: "md",
        },
      },
      md: {
        item: {
          textStyle: "xl",
        },
      },
      lg: {
        item: {
          textStyle: "2xl",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
