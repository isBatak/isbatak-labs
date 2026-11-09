import { defineSlotRecipe } from "@pandacss/dev"

export const splitterSlotRecipe = defineSlotRecipe({
  slots: ["root", "panel", "resizeTrigger", "resizeTriggerSeparator", "resizeTriggerIndicator"],
  className: "splitter",
  description: "Resizable panels separated by drag handles",
  base: {
    root: {
      colorPalette: "gray",
      "--splitter-trigger-size": "sizes.3",
      "--splitter-trigger-padding": "spacing.2",
      "--splitter-indicator-size": "sizes.10",
      "--splitter-indicator-thickness": "sizes.0.5",
      display: "flex",
    },
    panel: {
      overflow: "hidden",
    },
    resizeTrigger: {
      outline: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      _horizontal: {
        w: "var(--splitter-trigger-size)",
        py: "var(--splitter-trigger-padding)",
      },
      _vertical: {
        h: "var(--splitter-trigger-size)",
        px: "var(--splitter-trigger-padding)",
      },
      _disabled: {
        cursor: "disabled",
      },
    },
    resizeTriggerSeparator: {
      position: "absolute",
      bg: "border",
      "[data-orientation=horizontal] > &": {
        insetBlock: "0",
        insetInlineStart: "[50%]",
        w: "1px",
        translate: "[-50% 0]",
      },
      "[data-orientation=vertical] > &": {
        insetInline: "0",
        insetBlockStart: "[50%]",
        h: "1px",
        translate: "[0 -50%]",
      },
    },
    resizeTriggerIndicator: {
      position: "relative",
      zIndex: "1",
      borderRadius: "full",
      bg: "border.emphasized",
      transitionProperty: "width, height, background-color",
      transitionDuration: "fast",
      transitionTimingFunction: "ease-in-smooth",
      _horizontal: {
        w: "var(--splitter-indicator-thickness)",
        h: "min(var(--splitter-indicator-size), 100%)",
      },
      _vertical: {
        h: "var(--splitter-indicator-thickness)",
        w: "min(var(--splitter-indicator-size), 100%)",
      },
      _focus: {
        bg: "colorPalette.focusRing",
        _horizontal: { h: "full" },
        _vertical: { w: "full" },
      },
      _dragging: {
        bg: "colorPalette.solid",
        _horizontal: { h: "full" },
        _vertical: { w: "full" },
      },
      _disabled: {
        visibility: "hidden",
      },
    },
  },
})
