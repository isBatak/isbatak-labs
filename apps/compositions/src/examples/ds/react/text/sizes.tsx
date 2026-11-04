import { Stack } from "@isbatak/react-ui/stack"
import { Text } from "@isbatak/react-ui/text"

export function TextSizesDemo() {
  return (
    <Stack>
      <Text textStyle="xs">Extra small</Text>
      <Text textStyle="sm">Small</Text>
      <Text textStyle="md">Medium</Text>
      <Text textStyle="lg">Large</Text>
      <Text textStyle="xl">Extra large</Text>
      <Text textStyle="2xl">2x large</Text>
    </Stack>
  )
}
