import type { SlotRecipeDefinition } from "@isbatak/panda-ds/types"
import { anatomy, parts } from "@isbatak/zag-caliper/anatomy"
import { defineSlotRecipe } from "@pandacss/dev"
import type { SlotRecipeConfig, SystemStyleObject } from "@pandacss/types"

import {
  calloutLabelMotion,
  calloutDescriptionMotion,
  calloutMotion,
  dimensionLabelMotion,
  dimensionMotion,
} from "./caliper.motion"

export const caliperSlots = anatomy.omit("calloutLeader", "calloutAnchor", "iconGridLayer").keys()

type CaliperStyles = SlotRecipeDefinition<(typeof caliperSlots)[number]>

const inside = <T extends SystemStyleObject>(attr: string, styles: T, nested = "") =>
  ({ [`& [${attr}]${nested}`]: styles }) as Record<`&${string}`, T>

const motion = {
  transitionProperty: "left, right, top, bottom, width, height, margin, opacity, visibility",
  transitionDuration: "moderate",
  transitionTimingFunction: "default",
} satisfies SystemStyleObject

const hatchImage = (gap: string) =>
  `repeating-linear-gradient(-45deg, var(--colors-color-palette-solid) 0 1px, transparent 1px ${gap})`

const stroke = "var(--caliper-stroke, 1px)"
const halfStroke = "calc(var(--caliper-stroke, 1px) / -2)"

const tick = {
  content: '""',
  position: "absolute",
  borderColor: "inherit",
  borderStyle: "solid",
  borderWidth: "0",
} satisfies SystemStyleObject

const tickAcross = (edge: "top" | "bottom") =>
  ({
    ...tick,
    [edge]: halfStroke,
    h: "1.5",
    translate: edge === "top" ? "0 -50%" : "0 50%",
  }) satisfies SystemStyleObject

const tickAlong = (edge: "left" | "right") =>
  ({
    ...tick,
    [edge]: halfStroke,
    w: "1.5",
    translate: edge === "left" ? "-50% 0" : "50% 0",
  }) satisfies SystemStyleObject

const horizontalTicks = (edge: "top" | "bottom") => ({
  "&[data-ticks]::before": {
    ...tickAcross(edge),
    insetInlineStart: "calc(-1 * var(--caliper-extension-width))",
    borderInlineStartWidth: stroke,
  },
  "&[data-ticks]::after": {
    ...tickAcross(edge),
    insetInlineEnd: "calc(-1 * var(--caliper-extension-width))",
    borderInlineEndWidth: stroke,
  },
})

const verticalTicks = (edge: "left" | "right") => ({
  "&[data-ticks]::before": {
    ...tickAlong(edge),
    top: "calc(-1 * var(--caliper-extension-width))",
    borderTopWidth: stroke,
  },
  "&[data-ticks]::after": {
    ...tickAlong(edge),
    bottom: "calc(-1 * var(--caliper-extension-width))",
    borderBottomWidth: stroke,
  },
})

export const caliperRecipe: SlotRecipeConfig = defineSlotRecipe({
  className: "caliper",
  description:
    "Spec drawings over live UI: dimension lines, hatching, outlines, icon grids and legends. Bind the @isbatak/ark-caliper parts to it with createSlotRecipeContext.",
  jsx: ["Caliper", /Caliper\.\w+/],
  slots: caliperSlots,
  base: {
    root: {
      colorPalette: "gray",
      display: "flex",
      flexDirection: "column",
      gap: "3",
      "& :is([data-caliper-dimension], [data-caliper-callout], [data-caliper-icon-grid], [data-caliper-legend])": {
        transitionProperty: "opacity, visibility",
        transitionDuration: "moderate",
        transitionTimingFunction: "default",
      },
      "&[data-overlay=hidden] :is([data-caliper-outline], [data-caliper-hatch], [data-caliper-dimension], [data-caliper-callout], [data-caliper-icon-grid], [data-caliper-legend]):not([data-animate=out] [data-exit])":
        {
          opacity: "0",
          visibility: "hidden",
        },
    },
    canvas: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8",
      px: { base: "4", md: "8" },
      py: { base: "14", md: "20" },
      borderWidth: "1px",
      borderColor: "border.muted",
      bg: "bg.sunken",
      rounded: "l3",
      overflowX: "auto",
    },
    overlayTrigger: {
      position: "absolute",
      top: "3",
      insetEnd: "3",
    },
    caption: {
      px: "1",
      textStyle: "sm",
      color: "fg.muted",
      textWrap: "pretty",
    },
    frame: {
      "--caliper-scale": "1",
      "--caliper-px": "calc(var(--caliper-scale) * 1px)",
      "--caliper-stagger": "0.1s",
      position: "relative",
      display: "inline-flex",
      flexShrink: "0",
      "&[data-magnify=fit]": {
        "--caliper-scale": { base: "1.5", sm: "2", md: "3" },
      },
      "&[data-annotated]": {
        my: "14",
      },
    },
    subject: {
      display: "inline-flex",
      zoom: "var(--caliper-scale)",
    },
    outline: {
      position: "absolute",
      pointerEvents: "none",
      borderWidth: stroke,
      borderStyle: "dashed",
      borderColor: "colorPalette.solid/60",
      ...motion,
    },
    hatch: {
      position: "absolute",
      pointerEvents: "none",
      bg: "colorPalette.solid/10",
      bgImage: hatchImage("0.3125rem"),
      opacity: "0.8",
      ...motion,
    },
    dimension: {
      "--caliper-extension-width": stroke,
      "--caliper-extension-style": "dashed",
      "--caliper-line-style": "solid",
      "--caliper-gap": "spacing.6",
      position: "absolute",
      pointerEvents: "none",
      borderColor: "colorPalette.solid",
      borderWidth: "0",
      ...motion,
      "&[data-extension=solid]": { "--caliper-extension-style": "solid" },
      "&[data-extension=none]": { "--caliper-extension-width": "0px" },
      "&[data-line=dashed]": { "--caliper-line-style": "dashed" },
      "&[data-distance=sm]": { "--caliper-gap": "spacing.3" },
      "&[data-distance=lg]": { "--caliper-gap": "spacing.10" },
      "&[data-placement=top]": {
        bottom: "calc(100% - var(--caliper-reach))",
        height: "calc(var(--caliper-reach) + var(--caliper-gap))",
        borderInlineWidth: "var(--caliper-extension-width)",
        borderInlineStyle: "var(--caliper-extension-style)",
        borderTopWidth: stroke,
        borderTopStyle: "var(--caliper-line-style)",
        ...horizontalTicks("top"),
      },
      "&[data-placement=bottom]": {
        top: "calc(100% - var(--caliper-reach))",
        height: "calc(var(--caliper-reach) + var(--caliper-gap))",
        borderInlineWidth: "var(--caliper-extension-width)",
        borderInlineStyle: "var(--caliper-extension-style)",
        borderBottomWidth: stroke,
        borderBottomStyle: "var(--caliper-line-style)",
        ...horizontalTicks("bottom"),
      },
      "&[data-placement=left]": {
        right: "calc(100% - var(--caliper-reach))",
        width: "calc(var(--caliper-reach) + var(--caliper-gap))",
        borderBlockWidth: "var(--caliper-extension-width)",
        borderBlockStyle: "var(--caliper-extension-style)",
        borderLeftWidth: stroke,
        borderLeftStyle: "var(--caliper-line-style)",
        ...verticalTicks("left"),
      },
      "&[data-placement=right]": {
        left: "calc(100% - var(--caliper-reach))",
        width: "calc(var(--caliper-reach) + var(--caliper-gap))",
        borderBlockWidth: "var(--caliper-extension-width)",
        borderBlockStyle: "var(--caliper-extension-style)",
        borderRightWidth: stroke,
        borderRightStyle: "var(--caliper-line-style)",
        ...verticalTicks("right"),
      },
      ...dimensionMotion,
    },
    dimensionLabel: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      h: "6",
      px: "2.5",
      rounded: "full",
      bg: "colorPalette.solid",
      color: "colorPalette.contrast",
      textStyle: "sm",
      fontWeight: "medium",
      whiteSpace: "nowrap",
      "[data-placement=top] > &": {
        top: "0",
        left: "50%",
        translate: "-50% -125%",
      },
      "[data-placement=bottom] > &": {
        bottom: "0",
        left: "50%",
        translate: "-50% 125%",
      },
      "[data-placement=left] > &": {
        left: "0",
        top: "50%",
        translate: "calc(-100% - 0.375rem) -50%",
      },
      "[data-placement=right] > &": {
        right: "0",
        top: "50%",
        translate: "calc(100% + 0.375rem) -50%",
      },
      ...dimensionLabelMotion,
    },
    legend: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      columnGap: "5",
      rowGap: "2",
      textStyle: "xs",
      color: "fg.muted",
    },
    legendItem: {
      display: "inline-flex",
      alignItems: "center",
      gap: "1.5",
    },
    legendSwatch: {
      display: "inline-block",
      flexShrink: "0",
      boxSize: "3",
      bg: "colorPalette.solid",
      "&[data-kind=dashed]": {
        bg: "transparent",
        borderWidth: stroke,
        borderStyle: "dashed",
        borderColor: "colorPalette.solid/60",
      },
      "&[data-kind=hatch]": {
        bg: "colorPalette.solid/10",
        bgImage: hatchImage("0.25rem"),
      },
    },
    callout: {
      position: "absolute",
      inset: "0",
      pointerEvents: "none",
      color: "colorPalette.solid",
      ...inside(parts.calloutLeader.attr, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "var(--caliper-px)",
        height: "var(--caliper-px)",
        overflow: "visible",
      }),
      ...inside(
        parts.calloutLeader.attr,
        {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: stroke,
          vectorEffect: "non-scaling-stroke",
        },
        " path",
      ),
      ...inside(parts.calloutAnchor.attr, {
        r: "calc(4px / var(--caliper-scale))",
        fill: "currentColor",
      }),
      ...calloutMotion,
    },
    calloutLabel: {
      position: "absolute",
      left: "var(--caliper-callout-x)",
      w: "max-content",
      maxW: "64",
      pointerEvents: "auto",
      textStyle: "sm",
      color: "fg.muted",
      textWrap: "pretty",
      "[data-side=bottom] > &": { top: "var(--caliper-callout-y)", pt: "4" },
      "[data-side=top] > &": {
        bottom: "calc(100% - var(--caliper-callout-y))",
        pb: "4",
      },
      "[data-side=left] > &": {
        top: "var(--caliper-callout-y)",
        translate: "-100% -50%",
        pe: "3",
        textAlign: "end",
      },
      "[data-side=right] > &": {
        top: "var(--caliper-callout-y)",
        translate: "0 -50%",
        ps: "3",
      },
      "[data-align=center] > &": { translate: "-50% 0", textAlign: "center" },
      "[data-align=end] > &": { translate: "-100% 0", textAlign: "end" },
      ...calloutLabelMotion,
    },
    calloutTitle: {
      colorPalette: "gray",
      display: "flex",
      alignItems: "center",
      w: "fit-content",
      minH: "5",
      px: "2",
      mb: "1.5",
      rounded: "full",
      bg: "colorPalette.subtle",
      color: "colorPalette.fg",
      shadow: "inset 0 0 0px 1px var(--shadow-color)",
      shadowColor: "colorPalette.muted",
      textStyle: "xs",
      fontFamily: "mono",
      fontWeight: "medium",
      whiteSpace: "nowrap",
      "[data-align=center] > * > &": { mx: "auto" },
      "[data-align=end] > * > &, [data-side=left] > * > &": { ms: "auto" },
    },
    calloutDescription: {
      display: "block",
      ...calloutDescriptionMotion,
    },
    iconGrid: {
      position: "absolute",
      pointerEvents: "none",
      color: "colorPalette.solid",
      ...motion,
      _before: {
        content: '""',
        position: "absolute",
        inset: "0",
        bg: "colorPalette.solid/10",
        bgImage: hatchImage("0.3125rem"),
        opacity: "0.8",
        clipPath:
          "polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, var(--caliper-trim) var(--caliper-trim), var(--caliper-trim) calc(100% - var(--caliper-trim)), calc(100% - var(--caliper-trim)) calc(100% - var(--caliper-trim)), calc(100% - var(--caliper-trim)) var(--caliper-trim), var(--caliper-trim) var(--caliper-trim))",
      },
      "& svg": {
        position: "absolute",
        inset: "0",
        w: "full",
        h: "full",
        overflow: "visible",
      },
      ...inside(parts.iconGridLayer.attr, {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        vectorEffect: "non-scaling-stroke",
        shapeRendering: "crispEdges",
      }),
      ...inside(parts.iconGridLayer.attr, { stroke: "colorPalette.solid/15" }, "[data-layer=minor]"),
      ...inside(
        parts.iconGridLayer.attr,
        {
          stroke: "colorPalette.solid/30",
          shapeRendering: "geometricPrecision",
        },
        "[data-layer=keylines]",
      ),
      ...inside(parts.iconGridLayer.attr, { stroke: "colorPalette.solid/40" }, "[data-layer=major]"),
    },
  } satisfies CaliperStyles["base"],
})
