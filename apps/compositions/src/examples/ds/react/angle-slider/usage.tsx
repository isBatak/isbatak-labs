import { AngleSlider } from "@isbatak/react-ui/angle-slider"

export function AngleSliderDemo() {
  return (
    <AngleSlider.Root>
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
    </AngleSlider.Root>
  )
}
