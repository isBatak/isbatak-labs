import { defineSlotRecipe, defineStyles } from "@pandacss/dev"

import { buttonRecipe } from "./button"

const triggerStyles = defineStyles({
  ...buttonRecipe.base,
  ...buttonRecipe.variants?.icon?.true,
  borderRadius: "var(--pagination-radius)",
})

const itemStyles = defineStyles({
  ...buttonRecipe.base,
  px: "1",
  fontVariantNumeric: "tabular-nums",
  borderRadius: "var(--pagination-radius)",
})

const sizeStyles = (size: "xs" | "sm" | "md" | "lg", height: string, textStyle: string) => {
  const styles = buttonRecipe.variants?.size?.[size] ?? {}
  return {
    item: styles,
    prevTrigger: styles,
    nextTrigger: styles,
    firstTrigger: styles,
    lastTrigger: styles,
    ellipsis: {
      h: height,
      minW: height,
      textStyle,
    },
    pageText: {
      textStyle,
    },
  }
}

const variantStyles = (variant: "ghost" | "outline" | "subtle" | "surface", selected: "outline" | "solid") => {
  const styles = buttonRecipe.variants?.variant?.[variant] ?? {}
  return {
    item: {
      ...styles,
      _selected: buttonRecipe.variants?.variant?.[selected] ?? {},
    },
    prevTrigger: styles,
    nextTrigger: styles,
    firstTrigger: styles,
    lastTrigger: styles,
  }
}

const attachedSeparator = {
  ms: "calc(var(--pagination-border-width) * -1)",
}

export const paginationSlotRecipe = defineSlotRecipe({
  className: "pagination",
  description: "Page navigation for a paged list or table; renders page buttons, ellipses and prev/next triggers",
  slots: ["root", "item", "ellipsis", "prevTrigger", "nextTrigger", "firstTrigger", "lastTrigger", "pageText"],
  base: {
    root: {
      "--pagination-gap": "spacing.1",
      "--pagination-radius": "radii.l2",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--pagination-gap)",
      colorPalette: "gray",
    },
    item: itemStyles,
    prevTrigger: triggerStyles,
    nextTrigger: triggerStyles,
    firstTrigger: triggerStyles,
    lastTrigger: triggerStyles,
    ellipsis: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      color: "fg.muted",
      _icon: {
        width: "4",
        height: "4",
      },
    },
    pageText: {
      display: "inline-flex",
      alignItems: "center",
      alignSelf: "stretch",
      px: "2",
      color: "fg.muted",
      fontVariantNumeric: "tabular-nums",
    },
  },
  variants: {
    size: {
      xs: sizeStyles("xs", "8", "xs"),
      sm: sizeStyles("sm", "9", "sm"),
      md: sizeStyles("md", "10", "sm"),
      lg: sizeStyles("lg", "11", "md"),
    },
    variant: {
      ghost: variantStyles("ghost", "outline"),
      outline: variantStyles("outline", "solid"),
      subtle: variantStyles("subtle", "solid"),
      surface: variantStyles("surface", "solid"),
    },
    attached: {
      true: {
        root: {
          gap: "0",
          "--pagination-border-width": "1px",
        },
        item: {
          borderRadius: "0",
          ...attachedSeparator,
        },
        ellipsis: {
          ...attachedSeparator,
          borderWidth: "1px",
          borderColor: "border",
        },
        pageText: {
          ...attachedSeparator,
          borderWidth: "1px",
          borderColor: "border",
        },
        prevTrigger: {
          borderEndRadius: "0",
        },
        firstTrigger: {
          borderEndRadius: "0",
        },
        nextTrigger: {
          borderStartRadius: "0",
          ...attachedSeparator,
        },
        lastTrigger: {
          borderStartRadius: "0",
          ...attachedSeparator,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "ghost",
  },
})
