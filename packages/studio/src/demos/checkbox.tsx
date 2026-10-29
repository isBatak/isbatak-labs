import { CheckIcon, Checkbox } from "./primitives"
import type { SampleProps } from "./types"

export function CheckboxSample(props: SampleProps) {
  return (
    <Checkbox.Root defaultChecked {...props}>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  )
}
