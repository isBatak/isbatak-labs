import { createNormalizer } from "@zag-js/types"
import { type CalloutProps, calloutPath, connect, iconGridPath, spanStyle } from "../src"

const api = connect(createNormalizer((props) => props))

describe("spanStyle", () => {
  it("fills the axis when the span is empty", () => {
    expect(spanStyle(undefined, "x")).toEqual({ left: 0, right: 0 })
  })

  it("anchors a size-only span to the start", () => {
    expect(spanStyle({ size: 16 }, "y")).toEqual({ top: 0, height: "calc(16 * var(--caliper-px))" })
  })

  it("places start and end in subject px", () => {
    expect(spanStyle({ start: 4, end: 8 }, "x")).toEqual({
      left: "calc(4 * var(--caliper-px))",
      right: "calc(8 * var(--caliper-px))",
    })
  })
})

describe("connect", () => {
  it("marks parts with zag 2 anatomy attributes", () => {
    expect(api.getRootProps()).toEqual({ "data-caliper-root": "", "data-overlay": "visible" })
    expect(api.getDimensionLabelProps()).toEqual({ "data-caliper-dimension-label": "" })
  })

  it("shows the overlay by default and marks the root when it is hidden", () => {
    expect(api.getRootState()).toEqual({ overlay: true })
    expect(api.getRootProps({ overlay: false })).toMatchObject({ "data-overlay": "hidden" })
  })

  it("makes the overlay trigger a toggle button for the overlay", () => {
    const changes: boolean[] = []
    const props = api.getOverlayTriggerProps({ overlay: true, onOverlayChange: (next) => changes.push(next) })
    expect(props).toMatchObject({
      "data-caliper-overlay-trigger": "",
      type: "button",
      "aria-pressed": true,
      "data-state": "on",
      "data-pressed": "",
    })
    props.onClick()
    expect(changes).toEqual([false])
    expect(api.getOverlayTriggerProps({ overlay: false })).toMatchObject({ "aria-pressed": false, "data-state": "off" })
  })

  it("derives the dimension axis from its placement", () => {
    expect(api.getDimensionState({ placement: "left" })).toEqual({ placement: "left", axis: "y" })
    expect(api.getDimensionProps({ placement: "left", span: { size: 10 } })).toMatchObject({
      "data-placement": "left",
      "data-ticks": "",
      style: { top: 0, height: "calc(10 * var(--caliper-px))", "--caliper-reach": "calc(0 * var(--caliper-px))" },
    })
  })

  it("sets the frame scale unless it fits the viewport", () => {
    expect(api.getFrameProps({ magnify: 2 })).toMatchObject({ style: { "--caliper-scale": 2 } })
    expect(api.getFrameProps({ magnify: "fit", annotated: true })).toMatchObject({
      "data-magnify": "fit",
      "data-annotated": "",
    })
  })
})

describe("motion", () => {
  it("leaves frames and marks static unless they opt in", () => {
    expect(api.getFrameProps({ magnify: "fit" }).style).toBeUndefined()
    expect(api.getDimensionProps({})["data-enter"]).toBeUndefined()
  })

  it("plays the frame, or holds it at a time when scrubbed", () => {
    expect(api.getFrameProps({ magnify: 2, animate: "in" })).toMatchObject({ "data-animate": "in" })
    expect(api.getFrameProps({ magnify: 2, animate: "in", time: 1.5, stagger: 0.2 })).toMatchObject({
      "data-animate": "in",
      "data-scrub": "",
      style: { "--caliper-scale": 2, "--caliper-time": "1.5s", "--caliper-stagger": "0.2s" },
    })
  })

  it("passes a mark's variants and timing to CSS", () => {
    expect(
      api.getDimensionProps({ enter: "draw", exit: "retract", order: 2, exitOrder: 0, delay: 1, duration: 0.6 }),
    ).toMatchObject({
      "data-enter": "draw",
      "data-exit": "retract",
      style: {
        "--caliper-order": 2,
        "--caliper-exit-order": 0,
        "--caliper-delay": "1s",
        "--caliper-duration": "0.6s",
      },
    })
  })

  it("draws a callout's leader from its anchor", () => {
    const props: CalloutProps = { anchors: [{ x: 0, y: 0 }], to: { x: -10, y: 0 }, enter: "draw", order: 1 }
    expect(api.getCalloutProps(props)).toMatchObject({
      "data-enter": "draw",
      style: { "--caliper-callout-x": "calc(-10 * var(--caliper-px))", "--caliper-order": 1 },
    })
    expect(api.getCalloutPathProps(props)).toMatchObject({ pathLength: 1 })
  })
})

describe("callout", () => {
  const anchors = [
    { x: 20, y: 40 },
    { x: 56, y: 40 },
  ]

  it("routes each anchor down to the bend, across and down to the label", () => {
    expect(calloutPath({ anchors, to: { x: 0, y: 100 }, bend: 60 })).toBe("M20 40V60H0V100M56 40V60H0V100")
  })

  it("bends halfway to the label by default", () => {
    expect(calloutPath({ anchors: [{ x: 10, y: 0 }], to: { x: 10, y: 80 } })).toBe("M10 0V40H10V80")
  })

  it("puts the label below or above the anchors", () => {
    expect(api.getCalloutState({ anchors, to: { x: 0, y: 100 } })).toEqual({ side: "bottom", align: "start" })
    expect(api.getCalloutState({ anchors, to: { x: 0, y: -40 }, align: "end" })).toEqual({ side: "top", align: "end" })
  })

  it("puts the label beside a straight line across", () => {
    expect(api.getCalloutState({ anchors, to: { x: -24, y: 40 }, align: "end" })).toEqual({
      side: "left",
      align: "start",
    })
    expect(api.getCalloutState({ anchors, to: { x: 120, y: 40 } })).toEqual({ side: "right", align: "start" })
  })
})

describe("icon grid", () => {
  it("draws a line every unit and majors at the center and eighths", () => {
    expect(iconGridPath("minor", { units: 2 })).toBe("M0 0V2M0 0H2M1 0V2M0 1H2M2 0V2M0 2H2")
    expect(iconGridPath("major")).toBe("M9 0V24M0 9H24M12 0V24M0 12H24M15 0V24M0 15H24")
  })

  it("sizes the canvas and tags each layer", () => {
    expect(api.getIconGridCanvasProps({ units: 20 })).toMatchObject({ viewBox: "0 0 20 20" })
    expect(api.getIconGridLayerProps({ layer: "keylines" })).toMatchObject({
      "data-caliper-icon-grid-layer": "",
      "data-layer": "keylines",
    })
    expect(api.getIconGridProps({ units: 20, trim: 1 })).toMatchObject({ style: { "--caliper-trim": "5%" } })
    expect(api.getIconGridProps({ spanX: { start: 4, size: 20 } })).toMatchObject({
      "data-caliper-icon-grid": "",
      style: {
        left: "calc(4 * var(--caliper-px))",
        width: "calc(20 * var(--caliper-px))",
        top: 0,
        bottom: 0,
        "--caliper-trim": "8.333333333333332%",
      },
    })
  })
})
