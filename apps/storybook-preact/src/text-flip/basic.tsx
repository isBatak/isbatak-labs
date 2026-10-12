import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId } from "preact/hooks"

const styles = textFlipRecipe()

export interface BasicProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function Basic(props: BasicProps) {
  const service = useMachine(textFlip.machine, {
    id: useId(),
    ...props,
  })

  const api = textFlip.connect(service, normalizeProps)

  return (
    <main className={classes.story}>
      <h1 className={classes.heading}>
        Build for{" "}
        <span {...api.getRootProps()} className={styles.root}>
          <span {...api.getItemProps({ index: 0 })} className={styles.item}>
            React
          </span>
          <span {...api.getItemProps({ index: 1 })} className={styles.item}>
            Vue
          </span>
          <span {...api.getItemProps({ index: 2 })} className={styles.item}>
            Svelte
          </span>
          <span {...api.getItemProps({ index: 3 })} className={styles.item}>
            Solid
          </span>
        </span>
      </h1>
    </main>
  )
}
