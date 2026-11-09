import { defineSlotRecipe } from "@pandacss/dev"

export const toastSlotRecipe = defineSlotRecipe({
  slots: ["root", "body", "title", "description", "indicator", "closeTrigger", "actionTrigger"],
  className: "toast",
  description: "Temporary notification",
  base: {
    root: {
      colorPalette: "gray",
      width: { base: "full", md: "sm" },
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
      gap: "3",
      p: "3",
      bg: "bg.panel",
      color: "fg",
      borderWidth: "1px",
      borderColor: "border.muted",
      borderRadius: "l2",
      boxShadow: "xl",
      translate: "var(--x) var(--y)",
      scale: "var(--scale)",
      zIndex: "var(--z-index)",
      height: "var(--height)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",
      transition: "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
      transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
      _closed: {
        transition: "translate 400ms, scale 400ms, opacity 200ms",
        transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
      },
      "&[data-type=success]": {
        colorPalette: "green",
      },
      "&[data-type=error]": {
        colorPalette: "red",
      },
      "&[data-type=info]": {
        colorPalette: "blue",
      },
      "&[data-type=warning]": {
        colorPalette: "orange",
      },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "0.5",
      minW: "0",
    },
    title: {
      fontWeight: "medium",
      textStyle: "sm",
      whiteSpace: "pre-line",
    },
    description: {
      color: "fg.muted",
      textStyle: "sm",
      whiteSpace: "pre-line",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      alignSelf: "center",
      boxSize: "5",
      color: "colorPalette.solid",
      _icon: {
        boxSize: "5",
      },
    },
    actionTrigger: {
      colorPalette: "gray",
      alignSelf: "center",
      flexShrink: "0",
    },
    closeTrigger: {
      colorPalette: "gray",
      alignSelf: "center",
      flexShrink: "0",
    },
  },
})
