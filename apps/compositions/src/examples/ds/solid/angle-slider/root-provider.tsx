import { Button } from "@isbatak/solid-ui/button"
import { AngleSlider, useAngleSlider } from "@isbatak/solid-ui/angle-slider"
import { Stack } from "@isbatak/solid-ui/stack"

export function AngleSliderRootProviderDemo() {
  const angleSlider = useAngleSlider()

  return (
    <Stack gap="4" align="center">
      <AngleSlider.RootProvider value={angleSlider}>
        <AngleSlider.Label>Rotation</AngleSlider.Label>
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
      </AngleSlider.RootProvider>
      <Button variant="outline" size="sm" onClick={() => angleSlider().setValue(90)}>
        Set to 90
      </Button>
    </Stack>
  )
}
