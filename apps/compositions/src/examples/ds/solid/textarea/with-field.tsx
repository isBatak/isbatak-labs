import { Field } from "@isbatak/solid-ui/field"
import { Textarea } from "@isbatak/solid-ui/textarea"

export function TextareaWithFieldDemo() {
  return (
    <Field.Root maxW="sm">
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself" />
      <Field.HelperText>Max 500 characters.</Field.HelperText>
    </Field.Root>
  )
}
