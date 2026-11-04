import { defineRecipe } from "@pandacss/dev"

export const containerRecipe = defineRecipe({
  className: "container",
  description: "Centers page content at a readable max width with responsive side padding",
  jsx: ["Container"],
  base: {
    position: "relative",
    maxWidth: "8xl",
    w: "full",
    mx: "auto",
    px: { base: "4", md: "6", lg: "8" },
  },
  variants: {
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    fluid: {
      true: {
        maxWidth: "full",
      },
    },
  },
})
