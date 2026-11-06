import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"

export function FieldRequiredDemo() {
  return (
    <Field.Root required maxW="xs">
      <Field.Label>
        Email
        <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
