import { definePlugin } from "@pandacss/dev"

export const presetBasePlugin = definePlugin({
  name: "panda-ds-preset-base",
  hooks: {
    "preset:resolved": ({ preset, name, utils }) =>
      name === "@pandacss/preset-base"
        ? utils.omit(preset, ["patterns.container", "patterns.grid.defaultValues"])
        : undefined,
  },
})
