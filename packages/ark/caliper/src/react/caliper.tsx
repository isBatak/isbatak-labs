import { createParts, definePrimitive } from "@isbatak/ark-kit/react"
import * as caliper from "@isbatak/zag-caliper"
import type { ComponentProps } from "react"

export interface CaliperRootOwnProps extends Omit<caliper.Props, "id"> {
  id?: string | undefined
}

const primitive = definePrimitive({
  anatomy: caliper.anatomy,
  machine: caliper.machine,
  connect: caliper.connect,
  props: caliper.props,
  standalone: true,
})

const parts = createParts(primitive, {
  root: "figure",
  overlayTrigger: "button",
  canvas: "div",
  caption: "figcaption",
  frame: { tag: "div", props: caliper.frameProps },
  subject: "div",
  outline: { tag: "div", props: caliper.boxProps },
  hatch: { tag: "div", props: caliper.boxProps },
  dimension: { tag: "div", props: caliper.dimensionProps },
  dimensionLabel: "span",
  legend: "div",
  legendItem: "span",
  legendSwatch: { tag: "span", props: caliper.legendSwatchProps },
  callout: {
    tag: "div",
    props: caliper.calloutProps,
    children: (api, props) => (
      <svg {...api.getCalloutLeaderProps()}>
        <path {...api.getCalloutPathProps(props)} />
        {props.anchors.map((point) => (
          <circle key={`${point.x},${point.y}`} {...api.getCalloutAnchorProps({ point })} />
        ))}
      </svg>
    ),
  },
  calloutLabel: "div",
  calloutTitle: "span",
  calloutDescription: "span",
  iconGrid: {
    tag: "div",
    props: caliper.iconGridProps,
    children: (api, props) => (
      <svg {...api.getIconGridCanvasProps(props)}>
        <path {...api.getIconGridLayerProps({ ...props, layer: "minor" })} />
        <path {...api.getIconGridLayerProps({ ...props, layer: "keylines" })} />
        <path {...api.getIconGridLayerProps({ ...props, layer: "major" })} />
      </svg>
    ),
  },
})

/**
 * The figure: a canvas and an optional caption. Holds whether the marks are shown, for an `OverlayTrigger`. Once the
 * overlay has changed, its frames animate in and out with it, and dimensions and callouts without `enter` or `exit`
 * draw and retract.
 */
export const CaliperRoot = parts.Root
export type CaliperRootProps = ComponentProps<typeof CaliperRoot>

/**
 * A toggle button that shows and hides every mark in its `Root`. Unstyled: put your own button inside with `asChild`.
 */
export const CaliperOverlayTrigger = parts.OverlayTrigger
export type CaliperOverlayTriggerProps = ComponentProps<typeof CaliperOverlayTrigger>

/** The framed drawing area. Stacks frames, legends and controls in a centered column. */
export const CaliperCanvas = parts.Canvas
export type CaliperCanvasProps = ComponentProps<typeof CaliperCanvas>

export const CaliperCaption = parts.Caption
export type CaliperCaptionProps = ComponentProps<typeof CaliperCaption>

/**
 * The coordinate space for marks. Put the subject and its marks inside; mark positions are in the subject's own px,
 * so labels can quote real values while the drawing is magnified.
 */
export const CaliperFrame = parts.Frame
export type CaliperFrameProps = ComponentProps<typeof CaliperFrame>

/** The live UI being measured, magnified by the frame's `magnify`. */
export const CaliperSubject = parts.Subject
export type CaliperSubjectProps = ComponentProps<typeof CaliperSubject>

/** A dashed box around a region, such as an icon's bounding box. */
export const CaliperOutline = parts.Outline
export type CaliperOutlineProps = ComponentProps<typeof CaliperOutline>

/** Diagonal hatching over a region, for padding, gaps and empty space. */
export const CaliperHatch = parts.Hatch
export type CaliperHatchProps = ComponentProps<typeof CaliperHatch>

/** A dimension line with extension lines and end ticks. Put a `DimensionLabel` inside for the value. */
export const CaliperDimension = parts.Dimension
export type CaliperDimensionProps = ComponentProps<typeof CaliperDimension>

/** The value pill, centered on its dimension line. */
export const CaliperDimensionLabel = parts.DimensionLabel
export type CaliperDimensionLabelProps = ComponentProps<typeof CaliperDimensionLabel>

export const CaliperLegend = parts.Legend
export type CaliperLegendProps = ComponentProps<typeof CaliperLegend>

export const CaliperLegendItem = parts.LegendItem
export type CaliperLegendItemProps = ComponentProps<typeof CaliperLegendItem>

/** A small sample of a mark, for a legend item. */
export const CaliperLegendSwatch = parts.LegendSwatch
export type CaliperLegendSwatchProps = ComponentProps<typeof CaliperLegendSwatch>

/**
 * Marks points on the subject with dots and runs a leader line from them to a label. Put a `CalloutLabel` inside.
 * Several anchors share one line to the label.
 */
export const CaliperCallout = parts.Callout
export type CaliperCalloutProps = ComponentProps<typeof CaliperCallout>

/** The note at the end of a callout's leader line. */
export const CaliperCalloutLabel = parts.CalloutLabel
export type CaliperCalloutLabelProps = ComponentProps<typeof CaliperCalloutLabel>

/** A short heading above the label's text. */
export const CaliperCalloutTitle = parts.CalloutTitle
export type CaliperCalloutTitleProps = ComponentProps<typeof CaliperCalloutTitle>

/** The label's text under its title. */
export const CaliperCalloutDescription = parts.CalloutDescription
export type CaliperCalloutDescriptionProps = ComponentProps<typeof CaliperCalloutDescription>

/**
 * An icon keyline grid over a region, such as an icon's box: the hatched trim area, a line per unit, and the circle, square
 * and rectangle keylines. Set `units` to the icon set's grid size.
 */
export const CaliperIconGrid = parts.IconGrid
export type CaliperIconGridProps = ComponentProps<typeof CaliperIconGrid>
