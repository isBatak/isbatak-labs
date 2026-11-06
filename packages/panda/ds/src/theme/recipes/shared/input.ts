import { defineStyles } from "@pandacss/dev"

const groupPadding = defineStyles({
  "[data-start-element] > &": {
    paddingInlineStart: "calc(var(--input-height) - var(--input-start-offset, 0px))",
  },
  "[data-end-element] > &": {
    paddingInlineEnd: "calc(var(--input-height) - var(--input-end-offset, 0px))",
  },
})

export const inputBase = defineStyles({
  width: "100%",
  minWidth: "0",
  outline: "0",
  position: "relative",
  appearance: "none",
  textAlign: "start",
  borderRadius: "l2",
  _disabled: {
    layerStyle: "disabled",
  },
  height: "var(--input-height)",
  minW: "var(--input-height)",
  "--focus-color": "colors.colorPalette.focusRing",
  "--error-color": "colors.border.error",
  _invalid: {
    focusRingColor: "var(--error-color)",
    borderColor: "var(--error-color)",
  },
})

export const inputSizes = {
  "2xs": defineStyles({
    textStyle: "xs",
    px: "2",
    "--input-height": "sizes.7",
    ...groupPadding,
  }),
  xs: defineStyles({
    textStyle: "xs",
    px: "2",
    "--input-height": "sizes.8",
    ...groupPadding,
  }),
  sm: defineStyles({
    textStyle: "sm",
    px: "2.5",
    "--input-height": "sizes.9",
    ...groupPadding,
  }),
  md: defineStyles({
    textStyle: "sm",
    px: "3",
    "--input-height": "sizes.10",
    ...groupPadding,
  }),
  lg: defineStyles({
    textStyle: "md",
    px: "4",
    "--input-height": "sizes.11",
    ...groupPadding,
  }),
  xl: defineStyles({
    textStyle: "md",
    px: "4.5",
    "--input-height": "sizes.12",
    ...groupPadding,
  }),
  "2xl": defineStyles({
    textStyle: "lg",
    px: "5",
    "--input-height": "sizes.16",
    ...groupPadding,
  }),
}

export const inputVariants = {
  outline: defineStyles({
    bg: "transparent",
    borderWidth: "1px",
    borderColor: "border",
    focusVisibleRing: "inside",
    focusRingColor: "var(--focus-color)",
  }),
  subtle: defineStyles({
    borderWidth: "1px",
    borderColor: "transparent",
    bg: "bg.muted",
    focusVisibleRing: "inside",
    focusRingColor: "var(--focus-color)",
  }),
  plain: defineStyles({
    bg: "transparent",
    borderWidth: "1px",
    borderColor: "transparent",
    focusVisibleRing: "inside",
    focusRingColor: "var(--focus-color)",
  }),
  flushed: defineStyles({
    bg: "transparent",
    borderBottomWidth: "1px",
    borderBottomColor: "border",
    borderRadius: "0",
    px: "0",
    _focusVisible: {
      borderColor: "var(--focus-color)",
      boxShadow: "0px 1px 0px 0px var(--focus-color)",
      _invalid: {
        borderColor: "var(--error-color)",
        boxShadow: "0px 1px 0px 0px var(--error-color)",
      },
    },
  }),
}

export const inputControl = defineStyles({
  position: "relative",
  width: "full",
})

export const inputElement = defineStyles({
  position: "absolute",
  top: "0",
  zIndex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSize: "var(--input-height)",
  color: "fg.muted",
})

export const inputTrigger = defineStyles({
  "--input-trigger-offset": "calc((var(--input-height) - var(--input-trigger-size)) / 2)",
  position: "absolute",
  top: "var(--input-trigger-offset)",
  insetEnd: "var(--input-trigger-offset)",
  zIndex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSize: "var(--input-trigger-size)",
  color: "colorPalette.fg",
  bg: "transparent",
  cursor: "button",
  borderRadius: "l1",
  outline: "0",
  transitionProperty: "common",
  transitionDuration: "moderate",
  focusVisibleRing: "outside",
  _hover: {
    bg: "colorPalette.subtle",
  },
  _disabled: {
    layerStyle: "disabled",
  },
  _hidden: {
    display: "none",
  },
})

export const inputControlSizes = {
  xs: {
    control: defineStyles({ "--input-height": "sizes.8", "--input-trigger-size": "sizes.6" }),
    icon: defineStyles({ _icon: { boxSize: "3.5" } }),
  },
  sm: {
    control: defineStyles({ "--input-height": "sizes.9", "--input-trigger-size": "sizes.6" }),
    icon: defineStyles({ _icon: { boxSize: "4" } }),
  },
  md: {
    control: defineStyles({ "--input-height": "sizes.10", "--input-trigger-size": "sizes.7" }),
    icon: defineStyles({ _icon: { boxSize: "4" } }),
  },
  lg: {
    control: defineStyles({ "--input-height": "sizes.11", "--input-trigger-size": "sizes.8" }),
    icon: defineStyles({ _icon: { boxSize: "5" } }),
  },
}
