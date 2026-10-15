import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { textFlipClasses as classes, type TextFlipControls } from "@isbatak/storybook-shared"
import { MachineController, normalizeProps, spread, type SchemaOf } from "@isbatak/zag-lit"
import * as textFlip from "@isbatak/zag-text-flip"
import { html, LitElement } from "lit"

const styles = textFlipRecipe()

export class TextFlipBasic extends LitElement {
  static properties = {
    args: { attribute: false },
  }

  declare args: Partial<TextFlipControls> & { onIndexChange?: (details: textFlip.IndexChangeDetails) => void }

  readonly controller: MachineController<SchemaOf<textFlip.Machine>> = new MachineController(
    this,
    textFlip.machine,
    () => ({
      id: this.id || "text-flip-basic",
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
          Build for
          <span class=${styles.root} ${spread(api.getRootProps())}>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 0 }))}>React</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 1 }))}>Vue</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 2 }))}>Svelte</span>
            <span class=${styles.item} ${spread(api.getItemProps({ index: 3 }))}>Solid</span>
          </span>
        </h1>
      </main>
    `
  }
}

customElements.define("text-flip-basic", TextFlipBasic)
