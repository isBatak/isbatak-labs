"use client"

import { AngleSlider } from "@ark-ui/react/angle-slider"
import { type CSSProperties, type ReactNode, useState } from "react"
import { styled } from "styled-system/jsx"

import { Icon } from "../../../../components/ui/icon"

const sweep = 270
const start = 225
const fade = 36
const tickGap = 4
const tickCount = 15
const tickLength = (tickGap * (tickCount - 1) * 360) / sweep
const tickDashes = `${`0 ${tickGap} `.repeat(tickCount - 1)}0 ${tickLength}`

const toAngle = (volume: number) => (start + (sweep * volume) / 100) % 360

const toVolume = (angle: number) => {
  const offset = (angle - start + 360) % 360
  return offset > sweep ? null : Math.round((offset / sweep) * 100)
}

const Shell = styled("div", {
  base: {
    display: "grid",
    justifyItems: "center",
    gap: "10",
    w: "full",
    maxW: "360px",
    "--led-glow": "0 0 6px 1px {colors.red.solid/60}",
    "&:has(button:active, [role=slider]:active)": {
      "--led-glow": "0 0 14px 4px {colors.red.solid/90}",
    },
  },
})

const Row = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    w: "full",
  },
})

const RoundButton = styled("button", {
  base: {
    display: "grid",
    placeItems: "center",
    boxSize: "76px",
    rounded: "full",
    layerStyle: "raised",
    color: "fg",
    cursor: "pointer",
    outline: "none",
    transitionProperty: "box-shadow, transform",
    transitionDuration: "fast",
    _icon: { boxSize: "8", strokeWidth: "1.5" },
    _active: { layerStyle: "pressed", transform: "scale(0.98)" },
    _focusVisible: { focusRing: "outside", focusRingColor: "gray.focusRing" },
  },
})

const Led = styled("span", {
  base: {
    boxSize: "2.5",
    rounded: "full",
    bg: "radial-gradient(circle at 35% 35%, {colors.red.200}, {colors.red.solid} 55%, {colors.red.800})",
    boxShadow: "var(--led-glow)",
    transition: "box-shadow 120ms",
  },
})

const Pad = styled("div", {
  base: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    boxSize: "320px",
    rounded: "full",
    bgColor: "bg.muted",
    backgroundImage:
      "{assets.grain}, radial-gradient(circle 190px at 50% 36%, {colors.black/40} 70px, {colors.black/28} 96px, {colors.black/12} 135px, {colors.white/2} 175px, {colors.white/4} 190px)",
    backgroundSize: "{sizes.grain}, auto",
    boxShadow:
      "0 0 0 3px {colors.black/45}, 0 1px 0 3.5px {colors.white/5}, inset 0 1px 0 {colors.white/5}, inset 0 -1px 0 {colors.black/20}",
  },
})

const PadArrow = styled("button", {
  base: {
    position: "absolute",
    boxSize: "80px",
    rounded: "full",
    cursor: "pointer",
    outline: "none",
    transition: "background 120ms",
    _active: { bg: "radial-gradient(circle, {colors.black/30}, transparent 70%)" },
    _focusVisible: { bg: "radial-gradient(circle, {colors.white/6}, transparent 70%)" },
  },
  variants: {
    side: {
      up: { top: "1", left: "calc(50% - 40px)" },
      down: { bottom: "1", left: "calc(50% - 40px)" },
      left: { left: "1", top: "calc(50% - 40px)" },
      right: { right: "1", top: "calc(50% - 40px)" },
    },
  },
})

const PadCenter = styled("button", {
  base: {
    position: "relative",
    boxSize: "160px",
    rounded: "full",
    bgColor: "bg",
    backgroundImage: "{assets.grain}, linear-gradient(to bottom, {colors.white/2}, {colors.black/40})",
    backgroundSize: "{sizes.grain}, auto",
    boxShadow:
      "0 0 0 3.5px {colors.black/55}, 0 1px 0 4px {colors.white/6}, inset 0 1px 0 {colors.white/5}, inset 0 -6px 12px {colors.black/15}",
    cursor: "pointer",
    outline: "none",
    transition: "box-shadow 120ms",
    _active: {
      boxShadow: "0 0 0 3.5px {colors.black/55}, 0 1px 0 4px {colors.white/6}, inset 0 3px 10px {colors.black/50}",
    },
    _focusVisible: { focusRing: "outside", focusRingColor: "gray.focusRing" },
  },
})

const Dial = styled(AngleSlider.Root, {
  base: {
    display: "grid",
    justifyItems: "center",
    gap: "6",
  },
})

const DialControl = styled(AngleSlider.Control, {
  base: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    boxSize: "240px",
    cursor: "grab",
    _active: { cursor: "grabbing" },
    "& svg": { position: "absolute", inset: "0", overflow: "visible", pointerEvents: "none" },
    _before: {
      content: '""',
      position: "absolute",
      boxSize: "188px",
      rounded: "full",
      layerStyle: "recessed",
    },
  },
})

const Arc = styled("svg", {
  base: {
    filter: "drop-shadow(0 0 3px {colors.red.solid/80})",
    maskImage:
      "conic-gradient(from 220deg, #000 0deg, #000 calc(5deg + var(--sweep) - var(--fade)), transparent calc(7deg + var(--sweep)))",
  },
})

const Knob = styled("div", {
  base: {
    position: "relative",
    boxSize: "176px",
    rounded: "full",
    layerStyle: "raised",
  },
})

const KnobThumb = styled(AngleSlider.Thumb, {
  base: {
    position: "absolute",
    inset: "0",
    rounded: "full",
    outline: "none",
    _focusVisible: { focusRing: "outside", focusRingColor: "gray.focusRing" },
  },
})

const KnobDimple = styled("span", {
  base: {
    position: "absolute",
    top: "4",
    left: "calc(50% - 20px)",
    boxSize: "10",
    rounded: "full",
    layerStyle: "recessed",
  },
})

const Label = styled(AngleSlider.Label, {
  base: {
    fontFamily: "mono",
    textStyle: "sm",
    letterSpacing: "0.2em",
    color: "fg.muted",
  },
})

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  )
}

export function Remote() {
  const [volume, setVolume] = useState(28)
  const arc = (sweep * volume) / 100

  const onValueChange = ({ value }: { value: number }) => {
    const next = toVolume(value)
    if (next === null) return
    setVolume((current) => (Math.abs(next - current) > 50 ? current : next))
  }

  return (
    <Shell>
      <Row>
        <RoundButton aria-label="Power" color="red.fg">
          <Glyph>
            <path d="M7 6a7.75 7.75 0 1 0 10 0" />
            <path d="M12 4l0 8" />
          </Glyph>
        </RoundButton>
        <Led />
        <RoundButton aria-label="Voice">
          <Glyph>
            <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -6 0z" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M12 17l0 4" />
          </Glyph>
        </RoundButton>
      </Row>

      <Pad>
        <PadArrow side="up" aria-label="Up" />
        <PadArrow side="down" aria-label="Down" />
        <PadArrow side="left" aria-label="Left" />
        <PadArrow side="right" aria-label="Right" />
        <PadCenter aria-label="Select" />
      </Pad>

      <Row>
        <RoundButton aria-label="Back">
          <Glyph>
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </Glyph>
        </RoundButton>
        <RoundButton aria-label="Home">
          <Icon name="home" />
        </RoundButton>
      </Row>

      <Dial value={toAngle(volume)} step={2.7} onValueChange={onValueChange}>
        <DialControl>
          <svg viewBox="0 0 240 240" aria-hidden>
            <circle
              cx="120"
              cy="120"
              r="116"
              fill="none"
              stroke="var(--colors-fg-muted)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={tickLength}
              strokeDasharray={tickDashes}
              transform="rotate(135 120 120)"
            />
          </svg>
          <Arc
            viewBox="0 0 240 240"
            aria-hidden
            style={{ "--sweep": `${arc}deg`, "--fade": `${Math.min(fade, arc)}deg` } as CSSProperties}
          >
            <circle
              cx="120"
              cy="120"
              r="98"
              fill="none"
              stroke="var(--colors-red-solid)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={360}
              strokeDasharray={`${arc} 360`}
              transform="rotate(135 120 120)"
            />
          </Arc>
          <Knob>
            <KnobThumb
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={volume}
              aria-valuetext={`${volume}%`}
              onKeyDownCapture={(event) => {
                if (event.key !== "Home" && event.key !== "End") return
                event.preventDefault()
                event.stopPropagation()
                setVolume(event.key === "Home" ? 0 : 100)
              }}
            >
              <KnobDimple />
            </KnobThumb>
          </Knob>
        </DialControl>
        <Label>VOLUME</Label>
        <AngleSlider.HiddenInput />
      </Dial>
    </Shell>
  )
}
