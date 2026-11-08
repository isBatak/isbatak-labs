import { Slider } from "@isbatak/react-ui/slider"

export function SliderDisabledDemo() {
  return (
    <Slider.Root defaultValue={[40]} disabled width="full" maxW="xs">
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
