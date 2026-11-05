import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"

export function ButtonVariantsDemo() {
  return (
    <HStack flexWrap="wrap" gap="4">
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  )
}
