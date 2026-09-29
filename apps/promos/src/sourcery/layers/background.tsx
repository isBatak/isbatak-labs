import { AbsoluteFill } from "remotion"

import { useStage } from "../stage/context"

export function Background() {
  const { cam } = useStage()

  return (
    <AbsoluteFill
      style={{
        backgroundImage: "radial-gradient(circle, #e4e4e7 1.2px, transparent 1.4px)",
        backgroundSize: "32px 32px",
        backgroundPosition: `${-cam.x * 0.08}px ${-cam.y * 0.08}px`,
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
        opacity: 0.9,
      }}
    />
  )
}
