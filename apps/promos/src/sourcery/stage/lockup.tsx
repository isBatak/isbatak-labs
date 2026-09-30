import { useId } from "react"
import { interpolate } from "remotion"

import { GRADIENT, HAT, LOCKUP, SHADOW, WORDMARK } from "../brand/marks"
import { clamp, ease, pop, tween } from "../lib/motion"
import { useStage } from "./context"

const TWINKLE = 72

function twinkle(frame: number, phase: number) {
  return Math.floor((frame + (phase * TWINKLE) / 3) / (TWINKLE / 2)) % 2 === 0 ? 1 : 0.3
}

export function Lockup({ start, unit }: { start: number; unit: number }) {
  const { frame, fps } = useStage()
  const gradient = useId()
  const hat = pop(frame, start, fps)

  return (
    <svg
      width={LOCKUP.width * unit}
      height={LOCKUP.height * unit}
      viewBox={`0 0 ${LOCKUP.width} ${LOCKUP.height}`}
      role="img"
      aria-label="Sourcery"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient id={gradient} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={WORDMARK.width} y2="0">
          <stop offset={GRADIENT[0].offset} stopColor={GRADIENT[0].color} />
          <stop offset={GRADIENT[1].offset} stopColor={GRADIENT[1].color} />
          <stop offset={GRADIENT[2].offset} stopColor={GRADIENT[2].color} />
        </linearGradient>
      </defs>
      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "50% 100%",
          transform: `scale(${hat}) rotate(${(1 - hat) * -16}deg)`,
          opacity: interpolate(hat, [0, 0.3], [0, 1], clamp),
        }}
      >
        <g transform={`scale(${LOCKUP.hatScale})`} shapeRendering="crispEdges">
          {HAT.runs.map((run) => (
            <rect
              key={`${run.x}-${run.y}`}
              x={run.x}
              y={run.y}
              width={run.w}
              height={run.h}
              fill={run.fill}
              opacity={run.spark === undefined || frame < start + 20 ? 1 : twinkle(frame, run.spark)}
            />
          ))}
        </g>
      </g>
      <g transform={`translate(${LOCKUP.wordX} 0)`}>
        {WORDMARK.letters.map((letter, index) => {
          const rise = Math.floor(tween(frame, start + 6 + index * 2, 9, ease.out) * 3) / 3
          return (
            <g key={index} opacity={rise} transform={`translate(0 ${(1 - rise) * 4})`}>
              <g fill={SHADOW.fill} fillOpacity={SHADOW.opacity}>
                {letter.lines.map((box, line) => (
                  <rect key={line} x={box.x} y={box.y} width={box.w} height={box.h} />
                ))}
              </g>
              <g fill={`url(#${gradient})`} shapeRendering="crispEdges">
                {letter.blocks.map((box) => (
                  <rect key={`${box.x}-${box.y}`} x={box.x} y={box.y} width={box.w} height={box.h} />
                ))}
              </g>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
