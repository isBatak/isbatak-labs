import { Badge } from "@isbatak/react-ui/badge"
import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import { HStack } from "styled-system/jsx"

export function BadgeWithIconDemo() {
  return (
    <HStack gap="2">
      <Badge variant="solid" colorPalette="blue">
        <StartIcon asChild>
          <Icon name="star" />
        </StartIcon>
        New
      </Badge>
      <Badge variant="surface" colorPalette="green">
        <StartIcon asChild>
          <Icon name="check-circle" />
        </StartIcon>
        Verified
      </Badge>
      <Badge variant="outline" colorPalette="yellow">
        Expiring
        <EndIcon asChild>
          <Icon name="warning" />
        </EndIcon>
      </Badge>
    </HStack>
  )
}
