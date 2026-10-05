import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { createMemo, createUniqueId } from "solid-js"

const styles = masonryRecipe()

const classes = {
  details: css({ color: "fg.muted", textStyle: "sm" }),
  summary: css({ px: "3", py: "2", color: "fg", fontWeight: "medium", cursor: "pointer" }),
  content: css({ px: "3", pb: "3" }),
}

export function MasonryVariableHeight() {
  const service = useMachine(masonry.machine, {
    id: createUniqueId(),
    columns: 3,
  })

  const api = createMemo(() => masonry.connect(service, normalizeProps))

  return (
    <div {...api().getRootProps()} class={styles.root}>
      <div {...api().getItemProps({ value: "1" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "150px" }}>
          <summary class={classes.summary}>Accordion 1</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "2" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "30px" }}>
          <summary class={classes.summary}>Accordion 2</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "3" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "90px" }}>
          <summary class={classes.summary}>Accordion 3</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "4" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "70px" }}>
          <summary class={classes.summary}>Accordion 4</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "5" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "90px" }}>
          <summary class={classes.summary}>Accordion 5</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "6" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "100px" }}>
          <summary class={classes.summary}>Accordion 6</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "7" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "150px" }}>
          <summary class={classes.summary}>Accordion 7</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "8" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "30px" }}>
          <summary class={classes.summary}>Accordion 8</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "9" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "50px" }}>
          <summary class={classes.summary}>Accordion 9</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api().getItemProps({ value: "10" })} class={styles.item}>
        <details class={classes.details} style={{ "min-height": "80px" }}>
          <summary class={classes.summary}>Accordion 10</summary>
          <p class={classes.content}>Contents</p>
        </details>
      </div>
    </div>
  )
}
