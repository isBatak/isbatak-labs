import { defineSlotRecipe } from "@pandacss/dev"

export const floatingPanelSlotRecipe = defineSlotRecipe({
  slots: [
    "trigger",
    "positioner",
    "content",
    "header",
    "body",
    "title",
    "resizeTrigger",
    "dragTrigger",
    "stageTrigger",
    "closeTrigger",
    "control",
  ],
  className: "floating-panel",
  description: "Draggable, resizable non-modal panel",
  base: {
    positioner: {
      "--floating-panel-z-index": "zIndex.popover",
      zIndex: "calc(var(--floating-panel-z-index) + var(--layer-index, 0))",
      "&:has([data-topmost])": {
        "--layer-index": "100",
      },
      "&:has([data-behind])": {
        "--layer-index": "-100",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      bg: "bg.panel",
      borderWidth: "1px",
      borderColor: "border.muted",
      borderRadius: "l3",
      boxShadow: "lg",
      overflow: "hidden",
      outline: "0",
      position: "relative",
      textStyle: "sm",
      _open: {
        animationName: "scale-in, fade-in",
        animationDuration: "moderate",
      },
      "&[data-minimized]": {
        height: "auto!",
      },
    },
    dragTrigger: {
      flex: "none",
      _disabled: {
        cursor: "default",
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
      ps: "3",
      pe: "1.5",
      py: "1.5",
      borderBottomWidth: "1px",
      borderColor: "border.muted",
      "&[data-minimized]": {
        borderBottomWidth: "0",
      },
    },
    title: {
      fontWeight: "semibold",
      textStyle: "sm",
      flex: "1",
      truncate: true,
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "0.5",
      flex: "none",
    },
    body: {
      flex: "1",
      overflow: "auto",
      p: "3",
      color: "fg.muted",
    },
    resizeTrigger: {
      zIndex: "1",
      touchAction: "none",
      "--size": "sizes.2",
      "&[data-placement=n], &[data-placement=s]": {
        h: "var(--size)",
        maxW: "[90%]",
      },
      "&[data-placement=e], &[data-placement=w]": {
        w: "var(--size)",
        maxH: "[90%]",
      },
      "&:is([data-placement=ne], [data-placement=nw], [data-placement=se], [data-placement=sw])": {
        w: "var(--size)",
        h: "var(--size)",
      },
      _disabled: {
        display: "none",
      },
    },
  },
})
