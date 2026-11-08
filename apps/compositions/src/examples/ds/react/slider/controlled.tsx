import { Slider } from "@isbatak/react-ui/slider"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function SliderControlledDemo() {
  const [value, setValue] = useState([40])

  return (
    <Stack gap="3" width="full" maxW="xs">
      <Slider.Root value={value} onValueChange={(details) => setValue(details.value)}>
        <Slider.Label>Volume</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
      <styled.p textStyle="sm" color="fg.muted">
        Value: {value[0]}
      </styled.p>
    </Stack>
  )
}
