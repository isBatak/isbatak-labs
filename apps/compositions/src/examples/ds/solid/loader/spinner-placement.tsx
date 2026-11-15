import { Loader } from "@isbatak/solid-ui/loader"
import { HStack } from "@isbatak/solid-ui/stack"

export function LoaderSpinnerPlacementDemo() {
  return (
    <HStack gap="6" textStyle="sm" fontWeight="medium">
      <HStack gap="2">
        <Loader text="Loading…" spinnerPlacement="start" />
      </HStack>
      <HStack gap="2">
        <Loader text="Loading…" spinnerPlacement="end" />
      </HStack>
    </HStack>
  )
}
