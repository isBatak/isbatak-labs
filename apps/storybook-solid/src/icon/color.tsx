import { Icon } from "@isbatak/solid-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"

export function Color() {
  return (
    <span class={classes.error}>
      <Icon name="warning" size="md" />
      Something went wrong
    </span>
  )
}
