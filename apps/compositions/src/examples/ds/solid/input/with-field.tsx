import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"

export function InputWithFieldDemo() {
  return (
    <Field.Root maxW="xs">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
      <Field.HelperText>We'll never share your email.</Field.HelperText>
    </Field.Root>
  )
}
