import { defineRecipe } from "@pandacss/dev"

export const buttonRecipe = defineRecipe({
  className: "button",
  description:
    "Clickable action, also used by IconButton, CloseButton and ButtonGroup; pick a variant, never restyle colors by hand",
  jsx: ["Button", "IconButton", "CloseButton", "ButtonGroup"],
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "l2",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "button",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled",
    },
    minW: "var(--button-min-width)",
    _icon: {
      flexShrink: "0",
    },
  },
  variants: {
    size: {
      "2xs": {
        h: "6",
        "--button-min-width": "sizes.6",
        textStyle: "xs",
        "--button-padding-x": "spacing.2",
        gap: "1",
        _icon: {
          width: "3.5",
          height: "3.5",
        },
      },
      xs: {
        h: "8",
        "--button-min-width": "sizes.8",
        textStyle: "xs",
        "--button-padding-x": "spacing.2.5",
        gap: "1",
        _icon: {
          width: "4",
          height: "4",
        },
      },
      sm: {
        h: "9",
        "--button-min-width": "sizes.9",
        "--button-padding-x": "spacing.3.5",
        textStyle: "sm",
        gap: "2",
        _icon: {
          width: "4",
          height: "4",
        },
      },
      md: {
        h: "10",
        "--button-min-width": "sizes.10",
        textStyle: "sm",
        "--button-padding-x": "spacing.4",
        gap: "2",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      lg: {
        h: "11",
        "--button-min-width": "sizes.11",
        textStyle: "md",
        "--button-padding-x": "spacing.5",
        gap: "3",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      xl: {
        h: "12",
        "--button-min-width": "sizes.12",
        textStyle: "md",
        "--button-padding-x": "spacing.5",
        gap: "2.5",
        _icon: {
          width: "5",
          height: "5",
        },
      },
      "2xl": {
        h: "16",
        "--button-min-width": "sizes.16",
        textStyle: "lg",
        "--button-padding-x": "spacing.7",
        gap: "3",
        _icon: {
          width: "6",
          height: "6",
        },
      },
    },
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.solid/90",
        },
        _expanded: {
          bg: "colorPalette.solid/90",
        },
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.muted",
        },
        _expanded: {
          bg: "colorPalette.muted",
        },
      },
      outline: {
        borderWidth: "1px",
        "--outline-color-legacy": "colors.colorPalette.muted",
        "--outline-color": "colors.colorPalette.border",
        borderColor: "var(--outline-color, var(--outline-color-legacy))",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle",
        },
        _expanded: {
          bg: "colorPalette.subtle",
        },
      },
      ghost: {
        bg: "transparent",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle",
        },
        _expanded: {
          bg: "colorPalette.subtle",
        },
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
    icon: {
      true: {
        px: "0",
        w: "var(--button-min-width)",
      },
      false: {
        px: "var(--button-padding-x)",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    icon: false,
  },
})
