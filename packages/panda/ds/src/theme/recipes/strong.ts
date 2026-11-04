import { defineRecipe } from "@pandacss/dev"

export const strongRecipe = defineRecipe({
  className: "strong",
  description: "Text with strong importance",
  jsx: ["Strong"],
  base: {
    fontWeight: "semibold",
  },
})
