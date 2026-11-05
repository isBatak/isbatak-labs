import { Button } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

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
