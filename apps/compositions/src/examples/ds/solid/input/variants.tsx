import { Input } from "@isbatak/solid-ui/input"
import { Stack } from "@isbatak/solid-ui/stack"

export function InputVariantsDemo() {
  return (
    <Stack gap="3" w="full" maxW="xs">
      <Input variant="outline" placeholder="Outline" />
      <Input variant="subtle" placeholder="Subtle" />
      <Input variant="plain" placeholder="Plain" />
      <Input variant="flushed" placeholder="Flushed" />
    </Stack>
  )
}
