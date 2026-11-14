import { ProgressCircle } from "@isbatak/solid-ui/progress-circle"

export function ProgressCircleDemo() {
  return (
    <ProgressCircle.Root defaultValue={65}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}
