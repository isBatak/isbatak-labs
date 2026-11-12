import { Badge } from "@isbatak/solid-ui/badge"
import { Group } from "@isbatak/solid-ui/group"

export function BadgeWithGroupDemo() {
  return (
    <Group attached>
      <Badge variant="solid" colorPalette="blue">
        Commit status
      </Badge>
      <Badge variant="solid" colorPalette="green">
        90+
      </Badge>
    </Group>
  )
}
