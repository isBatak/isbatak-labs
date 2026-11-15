import { AngleSlider } from "@isbatak/solid-ui/angle-slider"
import { HStack } from "@isbatak/solid-ui/stack"

export function AngleSliderSizesDemo() {
  return (
    <HStack gap="8" alignItems="flex-start">
      <AngleSlider.Root size="sm">
        <AngleSlider.Label>size sm</AngleSlider.Label>
        <AngleSlider.Control>
          <AngleSlider.MarkerGroup>
            <AngleSlider.Marker value={0} />
            <AngleSlider.Marker value={45} />
            <AngleSlider.Marker value={90} />
            <AngleSlider.Marker value={135} />
            <AngleSlider.Marker value={180} />
            <AngleSlider.Marker value={225} />
            <AngleSlider.Marker value={270} />
            <AngleSlider.Marker value={315} />
          </AngleSlider.MarkerGroup>
          <AngleSlider.Thumb />
        </AngleSlider.Control>
        <AngleSlider.ValueText />
        <AngleSlider.HiddenInput />
      </AngleSlider.Root>
      <AngleSlider.Root size="md">
        <AngleSlider.Label>size md</AngleSlider.Label>
        <AngleSlider.Control>
          <AngleSlider.MarkerGroup>
            <AngleSlider.Marker value={0} />
            <AngleSlider.Marker value={45} />
            <AngleSlider.Marker value={90} />
            <AngleSlider.Marker value={135} />
            <AngleSlider.Marker value={180} />
            <AngleSlider.Marker value={225} />
            <AngleSlider.Marker value={270} />
            <AngleSlider.Marker value={315} />
          </AngleSlider.MarkerGroup>
          <AngleSlider.Thumb />
        </AngleSlider.Control>
        <AngleSlider.ValueText />
        <AngleSlider.HiddenInput />
      </AngleSlider.Root>
      <AngleSlider.Root size="lg">
        <AngleSlider.Label>size lg</AngleSlider.Label>
        <AngleSlider.Control>
          <AngleSlider.MarkerGroup>
            <AngleSlider.Marker value={0} />
            <AngleSlider.Marker value={45} />
            <AngleSlider.Marker value={90} />
            <AngleSlider.Marker value={135} />
            <AngleSlider.Marker value={180} />
            <AngleSlider.Marker value={225} />
            <AngleSlider.Marker value={270} />
            <AngleSlider.Marker value={315} />
          </AngleSlider.MarkerGroup>
          <AngleSlider.Thumb />
        </AngleSlider.Control>
        <AngleSlider.ValueText />
        <AngleSlider.HiddenInput />
      </AngleSlider.Root>
    </HStack>
  )
}
