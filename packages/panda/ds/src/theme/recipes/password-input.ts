import { defineSlotRecipe, defineStyles } from "@pandacss/dev"

import { inputBase, inputControl, inputControlSizes, inputSizes, inputTrigger, inputVariants } from "./shared/input"

export const passwordInputSlotRecipe = defineSlotRecipe({
  className: "password-input",
  description: "Password field with a trigger that shows or hides the password",
  slots: ["root", "label", "control", "input", "visibilityTrigger", "indicator"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
    },
    label: {
      textStyle: "label",
      _disabled: {
        opacity: "0.5",
      },
    },
    control: inputControl,
    input: inputBase,
    visibilityTrigger: inputTrigger,
    indicator: {
      display: "flex",
    },
  },
  variants: {
    size: {
      xs: {
        control: inputControlSizes.xs.control,
        input: defineStyles({ ...inputSizes.xs, pe: "var(--input-height)" }),
        visibilityTrigger: inputControlSizes.xs.icon,
      },
      sm: {
        control: inputControlSizes.sm.control,
        input: defineStyles({ ...inputSizes.sm, pe: "var(--input-height)" }),
        visibilityTrigger: inputControlSizes.sm.icon,
      },
      md: {
        control: inputControlSizes.md.control,
        input: defineStyles({ ...inputSizes.md, pe: "var(--input-height)" }),
        visibilityTrigger: inputControlSizes.md.icon,
      },
      lg: {
        control: inputControlSizes.lg.control,
        input: defineStyles({ ...inputSizes.lg, pe: "var(--input-height)" }),
        visibilityTrigger: inputControlSizes.lg.icon,
      },
    },
    variant: {
      outline: { input: inputVariants.outline },
      subtle: { input: inputVariants.subtle },
      flushed: {
        input: defineStyles({ ...inputVariants.flushed, pe: "var(--input-height)" }),
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
