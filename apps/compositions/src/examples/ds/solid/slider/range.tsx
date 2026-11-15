import { Slider } from "@isbatak/solid-ui/slider"
import { Stack } from "@isbatak/solid-ui/stack"

export function SliderRangeDemo() {
  return (
    <Stack gap="6" width="full" maxW="xs">
      <Slider.Root defaultValue={[30, 70]}>
        <Slider.Label>Price range</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Slider.Root defaultValue={[30, 70]} variant="field">
        <Slider.Label>Price range</Slider.Label>
        <Slider.ValueText />
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  )
}
