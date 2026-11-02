import { styled } from "@isbatak/panda-ds/jsx"
import { heading } from "@isbatak/panda-ds/recipes"
import { Badge } from "@isbatak/react-ui/badge"
import type { ReactNode } from "react"
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"

import { track } from "../../sourcery/lib/motion"
import { CodeCard } from "../code-card"
import { SEGMENTS, T } from "../theme"

const PUSH = 20

const INSTALL = `pnpm add @isbatak/react-ui @isbatak/icons
pnpm add -D @ikona/cli
npx ikona`

const IKONA_CONFIG = `import type { FileConfig } from "@ikona/cli"

export default {
  outputDir: ".ikona",
  icons: {
    inputDir: "./icons",
    spriteOutputDir: "./public",
    optimize: true,
  },
} satisfies FileConfig`

const APP_ICONS = `import { setIconSprite } from "@isbatak/icons"
import type { IconName } from "./.ikona/types/icon-name"

setIconSprite("/sprite.svg")

declare module "@isbatak/icons" {
  interface IconRegistry {
    iconName: IconName
  }
}`

function Step({
  index,
  tallZoom,
  number,
  title,
  children,
}: {
  index: number
  tallZoom: number
  number: string
  title: string
  children: ReactNode
}) {
  const frame = useCurrentFrame() + SEGMENTS.setup.from
  const { width, height } = useVideoConfig()
  const tall = height > width
  const unit = Math.min(width, height) / 1080
  const position = track(frame, [
    [T.setupSteps[1] - PUSH, 0],
    [T.setupSteps[1], 1],
    [T.setupSteps[2] - PUSH, 1],
    [T.setupSteps[2], 2],
  ])

  return (
    <AbsoluteFill
      style={{
        flexDirection: tall ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: (tall ? 120 : 96) * unit,
        translate: `${(index - position) * width}px 0`,
      }}
    >
      <styled.div
        display="grid"
        gap="4"
        justifyItems="start"
        w={tall ? "xl" : "md"}
        style={{ zoom: (tall ? 1.6 : 1.4) * unit }}
      >
        <Badge colorPalette="orange" size="lg" fontFamily="mono" style={{ zoom: 1.4 }}>
          {number}
        </Badge>
        <h2 className={heading({ size: "5xl" })}>{title}</h2>
      </styled.div>
      <styled.div style={{ zoom: (tall ? tallZoom : 1.8) * unit }}>{children}</styled.div>
    </AbsoluteFill>
  )
}

export function SetupSegment() {
  return (
    <>
      <Step index={0} tallZoom={2.3} number="01 · Install" title="The components, the icons, and ikona.">
        <CodeCard file="terminal" code={INSTALL} />
      </Step>
      <Step index={1} tallZoom={2.2} number="02 · Build" title="ikona turns your SVG folder into one typed sprite.">
        <CodeCard file="ikona.config.ts" code={IKONA_CONFIG} />
      </Step>
      <Step index={2} tallZoom={1.75} number="03 · Swap" title="Point every Icon at your sprite. Names stay typed.">
        <CodeCard file="app/icons.ts" code={APP_ICONS} />
      </Step>
    </>
  )
}
