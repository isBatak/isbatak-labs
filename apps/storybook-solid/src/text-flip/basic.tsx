import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"

const styles = textFlipRecipe()

export interface BasicProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function Basic(props: BasicProps) {
  const id = createUniqueId()
  const service = useMachine(textFlip.machine, () => ({
    id,
    ...props,
  }))
  const api = createMemo(() => textFlip.connect(service, normalizeProps))

  return (
    <main class={classes.story}>
      <h1 class={classes.heading}>
        Build for{" "}
        <span {...api().getRootProps()} class={styles.root}>
          <span {...api().getItemProps({ index: 0 })} class={styles.item}>
            React
          </span>
          <span {...api().getItemProps({ index: 1 })} class={styles.item}>
            Vue
          </span>
          <span {...api().getItemProps({ index: 2 })} class={styles.item}>
            Svelte
          </span>
          <span {...api().getItemProps({ index: 3 })} class={styles.item}>
            Solid
          </span>
        </span>
      </h1>
    </main>
  )
}
