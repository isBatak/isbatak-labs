<script lang="ts">
  import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
  import {
    formatLayout,
    initialMasonryTiles,
    masonryClasses as classes,
    nextMasonryTile,
    type MasonryControls,
    type MasonryTile,
  } from "@isbatak/storybook-shared"
  import * as masonry from "@isbatak/zag-masonry"
  import { useMasonry } from "./use-masonry.svelte.js"

  const styles = masonryRecipe()

  interface Props extends Partial<MasonryControls> {
    onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
  }

  const props: Props = $props()
  const id = $props.id()
  const getApi = useMasonry(id, () => props)
  const api = $derived(getApi())

  let tiles = $state<MasonryTile[]>(initialMasonryTiles)
</script>

<main class={classes.story}>
  <div class={classes.actions}>
    <button type="button" class={classes.button} onclick={() => (tiles = [...tiles, nextMasonryTile(tiles)])}>
      Add item
    </button>
    <button type="button" class={classes.button} onclick={() => (tiles = tiles.slice(1))}>Remove first item</button>
  </div>
  <div {...api.getRootProps()} class={styles.root}>
    {#each tiles as tile (tile.value)}
      <div {...api.getItemProps({ value: tile.value })} class={styles.item}>
        <div class={classes.tile} style:height="{tile.height}px">{tile.value}</div>
      </div>
    {/each}
  </div>
  <output data-testid="layout">{formatLayout(api.columns)}</output>
</main>
