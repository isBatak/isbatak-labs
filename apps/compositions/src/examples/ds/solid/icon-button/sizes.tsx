import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { HStack } from "@isbatak/solid-ui/stack"

export function IconButtonSizesDemo() {
  return (
    <HStack gap="4">
      <IconButton aria-label="Like" size="xs" variant="outline">
        <Icon name="heart" />
      </IconButton>
      <IconButton aria-label="Like" size="sm" variant="outline">
        <Icon name="heart" />
      </IconButton>
      <IconButton aria-label="Like" size="md" variant="outline">
        <Icon name="heart" />
      </IconButton>
      <IconButton aria-label="Like" size="lg" variant="outline">
        <Icon name="heart" />
      </IconButton>
    </HStack>
  )
}
