import { Button } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

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
