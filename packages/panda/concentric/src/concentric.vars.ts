import type { CssPropertyDefinition, GlobalVarsDefinition } from "@pandacss/types"

export const corners = ["tl", "tr", "br", "bl"] as const
export const axes = ["x", "y"] as const
export const sides = ["t", "r", "b", "l"] as const
export const logicalCorners = ["ss", "se", "ee", "es"] as const

export type Corner = (typeof corners)[number]
export type Axis = (typeof axes)[number]
export type Side = (typeof sides)[number]
export type LogicalCorner = (typeof logicalCorners)[number]
export type Slot = Side | "rr" | "rl"
export type SlotBase = "p" | "bw" | "m" | "i" | "w"

export const slots: Slot[] = ["t", "r", "b", "l", "rr", "rl"]

export const cornerSides: Record<Corner, Record<Axis, Side>> = {
  tl: { x: "l", y: "t" },
  tr: { x: "r", y: "t" },
  br: { x: "r", y: "b" },
  bl: { x: "l", y: "b" },
}

export const marker = '[class*="bdr"]'

export const ref = (name: string, fallback?: string) => (fallback ? `var(${name}, ${fallback})` : `var(${name})`)

export const slotVar = (base: SlotBase, slot: Slot): `--cc-${string}` =>
  slot.length === 1 ? `--cc-${base}${slot}` : `--cc-r${base}${slot.slice(1)}`

export const ownWrapperVar = (slot: Slot): `--cc-${string}` => `${slotVar("w", slot)}-own`

const length = (inherits: boolean): CssPropertyDefinition => ({ syntax: "<length>", inherits, initialValue: "0px" })
const any: CssPropertyDefinition = { syntax: "*", inherits: false }
const number: CssPropertyDefinition = { syntax: "<number>", inherits: false, initialValue: "1" }

const register = (names: string[], definition: CssPropertyDefinition): GlobalVarsDefinition =>
  Object.fromEntries(names.map((name) => [name, definition]))

const perCorner = (prefix: string, suffix = "") =>
  corners.flatMap((corner) => axes.map((axis) => `--cc-${prefix}${corner}-${axis}${suffix}`))

const perSide = (prefix: string, suffix = "") => sides.map((side) => `--cc-${prefix}${side}${suffix}`)

export const concentricVars: GlobalVarsDefinition = {
  ...register(
    (["p", "bw", "m"] as const).flatMap((base) => slots.map((slot) => slotVar(base, slot))),
    length(false),
  ),
  ...register(
    slots.map((slot) => slotVar("i", slot)),
    any,
  ),
  ...register(slots.map(ownWrapperVar), any),
  ...register(
    slots.map((slot) => slotVar("w", slot)),
    length(true),
  ),
  ...register(["--cc-pub", "--cc-gap", "--cc-pos"], any),
  ...register(["--cc-min", "--cc-k"], number),
  ...register([...perCorner("out-"), ...perCorner("rout-"), ...perCorner("o-")], any),
  ...register(
    [
      ...perCorner("in-"),
      ...perCorner("self-"),
      ...perCorner("par-"),
      ...perCorner("nr-"),
      ...logicalCorners.flatMap((corner) => axes.map((axis) => `--cc-self-${corner}-${axis}`)),
    ],
    length(false),
  ),
  ...register([...perCorner("", "-0"), ...perCorner("", "-1")], length(true)),
  ...register(
    ["dp-", "db-", "dm-", "dx-", "par-g-", "par-e-", "ng-", "ne-"].flatMap((prefix) => perSide(prefix)),
    length(false),
  ),
  ...register(
    ["di-", "pg-", "pw-", "ig-"].flatMap((prefix) => perSide(prefix)),
    any,
  ),
  ...register(
    ["g-", "e-"].flatMap((prefix) => [...perSide(prefix, "-0"), ...perSide(prefix, "-1")]),
    length(true),
  ),
}
