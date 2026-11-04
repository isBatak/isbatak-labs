import { Code } from "@isbatak/solid-ui/code"
import { Stack } from "@isbatak/solid-ui/stack"

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
