import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"

export function FieldDisabledDemo() {
  return (
    <Field.Root disabled maxW="xs">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
