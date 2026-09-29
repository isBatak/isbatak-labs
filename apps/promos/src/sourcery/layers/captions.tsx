import type { ReactNode } from "react"

import { useStage } from "../stage/context"

export function captionPlacement(tall: boolean) {
  return tall ? { left: 64, top: 90, size: 70 } : { left: 96, top: 72, size: 72 }
}

export function CaptionSlot({ children }: { children: ReactNode }) {
  const { tall } = useStage()
  const at = captionPlacement(tall)
  return <div style={{ position: "absolute", left: at.left, top: at.top, right: at.left }}>{children}</div>
}
