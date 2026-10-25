import { theme as dsTheme } from "@isbatak/panda-ds/theme"

import { alertSlotRecipe } from "./alert"
import { buttonRecipe } from "./button"
import { checkboxSlotRecipe } from "./checkbox"
import { checkboxCardSlotRecipe } from "./checkbox-card"
import { checkmarkRecipe } from "./checkmark"
import { codeBlockSlotRecipe } from "./code-block"
import { radioCardSlotRecipe } from "./radio-card"
import { radioGroupSlotRecipe } from "./radio-group"
import { radiomarkRecipe } from "./radiomark"
import { scrollAreaSlotRecipe } from "./scroll-area"
import { selectSlotRecipe } from "./select"
import { toastSlotRecipe } from "./toast"

export const recipes = {
  ...dsTheme.recipes,
  button: buttonRecipe,
  checkmark: checkmarkRecipe,
  radiomark: radiomarkRecipe,
}

export const slotRecipes = {
  ...dsTheme.slotRecipes,
  alert: alertSlotRecipe,
  checkbox: checkboxSlotRecipe,
  checkboxCard: checkboxCardSlotRecipe,
  codeBlock: codeBlockSlotRecipe,
  radioCard: radioCardSlotRecipe,
  radioGroup: radioGroupSlotRecipe,
  scrollArea: scrollAreaSlotRecipe,
  select: selectSlotRecipe,
  toast: toastSlotRecipe,
}
