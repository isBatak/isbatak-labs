import { Progress } from "@isbatak/solid-ui/progress"

export function ProgressWithLabelDemo() {
  return (
    <Progress.Root defaultValue={40} w="full" maxW="xs">
      <Progress.Label>Uploading</Progress.Label>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
