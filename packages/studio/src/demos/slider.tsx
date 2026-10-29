import { Slider } from "@isbatak/react-ui/slider"

import type { SampleProps } from "./types"

export function SliderSample(props: SampleProps) {
  return (
    <Slider.Root defaultValue={[40]} w="full" {...props}>
      <Slider.Label>Volume</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
