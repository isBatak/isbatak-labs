import { Button } from "@isbatak/react-ui/button"
import { Group } from "@isbatak/react-ui/group"

export function GroupVerticalDemo() {
  return (
    <Group attached orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </Group>
  )
}
