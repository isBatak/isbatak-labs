import { defineSlotRecipe } from "@pandacss/dev"

export const splitterSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "panel",
    "resizeTrigger",
    "resizeTriggerIndicator",
    "resizeTriggerSeparator",
    "resizeTriggerIndicator",
  ],
  className: "splitter",
  description: "Resizable panels separated by drag handles",
  base: {
    resizeTrigger: {
      "--splitter-border-color": "colors.border",
      "--splitter-thumb-color": "colors.bg",
      "--splitter-thumb-size": "sizes.2",
      "--splitter-thumb-inset": "calc(var(--splitter-thumb-size) * -0.5)",
      "--splitter-border-size": "1px",
      "--splitter-handle-size": "sizes.6",
      outline: "0",
      display: "grid",
      placeItems: "center",
      position: "relative",
      _focus: {
        "--splitter-border-color": "colors.border.emphasized",
        "--splitter-thumb-color": "colors.colorPalette.subtle",
      },
      _dragging: {
        "--splitter-thumb-color": "colors.colorPalette.focusRing",
      },
      _horizontal: {
        minWidth: "var(--splitter-thumb-size)",
        marginInline: "var(--splitter-thumb-inset)",
      },
      _vertical: {
        minHeight: "var(--splitter-thumb-size)",
        marginBlock: "var(--splitter-thumb-inset)",
      },
    },
    resizeTriggerSeparator: {
      position: "absolute",
      bg: "var(--splitter-border-color)",
      "[data-splitter-resize-trigger][data-orientation=horizontal] &": {
        insetInlineEnd: "calc(var(--splitter-thumb-size) * 0.5)",
        insetBlock: "0",
        insetInlineStart: "auto",
        w: "var(--splitter-border-size)",
      },
      "[data-splitter-resize-trigger][data-orientation=vertical] &": {
        insetBlockEnd: "calc(var(--splitter-thumb-size) * 0.5)",
        insetInline: "0",
        insetBlockStart: "auto",
        h: "var(--splitter-border-size)",
      },
    },
    resizeTriggerIndicator: {
      position: "relative",
      rounded: "full",
      bg: "var(--splitter-thumb-color)",
      shadow: "xs",
      borderWidth: "1px",
      zIndex: "1",
      "[data-splitter-resize-trigger][data-orientation=horizontal] &": {
        w: "full",
        h: "var(--splitter-handle-size)",
      },
      "[data-splitter-resize-trigger][data-orientation=vertical] &": {
        w: "var(--splitter-handle-size)",
        h: "full",
      },
      "[data-splitter-resize-trigger][data-focus]:focus-visible &": {
        outlineWidth: "2px",
        outlineColor: "colorPalette.focusRing",
        outlineStyle: "solid",
      },
      "[data-splitter-resize-trigger][data-disabled] &": {
        visibility: "hidden",
      },
    },
  },
})
