import { useId } from "react"
import { css } from "styled-system/css"

import { Caliper } from "../ui/caliper"

const solid = css({ fill: "colorPalette.solid" })
const contrast = css({ fill: "colorPalette.contrast" })
const tint = css({ fill: "colorPalette.solid/10" })
const hatch = css({ opacity: "0.8" })
const line = css({ stroke: "colorPalette.solid", strokeWidth: "1", fill: "none" })
const extension = css({ stroke: "colorPalette.solid", strokeWidth: "1", strokeDasharray: "1 1" })
const slider = css({ fill: "colorPalette.solid", stroke: "colorPalette.contrast", strokeWidth: "0.75" })

/** The Caliper mark, drawn with the caliper recipe's colors: solid jaws, a hatched part and a dimension line. */
export function CaliperMark({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <pattern id={id} width="2" height="2" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="0.6" height="2" className={solid} />
        </pattern>
      </defs>
      <rect x="6" y="8.5" width="8" height="6.5" className={tint} />
      <rect x="6" y="8.5" width="8" height="6.5" fill={`url(#${id})`} className={hatch} />
      <rect x="2" y="3" width="20" height="3" rx="0.75" className={solid} />
      <rect x="7.7" y="3" width="0.6" height="1.4" className={contrast} />
      <rect x="9.7" y="3" width="0.6" height="1" className={contrast} />
      <rect x="11.7" y="3" width="0.6" height="1.4" className={contrast} />
      <path d="M2 5.5h4v12L2 13.5z" className={solid} />
      <rect x="14" y="2" width="6" height="5" rx="1" className={slider} />
      <path d="M14 6.5h4v7l-4 4z" className={solid} />
      <path d="M6 18v2M14 18v2" className={extension} />
      <path d="M6.5 21h7M6 19.5v3M14 19.5v3" className={line} />
    </svg>
  )
}

const wordmark = css({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "[0.3em]",
  pb: "6",
})

const mark = css({ boxSize: "[1.1em]", flexShrink: "0" })

/** The Caliper wordmark: the mark beside the title, measured by a Caliper dimension. */
export function CaliperWordmark({ title }: { title: string }) {
  return (
    <Caliper.Root render={<span />} className={wordmark}>
      <CaliperMark className={mark} />
      <Caliper.Frame>
        <Caliper.Subject>{title}</Caliper.Subject>
        <Caliper.Dimension distance="sm" />
      </Caliper.Frame>
    </Caliper.Root>
  )
}
