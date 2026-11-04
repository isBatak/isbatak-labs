import { Code } from "@isbatak/react-ui/code"
import { Stack } from "@isbatak/react-ui/stack"

export function CodeVariantsDemo() {
  return (
    <Stack gap="2" align="flex-start">
      <Code variant="solid">console.log()</Code>
      <Code variant="subtle">console.log()</Code>
      <Code variant="outline">console.log()</Code>
      <Code variant="surface">console.log()</Code>
      <Code variant="plain">console.log()</Code>
    </Stack>
  )
}
