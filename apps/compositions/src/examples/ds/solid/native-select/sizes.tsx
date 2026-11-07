import { NativeSelect } from "@isbatak/solid-ui/native-select"
import { Stack } from "@isbatak/solid-ui/stack"

export function NativeSelectSizesDemo() {
  return (
    <Stack gap="4" w="full" maxW="xs">
      <NativeSelect.Root size="xs">
        <NativeSelect.Field aria-label="Size xs">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root size="sm">
        <NativeSelect.Field aria-label="Size sm">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root size="md">
        <NativeSelect.Field aria-label="Size md">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root size="lg">
        <NativeSelect.Field aria-label="Size lg">
          <option value="">Select framework</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="solid">Solid</option>
          <option value="svelte">Svelte</option>
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
      <NativeSelect.Root size="xl">
        <NativeSelect.Field aria-label="Size xl">
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
