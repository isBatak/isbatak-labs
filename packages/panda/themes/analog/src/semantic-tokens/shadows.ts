import { defineSemanticTokens } from "@pandacss/dev"

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      base: "0 1px 1px {colors.black/8}, inset 0 1px 0 {colors.white/60}",
      _dark: "0 1px 1px {colors.black/40}, inset 0 1px 0 {colors.white/4}",
    },
  },
  sm: {
    value: {
      base: "0 2px 4px {colors.black/10}, inset 0 1px 0 {colors.white/60}",
      _dark: "0 2px 4px {colors.black/45}, inset 0 1px 0 {colors.white/5}",
    },
  },
  md: {
    value: {
      base: "0 4px 10px {colors.black/12}, inset 0 1px 0 {colors.white/60}",
      _dark: "0 4px 10px {colors.black/50}, inset 0 1px 0 {colors.white/5}",
    },
  },
  lg: {
    value: {
      base: "0 10px 24px {colors.black/14}, inset 0 1px 0 {colors.white/70}",
      _dark: "0 10px 24px {colors.black/55}, inset 0 1px 0 {colors.white/6}",
    },
  },
  xl: {
    value: {
      base: "0 16px 36px {colors.black/16}, inset 0 1px 0 {colors.white/70}",
      _dark: "0 16px 36px {colors.black/60}, inset 0 1px 0 {colors.white/6}",
    },
  },
  "2xl": {
    value: {
      base: "0 24px 56px {colors.black/20}, inset 0 1px 0 {colors.white/70}",
      _dark: "0 24px 56px {colors.black/65}, inset 0 1px 0 {colors.white/6}",
    },
  },
  inner: {
    value: {
      base: "inset 0 2px 5px {colors.black/12}",
      _dark: "inset 0 2px 6px {colors.black/60}",
    },
  },
  inset: {
    value: {
      base: "inset 0 0 0 1px {colors.black/8}",
      _dark: "inset 0 0 0 1px {colors.black/40}",
    },
  },
  elevation: {
    sunken: {
      value: {
        base: "inset 0 2px 5px {colors.black/12}, inset 0 -1px 0 {colors.white/70}, 0 1px 0 {colors.white/60}",
        _dark: "inset 0 2px 6px {colors.black/55}, inset 0 -1px 0 {colors.white/5}, 0 1px 0 {colors.white/4}",
      },
    },
    base: {
      value: "none",
    },
    raised: {
      value: {
        base: "0 0 0 1px {colors.black/8}, 0 8px 16px -6px {colors.black/20}, 0 1px 2px {colors.black/10}, inset 0 1px 0 {colors.white/80}, inset 0 -2px 3px {colors.black/6}",
        _dark:
          "0 0 0 1px {colors.black/70}, 0 10px 18px -6px {colors.black/70}, 0 2px 4px {colors.black/50}, inset 0 1px 0 {colors.white/7}, inset 0 -2px 4px {colors.black/30}",
      },
    },
    floating: {
      value: {
        base: "0 0 0 1px {colors.black/8}, 0 16px 32px -10px {colors.black/25}, 0 2px 6px {colors.black/8}, inset 0 1px 0 {colors.white/80}",
        _dark:
          "0 0 0 1px {colors.black/60}, 0 16px 32px -8px {colors.black/70}, 0 2px 6px {colors.black/40}, inset 0 1px 0 {colors.white/6}",
      },
    },
    overlay: {
      value: {
        base: "0 0 0 1px {colors.black/8}, 0 28px 56px -14px {colors.black/30}, 0 4px 12px {colors.black/10}, inset 0 1px 0 {colors.white/80}",
        _dark:
          "0 0 0 1px {colors.black/60}, 0 28px 56px -12px {colors.black/75}, 0 4px 12px {colors.black/45}, inset 0 1px 0 {colors.white/7}",
      },
    },
  },
  pressed: {
    value: {
      base: "0 0 0 1px {colors.black/10}, inset 0 3px 6px {colors.black/18}, inset 0 -1px 0 {colors.white/60}",
      _dark: "0 0 0 1px {colors.black/70}, inset 0 3px 8px {colors.black/60}, inset 0 -1px 0 {colors.white/4}",
    },
  },
})
