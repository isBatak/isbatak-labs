import { Slider } from "@isbatak/solid-ui/slider"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function SliderControlledDemo() {
  const [value, setValue] = createSignal([40])

  return (
    <Stack gap="3" width="full" maxW="xs">
      <Slider.Root value={value()} onValueChange={(details) => setValue(details.value)}>
        <Slider.Label>Volume</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <Text textStyle="sm" color="fg.muted">
        Value: {value()[0]}
      </Text>
    </Stack>
  )
}
