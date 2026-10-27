import type { PropertyConfig, PropertyValues, UtilityConfig } from "@pandacss/types"

import {
  axes,
  corners,
  ownWrapperVar,
  ref,
  slots,
  slotVar,
  type Corner,
  type LogicalCorner,
  type Slot,
  type SlotBase,
} from "./concentric.vars"

type Styles = Record<string, any>

const inline: Slot[] = ["l", "r", "rl", "rr"]
const block: Slot[] = ["t", "b"]
const inlineStart: Slot[] = ["l", "rr"]
const inlineEnd: Slot[] = ["r", "rl"]
const top: Slot[] = ["t"]
const right: Slot[] = ["r", "rr"]
const bottom: Slot[] = ["b"]
const left: Slot[] = ["l", "rl"]

const borderKeywords: Record<string, string> = { thin: "1px", medium: "3px", thick: "5px" }

const toLength = (value: unknown) => {
  const text = String(value)
  return /^-?(\d*\.)?\d+$/.test(text) ? `${text}px` : text
}

const measure = (base: SlotBase, targets: Slot[], value: string): Styles =>
  Object.fromEntries(targets.map((slot) => [slotVar(base, slot), value]))

const relay = (targets: Slot[]): Styles =>
  Object.fromEntries(
    targets.map((slot) => [ownWrapperVar(slot), `calc(${ref(slotVar("p", slot))} + ${ref(slotVar("bw", slot))})`]),
  )

const padding = (property: string, targets: Slot[]): PropertyConfig => ({
  transform: (value) => ({ [property]: value, ...measure("p", targets, toLength(value)), ...relay(targets) }),
})

const margin = (property: string, targets: Slot[]): PropertyConfig => ({
  transform: (value) => ({
    [property]: value,
    ...measure("m", targets, value === "auto" ? "0px" : toLength(value)),
  }),
})

const inset = (property: string, targets: Slot[]): PropertyConfig => ({
  transform: (value) => ({
    [property]: value,
    ...measure("i", targets, value === "auto" || String(value).includes("%") ? "initial" : toLength(value)),
  }),
})

const borderWidth = (property: string, targets: Slot[]): PropertyConfig => ({
  transform: (value) => ({
    [property]: value,
    ...measure("bw", targets, borderKeywords[value] ?? toLength(value)),
    ...relay(targets),
  }),
})

const border = (property: string, targets: Slot[]): PropertyConfig => ({
  transform: (value, { raw, token }) => {
    const source = String(token.raw(`borders.${raw}`)?.value ?? value)
    const width = source.split(/\s+/).find((part) => part in borderKeywords || /^-?(\d*\.)?\d+([a-z]+)?$/.test(part))
    if (!width) return { [property]: value }
    return {
      [property]: value,
      ...measure("bw", targets, borderKeywords[width] ?? toLength(width)),
      ...relay(targets),
    }
  },
})

const radiusValues: PropertyValues = (theme) => ({ ...theme("radii"), concentric: "concentric" })

const selfRadius = (corner: Corner | LogicalCorner) => `${ref(`--cc-self-${corner}-x`)} ${ref(`--cc-self-${corner}-y`)}`

const publish = (out: Corner[], rout: Corner[], concentric: boolean, value: string): Styles => ({
  "--cc-pub": "0px",
  ...Object.fromEntries(
    (["out", "rout"] as const).flatMap((prefix) =>
      (prefix === "out" ? out : rout).flatMap((corner) =>
        axes.map((axis) => [
          `--cc-${prefix}-${corner}-${axis}`,
          concentric ? ref(`--cc-self-${corner}-${axis}`) : value,
        ]),
      ),
    ),
  ),
})

const radius = (
  properties: Partial<Record<string, Corner | LogicalCorner>>,
  out: Corner[],
  rout: Corner[] = out,
): PropertyConfig => ({
  values: radiusValues,
  transform: (value) => {
    const concentric = value === "concentric"
    return {
      ...Object.fromEntries(
        Object.entries(properties).map(([property, corner]) => [property, concentric ? selfRadius(corner!) : value]),
      ),
      ...publish(out, rout, concentric, value),
    }
  },
})

export const concentricUtilities: UtilityConfig = {
  borderRadius: {
    values: radiusValues,
    transform: (value) => {
      const concentric = value === "concentric"
      const radii = concentric
        ? `${corners.map((corner) => ref(`--cc-self-${corner}-x`)).join(" ")} / ${corners
            .map((corner) => ref(`--cc-self-${corner}-y`))
            .join(" ")}`
        : value
      return { borderRadius: radii, ...publish([...corners], [...corners], concentric, value) }
    },
  },
  borderTopRadius: radius({ borderTopLeftRadius: "tl", borderTopRightRadius: "tr" }, ["tl", "tr"]),
  borderRightRadius: radius({ borderTopRightRadius: "tr", borderBottomRightRadius: "br" }, ["tr", "br"]),
  borderBottomRadius: radius({ borderBottomRightRadius: "br", borderBottomLeftRadius: "bl" }, ["br", "bl"]),
  borderLeftRadius: radius({ borderTopLeftRadius: "tl", borderBottomLeftRadius: "bl" }, ["tl", "bl"]),
  borderTopLeftRadius: radius({ borderTopLeftRadius: "tl" }, ["tl"]),
  borderTopRightRadius: radius({ borderTopRightRadius: "tr" }, ["tr"]),
  borderBottomRightRadius: radius({ borderBottomRightRadius: "br" }, ["br"]),
  borderBottomLeftRadius: radius({ borderBottomLeftRadius: "bl" }, ["bl"]),
  borderStartRadius: radius({ borderStartStartRadius: "ss", borderEndStartRadius: "es" }, ["tl", "bl"], ["tr", "br"]),
  borderEndRadius: radius({ borderStartEndRadius: "se", borderEndEndRadius: "ee" }, ["tr", "br"], ["tl", "bl"]),
  borderStartStartRadius: radius({ borderStartStartRadius: "ss" }, ["tl"], ["tr"]),
  borderStartEndRadius: radius({ borderStartEndRadius: "se" }, ["tr"], ["tl"]),
  borderEndEndRadius: radius({ borderEndEndRadius: "ee" }, ["br"], ["bl"]),
  borderEndStartRadius: radius({ borderEndStartRadius: "es" }, ["bl"], ["br"]),

  padding: padding("padding", slots),
  paddingInline: padding("paddingInline", inline),
  paddingBlock: padding("paddingBlock", block),
  paddingInlineStart: padding("paddingInlineStart", inlineStart),
  paddingInlineEnd: padding("paddingInlineEnd", inlineEnd),
  paddingBlockStart: padding("paddingBlockStart", top),
  paddingBlockEnd: padding("paddingBlockEnd", bottom),
  paddingTop: padding("paddingTop", top),
  paddingRight: padding("paddingRight", right),
  paddingBottom: padding("paddingBottom", bottom),
  paddingLeft: padding("paddingLeft", left),

  borderWidth: borderWidth("borderWidth", slots),
  borderInlineWidth: borderWidth("borderInlineWidth", inline),
  borderBlockWidth: borderWidth("borderBlockWidth", block),
  borderInlineStartWidth: borderWidth("borderInlineStartWidth", inlineStart),
  borderInlineEndWidth: borderWidth("borderInlineEndWidth", inlineEnd),
  borderBlockStartWidth: borderWidth("borderBlockStartWidth", top),
  borderBlockEndWidth: borderWidth("borderBlockEndWidth", bottom),
  borderTopWidth: borderWidth("borderTopWidth", top),
  borderRightWidth: borderWidth("borderRightWidth", right),
  borderBottomWidth: borderWidth("borderBottomWidth", bottom),
  borderLeftWidth: borderWidth("borderLeftWidth", left),

  border: border("border", slots),
  borderInline: border("borderInline", inline),
  borderBlock: border("borderBlock", block),
  borderInlineStart: border("borderInlineStart", inlineStart),
  borderInlineEnd: border("borderInlineEnd", inlineEnd),
  borderBlockStart: border("borderBlockStart", top),
  borderBlockEnd: border("borderBlockEnd", bottom),
  borderTop: border("borderTop", top),
  borderRight: border("borderRight", right),
  borderBottom: border("borderBottom", bottom),
  borderLeft: border("borderLeft", left),

  margin: margin("margin", slots),
  marginInline: margin("marginInline", inline),
  marginBlock: margin("marginBlock", block),
  marginInlineStart: margin("marginInlineStart", inlineStart),
  marginInlineEnd: margin("marginInlineEnd", inlineEnd),
  marginBlockStart: margin("marginBlockStart", top),
  marginBlockEnd: margin("marginBlockEnd", bottom),
  marginTop: margin("marginTop", top),
  marginRight: margin("marginRight", right),
  marginBottom: margin("marginBottom", bottom),
  marginLeft: margin("marginLeft", left),

  inset: inset("inset", slots),
  insetInline: inset("insetInline", inline),
  insetBlock: inset("insetBlock", block),
  insetInlineStart: inset("insetInlineStart", inlineStart),
  insetInlineEnd: inset("insetInlineEnd", inlineEnd),
  insetBlockStart: inset("insetBlockStart", top),
  insetBlockEnd: inset("insetBlockEnd", bottom),
  top: inset("top", top),
  right: inset("right", right),
  bottom: inset("bottom", bottom),
  left: inset("left", left),

  position: {
    transform: (value) => ({
      position: value,
      "--cc-pos": value === "absolute" || value === "fixed" ? "0px" : "initial",
    }),
  },

  concentricGap: {
    className: "cc-gap",
    group: "Border Radius",
    values: "spacing",
    transform: (value) => ({ "--cc-gap": toLength(value) }),
  },
  concentricFloor: {
    className: "cc-floor",
    group: "Border Radius",
    values: "radii",
    transform: (value) => ({ "--concentric-floor": toLength(value) }),
  },
  concentricElliptical: {
    className: "cc-elliptical",
    group: "Border Radius",
    values: { type: "boolean" },
    transform: (value) => (value ? { "--cc-min": "0" } : {}),
  },
  concentricSquircle: {
    className: "cc-squircle",
    group: "Border Radius",
    values: { type: "boolean" },
    transform: (value) =>
      value ? { "@supports (corner-shape: squircle)": { cornerShape: "squircle", "--cc-k": "1.8409" } } : {},
  },
}
