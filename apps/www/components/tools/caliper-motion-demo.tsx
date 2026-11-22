"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { useState } from "react"
import { css } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { Caliper } from "../ui/caliper"

const phoneScale = css({ "--caliper-scale": { base: "1.5", sm: "2" } })

const Sample = styled("div", {
  base: {
    w: "40",
    h: "24",
    bg: "bg",
    rounded: "l2",
    borderWidth: "1px",
    borderColor: "border.emphasized",
  },
})

export function CaliperMotionDemo() {
  const [animate, setAnimate] = useState<"in" | "out">("in")

  return (
    <Caliper.Figure caption="enter='draw' opens each dimension from its center, drops its extension lines, then shows the label. exit='retract' plays it back out, last mark first.">
      <Caliper.Frame magnify="fit" className={phoneScale} annotated animate={animate}>
        <Caliper.Subject>
          <Sample />
        </Caliper.Subject>
        <Caliper.Dimension placement="top" enter="draw" exit="retract" order={0} exitOrder={2}>
          <Caliper.DimensionLabel>160px</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ start: 0, size: 16 }} enter="draw" exit="retract" order={1} exitOrder={1}>
          <Caliper.DimensionLabel>16px</Caliper.DimensionLabel>
        </Caliper.Dimension>
        <Caliper.Dimension span={{ end: 0, size: 16 }} enter="draw" exit="retract" order={2} exitOrder={0}>
          <Caliper.DimensionLabel>16px</Caliper.DimensionLabel>
        </Caliper.Dimension>
      </Caliper.Frame>

      <SegmentGroup.Root
        size="sm"
        orientation="horizontal"
        value={animate}
        onValueChange={(details) => setAnimate(details.value === "out" ? "out" : "in")}
        aria-label="Animate"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="in">
          <SegmentGroup.ItemText>In</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="out">
          <SegmentGroup.ItemText>Out</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </Caliper.Figure>
  )
}
