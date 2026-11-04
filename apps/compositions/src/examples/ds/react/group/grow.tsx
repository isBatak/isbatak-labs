import { Button } from "@isbatak/react-ui/button"
import { Group } from "@isbatak/react-ui/group"

export function GroupGrowDemo() {
  return (
    <Group grow w="full" maxW="sm">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </Group>
  )
}
