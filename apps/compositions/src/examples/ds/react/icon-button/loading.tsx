import { IconButton } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"

export function IconButtonLoadingDemo() {
  return (
    <IconButton aria-label="Upload" variant="outline" loading>
      <Icon name="upload" />
    </IconButton>
  )
}
