import { setIconSprite } from "@isbatak/icons"
import { useCurrentFrame } from "remotion"

import boring from "../../public/icons/boring.svg?raw"
import lucide from "../../public/icons/lucide.svg?raw"
import material from "../../public/icons/material.svg?raw"
import phosphor from "../../public/icons/phosphor.svg?raw"
import pixel from "../../public/icons/pixel.svg?raw"
import { SWAPS, type IconSet } from "./theme"

setIconSprite("")

const SPRITES: Record<IconSet, string> = { boring, lucide, phosphor, material, pixel }

export function activeSwap(frame: number) {
  return SWAPS.findLast(([start]) => start <= frame) ?? SWAPS[0]
}

export function useIconSet() {
  return activeSwap(useCurrentFrame())[1]
}

export function Sprite() {
  const set = useIconSet()
  return (
    <div
      aria-hidden
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: SPRITES[set].replace(/^<\?xml[^>]*>/, "") }}
    />
  )
}
