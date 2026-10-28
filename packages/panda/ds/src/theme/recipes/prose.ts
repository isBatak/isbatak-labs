import { defineRecipe } from "@pandacss/dev"

export const proseRecipe = defineRecipe({
  className: "prose",
  description: "Typography for rendered rich text such as markdown",
  base: {
    '& :where(code):not(:where([class~="not-prose"],[class~="not-prose"] *))': {
      borderRadius: "l1",
    },
  },
})
