import { Field } from "@isbatak/solid-ui/field"
import { NativeSelect } from "@isbatak/solid-ui/native-select"

export function NativeSelectWithFieldDemo() {
  return (
    <Field.Root maxW="xs">
      <Field.Label>Framework</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field>
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <Field.HelperText>The framework your project uses.</Field.HelperText>
    </Field.Root>
  )
}
