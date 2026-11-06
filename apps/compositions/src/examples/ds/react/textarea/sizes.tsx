import { Stack } from "@isbatak/react-ui/stack"
import { Textarea } from "@isbatak/react-ui/textarea"

export function TextareaSizesDemo() {
  return (
    <Stack gap="3" w="full" maxW="sm">
      <Textarea size="xs" placeholder="size (xs)" />
      <Textarea size="sm" placeholder="size (sm)" />
      <Textarea size="md" placeholder="size (md)" />
      <Textarea size="lg" placeholder="size (lg)" />
    </Stack>
  )
}
