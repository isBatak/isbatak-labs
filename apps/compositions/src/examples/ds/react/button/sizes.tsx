import { Button } from "@isbatak/react-ui/button"
import { HStack } from "@isbatak/react-ui/stack"

export function ButtonSizesDemo() {
  return (
    <HStack flexWrap="wrap" gap="4">
      <Button size="xs">Button (xs)</Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
    </HStack>
  )
}
