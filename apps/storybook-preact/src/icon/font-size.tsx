import { Icon } from "@isbatak/preact-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"

export function FontSize() {
  return (
    <div class={classes.stack}>
      <span class={classes.small}>
        Small text <Icon name="arrow-right" />
      </span>
      <span>
        Body text <Icon name="arrow-right" />
      </span>
      <span class={classes.large}>
        Large text <Icon name="arrow-right" />
      </span>
    </div>
  )
}
