import { defineSlotRecipe } from "@pandacss/dev"

import { inputBase, inputSizes, inputVariants } from "./shared/input"

export const numberInputSlotRecipe = defineSlotRecipe({
  className: "number-input",
  description: "Numeric input with increment and decrement controls",
  slots: ["root", "label", "input", "control", "valueText", "incrementTrigger", "decrementTrigger", "scrubber"],
  base: {
    root: {
      position: "relative",
      zIndex: "0",
      isolation: "isolate",
    },
    input: {
      ...inputBase,
      verticalAlign: "top",
      pe: "calc(var(--stepper-width) + 0.5rem)",
    },
    control: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      insetEnd: "0px",
      margin: "1px",
      width: "var(--stepper-width)",
      height: "calc(100% - 2px)",
      zIndex: "1",
      borderStartWidth: "1px",
      divideY: "1px",
    },
    incrementTrigger: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: "1",
      userSelect: "none",
      cursor: "button",
      lineHeight: "1",
      color: "fg.muted",
      "--stepper-base-radius": "radii.l1",
      "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
      _icon: {
        boxSize: "1em",
      },
      _disabled: {
        opacity: "0.5",
      },
      _hover: {
        bg: "bg.muted",
      },
      _active: {
        bg: "bg.emphasized",
      },
      borderStartEndRadius: "var(--stepper-radius)",
    },
    decrementTrigger: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: "1",
      userSelect: "none",
      cursor: "button",
      lineHeight: "1",
      color: "fg.muted",
      "--stepper-base-radius": "radii.l1",
      "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
      _icon: {
        boxSize: "1em",
      },
      _disabled: {
        opacity: "0.5",
      },
      _hover: {
        bg: "bg.muted",
      },
      _active: {
        bg: "bg.emphasized",
      },
      borderEndEndRadius: "var(--stepper-radius)",
    },
    valueText: {
      fontWeight: "medium",
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums",
    },
  },
  variants: {
    size: {
      xs: {
        input: inputSizes.xs,
        control: {
          fontSize: "2xs",
          "--stepper-width": "sizes.4",
        },
      },
      sm: {
        input: inputSizes.sm,
        control: {
          fontSize: "xs",
          "--stepper-width": "sizes.5",
        },
      },
      md: {
        input: inputSizes.md,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6",
        },
      },
      lg: {
        input: inputSizes.lg,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6",
        },
      },
    },
    variant: {
      outline: { input: inputVariants.outline },
      subtle: { input: inputVariants.subtle },
      flushed: { input: inputVariants.flushed },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
