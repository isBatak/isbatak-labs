"use client"

import { Badge } from "@isbatak/react-ui/badge"
import { Stack, Wrap } from "styled-system/jsx"

export function BadgeStatusDemo() {
  return (
    <Stack gap="6">
      <Wrap gap="2">
        <Badge status variant="outline" colorPalette="gray">
          Neutral
        </Badge>
        <Badge status variant="outline" colorPalette="blue">
          Info
        </Badge>
        <Badge status variant="outline" colorPalette="green">
          Success
        </Badge>
        <Badge status variant="outline" colorPalette="yellow">
          Warning
        </Badge>
        <Badge status variant="outline" colorPalette="red">
          Error
        </Badge>
      </Wrap>
      <Wrap gap="2">
        <Badge status variant="plain" colorPalette="gray">
          Neutral
        </Badge>
        <Badge status variant="plain" colorPalette="blue">
          Info
        </Badge>
        <Badge status variant="plain" colorPalette="green">
          Success
        </Badge>
        <Badge status variant="plain" colorPalette="yellow">
          Warning
        </Badge>
        <Badge status variant="plain" colorPalette="red">
          Error
        </Badge>
      </Wrap>
      <Wrap gap="2">
        <Badge status variant="solid" colorPalette="green">
          Solid
        </Badge>
        <Badge status variant="subtle" colorPalette="green">
          Subtle
        </Badge>
        <Badge status variant="surface" colorPalette="green">
          Surface
        </Badge>
      </Wrap>
    </Stack>
  )
}
