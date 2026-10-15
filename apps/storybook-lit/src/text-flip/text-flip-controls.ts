import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { formatTextFlip, textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import { MachineController, normalizeProps, spread, type SchemaOf } from "@isbatak/zag-lit"
import * as textFlip from "@isbatak/zag-text-flip"
import { html, LitElement } from "lit"

const styles = textFlipRecipe()

export class TextFlipControlsElement extends LitElement {
  static properties = {
    args: { attribute: false },
  }

  declare args: Partial<TextFlipControls> & { onIndexChange?: (details: textFlip.IndexChangeDetails) => void }

  readonly controller: MachineController<SchemaOf<textFlip.Machine>> = new MachineController(
    this,
    textFlip.machine,
    () => ({
      id: this.id || "text-flip-controls",
      getRootNode: () => this.getRootNode() as Document,
      ...this.args,
    }),
  )

  constructor() {
    super()
    this.args = {}
  }

  protected createRenderRoot() {
    return this
  }

  protected render() {
    const api = textFlip.connect(this.controller.service, normalizeProps)
    return html`
      <main class=${classes.story}>
        <h1 class=${classes.heading}>
          <span class=${styles.root} ${spread(api.getRootProps())}>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 0 }))}>Hello</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 1 }))}>Bonjour</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 2 }))}>Hola</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 3 }))}>Ciao</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 4 }))}>Hallo</span>
          </span>
        </h1>
        <div class=${classes.actions}>
          <button type="button" class=${classes.button} @click=${() => api.prev()}>Previous</button>
          <button type="button" class=${classes.button} @click=${() => (api.playing ? api.pause() : api.play())}>
            ${api.playing ? "Pause" : "Play"}
          </button>
          <button type="button" class=${classes.button} @click=${() => api.next()}>Next</button>
          <button type="button" class=${classes.button} @click=${() => api.goTo(0)}>First</button>
        </div>
        <output data-testid="status" class=${classes.status}>${formatTextFlip(api.index, 5, api.playing)}</output>
      </main>
    `
  }
}

customElements.define("text-flip-controls", TextFlipControlsElement)
