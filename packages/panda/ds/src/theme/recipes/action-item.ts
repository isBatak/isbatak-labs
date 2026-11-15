import { defineSlotRecipe } from "@pandacss/dev"

export const actionItemSlotRecipe = defineSlotRecipe({
  className: "action-item",
  description: "Tappable settings-style row with a label, optional leading icon and a trailing chevron or control",
  slots: ["root", "startElement", "label", "endElement", "controlElement"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      px: "3",
      py: "2",
      minH: "10",
      userSelect: "none",
      bg: "var(--action-item-bg)",
      color: "fg",
      textAlign: "start",
      focusVisibleRing: "outside",
      _disabled: {
        layerStyle: "disabled",
        pointerEvents: "none",
      },
      "&:not(:has([data-slot=controlElement]))": {
        cursor: "button",
        _hover: {
          bg: "bg.muted",
        },
        _active: {
          bg: "bg.emphasized",
        },
      },
    },
    startElement: {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      _icon: {
        boxSize: "6",
      },
    },
    label: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      minW: "0",
      textStyle: "md",
      fontWeight: "medium",
      color: "fg",
    },
    endElement: {
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      color: "fg.muted",
      _icon: {
        boxSize: "5",
      },
    },
    controlElement: {
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      alignSelf: "stretch",
      ps: "2",
      cursor: "button",
    },
  },
  variants: {
    variant: {
      subtle: {
        root: {
          "--action-item-bg": "colors.bg.subtle",
          borderRadius: "l2",
        },
      },
      plain: {},
    },
  },
  defaultVariants: {
    variant: "subtle",
  },
})
