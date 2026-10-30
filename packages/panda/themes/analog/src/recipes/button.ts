import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  jsx: ["Button", "IconButton", "CloseButton", "ButtonGroup"],
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    position: "relative",
    isolation: "isolate",
    flexShrink: "0",
    userSelect: "none",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    outline: "0",
    cursor: "button",
    fontWeight: "medium",
    lineHeight: "1.2",
    color: "colorPalette.fg",
    h: "var(--button-size)",
    minW: "var(--button-size)",
    px: "calc(var(--button-padding-x) * var(--button-padding-scale, 1))",
    transitionProperty: "box-shadow, transform, background-color",
    transitionDuration: "fast",
    focusVisibleRing: "outside",
    focusRingColor: "colorPalette.focusRing",
    _icon: {
      flexShrink: "0",
      boxSize: "var(--button-icon-size)",
    },
    layerStyle: "elevation.raised",
    _active: {
      layerStyle: "pressed",
      transform: "scale(0.98)",
    },
    _disabled: {
      layerStyle: "disabled",
    },
  },
  variants: {
    shape: {
      rounded: {
        borderRadius: "l3",
      },
      circle: {
        borderRadius: "full",
      },
    },
    size: {
      sm: {
        "--button-size": "sizes.9",
        "--button-padding-x": "spacing.3.5",
        "--button-icon-size": "sizes.4",
        textStyle: "sm",
        _iconStart: {
          ms: "-0.5",
        },
        _iconEnd: {
          me: "-0.5",
        },
      },
      md: {
        "--button-size": "sizes.12",
        "--button-padding-x": "spacing.5",
        "--button-icon-size": "sizes.5",
        textStyle: "sm",
        _iconStart: {
          ms: "-1",
        },
        _iconEnd: {
          me: "-1",
        },
      },
      lg: {
        "--button-size": "sizes.16",
        "--button-padding-x": "spacing.6",
        "--button-icon-size": "sizes.6",
        textStyle: "md",
        _iconStart: {
          ms: "-1",
        },
        _iconEnd: {
          me: "-1",
        },
      },
      xl: {
        "--button-size": "76px",
        "--button-padding-x": "spacing.7",
        "--button-icon-size": "sizes.8",
        textStyle: "lg",
        _iconStart: {
          ms: "-1",
        },
        _iconEnd: {
          me: "-1",
        },
      },
    },
    icon: {
      true: {
        w: "var(--button-size)",
        "--button-padding-scale": "0",
      },
      false: {},
    },
  },
  defaultVariants: {
    shape: "rounded",
    size: "md",
    icon: false,
  },
});
