import { Stack } from "@isbatak/react-ui/stack"
import { Textarea } from "@isbatak/react-ui/textarea"

export function TextareaVariantsDemo() {
  return (
    <Stack gap="3" w="full" maxW="sm">
      <Textarea variant="outline" placeholder="Outline" />
      <Textarea variant="subtle" placeholder="Subtle" />
      <Textarea variant="plain" placeholder="Plain" />
      <Textarea variant="flushed" placeholder="Flushed" />
    </Stack>
  )
}
