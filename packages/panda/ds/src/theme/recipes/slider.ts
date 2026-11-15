import { defineSlotRecipe } from "@pandacss/dev"

const active = ".slider__root:is(:hover, [data-focus], [data-dragging]):not([data-disabled]) &"

export const sliderSlotRecipe = defineSlotRecipe({
  className: "slider",
  description:
    "Range input with one or more thumbs. Use capsule for a standalone control; use field for a compact labelled value inside a settings panel, like opacity or blur.",
  slots: [
    "root",
    "label",
    "thumb",
    "valueText",
    "track",
    "range",
    "control",
    "markerGroup",
    "marker",
    "draggingIndicator",
    "markerIndicator",
    "markerLabel",
  ],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      textStyle: "sm",
      position: "relative",
      isolation: "isolate",
      touchAction: "none",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
    },
    track: {
      overflow: "hidden",
      borderRadius: "full",
      flex: "1",
    },
    range: {
      width: "inherit",
      height: "inherit",
      _disabled: {
        bg: "border.emphasized!",
      },
    },
    markerGroup: {
      position: "absolute!",
      zIndex: "0",
    },
    marker: {
      "--marker-bg": {
        base: "white",
        _underValue: "colors.bg",
      },
      display: "flex",
      alignItems: "center",
      gap: "calc(var(--slider-thumb-size) / 2)",
      color: "fg.muted",
      textStyle: "xs",
      visibility: "[visible !important]",
    },
    markerIndicator: {
      width: "var(--slider-marker-size)",
      height: "var(--slider-marker-size)",
      borderRadius: "full",
      bg: "var(--marker-bg)",
    },
    thumb: {
      width: "var(--slider-thumb-size)",
      height: "var(--slider-thumb-size)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: 0,
      zIndex: "2",
      borderRadius: "full",
      visibility: "[visible !important]",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          "--slider-field-height": "sizes.9",
          "--slider-thumb-size": "sizes.4",
          "--slider-track-size": "sizes.1.5",
          "--slider-marker-center": "spacing.1.5",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "3px",
        },
      },
      md: {
        root: {
          "--slider-field-height": "sizes.10",
          "--slider-thumb-size": "sizes.5",
          "--slider-track-size": "sizes.2",
          "--slider-marker-center": "spacing.2",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "spacing.1",
        },
      },
      lg: {
        root: {
          "--slider-field-height": "sizes.11",
          "--slider-thumb-size": "sizes.6",
          "--slider-track-size": "sizes.2.5",
          "--slider-marker-center": "9px",
          "--slider-marker-size": "sizes.1.5",
          "--slider-marker-inset": "5px",
        },
      },
    },
    variant: {
      capsule: {
        track: {
          bg: "bg.emphasized",
        },
        range: {
          bg: "colorPalette.focusRing",
        },
        thumb: {
          width: "calc(var(--slider-thumb-size) * 1.75)",
          bg: "white",
          shadow: "sm",
          transitionProperty: "box-shadow",
          transitionDuration: "fast",
          "&:focus[data-focus-visible]": {
            boxShadow: "0 0 0 {spacing.1} {colors.colorPalette.focusRing/40}",
          },
          _disabled: {
            bg: "border.emphasized",
            shadow: "none",
          },
        },
      },
      field: {
        root: {
          gap: "0",
        },
        label: {
          position: "absolute",
          zIndex: "3",
          pointerEvents: "none",
          fontWeight: "normal",
          color: "fg.muted",
        },
        valueText: {
          position: "absolute",
          zIndex: "3",
          pointerEvents: "none",
          fontFamily: "mono",
          fontVariantNumeric: "tabular-nums",
          color: "fg.muted",
          transitionProperty: "color",
          transitionDuration: "fast",
          [active]: {
            color: "fg",
          },
        },
        control: {
          "--slider-track-size": "var(--slider-field-size)",
          "--slider-marker-size": "sizes.2.5",
          "--slider-marker-center": "calc((var(--slider-field-size) - var(--slider-marker-size)) / 2)",
          "--slider-marker-inset": "0",
          borderRadius: "l3",
          cursor: "slider",
          "&:has([data-focus-visible]:focus)": {
            outlineWidth: "2px",
            outlineStyle: "solid",
            outlineOffset: "2px",
            outlineColor: "colorPalette.focusRing/60",
          },
        },
        track: {
          borderRadius: "l3",
          bg: "colorPalette.subtle",
          _after: {
            content: '""',
            position: "absolute",
            backgroundImage:
              "linear-gradient(var(--slider-tick-direction), transparent calc(100% - 1px), {colors.fg.subtle} calc(100% - 1px))",
            pointerEvents: "none",
            opacity: "0",
            scale: "var(--slider-tick-scale)",
            transitionProperty: "opacity, scale",
            transitionDuration: "moderate",
            transitionTimingFunction: "ease-out",
          },
          [`${active}::after`]: {
            opacity: "1",
            scale: "1 1",
          },
          ".slider__control:has(.slider__markerGroup) &::after": {
            display: "none",
          },
        },
        range: {
          bg: "colorPalette.muted",
          transitionProperty: "background-color",
          transitionDuration: "fast",
          [active]: {
            bg: "colorPalette.emphasized",
          },
        },
        thumb: {
          "--slider-handle-gap": "spacing.1.5",
          "--slider-handle-offset":
            "max(var(--slider-handle-gap), calc(100% - var(--slider-range-end) - var(--slider-handle-gap) - {sizes.1}))",
          transform: "[none !important]",
          bg: "fg.muted",
          opacity: "0",
          transitionProperty: "opacity, background-color",
          transitionDuration: "fast",
          [active]: {
            opacity: "1",
          },
          "--slider-range-middle": "calc((var(--slider-range-start) + 100% - var(--slider-range-end)) / 2)",
          "&:has(~ [data-slider-thumb])": {
            "--slider-handle-offset":
              "min(calc(var(--slider-range-start) + var(--slider-handle-gap)), calc(var(--slider-range-middle) - {sizes.1} - 1px))",
          },
          "[data-slider-thumb] ~ &": {
            "--slider-handle-offset":
              "max(calc(100% - var(--slider-range-end) - var(--slider-handle-gap) - {sizes.1}), calc(var(--slider-range-middle) + 1px))",
          },
          "&[data-under-text]": {
            bg: "fg.muted/40",
          },
        },
        markerIndicator: {
          borderRadius: "full",
          bg: "fg.subtle",
          opacity: "0",
          scale: "var(--slider-tick-scale)",
          transitionProperty: "opacity, scale",
          transitionDuration: "moderate",
          transitionTimingFunction: "ease-out",
          [active]: {
            opacity: "1",
            scale: "1 1",
          },
        },
        markerLabel: {
          opacity: "0",
          transitionProperty: "opacity",
          transitionDuration: "moderate",
          [active]: {
            opacity: "1",
          },
        },
      },
    },
    orientation: {
      vertical: {
        root: {
          display: "inline-flex",
        },
        control: {
          flexDirection: "column",
          height: "100%",
          width: "var(--slider-thumb-size)",
          "&:has(.slider__markerLabel)": {
            marginEnd: "10",
          },
        },
        track: {
          width: "var(--slider-track-size)",
        },
        thumb: {
          left: "50%",
          translate: "-50% 0",
        },
        markerGroup: {
          insetStart: "var(--slider-marker-center)",
          insetBlock: "var(--slider-marker-inset)",
        },
        marker: {
          flexDirection: "row",
          gap: "calc(var(--slider-thumb-size) / 2 + {spacing.1.5})",
        },
      },
      horizontal: {
        control: {
          flexDirection: "row",
          width: "100%",
          minHeight: "var(--slider-thumb-size)",
          "&:has(.slider__markerLabel)": {
            marginBottom: "4",
          },
        },
        track: {
          height: "var(--slider-track-size)",
        },
        thumb: {
          top: "50%",
          translate: "0 -50%",
        },
        markerGroup: {
          top: "var(--slider-marker-center)",
          insetInline: "var(--slider-marker-inset)",
        },
        marker: {
          flexDirection: "column",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "capsule",
      orientation: "vertical",
      css: {
        thumb: {
          width: "var(--slider-thumb-size)",
          height: "calc(var(--slider-thumb-size) * 1.75)",
        },
      },
    },
    {
      variant: "field",
      orientation: "horizontal",
      css: {
        root: {
          "--slider-field-size": "var(--slider-field-height)",
          "--slider-tick-scale": "1 0",
        },
        label: {
          insetStart: "3",
          top: "calc(var(--slider-field-size) / 2)",
          translate: "0 -50%",
        },
        valueText: {
          insetEnd: "3",
          top: "calc(var(--slider-field-size) / 2)",
          translate: "0 -50%",
        },
        control: {
          height: "var(--slider-field-size)",
          "&:has(.slider__markerLabel)": {
            marginBottom: "6",
          },
        },
        track: {
          _after: {
            "--slider-tick-direction": "to right",
            insetInline: "0",
            top: "50%",
            height: "var(--slider-marker-size)",
            translate: "0 -50%",
            backgroundSize: "[10% 100%]",
            backgroundRepeat: "repeat-x",
            clipPath: "inset(0 2px 0 0)",
          },
        },
        thumb: {
          width: "1",
          height: "[50%]",
          insetInlineStart: "[var(--slider-handle-offset) !important]",
        },
        marker: {
          gap: "calc(var(--slider-marker-center) + {spacing.1.5})",
        },
        markerIndicator: {
          width: "[1px]",
        },
      },
    },
    {
      variant: "field",
      orientation: "vertical",
      css: {
        root: {
          "--slider-field-size": "var(--slider-field-height)",
          "--slider-tick-scale": "0 1",
        },
        label: {
          top: "3",
          insetStart: "calc(var(--slider-field-size) / 2)",
          translate: "-50% 0",
          maxWidth: "calc(var(--slider-field-size) - {spacing.3})",
          truncate: true,
        },
        valueText: {
          bottom: "3",
          insetStart: "calc(var(--slider-field-size) / 2)",
          translate: "-50% 0",
          maxWidth: "calc(var(--slider-field-size) - {spacing.3})",
          truncate: true,
        },
        control: {
          width: "var(--slider-field-size)",
        },
        track: {
          _after: {
            "--slider-tick-direction": "to bottom",
            insetBlock: "0",
            insetStart: "50%",
            width: "var(--slider-marker-size)",
            translate: "-50% 0",
            backgroundSize: "[100% 10%]",
            backgroundRepeat: "repeat-y",
            clipPath: "inset(0 0 2px 0)",
          },
        },
        thumb: {
          width: "[50%]",
          height: "1",
          bottom: "[var(--slider-handle-offset) !important]",
        },
        marker: {
          gap: "calc(var(--slider-marker-center) + {spacing.1.5})",
        },
        markerIndicator: {
          height: "[1px]",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "capsule",
    orientation: "horizontal",
  },
})
