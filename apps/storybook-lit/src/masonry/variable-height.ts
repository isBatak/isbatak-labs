import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryClasses as classes } from "@isbatak/storybook-shared"
import { html } from "lit"
import { spread } from "@isbatak/zag-lit"
import { define } from "../define"
import { MasonryStory } from "./masonry-story"

const styles = masonryRecipe()

export class VariableHeight extends MasonryStory {
  render() {
    const api = this.masonry.api

    return html`
      <main class=${classes.story}>
        <div ${spread(api.getRootProps())} class=${styles.root}>
          <div ${spread(api.getItemProps({ value: "1" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 150px">
              <summary class=${classes.summary}>Accordion 1</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "2" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 30px">
              <summary class=${classes.summary}>Accordion 2</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "3" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 90px">
              <summary class=${classes.summary}>Accordion 3</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "4" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 70px">
              <summary class=${classes.summary}>Accordion 4</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "5" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 90px">
              <summary class=${classes.summary}>Accordion 5</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "6" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 100px">
              <summary class=${classes.summary}>Accordion 6</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "7" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 150px">
              <summary class=${classes.summary}>Accordion 7</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "8" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 30px">
              <summary class=${classes.summary}>Accordion 8</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "9" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 50px">
              <summary class=${classes.summary}>Accordion 9</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
          <div ${spread(api.getItemProps({ value: "10" }))} class=${styles.item}>
            <details class=${classes.details} style="min-height: 80px">
              <summary class=${classes.summary}>Accordion 10</summary>
              <p class=${classes.content}>Contents</p>
            </details>
          </div>
        </div>
        <output data-testid="layout">${formatLayout(api.columns)}</output>
      </main>
    `
  }
}

define("masonry-variable-height", VariableHeight)
