import { Button } from "@isbatak/solid-ui/button"
import { Group } from "@isbatak/solid-ui/group"

export function GroupDemo() {
  return (
    <Group attached>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </Group>
  )
}
