import { defineSlotRecipe, defineStyles } from "@pandacss/dev"

import { buttonRecipe } from "./button"
import { fieldLabel, fieldOrientation, fieldRoot } from "./field"
import { inputBase, inputSizes, inputVariants } from "./shared/input"

type SystemStyleObject = ReturnType<typeof defineStyles>

const trigger: SystemStyleObject = {
  ...buttonRecipe.base,
  ...buttonRecipe.variants?.icon?.true,
  ...buttonRecipe.variants?.variant?.ghost,
  py: "0",
  scale: "0.8",
  pointerEvents: "auto",
}

const triggerSize = (size: "sm" | "md" | "lg"): SystemStyleObject => ({
  ...buttonRecipe.variants?.size?.[size],
  _iconStart: {},
  _iconEnd: {},
})

export const numberStepperInputSlotRecipe = defineSlotRecipe({
  className: "number-stepper-input",
  description:
    "Number input with the decrement and increment buttons on either side of a centered value; pick it over numberInput for quantities and counters",
  slots: [
    "root",
    "label",
    "control",
    "input",
    "triggerGroup",
    "decrementTrigger",
    "incrementTrigger",
    "inlineLabel",
    "valueText",
  ],
  base: {
    root: {
      ...fieldRoot,
      ...fieldOrientation.vertical.root,
      colorPalette: "gray",
      isolation: "isolate",
    },
    label: fieldLabel,
    control: {
      position: "relative",
      w: "full",
      containerType: "inline-size",
    },
    input: {
      ...inputBase,
      verticalAlign: "top",
      textAlign: "center",
      fontVariantNumeric: "tabular-nums",
      "&:has(~ [data-inline-label])": {
        pb: "3",
      },
    },
    triggerGroup: {
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      top: "0",
      insetInline: "0",
      pointerEvents: "none",
      zIndex: "1",
      "@container (max-width: 6rem)": {
        display: "none",
      },
    },
    decrementTrigger: trigger,
    incrementTrigger: trigger,
    inlineLabel: {
      position: "absolute",
      insetBlockEnd: "1",
      insetInline: "0",
      textAlign: "center",
      textStyle: "xs",
      fontWeight: "medium",
      color: "fg.muted",
      userSelect: "none",
      pointerEvents: "none",
      "[data-disabled] > &": {
        layerStyle: "disabled",
      },
    },
    valueText: {
      fontWeight: "medium",
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums",
    },
  },
  variants: {
    size: {
      sm: {
        input: inputSizes.sm,
        decrementTrigger: triggerSize("sm"),
        incrementTrigger: triggerSize("sm"),
      },
      md: {
        input: inputSizes.md,
        decrementTrigger: triggerSize("md"),
        incrementTrigger: triggerSize("md"),
      },
      lg: {
        input: inputSizes.lg,
        decrementTrigger: triggerSize("lg"),
        incrementTrigger: triggerSize("lg"),
      },
    },
    variant: {
      outline: { input: inputVariants.outline },
      subtle: { input: inputVariants.subtle },
      plain: { input: inputVariants.plain },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
