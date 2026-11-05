import { Checkbox } from "@isbatak/react-ui/checkbox"
import { Stack } from "@isbatak/react-ui/stack"

export function CheckboxDisabledDemo() {
  return (
    <Stack gap="4" align="flex-start">
      <Checkbox.Root disabled>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Disabled and checked</Checkbox.Label>
      </Checkbox.Root>
    </Stack>
  )
}
