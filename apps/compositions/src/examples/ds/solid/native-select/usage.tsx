import { NativeSelect } from "@isbatak/solid-ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect.Root maxW="xs">
      <NativeSelect.Field aria-label="Framework">
        <option value="">Select framework</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="solid">Solid</option>
        <option value="svelte">Svelte</option>
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  )
}
