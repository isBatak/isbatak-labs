import { defineSlotRecipe } from "@pandacss/dev"

export const toggleGroupSlotRecipe = defineSlotRecipe({
  className: "toggle-group",
  description:
    "Row of pressable toggles where one or several can be on, such as text alignment or bold/italic; use SegmentGroup for a single required choice",
  slots: ["root", "item"],
  base: {
    root: {
      "--toggle-group-radius": "radii.l2",
      "--toggle-group-padding": "spacing.1",
      "--toggle-group-pressed-bg": {
        base: "colors.bg",
        _dark: "colors.bg.emphasized",
      },
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      isolation: "isolate",
      gap: "0.5",
      p: "var(--toggle-group-padding)",
      borderRadius: "calc(var(--toggle-group-radius) + var(--toggle-group-padding))",
      _vertical: {
        flexDirection: "column",
        alignItems: "stretch",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    item: {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      position: "relative",
      h: "calc(var(--toggle-group-height) - var(--toggle-group-padding) * 2)",
      minW: "calc(var(--toggle-group-height) - var(--toggle-group-padding) * 2)",
      borderRadius: "var(--toggle-group-radius)",
      fontWeight: "medium",
      whiteSpace: "nowrap",
      userSelect: "none",
      color: "fg.muted",
      cursor: "button",
      outline: "0",
      transitionProperty: "common",
      transitionDuration: "fast",
      focusVisibleRing: "outside",
      "--focus-ring-offset": "0px",
      _focusVisible: {
        zIndex: "1",
      },
      _hover: {
        color: "fg",
        bg: "bg.emphasized/50",
      },
      _pressed: {
        color: "fg",
      },
      _disabled: {
        layerStyle: "disabled",
      },
      _icon: {
        flexShrink: "0",
        pointerEvents: "none",
      },
    },
  },
  variants: {
    variant: {
      subtle: {
        root: {
          bg: "bg.muted",
        },
        item: {
          _pressed: {
            bg: "var(--toggle-group-pressed-bg)",
            shadow: "xs",
            _hover: {
              bg: "var(--toggle-group-pressed-bg)",
            },
          },
        },
      },
      outline: {
        root: {
          shadow: "inset 0 0 0 1px var(--shadow-color)",
          shadowColor: "border",
        },
        item: {
          _hover: {
            bg: "colorPalette.subtle",
          },
          _pressed: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg",
            _hover: {
              bg: "colorPalette.muted",
            },
          },
        },
      },
      ghost: {
        root: {
          "--toggle-group-padding": "0rem",
          gap: "1",
        },
        item: {
          _hover: {
            bg: "colorPalette.subtle",
          },
          _pressed: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
            _hover: {
              bg: "colorPalette.muted",
            },
          },
        },
      },
    },
    size: {
      xs: {
        root: { "--toggle-group-height": "sizes.8" },
        item: { textStyle: "xs", px: "2", gap: "1", _icon: { width: "3.5", height: "3.5" } },
      },
      sm: {
        root: { "--toggle-group-height": "sizes.9" },
        item: { textStyle: "sm", px: "2.5", gap: "1.5", _icon: { width: "4", height: "4" } },
      },
      md: {
        root: { "--toggle-group-height": "sizes.10" },
        item: { textStyle: "sm", px: "3", gap: "2", _icon: { width: "4", height: "4" } },
      },
      lg: {
        root: { "--toggle-group-height": "sizes.11" },
        item: { textStyle: "md", px: "3.5", gap: "2", _icon: { width: "5", height: "5" } },
      },
    },
    fitted: {
      true: {
        root: {
          display: "flex",
        },
        item: {
          flex: "1",
        },
      },
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
})
