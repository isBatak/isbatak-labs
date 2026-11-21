import { Box } from "@isbatak/react-ui/box"
import { useVideoConfig } from "remotion"

import { Sprite } from "./button"
import { Stage } from "./layers/stage"
import { Toggle } from "./layers/toggle"

export function Promo() {
  const { width, height } = useVideoConfig()
  const unit = Math.min(width, height) / 1080

  return (
    <Box position="absolute" inset="0" bg="bg.subtle" color="fg" overflow="hidden">
      <Sprite />
      <Box position="absolute" inset="0" style={{ zoom: unit }}>
        <Stage />
        <Toggle />
      </Box>
    </Box>
  )
}
