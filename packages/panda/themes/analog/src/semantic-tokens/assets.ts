import { defineSemanticTokens } from "@pandacss/dev"

import { grainDark, grainLight } from "../grain"

export const assets = defineSemanticTokens.assets({
  grain: {
    value: {
      base: `url("${grainLight}")`,
      _dark: `url("${grainDark}")`,
    },
  },
})
