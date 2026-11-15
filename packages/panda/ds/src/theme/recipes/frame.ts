import { defineRecipe } from "@pandacss/dev"

export const frameRecipe = defineRecipe({
  className: "frame",
  description:
    "Bordered, rounded iframe that grows to the height of what it renders; pick it to isolate content from the page's styles and scripts",
  base: {
    display: "block",
    width: "full",
    height: "[calc(var(--height) + 2px)]",
    borderWidth: "1px",
    borderColor: "border",
    borderRadius: "l2",
  },
})
