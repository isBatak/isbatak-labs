import type { CSSProperties, ReactNode } from "react"
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

import { theme } from "../theme"

const WINDOW = { left: 200, top: 130, width: 1520, height: 820 }
const BUTTON = { left: 96, top: 430, width: 240, height: 72 }
const TARGET = {
  x: WINDOW.left + BUTTON.left + BUTTON.width / 2,
  y: WINDOW.top + BUTTON.top + BUTTON.height / 2,
}
const LOCATION = "components/home/hero.tsx:24:9"

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const

export function Demo() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const windowIn = spring({ frame, fps, config: { damping: 200 } })
  const keysIn = spring({ frame: frame - 20, fps, config: { damping: 18 } })
  const travel = interpolate(frame, [30, 90], [0, 1], { ...clamp, easing: Easing.bezier(0.45, 0, 0.2, 1) })
  const outline = interpolate(frame, [70, 82], [0, 1], clamp)
  const press = interpolate(frame, [108, 112, 118], [1, 0.85, 1], clamp)
  const ripple = interpolate(frame, [110, 135], [0, 1], clamp)
  const editorIn = spring({ frame: frame - 122, fps, config: { damping: 200 } })

  const cursorX = interpolate(travel, [0, 1], [1650, TARGET.x])
  const cursorY = interpolate(travel, [0, 1], [980, TARGET.y])

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          ...px(WINDOW),
          borderRadius: 20,
          border: `1px solid ${theme.border}`,
          background: theme.surface,
          overflow: "hidden",
          opacity: windowIn,
          transform: `scale(${interpolate(windowIn, [0, 1], [0.96, 1])})`,
          boxShadow: "0 40px 120px rgb(0 0 0 / 0.5)",
        }}
      >
        <BrowserBar />
        <MockPage />
        <div
          style={{
            position: "absolute",
            ...px(BUTTON),
            border: `3px solid ${theme.accent}`,
            borderRadius: 14,
            background: theme.accentSoft,
            opacity: outline,
            transform: "translate(-6px, -6px)",
            width: BUTTON.width + 12,
            height: BUTTON.height + 12,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: BUTTON.left - 6,
            top: BUTTON.top + BUTTON.height + 18,
            padding: "8px 14px",
            borderRadius: 10,
            background: theme.accentStrong,
            fontFamily: theme.mono,
            fontSize: 24,
            fontWeight: 500,
            opacity: outline,
            transform: `translateY(${interpolate(outline, [0, 1], [8, 0])}px)`,
          }}
        >
          button&nbsp;&nbsp;{LOCATION}
        </div>
      </div>

      <Keys progress={keysIn} />

      <div
        style={{
          position: "absolute",
          left: TARGET.x - 60,
          top: TARGET.y - 60,
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: `3px solid ${theme.accent}`,
          opacity: interpolate(ripple, [0, 0.1, 1], [0, 0.9, 0]),
          transform: `scale(${interpolate(ripple, [0, 1], [0.3, 1.4])})`,
        }}
      />
      <Cursor x={cursorX} y={cursorY} scale={press} />

      <Editor progress={editorIn} />
    </AbsoluteFill>
  )
}

function px({ left, top, width, height }: { left: number; top: number; width: number; height: number }): CSSProperties {
  return { left, top, width, height }
}

function BrowserBar() {
  const dot = (color: string): CSSProperties => ({ width: 16, height: 16, borderRadius: "50%", background: color })

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 64,
        padding: "0 24px",
        borderBottom: `1px solid ${theme.border}`,
        background: theme.surfaceRaised,
      }}
    >
      <div style={dot("#ff5f57")} />
      <div style={dot("#febc2e")} />
      <div style={dot("#28c840")} />
      <div
        style={{
          marginLeft: 24,
          padding: "8px 20px",
          borderRadius: 10,
          background: theme.surface,
          color: theme.muted,
          fontFamily: theme.mono,
          fontSize: 20,
        }}
      >
        localhost:3000
      </div>
    </div>
  )
}

function MockPage() {
  return (
    <div style={{ padding: "90px 96px" }}>
      <div style={{ color: theme.muted, fontFamily: theme.mono, fontSize: 20, letterSpacing: "0.12em" }}>YOUR APP</div>
      <div style={{ marginTop: 20, fontSize: 84, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
        Ship the next idea.
      </div>
      <div style={{ marginTop: 24, maxWidth: 820, fontSize: 30, color: theme.muted, lineHeight: 1.5 }}>
        Everything on this page was rendered by a line of JSX. Sourcery shows you which one.
      </div>
      <div
        style={{
          position: "absolute",
          ...px(BUTTON),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          background: theme.text,
          color: theme.background,
          fontSize: 28,
          fontWeight: 600,
        }}
      >
        Get started
      </div>
    </div>
  )
}

function Keys({ progress }: { progress: number }) {
  const key: CSSProperties = {
    minWidth: 76,
    height: 76,
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    border: `1px solid ${theme.border}`,
    borderBottomWidth: 4,
    background: theme.surfaceRaised,
    fontSize: 40,
  }

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 36,
        display: "flex",
        justifyContent: "center",
        gap: 14,
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
      }}
    >
      <div style={key}>⌘</div>
      <div style={key}>⇧</div>
    </div>
  )
}

function Cursor({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      style={{ position: "absolute", left: x, top: y, transform: `scale(${scale})`, transformOrigin: "top left" }}
    >
      <path
        d="M4 2.5 20 11l-7 1.6L9.6 20z"
        fill={theme.text}
        stroke={theme.background}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Editor({ progress }: { progress: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 190,
        right: 120,
        width: 880,
        borderRadius: 18,
        border: `1px solid ${theme.border}`,
        background: "#101016",
        overflow: "hidden",
        fontFamily: theme.mono,
        fontSize: 26,
        boxShadow: "0 40px 120px rgb(0 0 0 / 0.6)",
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [160, 0])}px)`,
      }}
    >
      <div
        style={{
          padding: "18px 24px",
          borderBottom: `1px solid ${theme.border}`,
          color: theme.muted,
          fontSize: 22,
        }}
      >
        components/home/hero.tsx
      </div>
      <div style={{ padding: "16px 0" }}>
        <CodeLine number={21}>
          <Keyword>return</Keyword> (
        </CodeLine>
        <CodeLine number={22}>{"  <section>"}</CodeLine>
        <CodeLine number={23}>{"    <h1>Ship the next idea.</h1>"}</CodeLine>
        <CodeLine number={24} active>
          {"    <"}
          <Keyword>button</Keyword>
          {" onClick={start}>"}
        </CodeLine>
        <CodeLine number={25}>{"      Get started"}</CodeLine>
        <CodeLine number={26}>{"    </button>"}</CodeLine>
        <CodeLine number={27}>{"  </section>"}</CodeLine>
      </div>
    </div>
  )
}

function Keyword({ children }: { children: ReactNode }) {
  return <span style={{ color: "#c4b5fd" }}>{children}</span>
}

function CodeLine({ number, active = false, children }: { number: number; active?: boolean; children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 28,
        padding: "6px 24px",
        background: active ? theme.accentSoft : "transparent",
        boxShadow: active ? `inset 4px 0 0 ${theme.accent}` : "none",
        whiteSpace: "pre",
      }}
    >
      <span style={{ width: 36, textAlign: "right", color: theme.muted }}>{number}</span>
      <span>{children}</span>
    </div>
  )
}
