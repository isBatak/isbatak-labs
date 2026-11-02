import { defineSlotRecipe, defineStyles } from "@pandacss/dev"

import {
  inputBase,
  inputControl,
  inputControlSizes,
  inputElement,
  inputSizes,
  inputTrigger,
  inputVariants,
} from "./shared/input"

export const searchInputSlotRecipe = defineSlotRecipe({
  className: "search-input",
  description: "Search field with a search icon and a trigger that clears the value",
  slots: ["root", "label", "control", "icon", "input", "clearTrigger"],
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
    icon: {
      ...inputElement,
      insetStart: "0",
    },
    input: {
      ...inputBase,
      "&::-webkit-search-cancel-button, &::-webkit-search-decoration": {
        appearance: "none",
      },
    },
    clearTrigger: inputTrigger,
  },
  variants: {
    size: {
      xs: {
        control: inputControlSizes.xs.control,
        icon: inputControlSizes.xs.icon,
        input: defineStyles({
          ...inputSizes.xs,
          pe: "var(--input-height)",
          "[data-scope=search-input][data-part=control]:has(> [data-part=icon]) > &": { ps: "var(--input-height)" },
        }),
        clearTrigger: inputControlSizes.xs.icon,
      },
      sm: {
        control: inputControlSizes.sm.control,
        icon: inputControlSizes.sm.icon,
        input: defineStyles({
          ...inputSizes.sm,
          pe: "var(--input-height)",
          "[data-scope=search-input][data-part=control]:has(> [data-part=icon]) > &": { ps: "var(--input-height)" },
        }),
        clearTrigger: inputControlSizes.sm.icon,
      },
      md: {
        control: inputControlSizes.md.control,
        icon: inputControlSizes.md.icon,
        input: defineStyles({
          ...inputSizes.md,
          pe: "var(--input-height)",
          "[data-scope=search-input][data-part=control]:has(> [data-part=icon]) > &": { ps: "var(--input-height)" },
        }),
        clearTrigger: inputControlSizes.md.icon,
      },
      lg: {
        control: inputControlSizes.lg.control,
        icon: inputControlSizes.lg.icon,
        input: defineStyles({
          ...inputSizes.lg,
          pe: "var(--input-height)",
          "[data-scope=search-input][data-part=control]:has(> [data-part=icon]) > &": { ps: "var(--input-height)" },
        }),
        clearTrigger: inputControlSizes.lg.icon,
      },
    },
    variant: {
      outline: { input: inputVariants.outline },
      subtle: { input: inputVariants.subtle },
      flushed: {
        input: defineStyles({
          ...inputVariants.flushed,
          pe: "var(--input-height)",
          "[data-scope=search-input][data-part=control]:has(> [data-part=icon]) > &": { ps: "var(--input-height)" },
        }),
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
