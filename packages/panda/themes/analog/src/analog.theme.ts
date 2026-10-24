import { defineThemeVariant } from "@pandacss/dev"

export const analogTheme = defineThemeVariant({
  semanticTokens: {
    colors: {
      bg: {
        DEFAULT: { value: "#2a2a2a" },
        subtle: { value: "#2e2e2e" },
        muted: { value: "#333333" },
        emphasized: { value: "#3b3b3b" },
        inverted: { value: "#ececec" },
        panel: { value: "#2e2e2e" },
      },
      fg: {
        DEFAULT: { value: "#ececec" },
        muted: { value: "#9c9c9c" },
        subtle: { value: "#6f6f6f" },
        inverted: { value: "#1c1c1c" },
      },
      border: {
        DEFAULT: { value: "#1b1b1b" },
        muted: { value: "#222222" },
        subtle: { value: "#262626" },
        emphasized: { value: "#141414" },
        inverted: { value: "#ececec" },
      },
      gray: {
        contrast: { value: "#1c1c1c" },
        fg: { value: "#dcdcdc" },
        subtle: { value: "#2e2e2e" },
        muted: { value: "#343434" },
        emphasized: { value: "#3d3d3d" },
        solid: { value: "#ececec" },
        focusRing: { value: "#6f6f6f" },
        border: { value: "#1b1b1b" },
      },
      red: {
        contrast: { value: "#ffffff" },
        fg: { value: "#ff5a5a" },
        subtle: { value: "#3a2626" },
        muted: { value: "#4a2a2a" },
        emphasized: { value: "#5c2e2e" },
        solid: { value: "#ff4545" },
        focusRing: { value: "#ff4545" },
        border: { value: "#5c2e2e" },
      },
    },
    shadows: {
      xs: { value: "0 1px 1px {colors.black/40}, inset 0 1px 0 {colors.white/4}" },
      sm: { value: "0 2px 4px {colors.black/45}, inset 0 1px 0 {colors.white/5}" },
      md: { value: "0 4px 10px {colors.black/50}, inset 0 1px 0 {colors.white/5}" },
      lg: { value: "0 10px 24px {colors.black/55}, inset 0 1px 0 {colors.white/6}" },
      xl: { value: "0 16px 36px {colors.black/60}, inset 0 1px 0 {colors.white/6}" },
      "2xl": { value: "0 24px 56px {colors.black/65}, inset 0 1px 0 {colors.white/6}" },
      inner: { value: "inset 0 2px 6px {colors.black/60}" },
      inset: { value: "inset 0 0 0 1px {colors.black/40}" },
      raised: {
        value:
          "0 0 0 1px {colors.black/70}, 0 10px 18px -6px {colors.black/70}, 0 2px 4px {colors.black/50}, inset 0 1px 0 {colors.white/7}, inset 0 -2px 4px {colors.black/30}",
      },
      pressed: {
        value: "0 0 0 1px {colors.black/70}, inset 0 3px 8px {colors.black/60}, inset 0 -1px 0 {colors.white/4}",
      },
      recessed: {
        value: "inset 0 2px 6px {colors.black/55}, inset 0 -1px 0 {colors.white/5}, 0 1px 0 {colors.white/4}",
      },
    },
  },
})
