import { ProgressCircle } from "@isbatak/solid-ui/progress-circle"
import { HStack } from "@isbatak/solid-ui/stack"

export function ProgressCircleRoundDemo() {
  return (
    <HStack gap="6">
      <ProgressCircle.Root defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root defaultValue={65} round>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </HStack>
  )
}
