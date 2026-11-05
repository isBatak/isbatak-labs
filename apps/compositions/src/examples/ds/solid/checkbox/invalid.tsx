import { Checkbox } from "@isbatak/solid-ui/checkbox"

export function CheckboxInvalidDemo() {
  return (
    <Checkbox.Root invalid>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>I agree to the terms</Checkbox.Label>
    </Checkbox.Root>
  )
}
