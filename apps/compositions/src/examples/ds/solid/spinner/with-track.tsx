import { Spinner } from "@isbatak/solid-ui/spinner"
import { HStack } from "@isbatak/solid-ui/stack"

export function SpinnerWithTrackDemo() {
  return (
    <HStack gap="5">
      <Spinner size="lg" showTrack colorPalette="blue" color="colorPalette.solid" />
      <Spinner size="lg" showTrack colorPalette="green" color="colorPalette.solid" />
      <Spinner size="lg" showTrack colorPalette="red" color="colorPalette.solid" />
    </HStack>
  )
}
