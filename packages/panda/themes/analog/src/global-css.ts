import { globalCss as dsGlobalCss } from "@isbatak/panda-ds/theme"
import { defineGlobalStyles } from "@pandacss/dev"

export const globalCss = defineGlobalStyles({
  ...dsGlobalCss,
  html: {
    ...dsGlobalCss.html,
    colorPalette: "neutral",
    backgroundImage: "{assets.grain}",
    backgroundRepeat: "repeat",
    backgroundSize: "{sizes.grain}",
  },
})
