import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./caliper.anatomy"
import type {
  BoxProps,
  CalloutProps,
  CalloutState,
  CaliperApi,
  DimensionProps,
  DimensionState,
  FrameProps,
  FrameState,
  IconGridProps,
  LegendSwatchProps,
  LegendSwatchState,
  RootProps,
  RootState,
} from "./caliper.types"
import { axisOf, calloutPath, frameMotion, iconGridPath, markMotion, spanStyle, unit } from "./caliper.utils"

const boxStyle = ({ spanX, spanY }: BoxProps = {}) => ({ ...spanStyle(spanX, "x"), ...spanStyle(spanY, "y") })

const rootState = (props: RootProps = {}): RootState => ({ overlay: props.overlay ?? true })

const frameState = (props: FrameProps = {}): FrameState => ({ magnify: props.magnify ?? 1 })

const dimensionState = (props: DimensionProps = {}): DimensionState => {
  const placement = props.placement ?? "bottom"
  return { placement, axis: axisOf(placement) }
}

const calloutState = ({ anchors, to, align = "start" }: CalloutProps): CalloutState => {
  if (anchors.length > 0 && anchors.every((point) => point.y === to.y)) {
    return { side: anchors.every((point) => to.x <= point.x) ? "left" : "right", align: "start" }
  }
  return { side: anchors.every((point) => point.y <= to.y) ? "bottom" : "top", align }
}

const legendSwatchState = (props: LegendSwatchProps = {}): LegendSwatchState => ({ kind: props.kind ?? "solid" })

export function connect<T extends PropTypes>(normalize: NormalizeProps<T>): CaliperApi<T> {
  return {
    getRootState: rootState,

    getRootProps(props = {}) {
      const { overlay } = rootState(props)
      return normalize.element({ ...parts.root.attrs(""), "data-overlay": overlay ? "visible" : "hidden" })
    },

    getCanvasProps() {
      return normalize.element({ ...parts.canvas.attrs("") })
    },

    getCaptionProps() {
      return normalize.element({ ...parts.caption.attrs("") })
    },

    getFrameState: frameState,

    getFrameProps(props = {}) {
      const { magnify } = frameState(props)
      const motion = frameMotion(props)
      const style = { ...(magnify === "fit" ? {} : { "--caliper-scale": magnify }), ...motion.style }
      return normalize.element({
        ...parts.frame.attrs(""),
        "data-magnify": magnify === "fit" ? "fit" : undefined,
        "data-annotated": props.annotated ? "" : undefined,
        ...motion.attrs,
        style: Object.keys(style).length ? style : undefined,
      })
    },

    getSubjectProps() {
      return normalize.element({ ...parts.subject.attrs("") })
    },

    getOutlineProps(props) {
      return normalize.element({ ...parts.outline.attrs(""), "aria-hidden": true, style: boxStyle(props) })
    },

    getHatchProps(props) {
      return normalize.element({ ...parts.hatch.attrs(""), "aria-hidden": true, style: boxStyle(props) })
    },

    getDimensionState: dimensionState,

    getDimensionProps(props = {}) {
      const { placement, axis } = dimensionState(props)
      const { span, reach = 0, extension = "dashed", line = "solid", ticks = true, distance = "md" } = props
      const motion = markMotion(props)
      return normalize.element({
        ...parts.dimension.attrs(""),
        "aria-hidden": true,
        "data-placement": placement,
        "data-extension": extension,
        "data-line": line,
        "data-distance": distance,
        "data-ticks": ticks ? "" : undefined,
        ...motion.attrs,
        style: { ...spanStyle(span, axis), "--caliper-reach": unit(reach), ...motion.style },
      })
    },

    getDimensionLabelProps() {
      return normalize.element({ ...parts.dimensionLabel.attrs("") })
    },

    getLegendProps() {
      return normalize.element({ ...parts.legend.attrs("") })
    },

    getLegendItemProps() {
      return normalize.element({ ...parts.legendItem.attrs("") })
    },

    getLegendSwatchState: legendSwatchState,

    getLegendSwatchProps(props) {
      const { kind } = legendSwatchState(props)
      return normalize.element({ ...parts.legendSwatch.attrs(""), "aria-hidden": true, "data-kind": kind })
    },

    getCalloutState: calloutState,

    getCalloutProps(props) {
      const { side, align } = calloutState(props)
      const motion = markMotion(props)
      return normalize.element({
        ...parts.callout.attrs(""),
        "data-side": side,
        "data-align": align,
        ...motion.attrs,
        style: {
          "--caliper-callout-x": unit(props.to.x),
          "--caliper-callout-y": unit(props.to.y),
          ...motion.style,
        },
      })
    },

    getCalloutLeaderProps() {
      return normalize.svg({ ...parts.calloutLeader.attrs(""), "aria-hidden": true, viewBox: "0 0 1 1" })
    },

    getCalloutPathProps(props) {
      return normalize.path({ d: calloutPath(props), pathLength: 1 })
    },

    getCalloutAnchorProps({ point }) {
      return normalize.circle({ ...parts.calloutAnchor.attrs(""), cx: point.x, cy: point.y })
    },

    getCalloutLabelProps() {
      return normalize.element({ ...parts.calloutLabel.attrs("") })
    },

    getCalloutTitleProps() {
      return normalize.element({ ...parts.calloutTitle.attrs("") })
    },

    getIconGridProps({ units = 24, trim = 2, ...props } = {}) {
      return normalize.element({
        ...parts.iconGrid.attrs(""),
        "aria-hidden": true,
        style: { ...boxStyle(props), "--caliper-trim": `${(trim / units) * 100}%` },
      })
    },

    getIconGridCanvasProps({ units = 24 }: IconGridProps = {}) {
      return normalize.svg({ viewBox: `0 0 ${units} ${units}`, preserveAspectRatio: "none" })
    },

    getIconGridLayerProps({ layer, ...props }) {
      return normalize.path({ ...parts.iconGridLayer.attrs(""), "data-layer": layer, d: iconGridPath(layer, props) })
    },

    getOverlayTriggerProps({ overlay, onOverlayChange }) {
      return normalize.button({
        ...parts.overlayTrigger.attrs(""),
        type: "button",
        "aria-label": "Measurements",
        "aria-pressed": overlay,
        "data-state": overlay ? "on" : "off",
        "data-pressed": overlay ? "" : undefined,
        onClick() {
          onOverlayChange?.(!overlay)
        },
      })
    },
  }
}
