import { ColorSwatch } from "@isbatak/react-ui/color-swatch"
import { HStack } from "styled-system/jsx"

export function ColorSwatchShapesDemo() {
  return (
    <HStack gap="2">
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="square" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="rounded" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" shape="circle" />
    </HStack>
  )
}
