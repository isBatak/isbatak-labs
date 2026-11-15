import { defineSlotRecipe } from "@pandacss/dev"

export const signaturePadSlotRecipe = defineSlotRecipe({
  className: "signature-pad",
  description: "Drawing area for capturing a handwritten signature with a pointer, pen or finger",
  slots: ["root", "label", "control", "segment", "guide", "clearTrigger"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
      color: "fg",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      textStyle: "sm",
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        opacity: "0.5",
      },
    },
    control: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "full",
      minWidth: "0",
      minHeight: "var(--signature-pad-height)",
      borderRadius: "l2",
      outline: "0",
      "--focus-color": "colors.colorPalette.focusRing",
      focusVisibleRing: "inside",
      focusRingColor: "var(--focus-color)",
      _disabled: {
        cursor: "disabled",
      },
    },
    segment: {
      color: "fg",
      fill: "currentColor",
    },
    guide: {
      position: "absolute",
      insetInline: "var(--signature-pad-guide-inset)",
      bottom: "var(--signature-pad-guide-inset)",
      borderBottomWidth: "1px",
      borderBottomStyle: "dashed",
      borderBottomColor: "border.emphasized",
      pointerEvents: "none",
    },
    clearTrigger: {
      position: "absolute",
      top: "var(--signature-pad-trigger-offset)",
      insetEnd: "var(--signature-pad-trigger-offset)",
      zIndex: "1",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSize: "var(--signature-pad-trigger-size)",
      color: "fg.muted",
      bg: "transparent",
      borderRadius: "l2",
      cursor: "button",
      outline: "0",
      transitionProperty: "common",
      transitionDuration: "moderate",
      focusVisibleRing: "outside",
      _hover: {
        bg: "bg.muted",
        color: "fg",
      },
      _icon: {
        boxSize: "4",
      },
      _disabled: {
        layerStyle: "disabled",
      },
      _hidden: {
        display: "none",
      },
    },
  },
  variants: {
    variant: {
      outline: {
        control: {
          bg: "bg",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        control: {
          bg: "bg.muted",
          borderWidth: "1px",
          borderColor: "transparent",
        },
        clearTrigger: {
          _hover: {
            bg: "bg.emphasized",
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          "--signature-pad-height": "sizes.32",
          "--signature-pad-guide-inset": "spacing.4",
          "--signature-pad-trigger-offset": "spacing.2",
          "--signature-pad-trigger-size": "sizes.7",
        },
      },
      md: {
        root: {
          "--signature-pad-height": "sizes.40",
          "--signature-pad-guide-inset": "spacing.6",
          "--signature-pad-trigger-offset": "spacing.3",
          "--signature-pad-trigger-size": "sizes.8",
        },
      },
      lg: {
        root: {
          "--signature-pad-height": "sizes.48",
          "--signature-pad-guide-inset": "spacing.8",
          "--signature-pad-trigger-offset": "spacing.4",
          "--signature-pad-trigger-size": "sizes.9",
        },
        clearTrigger: {
          _icon: {
            boxSize: "5",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
