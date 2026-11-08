import { Slider } from "@isbatak/solid-ui/slider"

export function SliderRangeDemo() {
  return (
    <Slider.Root defaultValue={[30, 70]} width="full" maxW="xs">
      <Slider.Label>Price range</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
