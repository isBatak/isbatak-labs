"use client"

import { css, cx } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

const styles = masonryRecipe()

const classes = {
  root: css({ gap: { base: "2", sm: "4", md: "6" } }),
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

export function MasonrySpacing() {
  const service = useMachine(masonry.machine, {
    id: useId(),
    columns: 3,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} className={cx(styles.root, classes.root)}>
      <div {...api.getItemProps({ value: "1" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          1
        </div>
      </div>
      <div {...api.getItemProps({ value: "2" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          2
        </div>
      </div>
      <div {...api.getItemProps({ value: "3" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          3
        </div>
      </div>
      <div {...api.getItemProps({ value: "4" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 70 }}>
          4
        </div>
      </div>
      <div {...api.getItemProps({ value: "5" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          5
        </div>
      </div>
      <div {...api.getItemProps({ value: "6" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          6
        </div>
      </div>
      <div {...api.getItemProps({ value: "7" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          7
        </div>
      </div>
      <div {...api.getItemProps({ value: "8" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          8
        </div>
      </div>
      <div {...api.getItemProps({ value: "9" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </div>
      <div {...api.getItemProps({ value: "10" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          10
        </div>
      </div>
    </div>
  )
}
