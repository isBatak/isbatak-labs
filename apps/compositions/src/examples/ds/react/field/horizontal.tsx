import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"
import { Stack } from "@isbatak/react-ui/stack"

export function FieldHorizontalDemo() {
  return (
    <Stack gap="4" w="full" maxW="sm">
      <Field.Root orientation="horizontal">
        <Field.Label>Name</Field.Label>
        <Input placeholder="Jane Doe" flex="1" />
      </Field.Root>
      <Field.Root orientation="horizontal">
        <Field.Label>Email</Field.Label>
        <Input placeholder="me@example.com" flex="1" />
      </Field.Root>
    </Stack>
  )
}
