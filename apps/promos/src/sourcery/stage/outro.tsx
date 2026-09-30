import { interpolate } from "remotion"
import { Badge } from "@isbatak/react-ui/badge"
import { HStack, Stack, styled } from "@isbatak/panda-ds/jsx"

import { clamp, type Rect, tween } from "../lib/motion"
import { ChevronRightIcon, CopyIcon } from "../site/icons"
import { T } from "../theme"
import { Rise } from "./caption"
import { Lockup } from "./lockup"

const INSTALL = "pnpm add -D @isbatak/sourcery"

export function outroTitleRect(viewport: { width: number; height: number }): Rect {
  const tall = viewport.height > viewport.width
  const w = tall ? 900 : 1100
  const h = tall ? 170 : 210
  return { x: (viewport.width - w) / 2, y: viewport.height * (tall ? 0.36 : 0.3), w, h }
}

export function Outro({ frame, viewport }: { frame: number; viewport: { width: number; height: number } }) {
  const start = T.outro
  if (frame < start - 6) return null
  const tall = viewport.height > viewport.width
  const title = outroTitleRect(viewport)
  const scale = tall ? 0.85 : 1
  const typed = Math.floor(interpolate(frame, [start + 26, start + 50], [0, INSTALL.length], clamp))

  return (
    <div style={{ position: "absolute", inset: 0, opacity: interpolate(frame, [start - 6, start + 2], [0, 1], clamp) }}>
      <Stack position="absolute" alignItems="center" gap="0" left="0" right="0" style={{ top: title.y - 60 * scale }}>
        <HStack
          gap="3"
          color="fg.subtle"
          fontFamily="mono"
          textTransform="uppercase"
          letterSpacing="widest"
          style={{ fontSize: 20 * scale, height: 40 * scale }}
        >
          <Rise progress={tween(frame, start, 14)}>Tools</Rise>
          <span style={{ opacity: tween(frame, start + 3, 10) }}>
            <ChevronRightIcon />
          </span>
          <Rise progress={tween(frame, start + 4, 14)}>Dev tool</Rise>
        </HStack>
        <styled.h1
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="medium"
          letterSpacing="tighter"
          lineHeight="1"
          style={{ width: title.w, height: title.h, marginTop: 20 * scale, fontSize: 190 * scale }}
        >
          <Lockup start={start} unit={tall ? 10 : 12} />
        </styled.h1>
        <styled.p
          color="fg.muted"
          textAlign="center"
          style={{ fontSize: 36 * scale, marginTop: 36 * scale, maxWidth: 1000 * scale }}
        >
          <Rise progress={tween(frame, start + 12, 16)}>Hold ⌘⇧. Click anything.</Rise>{" "}
          <Rise progress={tween(frame, start + 16, 16)}>Land on its line.</Rise>
        </styled.p>
        <HStack
          justify="space-between"
          borderWidth="1px"
          bg="bg.subtle"
          fontFamily="mono"
          style={{
            width: 780 * scale,
            height: 88 * scale,
            marginTop: 52 * scale,
            padding: `0 ${28 * scale}px`,
            fontSize: 30 * scale,
            opacity: tween(frame, start + 20, 10),
            transform: `translateY(${(1 - tween(frame, start + 20, 16)) * 30}px)`,
          }}
        >
          <span>
            <styled.span color="#0000ff">{INSTALL.slice(0, Math.min(typed, 8))}</styled.span>
            <styled.span color="#267f99">{INSTALL.slice(8, Math.min(typed, 11))}</styled.span>
            <styled.span color="#001080">{INSTALL.slice(11, typed)}</styled.span>
            <styled.span
              display="inline-block"
              bg="fg"
              verticalAlign="middle"
              style={{
                width: 3 * scale,
                height: 34 * scale,
                marginLeft: 2,
                opacity: Math.floor(frame / 12) % 2 === 0 ? 1 : 0,
              }}
            />
          </span>
          <styled.span color="fg.subtle" style={{ fontSize: 30 * scale }}>
            <CopyIcon />
          </styled.span>
        </HStack>
        <HStack
          gap="3"
          style={{ marginTop: 40 * scale, transform: `scale(${1.6 * scale})`, transformOrigin: "top center" }}
        >
          <span
            style={{
              opacity: tween(frame, start + 40, 8),
              transform: `translateY(${(1 - tween(frame, start + 40, 14)) * 16}px)`,
            }}
          >
            <Badge colorPalette="green">Next.js 15+</Badge>
          </span>
          <span
            style={{
              opacity: tween(frame, start + 44, 8),
              transform: `translateY(${(1 - tween(frame, start + 44, 14)) * 16}px)`,
            }}
          >
            <Badge colorPalette="blue">Turbopack</Badge>
          </span>
          <span
            style={{
              opacity: tween(frame, start + 48, 8),
              transform: `translateY(${(1 - tween(frame, start + 48, 14)) * 16}px)`,
            }}
          >
            <Badge colorPalette="purple">webpack</Badge>
          </span>
          <span
            style={{
              opacity: tween(frame, start + 52, 8),
              transform: `translateY(${(1 - tween(frame, start + 52, 14)) * 16}px)`,
            }}
          >
            <Badge colorPalette="pink">Panda CSS</Badge>
          </span>
        </HStack>
      </Stack>
    </div>
  )
}
