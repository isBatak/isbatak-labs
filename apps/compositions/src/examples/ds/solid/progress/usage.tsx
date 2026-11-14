import { Progress } from "@isbatak/solid-ui/progress"

export function ProgressDemo() {
  return (
    <Progress.Root defaultValue={40} w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
