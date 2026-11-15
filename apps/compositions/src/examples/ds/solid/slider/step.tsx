import { Slider } from "@isbatak/solid-ui/slider"
import { Stack } from "@isbatak/solid-ui/stack"

const marks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export function SliderStepDemo() {
  return (
    <Stack gap="6" width="full" maxW="xs">
      <Slider.Root defaultValue={[40]} step={10}>
        <Slider.Label>Volume</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
          <Slider.Marks marks={marks} />
        </Slider.Control>
      </Slider.Root>
      <Slider.Root defaultValue={[40]} step={10} variant="field">
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
          <Slider.Marks marks={marks} />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  )
}
