import { Progress } from "@isbatak/react-ui/progress"
import { HStack } from "@isbatak/react-ui/stack"

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
