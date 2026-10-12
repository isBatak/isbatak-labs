import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import {
  formatLayout,
  initialMasonryTiles,
  masonryClasses as classes,
  nextMasonryTile,
  type MasonryControls,
} from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { useMasonry } from "./use-masonry"
import { useState } from "react"

const styles = masonryRecipe()

export interface DynamicProps extends Partial<MasonryControls> {
  onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
}

export function Dynamic(props: DynamicProps) {
  const [tiles, setTiles] = useState(initialMasonryTiles)

  const api = useMasonry(props)

  return (
    <main className={classes.story}>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes.button}
          onClick={() => setTiles((prev) => [...prev, nextMasonryTile(prev)])}
        >
          Add item
        </button>
        <button type="button" className={classes.button} onClick={() => setTiles((prev) => prev.slice(1))}>
          Remove first item
        </button>
      </div>
      <div {...api.getRootProps()} className={styles.root}>
        {tiles.map((tile) => (
          <div key={tile.value} {...api.getItemProps({ value: tile.value })} className={styles.item}>
            <div className={classes.tile} style={{ height: tile.height }}>
              {tile.value}
            </div>
          </div>
        ))}
      </div>
      <output data-testid="layout">{formatLayout(api.columns)}</output>
    </main>
  )
}
