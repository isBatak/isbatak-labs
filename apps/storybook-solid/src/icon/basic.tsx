import { Icon } from "@isbatak/solid-ui/icon"
import type { IconControls } from "@isbatak/storybook-shared"

export function Basic(props: IconControls) {
  return <Icon name={props.name} size={props.size} />
}
