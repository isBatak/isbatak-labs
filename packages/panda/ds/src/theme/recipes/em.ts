import { defineRecipe } from "@pandacss/dev"

export const emRecipe = defineRecipe({
  className: "em",
  description: "Emphasized text",
  jsx: ["Em"],
  base: {
    fontStyle: "italic",
  },
})
