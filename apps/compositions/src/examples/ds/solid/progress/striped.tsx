import { Progress } from "@isbatak/solid-ui/progress"
import { VStack } from "@isbatak/solid-ui/stack"

export function ProgressStripedDemo() {
  return (
    <VStack gap="6">
      <Progress.Root striped defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root striped animated defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </VStack>
  )
}
