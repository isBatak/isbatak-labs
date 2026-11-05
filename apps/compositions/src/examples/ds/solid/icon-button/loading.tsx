import { IconButton } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"

export function IconButtonLoadingDemo() {
  return (
    <IconButton aria-label="Upload" variant="outline" loading>
      <Icon name="upload" />
    </IconButton>
  )
}
