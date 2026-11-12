import { Badge } from "@isbatak/react-ui/badge"
import { Group } from "@isbatak/react-ui/group"

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
