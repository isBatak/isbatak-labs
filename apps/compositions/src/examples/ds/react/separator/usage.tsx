import { Separator } from "@isbatak/react-ui/separator"
import { Stack } from "@isbatak/react-ui/stack"

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
