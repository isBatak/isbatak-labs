import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

const styles = masonryRecipe()

export interface BasicProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function Basic(props: BasicProps) {
  const service = useMachine(masonry.machine, {
    id: useId(),
    ...props,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <main className={classes.story}>
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
      <output data-testid="layout">{formatLayout(api.columns)}</output>
    </main>
  )
}
