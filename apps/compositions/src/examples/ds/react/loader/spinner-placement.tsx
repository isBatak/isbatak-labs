import { Loader } from "@isbatak/react-ui/loader"
import { HStack } from "styled-system/jsx"

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
