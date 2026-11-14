import { ProgressCircle } from "@isbatak/react-ui/progress-circle"
import { HStack } from "@isbatak/react-ui/stack"

export function ProgressCircleSizesDemo() {
  return (
    <HStack gap="6">
      <ProgressCircle.Root size="xs" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root size="sm" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root size="md" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root size="lg" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root size="xl" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root size="2xl" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </HStack>
  )
}
