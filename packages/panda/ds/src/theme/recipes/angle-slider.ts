import { defineSlotRecipe } from "@pandacss/dev"

export const angleSliderSlotRecipe = defineSlotRecipe({
  className: "angle-slider",
  description: "Circular dial for picking an angle from 0 to 360 degrees, such as a rotation or a gradient direction",
  slots: ["root", "label", "control", "thumb", "markerGroup", "marker", "valueText"],
  base: {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3",
      textStyle: "sm",
      position: "relative",
      isolation: "isolate",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
      userSelect: "none",
    },
    control: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      width: "var(--angle-slider-size)",
      height: "var(--angle-slider-size)",
      borderRadius: "full",
      userSelect: "none",
      "--focus-ring-color": "colors.colorPalette.focusRing",
      "&:has(:focus-visible)": {
        outlineWidth: "2px",
        outlineOffset: "2px",
        outlineStyle: "solid",
        outlineColor: "var(--focus-ring-color)",
      },
      _before: {
        content: '""',
        position: "absolute",
        inset: "var(--angle-slider-track-size)",
        borderRadius: "full",
        bg: "bg",
        shadow: "inner",
      },
      _after: {
        content: '""',
        position: "absolute",
        width: "1.5",
        height: "1.5",
        borderRadius: "full",
        bg: "fg.muted",
        zIndex: "1",
      },
    },
    thumb: {
      position: "absolute",
      insetBlock: "0",
      left: "calc(50% - var(--angle-slider-thumb-size) / 2)",
      width: "var(--angle-slider-thumb-size)",
      outline: "0",
      zIndex: "2",
      _before: {
        content: '""',
        position: "absolute",
        left: "0",
        top: "calc(var(--angle-slider-track-size) / 2 - var(--angle-slider-thumb-size) / 2)",
        width: "var(--angle-slider-thumb-size)",
        height: "var(--angle-slider-thumb-size)",
        borderRadius: "full",
        transitionProperty: "scale",
        transitionDuration: "fast",
      },
      _after: {
        content: '""',
        position: "absolute",
        left: "50%",
        translate: "-50% 0",
        top: "calc(var(--angle-slider-track-size) / 2 + var(--angle-slider-thumb-size) / 2)",
        bottom: "calc(50% + {spacing.1.5})",
        width: "0.5",
        borderRadius: "full",
        bgGradient: "to-b",
        gradientFrom: "var(--angle-slider-pointer-color)",
        gradientTo: "transparent",
      },
      _active: {
        _before: {
          scale: "1.1",
        },
      },
      _disabled: {
        "--angle-slider-pointer-color": "colors.border.emphasized",
      },
    },
    markerGroup: {
      position: "absolute",
      inset: "0",
      borderRadius: "full",
      pointerEvents: "none",
    },
    marker: {
      position: "absolute",
      insetBlock: "0",
      left: "calc(50% - {sizes.0.5} / 2)",
      width: "0.5",
      _before: {
        content: '""',
        position: "absolute",
        insetInline: "0",
        top: "calc(var(--angle-slider-track-size) + {spacing.1.5})",
        height: "1.5",
        borderRadius: "full",
        bg: "border.emphasized",
      },
      _underValue: {
        _before: {
          bg: "colorPalette.muted",
        },
      },
      _atValue: {
        _before: {
          bg: "colorPalette.solid",
        },
      },
    },
    valueText: {
      fontWeight: "semibold",
      lineHeight: "1",
      fontVariantNumeric: "tabular-nums",
      color: "fg",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--angle-slider-size": "sizes.20",
          "--angle-slider-track-size": "sizes.1",
          "--angle-slider-thumb-size": "sizes.3",
        },
        valueText: { textStyle: "md" },
      },
      md: {
        root: {
          "--angle-slider-size": "sizes.24",
          "--angle-slider-track-size": "sizes.1.5",
          "--angle-slider-thumb-size": "sizes.3.5",
        },
        valueText: { textStyle: "lg" },
      },
      lg: {
        root: {
          "--angle-slider-size": "sizes.28",
          "--angle-slider-track-size": "sizes.2",
          "--angle-slider-thumb-size": "sizes.4",
        },
        valueText: { textStyle: "xl" },
      },
    },
    variant: {
      outline: {
        control: {
          bg: "bg.emphasized/72",
          shadow: "inset",
        },
        thumb: {
          "--angle-slider-pointer-color": "colors.colorPalette.solid",
          _before: {
            bg: "bg",
            borderWidth: "2px",
            borderColor: "colorPalette.solid",
          },
          _disabled: {
            _before: {
              bg: "border.emphasized",
              borderColor: "border.emphasized",
            },
          },
        },
      },
      solid: {
        control: {
          bg: "colorPalette.subtle",
        },
        thumb: {
          "--angle-slider-pointer-color": "colors.colorPalette.solid",
          _before: {
            bg: "colorPalette.solid",
            borderWidth: "2px",
            borderColor: "bg",
            shadow: "sm",
          },
          _disabled: {
            _before: {
              bg: "border.emphasized",
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
