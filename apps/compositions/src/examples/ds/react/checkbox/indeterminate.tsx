import { Checkbox } from "@isbatak/react-ui/checkbox"

export function CheckboxIndeterminateDemo() {
  return (
    <Checkbox.Root defaultChecked="indeterminate">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Select all</Checkbox.Label>
    </Checkbox.Root>
  )
}
