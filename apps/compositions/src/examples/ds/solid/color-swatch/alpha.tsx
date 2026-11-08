import { ColorSwatch } from "@isbatak/solid-ui/color-swatch"
import { HStack } from "@isbatak/solid-ui/stack"

export function ColorSwatchAlphaDemo() {
  return (
    <HStack gap="2">
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" />
      <ColorSwatch value="oklch(0.62 0.19 260 / 0.6)" size="xl" />
      <ColorSwatch value="oklch(0.62 0.19 260 / 0.3)" size="xl" />
      <ColorSwatch value="transparent" size="xl" />
    </HStack>
  )
}
