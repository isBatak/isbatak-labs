import { Badge } from "@isbatak/solid-ui/badge"
import { EndIcon, Icon, StartIcon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function BadgeWithIconDemo() {
  return (
    <HStack gap="2">
      <Badge variant="solid" colorPalette="blue">
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="star" />} />
        New
      </Badge>
      <Badge variant="surface" colorPalette="green">
        <StartIcon asChild={(iconProps) => <Icon {...iconProps()} name="check-circle" />} />
        Verified
      </Badge>
      <Badge variant="outline" colorPalette="yellow">
        Expiring
        <EndIcon asChild={(iconProps) => <Icon {...iconProps()} name="warning" />} />
      </Badge>
    </HStack>
  )
}
