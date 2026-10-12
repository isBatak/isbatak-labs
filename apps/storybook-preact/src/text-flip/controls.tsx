import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { formatTextFlip, textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId } from "preact/hooks"

const styles = textFlipRecipe()

export interface ControlsProps extends Partial<TextFlipControls> {
  onIndexChange?: (details: textFlip.IndexChangeDetails) => void
}

export function Controls(props: ControlsProps) {
  const service = useMachine(textFlip.machine, {
    id: useId(),
    ...props,
  })

  const api = textFlip.connect(service, normalizeProps)

  return (
    <main className={classes.story}>
      <h1 className={classes.heading}>
        <span {...api.getRootProps()} className={styles.root}>
          <span {...api.getItemProps({ index: 0 })} className={styles.item}>
            Hello
          </span>
          <span {...api.getItemProps({ index: 1 })} className={styles.item}>
            Bonjour
          </span>
          <span {...api.getItemProps({ index: 2 })} className={styles.item}>
            Hola
          </span>
          <span {...api.getItemProps({ index: 3 })} className={styles.item}>
            Ciao
          </span>
          <span {...api.getItemProps({ index: 4 })} className={styles.item}>
            Hallo
          </span>
        </span>
      </h1>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={() => api.prev()}>
          Previous
        </button>
        <button type="button" className={classes.button} onClick={() => (api.playing ? api.pause() : api.play())}>
          {api.playing ? "Pause" : "Play"}
        </button>
        <button type="button" className={classes.button} onClick={() => api.next()}>
          Next
        </button>
        <button type="button" className={classes.button} onClick={() => api.goTo(0)}>
          First
        </button>
      </div>
      <output className={classes.status} data-testid="status">
        {formatTextFlip(api.index, 5, api.playing)}
      </output>
    </main>
  )
}
