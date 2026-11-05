import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"

export function ButtonAccessibleWhenDisabledDemo() {
  return (
    <HStack gap="4">
      <Button disabled>Native disabled</Button>
      <Button disabled accessibleWhenDisabled>
        Still focusable
      </Button>
    </HStack>
  )
}
