import { Field } from "@isbatak/react-ui/field"
import { Fieldset } from "@isbatak/react-ui/fieldset"
import { Input } from "@isbatak/react-ui/input"

export function FieldsetDemo() {
  return (
    <Fieldset.Root size="lg" maxW="md">
      <Fieldset.Legend>Contact details</Fieldset.Legend>
      <Fieldset.HelperText>Please provide your contact details below.</Fieldset.HelperText>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input type="email" />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
