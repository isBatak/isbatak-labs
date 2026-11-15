import { defineSlotRecipe } from "@pandacss/dev"

export const menubarSlotRecipe = defineSlotRecipe({
  className: "menubar",
  description:
    "Persistent bar of menu triggers such as File, Edit and View, each opening a Menu; use a single Menu for one dropdown",
  slots: ["root", "trigger"],
  base: {
    root: {
      "--menubar-radius": "radii.l2",
      "--menubar-padding": "spacing.1",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5",
      p: "var(--menubar-padding)",
      borderRadius: "calc(var(--menubar-radius) + var(--menubar-padding))",
      _vertical: {
        flexDirection: "column",
        alignItems: "stretch",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    trigger: {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      position: "relative",
      h: "calc(var(--menubar-height) - var(--menubar-padding) * 2)",
      borderRadius: "var(--menubar-radius)",
      bg: "transparent",
      color: "fg",
      fontWeight: "medium",
      whiteSpace: "nowrap",
      userSelect: "none",
      cursor: "button",
      outline: "0",
      transitionProperty: "common",
      transitionDuration: "moderate",
      focusVisibleRing: "outside",
      "--focus-ring-offset": "0px",
      _focusVisible: {
        zIndex: "1",
      },
      _hover: {
        bg: "colorPalette.subtle",
      },
      _expanded: {
        bg: "colorPalette.subtle",
      },
      _disabled: {
        layerStyle: "disabled",
        _hover: {
          bg: "transparent",
        },
      },
      _icon: {
        flexShrink: "0",
        pointerEvents: "none",
      },
    },
  },
  variants: {
    variant: {
      outline: {
        root: {
          bg: "bg.panel",
          shadow: "inset 0 0 0 1px var(--shadow-color)",
          shadowColor: "border",
        },
      },
      subtle: {
        root: {
          bg: "bg.muted",
        },
        trigger: {
          _hover: {
            bg: "bg.emphasized",
          },
          _expanded: {
            bg: "bg.emphasized",
          },
        },
      },
      plain: {
        root: {
          "--menubar-padding": "0rem",
          gap: "1",
        },
      },
    },
    size: {
      sm: {
        root: { "--menubar-height": "sizes.9" },
        trigger: { textStyle: "xs", px: "2.5", gap: "1", _icon: { width: "3.5", height: "3.5" } },
      },
      md: {
        root: { "--menubar-height": "sizes.10" },
        trigger: { textStyle: "sm", px: "3", gap: "1.5", _icon: { width: "4", height: "4" } },
      },
      lg: {
        root: { "--menubar-height": "sizes.11" },
        trigger: { textStyle: "md", px: "3.5", gap: "2", _icon: { width: "5", height: "5" } },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
