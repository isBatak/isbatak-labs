import { ColorSwatch } from "@isbatak/solid-ui/color-swatch"
import { HStack } from "@isbatak/solid-ui/stack"

export function ColorSwatchSizesDemo() {
  return (
    <HStack gap="2">
      <ColorSwatch value="oklch(0.62 0.19 260)" size="2xs" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xs" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="sm" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="md" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="lg" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="xl" />
      <ColorSwatch value="oklch(0.62 0.19 260)" size="2xl" />
    </HStack>
  )
}
