import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"

export function FieldInvalidDemo() {
  return (
    <Field.Root invalid maxW="xs">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
      <Field.ErrorText>This field is required.</Field.ErrorText>
    </Field.Root>
  )
}
