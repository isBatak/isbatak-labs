import { Status } from "@isbatak/solid-ui/status"
import { HStack } from "@isbatak/solid-ui/stack"

export function StatusDemo() {
  return (
    <HStack gap="6">
      <Status.Root colorPalette="green">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="red">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="yellow">
        <Status.Indicator />
      </Status.Root>
      <Status.Root colorPalette="blue">
        <Status.Indicator />
      </Status.Root>
    </HStack>
  )
}
