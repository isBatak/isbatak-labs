import { ProgressCircle } from "@isbatak/react-ui/progress-circle"

export function ProgressCircleWithLabelDemo() {
  return (
    <ProgressCircle.Root defaultValue={65} gap="2" alignItems="center">
      <ProgressCircle.Label>Upload</ProgressCircle.Label>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}
