import { Slider } from "@isbatak/react-ui/slider"

import { Section, Stack } from "../canvas/layout"
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

export function SliderDemo() {
  return (
    <>
      <Section title="Basic">
        <SliderSample />
      </Section>
      <Section title="Marks">
        <Slider.Root defaultValue={[50]}>
          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0}>
              <Slider.HiddenInput />
            </Slider.Thumb>
            <Slider.MarkerGroup>
              <Slider.Marker value={0}>
                <Slider.MarkerIndicator />
                <Slider.MarkerLabel>0%</Slider.MarkerLabel>
              </Slider.Marker>
              <Slider.Marker value={50}>
                <Slider.MarkerIndicator />
                <Slider.MarkerLabel>50%</Slider.MarkerLabel>
              </Slider.Marker>
              <Slider.Marker value={100}>
                <Slider.MarkerIndicator />
                <Slider.MarkerLabel>100%</Slider.MarkerLabel>
              </Slider.Marker>
            </Slider.MarkerGroup>
          </Slider.Control>
        </Slider.Root>
      </Section>
      <Section title="Variants">
        <Stack>
          <SliderSample variant="outline" />
          <SliderSample variant="solid" />
        </Stack>
      </Section>
    </>
  )
}
