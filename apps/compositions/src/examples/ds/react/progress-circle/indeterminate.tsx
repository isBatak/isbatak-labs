import { ProgressCircle } from "@isbatak/react-ui/progress-circle"

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
