import { interpolate } from "remotion"
import { Stack, styled } from "@isbatak/panda-ds/jsx"

import { clamp, ease, tween } from "../lib/motion"
import { sourcery, T } from "../theme"
import { Rise } from "./caption"

export function PandaCard({ frame, tall }: { frame: number; tall: boolean }) {
  const start = T.pandaCard
  const end = T.config
  if (frame < start - 8 || frame > end + 10) return null

  const cover = tween(frame, start - 8, 12, ease.whip)
  const leave = tween(frame, end - 4, 12, ease.whip)
  const size = tall ? 150 : 160

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "#fff",
        clipPath: `inset(${(1 - cover) * 100}% 0 ${leave * 100}% 0)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(60% 50% at 50% 55%, ${sourcery.pink}14, transparent 70%)`,
          opacity: interpolate(frame, [start + 16, start + 30], [0, 1], clamp),
        }}
      />
      <Stack position="absolute" inset="0" alignItems="center" justify="center" style={{ gap: size * 0.35 }}>
        <styled.p
          fontFamily="mono"
          textTransform="uppercase"
          letterSpacing="widest"
          style={{ fontSize: size * 0.16, color: sourcery.pink }}
        >
          <Rise progress={tween(frame, start + 4, 14)}>Panda CSS mode</Rise>
        </styled.p>
        <styled.h2
          fontWeight="medium"
          letterSpacing="tighter"
          color="fg"
          textAlign="center"
          style={{ fontSize: size * 0.5, lineHeight: 1.1 }}
        >
          <Rise progress={tween(frame, start + 10, 14)}>Jump to the</Rise>{" "}
          <Rise progress={tween(frame, start + 13, 14)}>
            <styled.span fontFamily="mono" style={{ color: sourcery.pink }}>
              styled()
            </styled.span>
          </Rise>{" "}
          <Rise progress={tween(frame, start + 16, 14)}>call.</Rise>
        </styled.h2>
      </Stack>
    </div>
  )
}
