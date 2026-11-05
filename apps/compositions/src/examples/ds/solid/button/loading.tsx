import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"

export function ButtonLoadingDemo() {
  return (
    <HStack gap="4">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving…">
        Click me
      </Button>
    </HStack>
  )
}
