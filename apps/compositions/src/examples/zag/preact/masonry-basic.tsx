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

export function MasonryBasic() {
  const service = useMachine(masonry.machine, {
    id: useId(),
    columns: 4,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <div {...api.getRootProps()} className={styles.root}>
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
        <div className={classes.tile} style={{ height: 110 }}>
          5
        </div>
      </div>
      <div {...api.getItemProps({ value: "6" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          6
        </div>
      </div>
      <div {...api.getItemProps({ value: "7" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 130 }}>
          7
        </div>
      </div>
      <div {...api.getItemProps({ value: "8" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          8
        </div>
      </div>
      <div {...api.getItemProps({ value: "9" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </div>
      <div {...api.getItemProps({ value: "10" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          10
        </div>
      </div>
      <div {...api.getItemProps({ value: "11" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          11
        </div>
      </div>
      <div {...api.getItemProps({ value: "12" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          12
        </div>
      </div>
      <div {...api.getItemProps({ value: "13" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          13
        </div>
      </div>
      <div {...api.getItemProps({ value: "14" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          14
        </div>
      </div>
      <div {...api.getItemProps({ value: "15" })} className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          15
        </div>
      </div>
    </div>
  )
}
