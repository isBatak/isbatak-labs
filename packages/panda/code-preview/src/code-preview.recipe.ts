import { anatomy } from "@isbatak/ark-code-preview/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig } from "@pandacss/types"

export const codePreviewSlots = anatomy.keys()

const tool = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  minW: "12",
  h: "11",
  px: "4",
  borderStartWidth: "1px",
  textStyle: "sm",
  color: "fg.muted",
  cursor: "pointer",
  transitionProperty: "background, color",
  transitionDuration: "fast",
  focusVisibleRing: "inside",
  _hover: {
    bg: "bg.muted",
    color: "fg",
  },
}

export const codePreviewRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "code-preview",
  jsx: ["CodePreview", /CodePreview\.\w+/],
  slots: codePreviewSlots,
  base: {
    root: {
      display: "block",
      borderWidth: "1px",
      borderRadius: "xl",
      overflow: "hidden",
      bg: "bg",
    },
    stage: {
      display: "flex",
      bg: "bg.subtle",
    },
    preview: {
      flex: "0 1 var(--preview-width, 100%)",
      minW: "0",
      p: { base: "4", md: "8" },
      bg: "bg",
      color: "fg",
    },
    resizer: {
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: "5",
      borderStartWidth: "1px",
      bg: "bg",
      color: "fg.subtle",
      cursor: "col-resize",
      focusVisibleRing: "inside",
      _hover: {
        color: "fg",
      },
      "&[data-dragging]": {
        color: "fg",
        bg: "bg.muted",
      },
    },
    content: {
      maxH: "28rem",
      overflow: "auto",
      borderTopWidth: "1px",
      bg: "bg.subtle",
      fontFamily: "mono",
      textStyle: "sm",
      lineHeight: "1.75",
      tabSize: "2",
      "& pre": {
        p: "5",
      },
    },
    toolbar: {
      display: "flex",
      borderTopWidth: "1px",
    },
    trigger: {
      ...tool,
      flex: "1",
      borderStartWidth: "0",
      "& svg": {
        transitionProperty: "transform",
        transitionDuration: "normal",
      },
      "&[data-state=open] svg": {
        transform: "rotate(180deg)",
      },
    },
    themeTrigger: {
      ...tool,
      "& [data-icon=sun]": {
        display: { base: "none", _dark: "block" },
      },
      "& [data-icon=moon]": {
        display: { base: "block", _dark: "none" },
      },
      "&[data-theme=light]": {
        "& [data-icon=sun]": {
          display: { base: "none", _dark: "none" },
        },
        "& [data-icon=moon]": {
          display: { base: "block", _dark: "block" },
        },
      },
      "&[data-theme=dark]": {
        "& [data-icon=sun]": {
          display: { base: "block", _dark: "block" },
        },
        "& [data-icon=moon]": {
          display: { base: "none", _dark: "none" },
        },
      },
    },
    dirTrigger: {
      ...tool,
      "& svg": {
        transitionProperty: "transform",
        transitionDuration: "normal",
      },
      "&[aria-pressed=true]": {
        color: "fg",
        bg: "bg.muted",
        "& svg": {
          transform: "scaleX(-1)",
        },
      },
    },
    copyTrigger: {
      ...tool,
      "& [data-icon=check]": {
        display: "none",
        color: "green.fg",
      },
      "&[data-copied]": {
        "& [data-icon=copy]": {
          display: "none",
        },
        "& [data-icon=check]": {
          display: "block",
        },
      },
    },
  },
})
