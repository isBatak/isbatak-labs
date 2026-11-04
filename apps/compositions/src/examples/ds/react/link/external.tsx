import { Icon } from "@isbatak/react-ui/icon"
import { Link } from "@isbatak/react-ui/link"

export function LinkExternalDemo() {
  return (
    <Link href="https://ark-ui.com" target="_blank" rel="noreferrer">
      Ark UI
      <Icon name="external-link" />
    </Link>
  )
}
