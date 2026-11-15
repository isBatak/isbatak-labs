import { Spinner } from "@isbatak/react-ui/spinner"
import { HStack } from "styled-system/jsx"

export function SpinnerWithTrackDemo() {
  return (
    <HStack gap="5">
      <Spinner size="lg" showTrack colorPalette="blue" color="colorPalette.solid" />
      <Spinner size="lg" showTrack colorPalette="green" color="colorPalette.solid" />
      <Spinner size="lg" showTrack colorPalette="red" color="colorPalette.solid" />
    </HStack>
  )
}
