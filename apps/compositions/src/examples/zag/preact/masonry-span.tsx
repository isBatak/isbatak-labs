import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId } from "preact/hooks"

const styles = masonryRecipe()

const classes = {
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

export function MasonrySpan() {
  const service = useMachine(masonry.machine, {
    id: useId(),
    columns: 3,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} className={styles.root}>
      <div {...api.getItemProps({ value: "1", span: 2 })} className={styles.item}>
        <div className={classes.tile} style={{ height: 120 }}>
          1
        </div>
      </div>
      <div {...api.getItemProps({ value: "2" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          2
        </div>
      </div>
      <div {...api.getItemProps({ value: "3" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          3
        </div>
      </div>
      <div {...api.getItemProps({ value: "4" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 60 }}>
          4
        </div>
      </div>
      <div {...api.getItemProps({ value: "5", span: 2 })} className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          5
        </div>
      </div>
      <div {...api.getItemProps({ value: "6" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 110 }}>
          6
        </div>
      </div>
      <div {...api.getItemProps({ value: "7" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 70 }}>
          7
        </div>
      </div>
      <div {...api.getItemProps({ value: "8", span: 3 })} className={styles.item}>
        <div className={classes.tile} style={{ height: 130 }}>
          8
        </div>
      </div>
      <div {...api.getItemProps({ value: "9" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </div>
      <div {...api.getItemProps({ value: "10" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          10
        </div>
      </div>
      <div {...api.getItemProps({ value: "11", span: 2 })} className={styles.item}>
        <div className={classes.tile} style={{ height: 40 }}>
          11
        </div>
      </div>
    </div>
  )
}
