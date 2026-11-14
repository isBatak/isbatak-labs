import { Progress } from "@isbatak/solid-ui/progress"
import { VStack } from "@isbatak/solid-ui/stack"

export function ProgressVariantsDemo() {
  return (
    <VStack gap="6">
      <Progress.Root variant="outline" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root variant="subtle" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </VStack>
  )
}
