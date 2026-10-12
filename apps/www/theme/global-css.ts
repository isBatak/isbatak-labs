import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  html: {
    colorPalette: "gray",
  },
  ".button--variant_solid": {
    colorPalette: "orange",
  },
  body: {
    minHeight: "100dvh",
  },
  ":root": {
    viewTransitionName: "none",
  },
  "::view-transition": {
    pointerEvents: "none",
  },
})
