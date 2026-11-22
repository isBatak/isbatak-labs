import { ark, type HTMLProps, type PolymorphicProps } from "@ark-ui/react/factory"
import * as caliper from "@isbatak/zag-caliper"
import { mergeProps, normalizeProps } from "@zag-js/react"
import { createContext, type RefAttributes, useContext, useState } from "react"

const api = caliper.connect(normalizeProps)

type Assign<T, U> = Omit<T, keyof U> & U

type PartProps<E extends keyof HTMLElementTagNameMap, Own = object, State = object> = Assign<
  HTMLProps<E>,
  Own & PolymorphicProps<State>
> &
  RefAttributes<HTMLElementTagNameMap[E]>

interface OverlayContextValue {
  overlay: boolean
  setOverlay: (overlay: boolean) => void
  toggled: boolean
}

const OverlayContext = createContext<OverlayContextValue | null>(null)

export interface CaliperRootOwnProps extends caliper.RootProps {
  /** Whether the marks start shown when `overlay` isn't set. Defaults to `true`. */
  defaultOverlay?: boolean | undefined
  /** Called when an `OverlayTrigger` shows or hides the marks. */
  onOverlayChange?: ((overlay: boolean) => void) | undefined
}

export type CaliperRootProps = PartProps<"figure", CaliperRootOwnProps, caliper.RootState>

/**
 * The figure: a canvas and an optional caption. Holds whether the marks are shown, for an `OverlayTrigger`. Once the
 * overlay has changed, its frames animate in and out with it, and dimensions without `enter` or `exit` draw and retract.
 */
export function CaliperRoot(props: CaliperRootProps) {
  const [rootProps, { defaultOverlay = true, onOverlayChange, ...localProps }] = caliper.splitRootProps(props)
  const [uncontrolled, setUncontrolled] = useState(defaultOverlay)
  const overlay = rootProps.overlay ?? uncontrolled
  const [initialOverlay] = useState(overlay)
  const [toggled, setToggled] = useState(false)
  if (!toggled && overlay !== initialOverlay) setToggled(true)
  const setOverlay = (next: boolean) => {
    if (rootProps.overlay === undefined) setUncontrolled(next)
    onOverlayChange?.(next)
  }
  return (
    <OverlayContext.Provider value={{ overlay, setOverlay, toggled }}>
      <ark.figure {...mergeProps(api.getRootProps({ overlay }), localProps)} state={api.getRootState({ overlay })} />
    </OverlayContext.Provider>
  )
}

export type CaliperOverlayTriggerProps = PartProps<"button">

/**
 * A toggle button that shows and hides every mark in its `Root`. Unstyled: put your own button inside with `asChild`.
 */
export function CaliperOverlayTrigger(props: CaliperOverlayTriggerProps) {
  const context = useContext(OverlayContext)
  if (!context) throw new Error("Caliper.OverlayTrigger must be inside Caliper.Root")
  return (
    <ark.button
      {...mergeProps(
        api.getOverlayTriggerProps({ overlay: context.overlay, onOverlayChange: context.setOverlay }),
        props,
      )}
    />
  )
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
  const overlay = useContext(OverlayContext)
  const [ownProps, localProps] = caliper.splitFrameProps(props)
  const animate = ownProps.animate ?? (overlay?.toggled ? (overlay.overlay ? "in" : "out") : undefined)
  const frameProps = { ...ownProps, animate }
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
  const overlay = useContext(OverlayContext)
  const [ownProps, localProps] = caliper.splitDimensionProps(props)
  const dimensionProps = overlay?.toggled
    ? { ...ownProps, enter: ownProps.enter ?? "draw", exit: ownProps.exit ?? "retract" }
    : ownProps
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

export type CaliperIconGridProps = PartProps<"div", caliper.IconGridProps>

/**
 * An icon keyline grid over a region, such as an icon's box: the hatched trim area, a line per unit, and the circle, square
 * and rectangle keylines. Set `units` to the icon set's grid size.
 */
export function CaliperIconGrid(props: CaliperIconGridProps) {
  const [gridProps, { children, ...localProps }] = caliper.splitIconGridProps(props)
  return (
    <ark.div {...mergeProps(api.getIconGridProps(gridProps), localProps)}>
      <svg {...api.getIconGridCanvasProps(gridProps)}>
        <path {...api.getIconGridLayerProps({ ...gridProps, layer: "minor" })} />
        <path {...api.getIconGridLayerProps({ ...gridProps, layer: "keylines" })} />
        <path {...api.getIconGridLayerProps({ ...gridProps, layer: "major" })} />
      </svg>
      {children}
    </ark.div>
  )
}
