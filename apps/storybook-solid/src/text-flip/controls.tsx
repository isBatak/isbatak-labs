import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { formatTextFlip, textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"

const styles = textFlipRecipe()

export interface ControlsProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function Controls(props: ControlsProps) {
  const id = createUniqueId()
  const service = useMachine(textFlip.machine, () => ({
    id,
    ...props,
  }))
  const api = createMemo(() => textFlip.connect(service, normalizeProps))

  return (
    <main class={classes.story}>
      <h1 class={classes.heading}>
        <span {...api().getRootProps()} class={styles.root}>
          <span {...api().getItemProps({ index: 0 })} class={styles.item}>
            Hello
          </span>
          <span {...api().getItemProps({ index: 1 })} class={styles.item}>
            Bonjour
          </span>
          <span {...api().getItemProps({ index: 2 })} class={styles.item}>
            Hola
          </span>
          <span {...api().getItemProps({ index: 3 })} class={styles.item}>
            Ciao
          </span>
          <span {...api().getItemProps({ index: 4 })} class={styles.item}>
            Hallo
          </span>
        </span>
      </h1>
      <div class={classes.actions}>
        <button type="button" class={classes.button} onClick={() => api().prev()}>
          Previous
        </button>
        <button type="button" class={classes.button} onClick={() => (api().playing ? api().pause() : api().play())}>
          {api().playing ? "Pause" : "Play"}
        </button>
        <button type="button" class={classes.button} onClick={() => api().next()}>
          Next
        </button>
        <button type="button" class={classes.button} onClick={() => api().goTo(0)}>
          First
        </button>
      </div>
      <output class={classes.status} data-testid="status">
        {formatTextFlip(api().index, 5, api().playing)}
      </output>
    </main>
  )
}
