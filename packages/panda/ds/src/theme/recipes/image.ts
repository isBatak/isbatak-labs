import { defineRecipe } from "@pandacss/dev"

export const imageRecipe = defineRecipe({
  className: "image",
  description: "Image with a faint inset outline so pale pictures keep their edge; pick it for any content image",
  base: {
    layerStyle: "imageOutline",
  },
})
