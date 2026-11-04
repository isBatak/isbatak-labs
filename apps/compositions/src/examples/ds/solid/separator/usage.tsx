import { Separator } from "@isbatak/solid-ui/separator"
import { Stack } from "@isbatak/solid-ui/stack"

export function SeparatorDemo() {
  return (
    <Stack w="full" maxW="sm" color="fg.muted">
      First
      <Separator />
      Second
      <Separator />
      Third
    </Stack>
  )
}
