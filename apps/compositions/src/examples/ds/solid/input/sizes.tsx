import { Input } from "@isbatak/solid-ui/input"
import { Stack } from "@isbatak/solid-ui/stack"

export function InputSizesDemo() {
  return (
    <Stack gap="3" w="full" maxW="xs">
      <Input size="xs" placeholder="size (xs)" />
      <Input size="sm" placeholder="size (sm)" />
      <Input size="md" placeholder="size (md)" />
      <Input size="lg" placeholder="size (lg)" />
    </Stack>
  )
}
