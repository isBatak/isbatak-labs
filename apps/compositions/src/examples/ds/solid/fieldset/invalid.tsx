import { Field } from "@isbatak/solid-ui/field"
import { Fieldset } from "@isbatak/solid-ui/fieldset"
import { Input } from "@isbatak/solid-ui/input"

export function FieldsetInvalidDemo() {
  return (
    <Fieldset.Root invalid maxW="md">
      <Fieldset.Legend>Shipping</Fieldset.Legend>
      <Fieldset.Content>
        <Field.Root invalid>
          <Field.Label>Address</Field.Label>
          <Input />
        </Field.Root>
      </Fieldset.Content>
      <Fieldset.ErrorText>Fill in a shipping address.</Fieldset.ErrorText>
    </Fieldset.Root>
  )
}
