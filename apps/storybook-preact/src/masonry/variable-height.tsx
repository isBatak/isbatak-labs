import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/preact"
import { useId } from "preact/hooks"

const styles = masonryRecipe()

export interface VariableHeightProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function VariableHeight(props: VariableHeightProps) {
  const service = useMachine(masonry.machine, {
    id: useId(),
    ...props,
  })

  const api = masonry.connect(service, normalizeProps)

  return (
    <main className={classes.story}>
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
      <output data-testid="layout">{formatLayout(api.columns)}</output>
    </main>
  )
}
