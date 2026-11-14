import { ProgressCircle } from "@isbatak/react-ui/progress-circle"
import { AbsoluteCenter } from "@isbatak/react-ui/absolute-center"

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
