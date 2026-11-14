import { ProgressCircle } from "@isbatak/react-ui/progress-circle"
import { HStack } from "@isbatak/react-ui/stack"

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
