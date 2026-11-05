import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { HStack } from "@isbatak/react-ui/stack"

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
