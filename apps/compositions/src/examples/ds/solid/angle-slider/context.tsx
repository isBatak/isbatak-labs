import { AngleSlider } from "@isbatak/solid-ui/angle-slider"

export function AngleSliderContextDemo() {
  return (
    <AngleSlider.Root>
      <AngleSlider.Context>
        {(context) => <AngleSlider.Label>{context().value} degrees</AngleSlider.Label>}
      </AngleSlider.Context>
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
  )
}
