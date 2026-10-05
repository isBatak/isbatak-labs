"use client"

import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

const styles = masonryRecipe()

const classes = {
  details: css({ color: "fg.muted", textStyle: "sm" }),
  summary: css({ px: "3", py: "2", color: "fg", fontWeight: "medium", cursor: "pointer" }),
  content: css({ px: "3", pb: "3" }),
}

export function MasonryVariableHeight() {
  const service = useMachine(masonry.machine, {
    id: useId(),
    columns: 3,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} className={styles.root}>
      <div {...api.getItemProps({ value: "1" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 150 }}>
          <summary className={classes.summary}>Accordion 1</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "2" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 30 }}>
          <summary className={classes.summary}>Accordion 2</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "3" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 90 }}>
          <summary className={classes.summary}>Accordion 3</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "4" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 70 }}>
          <summary className={classes.summary}>Accordion 4</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "5" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 90 }}>
          <summary className={classes.summary}>Accordion 5</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "6" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 100 }}>
          <summary className={classes.summary}>Accordion 6</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "7" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 150 }}>
          <summary className={classes.summary}>Accordion 7</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "8" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 30 }}>
          <summary className={classes.summary}>Accordion 8</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "9" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 50 }}>
          <summary className={classes.summary}>Accordion 9</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
      <div {...api.getItemProps({ value: "10" })} className={styles.item}>
        <details className={classes.details} style={{ minHeight: 80 }}>
          <summary className={classes.summary}>Accordion 10</summary>
          <p className={classes.content}>Contents</p>
        </details>
      </div>
    </div>
  )
}
