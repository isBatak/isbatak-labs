import { Separator } from "@isbatak/solid-ui/separator"
import { HStack } from "@isbatak/solid-ui/stack"

export function SeparatorVerticalDemo() {
  return (
    <HStack gap="4" h="6" color="fg.muted">
      First
      <Separator orientation="vertical" />
      Second
      <Separator orientation="vertical" />
      Third
    </HStack>
  )
}
