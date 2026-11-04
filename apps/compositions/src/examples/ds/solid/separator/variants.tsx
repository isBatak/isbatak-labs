import { Separator } from "@isbatak/solid-ui/separator"
import { Stack } from "@isbatak/solid-ui/stack"

export function SeparatorVariantsDemo() {
  return (
    <Stack gap="4" w="full" maxW="sm">
      <Separator variant="solid" />
      <Separator variant="dashed" />
      <Separator variant="dotted" />
    </Stack>
  )
}
