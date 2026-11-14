import { Progress } from "@isbatak/react-ui/progress"

export function ProgressIndeterminateDemo() {
  return (
    <Progress.Root value={null} w="full" maxW="xs">
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
