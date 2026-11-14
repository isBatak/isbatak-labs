import { ProgressCircle } from "@isbatak/solid-ui/progress-circle"
import { AbsoluteCenter } from "@isbatak/solid-ui/absolute-center"

export function ProgressCircleWithValueTextDemo() {
  return (
    <ProgressCircle.Root size="xl" defaultValue={65}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
      <AbsoluteCenter>
        <ProgressCircle.ValueText />
      </AbsoluteCenter>
    </ProgressCircle.Root>
  )
}
