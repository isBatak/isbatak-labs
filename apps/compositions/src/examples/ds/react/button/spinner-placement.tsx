import { Button } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

export function ButtonSpinnerPlacementDemo() {
  return (
    <HStack gap="4">
      <Button loading loadingText="Loading" spinnerPlacement="start">
        Submit
      </Button>
      <Button loading loadingText="Loading" spinnerPlacement="end">
        Continue
      </Button>
    </HStack>
  )
}
