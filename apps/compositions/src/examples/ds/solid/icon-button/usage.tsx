import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function IconButtonDemo() {
  return (
    <HStack gap="4">
      <IconButton aria-label="Search" variant="solid">
        <Icon name="search" />
      </IconButton>
      <IconButton aria-label="Search" variant="outline">
        <Icon name="search" />
      </IconButton>
      <IconButton aria-label="Search" variant="ghost">
        <Icon name="search" />
      </IconButton>
    </HStack>
  )
}
