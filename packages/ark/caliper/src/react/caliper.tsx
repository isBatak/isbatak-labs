import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as caliper from "@isbatak/zag-caliper"
import { mergeProps, normalizeProps } from "@zag-js/react"
import type { RefAttributes } from "react"

const api = caliper.connect(normalizeProps)

type Assign<T, U> = Omit<T, keyof U> & U

type PartProps<E extends keyof HTMLElementTagNameMap, Own = object, State = object> = Assign<
  HTMLProps<E>,
  Own & PolymorphicProps<State>
> &
  RefAttributes<HTMLElementTagNameMap[E]>

export type CaliperRootProps = PartProps<"figure">

/** The figure: a canvas and an optional caption. */
export function CaliperRoot(props: CaliperRootProps) {
  return <ark.figure {...mergeProps(api.getRootProps(), props)} />
}

export type CaliperCanvasProps = PartProps<"div">

/** The framed drawing area. Stacks frames, legends and controls in a centered column. */
export function CaliperCanvas(props: CaliperCanvasProps) {
  return <ark.div {...mergeProps(api.getCanvasProps(), props)} />
}

export type CaliperCaptionProps = PartProps<"figcaption">

export function CaliperCaption(props: CaliperCaptionProps) {
  return <ark.figcaption {...mergeProps(api.getCaptionProps(), props)} />
}

export type CaliperFrameProps = PartProps<"div", caliper.FrameProps, caliper.FrameState>

/**
 * The coordinate space for marks. Put the subject and its marks inside; mark positions are in the subject's own px,
 * so labels can quote real values while the drawing is magnified.
 */
export function CaliperFrame(props: CaliperFrameProps) {
  const [frameProps, localProps] = caliper.splitFrameProps(props)
  return <ark.div {...mergeProps(api.getFrameProps(frameProps), localProps)} state={api.getFrameState(frameProps)} />
}

export type CaliperSubjectProps = PartProps<"div">

/** The live UI being measured, magnified by the frame's `magnify`. */
export function CaliperSubject(props: CaliperSubjectProps) {
  return <ark.div {...mergeProps(api.getSubjectProps(), props)} />
}

export type CaliperOutlineProps = PartProps<"div", caliper.BoxProps>

/** A dashed box around a region, such as an icon's bounding box. */
export function CaliperOutline(props: CaliperOutlineProps) {
  const [boxProps, localProps] = caliper.splitBoxProps(props)
  return <ark.div {...mergeProps(api.getOutlineProps(boxProps), localProps)} />
}

export type CaliperHatchProps = PartProps<"div", caliper.BoxProps>

/** Diagonal hatching over a region, for padding, gaps and empty space. */
export function CaliperHatch(props: CaliperHatchProps) {
  const [boxProps, localProps] = caliper.splitBoxProps(props)
  return <ark.div {...mergeProps(api.getHatchProps(boxProps), localProps)} />
}

export type CaliperDimensionProps = PartProps<"div", caliper.DimensionProps, caliper.DimensionState>

/** A dimension line with extension lines and end ticks. Put a `DimensionLabel` inside for the value. */
export function CaliperDimension(props: CaliperDimensionProps) {
  const [dimensionProps, localProps] = caliper.splitDimensionProps(props)
  return (
    <ark.div
      {...mergeProps(api.getDimensionProps(dimensionProps), localProps)}
      state={api.getDimensionState(dimensionProps)}
    />
  )
}

export type CaliperDimensionLabelProps = PartProps<"span">

/** The value pill, centered on its dimension line. */
export function CaliperDimensionLabel(props: CaliperDimensionLabelProps) {
  return <ark.span {...mergeProps(api.getDimensionLabelProps(), props)} />
}

export type CaliperLegendProps = PartProps<"div">

export function CaliperLegend(props: CaliperLegendProps) {
  return <ark.div {...mergeProps(api.getLegendProps(), props)} />
}

export type CaliperLegendItemProps = PartProps<"span">

export function CaliperLegendItem(props: CaliperLegendItemProps) {
  return <ark.span {...mergeProps(api.getLegendItemProps(), props)} />
}

export type CaliperLegendSwatchProps = PartProps<"span", caliper.LegendSwatchProps, caliper.LegendSwatchState>

/** A small sample of a mark, for a legend item. */
export function CaliperLegendSwatch(props: CaliperLegendSwatchProps) {
  const [swatchProps, localProps] = caliper.splitLegendSwatchProps(props)
  return (
    <ark.span
      {...mergeProps(api.getLegendSwatchProps(swatchProps), localProps)}
      state={api.getLegendSwatchState(swatchProps)}
    />
  )
}

export type CaliperCalloutProps = PartProps<"div", caliper.CalloutProps, caliper.CalloutState>

/**
 * Marks points on the subject with dots and runs a leader line from them to a label. Put a `CalloutLabel` inside.
 * Several anchors share one line to the label.
 */
export function CaliperCallout(props: CaliperCalloutProps) {
  const [calloutProps, { children, ...localProps }] = caliper.splitCalloutProps(props)
  return (
    <ark.div {...mergeProps(api.getCalloutProps(calloutProps), localProps)} state={api.getCalloutState(calloutProps)}>
      <svg {...api.getCalloutLeaderProps()}>
        <path {...api.getCalloutPathProps(calloutProps)} />
        {calloutProps.anchors.map((point) => (
          <circle key={`${point.x},${point.y}`} {...api.getCalloutAnchorProps({ point })} />
        ))}
      </svg>
      {children}
    </ark.div>
  )
}

export type CaliperCalloutLabelProps = PartProps<"div">

/** The note at the end of a callout's leader line. */
export function CaliperCalloutLabel(props: CaliperCalloutLabelProps) {
  return <ark.div {...mergeProps(api.getCalloutLabelProps(), props)} />
}

export type CaliperCalloutTitleProps = PartProps<"span">

/** A short heading above the label's text. */
export function CaliperCalloutTitle(props: CaliperCalloutTitleProps) {
  return <ark.span {...mergeProps(api.getCalloutTitleProps(), props)} />
}
