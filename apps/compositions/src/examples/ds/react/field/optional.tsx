import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"

export function FieldOptionalDemo() {
  return (
    <Field.Root maxW="xs">
      <Field.Label>
        Phone
        <Field.OptionalText />
      </Field.Label>
      <Input placeholder="+385 1 234 567" />
    </Field.Root>
  )
}
