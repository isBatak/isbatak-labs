import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"

export function TextWeightsDemo() {
  return (
    <Stack>
      <Text fontWeight="light">Light</Text>
      <Text fontWeight="normal">Normal</Text>
      <Text fontWeight="medium">Medium</Text>
      <Text fontWeight="semibold">Semibold</Text>
      <Text fontWeight="bold">Bold</Text>
    </Stack>
  )
}
