import { ProgressCircle } from "@isbatak/solid-ui/progress-circle"

export function ProgressCircleIndeterminateDemo() {
  return (
    <ProgressCircle.Root value={null}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}
