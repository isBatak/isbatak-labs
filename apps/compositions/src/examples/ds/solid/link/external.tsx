import { Icon } from "@isbatak/solid-ui/icon"
import { Link } from "@isbatak/solid-ui/link"

export function LinkExternalDemo() {
  return (
    <Link href="https://ark-ui.com" target="_blank" rel="noreferrer">
      Ark UI
      <Icon name="external-link" />
    </Link>
  )
}
