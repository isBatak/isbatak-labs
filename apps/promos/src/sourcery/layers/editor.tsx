import { interpolate } from "remotion"

import { clamp, ease, mix, settle, tween } from "../lib/motion"
import { useStage } from "../stage/context"
import { Editor } from "../stage/editor"
import { CONFIG_FILE, HERO_FILE, SOURCES, SPOTS, type SpotName } from "../stage/labels"
import { editorFrame } from "../stage/shots"
import { sourcery, T } from "../theme"
import { markLength, scrollFor, STYLED_MARK, styledSpot } from "./landing"

const CONFIG_HEAD = `import { resolve } from "node:path"
import type { NextConfig } from "next"
import { withSourcery } from "@isbatak/sourcery/next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
}

export default withSourcery(nextConfig, {
  injectTo: resolve("components/providers.tsx"),
`
const CONFIG_LINE = "  panda: true,"
const CONFIG_TAIL = "\n})\n"

export function EditorLayer() {
  const { frame, fps, tall, viewport } = useStage()
  const editorBox = editorFrame(viewport)

  const heroSpot: SpotName =
    frame >= T.jumps[2] + 2
      ? "eyebrow"
      : frame >= T.jumps[1] + 2
        ? "install"
        : frame >= T.jumps[0] + 2
          ? "title"
          : "npm"
  const previousSpot: SpotName =
    heroSpot === "eyebrow" ? "install" : heroSpot === "install" ? "title" : heroSpot === "title" ? "npm" : "npm"
  const jumpStart =
    heroSpot === "eyebrow"
      ? T.jumps[2]
      : heroSpot === "install"
        ? T.jumps[1]
        : heroSpot === "title"
          ? T.jumps[0]
          : T.open
  const heroLine = SPOTS[heroSpot].at.line
  const firstOpen = settle(frame, T.open, fps)
  const heroScroll =
    heroSpot === "npm"
      ? mix(scrollFor(heroLine) - 14, scrollFor(heroLine), firstOpen)
      : mix(scrollFor(SPOTS[previousSpot].at.line), scrollFor(heroLine), tween(frame, jumpStart + 2, 12, ease.snap))
  const heroHighlight = heroSpot === "npm" ? tween(frame, T.open + 22, 12) : tween(frame, jumpStart + 4, 10)

  const typedChars = Math.floor(interpolate(frame, [T.typeFrom, T.typeTo], [0, CONFIG_LINE.length], clamp))
  const configSource = `${CONFIG_HEAD}${CONFIG_LINE.slice(0, typedChars)}${CONFIG_TAIL}`

  const heroVisit = frame < T.pandaCard + 4
  const configVisit = !heroVisit && frame < T.pandaBack + 16
  const editorVisible =
    (frame >= T.open && heroVisit) ||
    (frame >= T.config && configVisit) ||
    (frame >= T.pandaOpen && frame < T.swarm + 16)
  const enter = heroVisit ? firstOpen : configVisit ? settle(frame, T.config, fps) : settle(frame, T.pandaOpen, fps)
  const leave = configVisit
    ? tween(frame, T.pandaBack - 6, 16, ease.in)
    : heroVisit
      ? 0
      : tween(frame, T.swarm, 16, ease.in)
  const editorOffset = (1 - enter + leave) * (tall ? 1000 : 900)

  const { line: styledLine, column: styledColumn } = styledSpot()

  const editorState = heroVisit
    ? {
        file: HERO_FILE,
        source: SOURCES.hero,
        line: heroLine,
        column: SPOTS[heroSpot].at.column,
        caret: SPOTS[heroSpot].at.column,
        mark: markLength(heroSpot),
        accent: sourcery.violet,
        scroll: heroScroll,
        highlight: heroHighlight,
        siblings: ["icons.tsx", "layout.ts", "site.tsx", "tool-hero.tsx"],
        tabs: ["site.tsx", "tool-hero.tsx"],
      }
    : configVisit
      ? {
          file: CONFIG_FILE,
          source: configSource,
          line: 11,
          column: 3,
          caret: 1 + Math.max(typedChars, 2),
          mark: Math.max(typedChars - 2, 0),
          accent: sourcery.pink,
          scroll: 1,
          highlight: frame >= T.typeFrom - 2 ? 1 : 0,
          siblings: ["next.config.ts", "package.json", "panda.config.ts", "tsconfig.json"],
          tabs: ["tool-hero.tsx", "next.config.ts"],
        }
      : {
          file: HERO_FILE,
          source: SOURCES.hero,
          line: styledLine,
          column: styledColumn,
          caret: styledColumn,
          mark: STYLED_MARK,
          accent: sourcery.pink,
          scroll: mix(1, scrollFor(styledLine), settle(frame, T.pandaOpen + 2, fps)),
          highlight: tween(frame, T.pandaOpen + 22, 12),
          siblings: ["icons.tsx", "layout.ts", "site.tsx", "tool-hero.tsx"],
          tabs: ["next.config.ts", "tool-hero.tsx"],
        }

  if (!editorVisible) return null

  return (
    <div
      style={{
        position: "absolute",
        left: editorBox.x,
        top: editorBox.y,
        transformOrigin: "0 0",
        transform: tall
          ? `translateY(${editorOffset}px) scale(${editorBox.scale})`
          : `perspective(2400px) translateX(${editorOffset}px) rotateY(${(1 - enter) * -16}deg) scale(${editorBox.scale})`,
        opacity: interpolate(enter - leave, [0, 0.3], [0, 1], clamp),
      }}
    >
      <Editor {...editorState} frame={frame} style={{ position: "relative" }} />
    </div>
  )
}
