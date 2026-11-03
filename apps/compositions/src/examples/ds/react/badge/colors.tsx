import { Badge } from "@isbatak/react-ui/badge"
import { Stack, Wrap } from "styled-system/jsx"

export function BadgeColorsDemo() {
  return (
    <Stack gap="3">
      <Wrap gap="2">
        <Badge colorPalette="gray">Neutral</Badge>
        <Badge colorPalette="blue">Info</Badge>
        <Badge colorPalette="green">Success</Badge>
        <Badge colorPalette="yellow">Warning</Badge>
        <Badge colorPalette="red">Error</Badge>
      </Wrap>
      <Wrap gap="2">
        <Badge colorPalette="orange">Orange</Badge>
        <Badge colorPalette="teal">Teal</Badge>
        <Badge colorPalette="cyan">Cyan</Badge>
        <Badge colorPalette="purple">Purple</Badge>
        <Badge colorPalette="pink">Pink</Badge>
      </Wrap>
    </Stack>
  )
}
