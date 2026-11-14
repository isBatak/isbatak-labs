import { Progress } from "@isbatak/solid-ui/progress"
import { HStack } from "@isbatak/solid-ui/stack"

export function ProgressWithValueTextDemo() {
  return (
    <Progress.Root defaultValue={40} w="full" maxW="xs">
      <HStack justify="space-between">
        <Progress.Label>Upload</Progress.Label>
        <Progress.ValueText />
      </HStack>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
