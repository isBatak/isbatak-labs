import { Progress } from "@isbatak/react-ui/progress"
import { VStack } from "@isbatak/react-ui/stack"

export function ProgressColorsDemo() {
  return (
    <VStack gap="6">
      <Progress.Root colorPalette="gray" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root colorPalette="red" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root colorPalette="green" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      <Progress.Root colorPalette="blue" defaultValue={40} w="full" maxW="xs">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </VStack>
  )
}
