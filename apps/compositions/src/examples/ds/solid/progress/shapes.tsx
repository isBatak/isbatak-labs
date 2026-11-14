import { Progress } from "@isbatak/solid-ui/progress"
import { VStack } from "@isbatak/solid-ui/stack"

export function ProgressShapesDemo() {
  return (
    <VStack gap="6">
      <Progress.Root shape="square" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root shape="rounded" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root shape="full" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </VStack>
  )
}
