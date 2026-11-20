import type { PropTypes } from "@zag-js/types"

/** A span along one axis, in the subject's own px. Give any two of `start`, `end` and `size`; omit all to fill. */
export interface Span {
  start?: number | undefined
  end?: number | undefined
  size?: number | undefined
}

export type Axis = "x" | "y"

export type Placement = "top" | "bottom" | "left" | "right"

export type Magnify = number | "fit"

export interface FrameProps {
  /** Magnification of the subject. Overlay positions are multiplied by it. `fit` steps up with the viewport. */
  magnify?: Magnify | undefined
  /** Reserves room above and below for dimension labels. */
  annotated?: boolean | undefined
}

export interface FrameState {
  magnify: Magnify
}

export interface BoxProps {
  spanX?: Span | undefined
  spanY?: Span | undefined
}

export interface DimensionProps {
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

export interface CalloutProps {
  /** The points the callout marks, in subject px. Their leader lines join on the way to the label. */
  anchors: Point[]
  /** Where the leader line ends and the label starts, in subject px. Usually outside the subject. */
  to: Point
  /** The y, in subject px, where leader lines turn toward `to.x`. Defaults to halfway between the anchors and `to`. */
  bend?: number | undefined
  /** How the label lines up with `to.x`. */
  align?: CalloutAlign | undefined
}

export interface CalloutState {
  side: "top" | "bottom"
  align: CalloutAlign
}

export interface CalloutAnchorProps {
  point: Point
}

export interface CaliperApi<T extends PropTypes = PropTypes> {
  getRootProps(): T["element"]
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
}
