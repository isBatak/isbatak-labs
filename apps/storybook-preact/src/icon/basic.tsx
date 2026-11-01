import { Icon } from "@isbatak/preact-ui/icon"
import type { IconControls } from "@isbatak/storybook-shared"

export function Basic(props: IconControls) {
  return <Icon name={props.name} size={props.size} />
}
