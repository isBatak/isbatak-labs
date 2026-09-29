import { createContext, type ReactNode, useContext } from "react"
import { useCurrentFrame, useVideoConfig } from "remotion"

import type { Rect } from "../lib/motion"
import { type Camera, toScreen, type Viewport } from "./camera"
import { camera } from "./shots"

export interface Stage {
  frame: number
  fps: number
  width: number
  height: number
  viewport: Viewport
  tall: boolean
  cam: Camera
  scale: number
  screen: (rect: Rect) => Rect
}

const StageContext = createContext<Stage | null>(null)

export function labelScale(zoom: number, tall: boolean) {
  return Math.max(zoom * 1.15, tall ? 1.6 : 1.4)
}

export function StageProvider({ children }: { children: ReactNode }) {
  const frame = useCurrentFrame()
  const { width, height, fps } = useVideoConfig()
  const viewport = { width, height }
  const tall = height > width
  const cam = camera(frame, tall)

  const stage: Stage = {
    frame,
    fps,
    width,
    height,
    viewport,
    tall,
    cam,
    scale: labelScale(cam.zoom, tall),
    screen: (rect) => toScreen(rect, cam, viewport),
  }

  return <StageContext.Provider value={stage}>{children}</StageContext.Provider>
}

export function useStage() {
  const stage = useContext(StageContext)
  if (!stage) throw new Error("useStage must be used inside <StageProvider>")
  return stage
}
