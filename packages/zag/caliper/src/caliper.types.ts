import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, PropTypes, RequiredBy } from "@zag-js/types"

/** A span along one axis, in the subject's own px. Give any two of `start`, `end` and `size`; omit all to fill. */
export interface Span {
  start?: number | undefined
  end?: number | undefined
  size?: number | undefined
}

export type Axis = "x" | "y"

export type Placement = "top" | "bottom" | "left" | "right"

export type Magnify = number | "fit"

export type FrameAnimate = "in" | "out"

export interface MotionProps<Enter extends string, Exit extends string> {
  /** How the mark appears when its frame animates in. Without it the mark is static. */
  enter?: Enter | undefined
  /** How the mark leaves when its frame animates out. Without it the mark stays. */
  exit?: Exit | undefined
  /** Entry position: the mark starts `order × stagger` after the frame. */
  order?: number | undefined
  /** Exit position, defaulting to `order`. */
  exitOrder?: number | undefined
  /** Extra seconds before the mark starts, added to its order. */
  delay?: number | undefined
  /** Seconds the animation runs. Each variant has its own default. */
  duration?: number | undefined
}

export type DimensionEnter = "draw" | "fade"

export type DimensionExit = "retract" | "fade"

export interface FrameProps {
  /** Magnification of the subject. Overlay positions are multiplied by it. `fit` steps up with the viewport. */
  magnify?: Magnify | undefined
  /** Reserves room above and below for dimension labels. */
  annotated?: boolean | undefined
  /** Plays the marks' `enter` or `exit` animations. */
  animate?: FrameAnimate | false | undefined
  /** Holds the animations at this many seconds instead of playing them, for frame-by-frame renderers. */
  time?: number | undefined
  /** Seconds between one `order` step and the next. Defaults to 0.1. */
  stagger?: number | undefined
}

export interface FrameState {
  magnify: Magnify
}

export interface OverlayChangeDetails {
  overlay: boolean
}

export interface CaliperProps extends CommonProperties {
  /** Whether the marks are shown. Hidden marks stay in the DOM, so a style can fade them. */
  overlay?: boolean | undefined
  /**
   * Whether the marks start shown when `overlay` isn't set.
   * @default true
   */
  defaultOverlay?: boolean | undefined
  /** Called when an `OverlayTrigger` shows or hides the marks. */
  onOverlayChange?: ((details: OverlayChangeDetails) => void) | undefined
}

export interface CaliperSchema {
  state: "idle"
  props: RequiredBy<CaliperProps, "defaultOverlay">
  context: {
    overlay: boolean
    toggled: boolean
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type CaliperService = Service<CaliperSchema>
export type CaliperMachine = Machine<CaliperSchema>

export interface RootState {
  overlay: boolean
}

export interface BoxProps {
  spanX?: Span | undefined
  spanY?: Span | undefined
}

export interface DimensionProps extends MotionProps<DimensionEnter, DimensionExit> {
  /** The measured span: along x for top and bottom, along y for left and right. Omit it to span the whole frame. */
  span?: Span | undefined
  placement?: Placement | undefined
  /** How far the extension lines reach into the subject, in subject px. */
  reach?: number | undefined
  /** The lines from the subject to the dimension line. */
  extension?: "dashed" | "solid" | "none" | undefined
  /** The dimension line itself. */
  line?: "solid" | "dashed" | undefined
  /** Short caps across both ends of the dimension line. */
  ticks?: boolean | undefined
  /** Distance between the frame's edge and the dimension line. */
  distance?: "sm" | "md" | "lg" | undefined
}

export interface DimensionState {
  placement: Placement
  axis: Axis
}

export type SwatchKind = "solid" | "dashed" | "hatch"

export interface LegendSwatchProps {
  kind?: SwatchKind | undefined
}

export interface LegendSwatchState {
  kind: SwatchKind
}

export interface Point {
  x: number
  y: number
}

export type CalloutAlign = "start" | "center" | "end"

export type CalloutEnter = "draw" | "fade"

export type CalloutExit = "retract" | "fade"

export interface CalloutProps extends MotionProps<CalloutEnter, CalloutExit> {
  /** The points the callout marks, in subject px. Their leader lines join on the way to the label. */
  anchors: Point[]
  /**
   * Where the leader line ends and the label starts, in subject px. Usually outside the subject. When it shares every
   * anchor's y, the line runs straight across and the label sits beside its end.
   */
  to: Point
  /** The y, in subject px, where leader lines turn toward `to.x`. Defaults to halfway between the anchors and `to`. */
  bend?: number | undefined
  /** How the label lines up with `to.x`, for a label above or below the line. */
  align?: CalloutAlign | undefined
}

export interface CalloutState {
  side: "top" | "bottom" | "left" | "right"
  align: CalloutAlign
}

export interface CalloutAnchorProps {
  point: Point
}

export interface IconGridProps extends BoxProps {
  /** Grid size in units, such as 24 for a 24 × 24 icon set. The grid stretches to fill its box. */
  units?: number | undefined
  /** Width of the trim area around the safe area, in units. */
  trim?: number | undefined
}

export type IconGridLayer = "minor" | "major" | "keylines"

export interface IconGridLayerProps extends IconGridProps {
  layer: IconGridLayer
}

export interface CaliperApi<T extends PropTypes = PropTypes> {
  /** Whether the marks are shown. */
  overlay: boolean
  /**
   * Whether the overlay has changed since the caliper mounted. Once it has, frames animate in and out with it, and
   * dimensions and callouts without `enter` or `exit` draw and retract.
   */
  toggled: boolean
  /** Shows or hides the marks. */
  setOverlay(overlay: boolean): void
  getRootProps(): T["element"]
  getRootState(): RootState
  getCanvasProps(): T["element"]
  getCaptionProps(): T["element"]
  getFrameProps(props?: FrameProps): T["element"]
  getFrameState(props?: FrameProps): FrameState
  getSubjectProps(): T["element"]
  getOutlineProps(props?: BoxProps): T["element"]
  getHatchProps(props?: BoxProps): T["element"]
  getDimensionProps(props?: DimensionProps): T["element"]
  getDimensionState(props?: DimensionProps): DimensionState
  getDimensionLabelProps(): T["element"]
  getLegendProps(): T["element"]
  getLegendItemProps(): T["element"]
  getLegendSwatchProps(props?: LegendSwatchProps): T["element"]
  getLegendSwatchState(props?: LegendSwatchProps): LegendSwatchState
  getCalloutProps(props: CalloutProps): T["element"]
  getCalloutState(props: CalloutProps): CalloutState
  getCalloutLeaderProps(): T["svg"]
  getCalloutPathProps(props: CalloutProps): T["path"]
  getCalloutAnchorProps(props: CalloutAnchorProps): T["circle"]
  getCalloutLabelProps(): T["element"]
  getCalloutTitleProps(): T["element"]
  getCalloutDescriptionProps(): T["element"]
  getIconGridProps(props?: IconGridProps): T["element"]
  getIconGridCanvasProps(props?: IconGridProps): T["svg"]
  getIconGridLayerProps(props: IconGridLayerProps): T["path"]
  getOverlayTriggerProps(): T["button"]
}
