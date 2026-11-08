import { NativeSelect } from "@isbatak/react-ui/native-select"
import { Stack } from "styled-system/jsx"

export function NativeSelectVariantsDemo() {
  return (
    <Stack gap="4" w="full" maxW="xs">
      <NativeSelect.Root variant="outline">
        <NativeSelect.Field aria-label="Variant outline">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root variant="subtle">
        <NativeSelect.Field aria-label="Variant subtle">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root variant="plain">
        <NativeSelect.Field aria-label="Variant plain">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root variant="ghost">
        <NativeSelect.Field aria-label="Variant ghost">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Stack>
  )
}
