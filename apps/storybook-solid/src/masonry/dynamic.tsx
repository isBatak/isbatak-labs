import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import {
  formatLayout,
  initialMasonryTiles,
  masonryClasses as classes,
  nextMasonryTile,
  type MasonryControls,
} from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/solid"
import { For, createMemo, createSignal, createUniqueId } from "solid-js"

const styles = masonryRecipe()

export interface DynamicProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function Dynamic(props: DynamicProps) {
  const [tiles, setTiles] = createSignal(initialMasonryTiles)

  const id = createUniqueId()
  const service = useMachine(masonry.machine, () => ({
    id,
    ...props,
  }))
  const api = createMemo(() => masonry.connect(service, normalizeProps))

  return (
    <main class={classes.story}>
      <div class={classes.actions}>
        <button
          type="button"
          class={classes.button}
          onClick={() => setTiles((prev) => [...prev, nextMasonryTile(prev)])}
        >
          Add item
        </button>
        <button type="button" class={classes.button} onClick={() => setTiles((prev) => prev.slice(1))}>
          Remove first item
        </button>
      </div>
      <div {...api().getRootProps()} class={styles.root}>
        <For each={tiles()}>
          {(tile) => (
            <div {...api().getItemProps({ value: tile.value })} class={styles.item}>
              <div class={classes.tile} style={{ height: `${tile.height}px` }}>
                {tile.value}
              </div>
            </div>
          )}
        </For>
      </div>
      <output data-testid="layout">{formatLayout(api().columns)}</output>
    </main>
  )
}
