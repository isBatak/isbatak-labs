import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

const styles = masonryRecipe()

export interface SpanningProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function Spanning(props: SpanningProps) {
  const service = useMachine(masonry.machine, {
    id: useId(),
    ...props,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <main className={classes.story}>
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
      <output data-testid="layout">{formatLayout(api.columns)}</output>
    </main>
  )
}
