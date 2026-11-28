import type { PropertyConfig, TransformArgs, UtilityConfig } from "@pandacss/types"

const createFocusRing = (selector: string): PropertyConfig => {
  return {
    values: ["outside", "inside", "mixed", "none"],
    transform(value, { token }) {
      const focusRingColor = token("colors.colorPalette.focusRing")
      const styles: Record<string, Record<string, any>> = {
        inside: {
          "--focus-ring-color": focusRingColor,
          [selector]: {
            outlineOffset: "0px",
            outlineWidth: "var(--focus-ring-width, 1px)",
            outlineColor: "var(--focus-ring-color)",
            outlineStyle: "var(--focus-ring-style, solid)",
            borderColor: "var(--focus-ring-color)",
          },
        },
        outside: {
          "--focus-ring-color": focusRingColor,
          [selector]: {
            outlineWidth: "var(--focus-ring-width, 2px)",
            outlineOffset: "var(--focus-ring-offset, 2px)",
            outlineStyle: "var(--focus-ring-style, solid)",
            outlineColor: "var(--focus-ring-color)",
          },
        },
        mixed: {
          "--focus-ring-color": focusRingColor,
          [selector]: {
            outlineWidth: "var(--focus-ring-width, 3px)",
            outlineStyle: "var(--focus-ring-style, solid)",
            outlineColor: "color-mix(in srgb, var(--focus-ring-color), transparent 60%)",
            borderColor: "var(--focus-ring-color)",
          },
        },
        none: {
          "--focus-ring-color": focusRingColor,
          [selector]: {
            outline: "none",
          },
        },
      }
      return styles[value] ?? {}
    },
  }
}
const currentBgVar = "--bg-currentcolor"

const resolveBg = (value: string, { raw, token, utils }: TransformArgs) => {
  if (raw === "currentBg") return { color: `var(${currentBgVar}, ${token("colors.bg")})`, current: "inherit" }
  const mix = utils.colorMix(value)
  const color: string = mix.invalid ? value : mix.value
  return { color, current: color }
}

const bgValues: PropertyConfig["values"] = (theme) => ({ ...theme("colors"), currentBg: "currentBg" })

const iconPullMargin = (value: string, raw: unknown) => {
  const pull = raw === "0" || raw === 0 ? "" : `${value} + `
  return `calc((${pull}var(--icon-offset, 0px)) * -1)`
}

export const utilities = {
  background: {
    shorthand: "bg",
    className: "bg",
    values: bgValues,
    group: "Background",
    transform(value, args) {
      const { color, current } = resolveBg(value, args)
      return { [currentBgVar]: current, background: color }
    },
  },
  backgroundColor: {
    shorthand: "bgColor",
    className: "bg-c",
    values: bgValues,
    group: "Background",
    transform(value, args) {
      const { color, current } = resolveBg(value, args)
      return { [currentBgVar]: current, backgroundColor: color }
    },
  },
  iconPullStart: {
    values: "spacing",
    transform: (value, { raw }) => ({ marginInlineStart: iconPullMargin(value, raw) }),
  },
  iconPullEnd: {
    values: "spacing",
    transform: (value, { raw }) => ({ marginInlineEnd: iconPullMargin(value, raw) }),
  },
  iconPullOffset: {
    values: "spacing",
    transform: (value) => ({ "--icon-offset": value }),
  },
  focusRing: createFocusRing("&:is(:focus, [data-focus])"),
  focusVisibleRing: createFocusRing("&:is(:focus-visible, [data-focus-visible])"),
  focusRingColor: {
    values: "colors",
    transform(value, { utils }) {
      const prop = "--focus-ring-color"
      const mix = utils.colorMix(value)
      if (mix.invalid) return { [prop]: value }
      const cssVar = "--mix-" + prop
      return {
        [cssVar]: mix.value,
        [prop]: `var(${cssVar}, ${mix.color})`,
      }
    },
  },
  focusRingOffset: {
    values: "spacing",
    transform: (v) => ({ "--focus-ring-offset": v }),
  },
  focusRingWidth: {
    values: "borderWidths",
    property: "outlineWidth",
    transform: (v) => ({ "--focus-ring-width": v }),
  },
  focusRingStyle: {
    values: "borderStyles",
    property: "outlineStyle",
    transform: (v) => ({ "--focus-ring-style": v }),
  },
  boxSize: {
    values: "sizes",
    transform: (value) => ({ width: value, height: value }),
  },
} satisfies UtilityConfig
