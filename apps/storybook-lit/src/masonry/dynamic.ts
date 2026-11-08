import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import {
  formatLayout,
  initialMasonryTiles,
  masonryClasses as classes,
  nextMasonryTile,
  type MasonryTile,
} from "@isbatak/storybook-shared"
import { html } from "lit"
import { repeat } from "lit/directives/repeat.js"
import { spread } from "@isbatak/zag-lit"
import { define } from "../define"
import { MasonryStory } from "./masonry-story"

const styles = masonryRecipe()

export class Dynamic extends MasonryStory {
  static properties = {
    tiles: { state: true },
  }

  declare tiles: MasonryTile[]

  constructor() {
    super()
    this.tiles = initialMasonryTiles
  }

  render() {
    const api = this.masonry.api

    return html`
      <main class=${classes.story}>
        <div class=${classes.actions}>
          <button
            type="button"
            class=${classes.button}
            @click=${() => (this.tiles = [...this.tiles, nextMasonryTile(this.tiles)])}
          >
            Add item
          </button>
          <button type="button" class=${classes.button} @click=${() => (this.tiles = this.tiles.slice(1))}>
            Remove first item
          </button>
        </div>
        <div ${spread(api.getRootProps())} class=${styles.root}>
          ${repeat(
            this.tiles,
            (tile) => tile.value,
            (tile) => html`
              <div ${spread(api.getItemProps({ value: tile.value }))} class=${styles.item}>
                <div class=${classes.tile} style="height: ${tile.height}px">${tile.value}</div>
              </div>
            `,
          )}
        </div>
        <output data-testid="layout">${formatLayout(api.columns)}</output>
      </main>
    `
  }
}

define("masonry-dynamic", Dynamic)
