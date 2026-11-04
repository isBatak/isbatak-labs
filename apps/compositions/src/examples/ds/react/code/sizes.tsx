import { Code } from "@isbatak/react-ui/code"
import { Stack } from "@isbatak/react-ui/stack"

export function CodeSizesDemo() {
  return (
    <Stack gap="2" align="flex-start">
      <Code size="xs">console.log()</Code>
      <Code size="sm">console.log()</Code>
      <Code size="md">console.log()</Code>
      <Code size="lg">console.log()</Code>
    </Stack>
  )
}
