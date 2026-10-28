import type { GlobalStyleObject } from "@pandacss/types"

import {
  axes,
  cornerSides,
  corners,
  logicalCorners,
  marker,
  ownWrapperVar,
  ref,
  sides,
  slots,
  slotVar,
  type Corner,
  type LogicalCorner,
  type Side,
} from "./concentric.vars"

type Declarations = Record<`--${string}`, string>

const ladderDepth = 9

const logicalToPhysical: Record<"ltr" | "rtl", Record<LogicalCorner, Corner>> = {
  ltr: { ss: "tl", se: "tr", ee: "br", es: "bl" },
  rtl: { ss: "tr", se: "tl", ee: "bl", es: "br" },
}

const merge = (entries: Declarations[]): Declarations => Object.assign({}, ...entries)

const sideDeclarations = (side: Side, dir: "ltr" | "rtl"): Declarations => {
  const slot = dir === "rtl" && (side === "l" || side === "r") ? (`r${side}` as const) : side
  return {
    [`--cc-dp-${side}`]: `calc(${ref(slotVar("p", slot))} + ${ref(slotVar("bw", slot))})`,
    [`--cc-db-${side}`]: ref(slotVar("bw", slot)),
    [`--cc-dm-${side}`]: ref(slotVar("m", slot)),
    [`--cc-dx-${side}`]: `calc(${ref(slotVar("m", slot))} + ${ref(slotVar("w", slot))})`,
    [`--cc-di-${side}`]: ref(slotVar("i", slot)),
  }
}

const directionDeclarations = (dir: "ltr" | "rtl"): Declarations =>
  merge([
    sideDeclarations("l", dir),
    sideDeclarations("r", dir),
    ...corners.flatMap((corner) =>
      axes.map((axis) => ({
        [`--cc-o-${corner}-${axis}`]: ref(`--cc-${dir === "rtl" ? "rout" : "out"}-${corner}-${axis}`),
      })),
    ),
    ...logicalCorners.flatMap((corner) =>
      axes.map((axis) => ({
        [`--cc-self-${corner}-${axis}`]: ref(`--cc-self-${logicalToPhysical[dir][corner]}-${axis}`),
      })),
    ),
  ])

const roundedDeclarations = merge([
  ...corners.flatMap((corner) =>
    axes.map((axis) => {
      const own = ref(`--cc-in-${corner}-${axis}`)
      const other = ref(`--cc-in-${corner}-${axis === "x" ? "y" : "x"}`)
      return {
        [`--cc-self-${corner}-${axis}`]: `max(var(--concentric-floor, 0px), calc(${own} + var(--cc-min) * max(0px, ${other} - ${own})))`,
      }
    }),
  ),
  ...slots.map((slot) => ({ [slotVar("w", slot)]: "inherit" })),
  sideDeclarations("t", "ltr"),
  sideDeclarations("b", "ltr"),
  directionDeclarations("ltr"),
  ...sides.map((side) => ({
    [`--cc-pg-${side}`]: `calc(var(--cc-pub) + var(--cc-dp-${side}))`,
    [`--cc-pw-${side}`]: `calc(var(--cc-pub) + var(--cc-db-${side}))`,
    [`--cc-ig-${side}`]: `calc(var(--cc-pos) + var(--cc-par-e-${side}) + var(--cc-di-${side}) + var(--cc-dm-${side}))`,
  })),
  ...corners.flatMap((corner) =>
    axes.map((axis) => {
      const side = cornerSides[corner][axis]
      const measured = `calc(var(--cc-par-g-${side}) + var(--cc-dx-${side}))`
      return {
        [`--cc-in-${corner}-${axis}`]: `calc(var(--cc-par-${corner}-${axis}) - var(--cc-k) * var(--cc-gap, var(--cc-ig-${side}, ${measured})))`,
        [`--cc-nr-${corner}-${axis}`]: `var(--cc-o-${corner}-${axis}, var(--cc-pub, var(--cc-par-${corner}-${axis})))`,
      }
    }),
  ),
  ...sides.map((side) => ({
    [`--cc-ng-${side}`]: `var(--cc-pg-${side}, calc(var(--cc-par-g-${side}) + var(--cc-dx-${side}) + var(--cc-dp-${side})))`,
    [`--cc-ne-${side}`]: `var(--cc-pw-${side}, calc(var(--cc-par-g-${side}) + var(--cc-dx-${side}) + var(--cc-db-${side})))`,
  })),
])

const ladderSlots = [
  ...corners.flatMap((corner) =>
    axes.map((axis) => ({
      slot: `--cc-${corner}-${axis}`,
      parent: `--cc-par-${corner}-${axis}`,
      own: `--cc-nr-${corner}-${axis}`,
    })),
  ),
  ...sides.flatMap((side) => [
    { slot: `--cc-g-${side}`, parent: `--cc-par-g-${side}`, own: `--cc-ng-${side}` },
    { slot: `--cc-e-${side}`, parent: `--cc-par-e-${side}`, own: `--cc-ne-${side}` },
  ]),
]

const ladderRung = (depth: number): Declarations => {
  const read = depth % 2 === 0 ? 1 : 0
  const write = 1 - read
  return merge([
    ...(depth > 1
      ? ladderSlots.map(({ slot, parent }) => ({ [`${slot}-${read}`]: "inherit", [parent]: ref(`${slot}-${read}`) }))
      : []),
    ...(depth < ladderDepth ? ladderSlots.map(({ slot, own }) => ({ [`${slot}-${write}`]: ref(own) })) : []),
  ])
}

const ladder = Object.fromEntries(
  Array.from({ length: ladderDepth - 1 }, (_, index) => [
    `:where(${Array.from({ length: index + 2 }, () => marker).join(" ")})`,
    ladderRung(index + 2),
  ]),
)

const rtl = directionDeclarations("rtl")
const ltr = directionDeclarations("ltr")

export const concentricGlobalCss: GlobalStyleObject = {
  [`:where(${marker} *)`]: merge(slots.map((slot) => ({ [slotVar("w", slot)]: ref(ownWrapperVar(slot)) }))),
  [`:where(${marker} > *)`]: merge(slots.map((slot) => ({ [slotVar("w", slot)]: ref(ownWrapperVar(slot), "0px") }))),
  [`:where(${marker})`]: merge([roundedDeclarations, ladderRung(1)]),
  [`:where(${marker} > ${marker})`]: merge(slots.map((slot) => ({ [slotVar("w", slot)]: "0px" }))),
  [`:where(${marker}):where([dir="rtl"], [dir="rtl"] *)`]: rtl,
  [`:where(${marker}):where([dir="rtl"] [dir="ltr"], [dir="rtl"] [dir="ltr"] *)`]: ltr,
  [`:where(${marker}):where([dir="rtl"] [dir="ltr"] [dir="rtl"], [dir="rtl"] [dir="ltr"] [dir="rtl"] *)`]: rtl,
  "@scope ([dir]:dir(rtl)) to ([dir]:dir(ltr))": {
    [`:where(${marker}):where(:scope, :scope *)`]: rtl,
  },
  '@scope ([dir="rtl"] [dir]:dir(ltr)) to ([dir]:dir(rtl))': {
    [`:where(${marker}):where(:scope, :scope *)`]: ltr,
  },
  ...ladder,
}
