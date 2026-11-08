import { Slider } from "@isbatak/react-ui/slider"
import { Stack } from "styled-system/jsx"

export function SliderSizesDemo() {
  return (
    <Stack gap="6" width="full" maxW="xs">
      <Slider.Root defaultValue={[40]} size="sm">
        <Slider.Label>size sm</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Slider.Root defaultValue={[40]} size="md">
        <Slider.Label>size md</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Slider.Root defaultValue={[40]} size="lg">
        <Slider.Label>size lg</Slider.Label>
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
