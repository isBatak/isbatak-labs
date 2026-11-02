import type { IconName } from "@isbatak/icons"
import { styled } from "@isbatak/panda-ds/jsx"
import { card } from "@isbatak/panda-ds/recipes"
import { Icon } from "@isbatak/react-ui/icon"
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion"

import { pop } from "../../sourcery/lib/motion"
import { T } from "../theme"
import { Heading, Line } from "./heading"

function Framework({ at, name, label }: { at: number; name: IconName; label: string }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const enter = pop(frame, at, fps)
  const classes = card({ variant: "outline" })

  return (
    <styled.div display="grid" justifyItems="center" gap="3" style={{ opacity: Math.min(enter, 1), scale: `${enter}` }}>
      <div className={classes.root}>
        <div className={classes.body}>
          <Icon name={name} boxSize="14" />
        </div>
      </div>
      <styled.span textStyle="lg" fontWeight="medium" color="fg.muted">
        {label}
      </styled.span>
    </styled.div>
  )
}

export function FrameworksSegment() {
  const { width, height } = useVideoConfig()
  const tall = height > width
  const unit = Math.min(width, height) / 1080

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <styled.div display="grid" gap="12" justifyItems="center" style={{ zoom: 1.4 * unit }}>
        <styled.div display="grid" gap="3">
          <Heading at={T.frameworksTitle}>One sprite. Every framework.</Heading>
          <Line at={T.frameworksTitle + 10} textStyle="2xl">
            The same Icon and components, with typed names everywhere.
          </Line>
        </styled.div>
        <styled.div display="grid" gap="8" gridTemplateColumns={tall ? "repeat(3, auto)" : "repeat(6, auto)"}>
          <Framework at={T.frameworksLogos} name="brand-react" label="React" />
          <Framework at={T.frameworksLogos + 4} name="brand-vue" label="Vue" />
          <Framework at={T.frameworksLogos + 8} name="brand-svelte" label="Svelte" />
          <Framework at={T.frameworksLogos + 12} name="brand-solidjs" label="Solid" />
          <Framework at={T.frameworksLogos + 16} name="brand-preact" label="Preact" />
          <Framework at={T.frameworksLogos + 20} name="brand-lit" label="Lit" />
        </styled.div>
      </styled.div>
    </AbsoluteFill>
  )
}
