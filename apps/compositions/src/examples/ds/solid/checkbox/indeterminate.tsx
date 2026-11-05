import { Checkbox } from "@isbatak/solid-ui/checkbox"

export function CheckboxIndeterminateDemo() {
  return (
    <Checkbox.Root defaultChecked="indeterminate">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Select all</Checkbox.Label>
    </Checkbox.Root>
  )
}
