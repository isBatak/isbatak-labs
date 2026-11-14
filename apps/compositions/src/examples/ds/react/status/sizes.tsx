import { Status } from "@isbatak/react-ui/status"
import { VStack } from "@isbatak/react-ui/stack"

export function StatusSizesDemo() {
  return (
    <VStack gap="3" alignItems="flex-start">
      <Status.Root size="sm" colorPalette="green">
        <Status.Indicator />
        Size sm
      </Status.Root>
      <Status.Root size="md" colorPalette="green">
        <Status.Indicator />
        Size md
      </Status.Root>
      <Status.Root size="lg" colorPalette="green">
        <Status.Indicator />
        Size lg
      </Status.Root>
    </VStack>
  )
}
