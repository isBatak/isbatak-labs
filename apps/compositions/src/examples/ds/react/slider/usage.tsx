import { Slider } from "@isbatak/react-ui/slider"
import { HStack } from "styled-system/jsx"

export function SliderDemo() {
  return (
    <Slider.Root defaultValue={[40]} width="full" maxW="xs">
      <HStack justify="space-between">
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
      </HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
