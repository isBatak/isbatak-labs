import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { html, LitElement } from "lit"
import { normalizeProps, spread } from "@isbatak/zag-lit"

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

export class MasonrySpan extends LitElement {
  readonly #controller = masonry.createMasonry()
  readonly #props: masonry.Props = { id: crypto.randomUUID(), columns: 3 }
  #layout: masonry.Layout | null = null
  #stop: (() => void) | undefined

  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
    this.requestUpdate()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.#stop?.()
    this.#stop = undefined
  }

  protected updated() {
    this.#stop ??= this.#controller.mount(
      () => this.#props,
      (layout) => {
        this.#layout = layout
        this.requestUpdate()
      },
    )
  }

  render() {
    const api = this.#controller.connect(this.#props, this.#layout, normalizeProps)

    return html`
      <div ${spread(api.getRootProps())} class=${styles.root}>
        <div ${spread(api.getItemProps({ value: "1", span: 2 }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 120px">1</div>
        </div>
        <div ${spread(api.getItemProps({ value: "2" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 80px">2</div>
        </div>
        <div ${spread(api.getItemProps({ value: "3" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 150px">3</div>
        </div>
        <div ${spread(api.getItemProps({ value: "4" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 60px">4</div>
        </div>
        <div ${spread(api.getItemProps({ value: "5", span: 2 }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 90px">5</div>
        </div>
        <div ${spread(api.getItemProps({ value: "6" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 110px">6</div>
        </div>
        <div ${spread(api.getItemProps({ value: "7" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 70px">7</div>
        </div>
        <div ${spread(api.getItemProps({ value: "8", span: 3 }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 130px">8</div>
        </div>
        <div ${spread(api.getItemProps({ value: "9" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 50px">9</div>
        </div>
        <div ${spread(api.getItemProps({ value: "10" }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 100px">10</div>
        </div>
        <div ${spread(api.getItemProps({ value: "11", span: 2 }))} class=${styles.item}>
          <div class=${classes.tile} style="height: 40px">11</div>
        </div>
      </div>
    `
  }
}

customElements.define("masonry-span", MasonrySpan)
