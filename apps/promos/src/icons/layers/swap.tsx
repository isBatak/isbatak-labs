import { styled } from "@isbatak/panda-ds/jsx"
import { Badge } from "@isbatak/react-ui/badge"
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"

import { tween } from "../../sourcery/lib/motion"
import { Panel } from "../panel"
import { activeSwap } from "../sprite"
import { type IconSet, SEGMENTS, T } from "../theme"
import { Heading } from "./heading"

const SET_LABELS: Record<IconSet, { name: string; style: string }> = {
  boring: { name: "Boring Icons", style: "line, 1.5 stroke" },
  lucide: { name: "Lucide", style: "line, 2px rounded stroke" },
  phosphor: { name: "Phosphor", style: "fill" },
  material: { name: "Material Symbols", style: "rounded fill" },
  pixel: { name: "Pixelarticons", style: "pixel grid" },
}

export function SwapSegment() {
  const frame = useCurrentFrame()
  const { width, height } = useVideoConfig()
  const tall = height > width
  const unit = Math.min(width, height) / 1080
  const [start, set] = activeSwap(frame + SEGMENTS.swap.from)
  const label = tween(frame + SEGMENTS.swap.from, start, 14)

  return (
    <AbsoluteFill
      style={{
        flexDirection: tall ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 96 * unit,
      }}
    >
      <Panel from={SEGMENTS.swap.from} zoom={2.5 * unit} />
      <styled.div
        display="grid"
        gap="4"
        maxW="md"
        justifyItems={tall ? "center" : "start"}
        textAlign={tall ? "center" : "start"}
        style={{ zoom: 1.4 * unit }}
      >
        <Heading at={T.swapTitle}>Same components.</Heading>
        <Heading at={T.swapTitle + 10}>Any icon set.</Heading>
        <Badge
          variant="outline"
          size="lg"
          mt="4"
          gap="2"
          style={{ zoom: 1.5, opacity: label, translate: `0 ${(1 - label) * 12}px` }}
        >
          <styled.span fontWeight="semibold" color="fg">
            {SET_LABELS[set].name}
          </styled.span>
          {SET_LABELS[set].style}
        </Badge>
      </styled.div>
    </AbsoluteFill>
  )
}
