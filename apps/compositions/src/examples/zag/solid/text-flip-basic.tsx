import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export function TextFlipBasic() {
  const service = useMachine(textFlip.machine, {
    id: createUniqueId(),
  })

  const api = createMemo(() => textFlip.connect(service, normalizeProps))

  return (
    <p class={classes.heading}>
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
    </p>
  )
}
