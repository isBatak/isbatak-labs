"use client"

import { Badge, BadgeEndIcon, BadgeStartIcon } from "@isbatak/react-ui/badge"
import { Icon } from "@isbatak/react-ui/icon"
import { HStack } from "styled-system/jsx"

export function BadgeWithIconDemo() {
  return (
    <HStack gap="2">
      <Badge variant="solid" colorPalette="blue">
        <BadgeStartIcon asChild>
          <Icon name="star" />
        </BadgeStartIcon>
        New
      </Badge>
      <Badge variant="surface" colorPalette="green">
        <BadgeStartIcon asChild>
          <Icon name="check-circle" />
        </BadgeStartIcon>
        Verified
      </Badge>
      <Badge variant="outline" colorPalette="yellow">
        Expiring
        <BadgeEndIcon asChild>
          <Icon name="warning" />
        </BadgeEndIcon>
      </Badge>
    </HStack>
  )
}
