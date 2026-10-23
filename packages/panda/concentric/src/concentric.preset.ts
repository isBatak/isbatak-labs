import { definePreset } from "@pandacss/dev"
import type { Preset } from "@pandacss/types"

import { concentricGlobalCss } from "./concentric.global-css"
import { concentricUtilities } from "./concentric.utilities"
import { concentricVars } from "./concentric.vars"

export const concentricPreset: Preset = definePreset({
  name: "@isbatak/panda-concentric",
  globalVars: {
    extend: concentricVars,
  },
  globalCss: {
    extend: concentricGlobalCss,
  },
  utilities: {
    extend: concentricUtilities,
  },
})
