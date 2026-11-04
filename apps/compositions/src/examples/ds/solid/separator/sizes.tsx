import { Separator } from "@isbatak/solid-ui/separator"
import { Stack } from "@isbatak/solid-ui/stack"

export function SeparatorSizesDemo() {
  return (
    <Stack gap="4" w="full" maxW="sm">
      <Separator size="xs" />
      <Separator size="sm" />
      <Separator size="md" />
      <Separator size="lg" />
    </Stack>
  )
}
