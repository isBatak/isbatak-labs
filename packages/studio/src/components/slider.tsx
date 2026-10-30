import { Slider } from "@isbatak/react-ui/slider"
import { slider } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const sliderMatrix = defineComponentMatrix({
  recipe: slider,
  render: (props) => (
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
  ),
})
