import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"

export function FieldDisabledDemo() {
  return (
    <Field.Root disabled maxW="xs">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
