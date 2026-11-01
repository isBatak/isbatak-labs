import { Icon } from "@isbatak/react-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"

export function FontSize() {
  return (
    <div className={classes.stack}>
      <span className={classes.small}>
        Small text <Icon name="arrow-right" />
      </span>
      <span>
        Body text <Icon name="arrow-right" />
      </span>
      <span className={classes.large}>
        Large text <Icon name="arrow-right" />
      </span>
    </div>
  )
}
