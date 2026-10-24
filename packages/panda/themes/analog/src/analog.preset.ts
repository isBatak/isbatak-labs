import { definePreset } from "@pandacss/dev"

import { analogTheme } from "./analog.theme"

export const analogThemeName = "analog"

export interface AnalogPresetOptions {
  grainUrl?: string
}

export const createAnalogPreset = ({ grainUrl = "/grain.png" }: AnalogPresetOptions = {}) =>
  definePreset({
    name: "@isbatak/panda-theme-analog",
    conditions: {
      extend: {
        analog: `[data-panda-theme=${analogThemeName}] &`,
      },
    },
    themes: {
      extend: {
        [analogThemeName]: analogTheme,
      },
    },
    staticCss: {
      extend: {
        themes: [analogThemeName],
      },
    },
    theme: {
      extend: {
        tokens: {
          assets: {
            grain: { value: { type: "url", value: grainUrl } },
          },
          sizes: {
            grain: { value: "256px" },
          },
        },
        semanticTokens: {
          shadows: {
            raised: { value: "{shadows.md}" },
            pressed: { value: "{shadows.inner}" },
            recessed: { value: "{shadows.inner}" },
          },
        },
        layerStyles: {
          grain: {
            value: {
              backgroundImage: "{assets.grain}",
              backgroundRepeat: "repeat",
              backgroundSize: "{sizes.grain}",
            },
          },
          raised: {
            value: {
              bgColor: "bg.subtle",
              backgroundImage: "{assets.grain}, linear-gradient(to bottom, {colors.white/5}, {colors.black/20})",
              backgroundSize: "{sizes.grain}, auto",
              boxShadow: "raised",
            },
          },
          pressed: {
            value: {
              bgColor: "bg",
              backgroundImage: "{assets.grain}, linear-gradient(to bottom, {colors.black/20}, {colors.white/3})",
              backgroundSize: "{sizes.grain}, auto",
              boxShadow: "pressed",
            },
          },
          recessed: {
            value: {
              bgColor: "bg",
              backgroundImage: "{assets.grain}",
              backgroundSize: "{sizes.grain}",
              boxShadow: "recessed",
            },
          },
        },
      },
    },
    globalCss: {
      extend: {
        [`[data-panda-theme=${analogThemeName}]`]: {
          colorScheme: "dark",
          colorPalette: "gray",
          color: "fg",
          bgColor: "bg",
          backgroundImage: "{assets.grain}",
          backgroundRepeat: "repeat",
          backgroundSize: "{sizes.grain}",
        },
      },
    },
  })

export const analogPreset = createAnalogPreset()
