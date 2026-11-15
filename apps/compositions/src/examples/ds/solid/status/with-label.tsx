import { Status } from "@isbatak/solid-ui/status"
import { VStack } from "@isbatak/solid-ui/stack"

export function StatusWithLabelDemo() {
  return (
    <VStack gap="3" alignItems="flex-start">
      <Status.Root colorPalette="green">
        <Status.Indicator />
        Online
      </Status.Root>
      <Status.Root colorPalette="red">
        <Status.Indicator />
        Offline
      </Status.Root>
      <Status.Root colorPalette="yellow">
        <Status.Indicator />
        Away
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
        In a meeting
      </Status.Root>
    </VStack>
  )
}
