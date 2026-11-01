import { Icon } from "@isbatak/react-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"

export function Color() {
  return (
    <span className={classes.error}>
      <Icon name="warning" size="md" />
      Something went wrong
    </span>
  )
}
