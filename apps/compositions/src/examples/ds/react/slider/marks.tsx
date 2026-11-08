import { Slider } from "@isbatak/react-ui/slider"

const marks = [
  { value: 0, label: "0%" },
  { value: 50, label: "50%" },
  { value: 100, label: "100%" },
]

export function SliderMarksDemo() {
  return (
    <Slider.Root defaultValue={[50]} width="full" maxW="xs">
      <Slider.Label>Opacity</Slider.Label>
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
