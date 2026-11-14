import { ProgressCircle } from "@isbatak/solid-ui/progress-circle"
import { HStack } from "@isbatak/solid-ui/stack"

export function ProgressCircleColorsDemo() {
  return (
    <HStack gap="6">
      <ProgressCircle.Root colorPalette="gray" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root colorPalette="red" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root colorPalette="green" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root colorPalette="blue" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
      <ProgressCircle.Root colorPalette="purple" defaultValue={65}>
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </HStack>
  )
}
