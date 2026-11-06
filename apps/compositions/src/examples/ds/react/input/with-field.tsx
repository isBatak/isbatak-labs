import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"

export function InputWithFieldDemo() {
  return (
    <Field.Root maxW="xs">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
      <Field.HelperText>We'll never share your email.</Field.HelperText>
    </Field.Root>
  )
}
