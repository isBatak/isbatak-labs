import { Slider } from "@isbatak/solid-ui/slider"

const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export function SliderStepDemo() {
  return (
    <Slider.Root defaultValue={[40]} step={10} width="full" maxW="xs">
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks marks={marks} />
      </Slider.Control>
    </Slider.Root>
  )
}
