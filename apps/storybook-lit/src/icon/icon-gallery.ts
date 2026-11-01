import "@isbatak/lit-ui/icon"
import { iconNames } from "@isbatak/lit-ui/icon"
import { iconClasses as classes, filterIconNames } from "@isbatak/storybook-shared"
import { html, LitElement } from "lit"
import { repeat } from "lit/directives/repeat.js"

export class IconGallery extends LitElement {
  static properties = {
    query: { state: true },
  }

  declare query: string

  constructor() {
    super()
    this.query = ""
  }

  protected createRenderRoot() {
    return this
  }

  protected render() {
    const names = filterIconNames(this.query)
    return html`
      <div class=${classes.gallery}>
        <input
          type="search"
          aria-label="Search icons"
          placeholder=${`Search ${iconNames.length} icons`}
          class=${classes.search}
          .value=${this.query}
          @input=${(event: InputEvent) => (this.query = (event.target as HTMLInputElement).value)}
        />
        ${names.length === 0 ? html`<p class=${classes.empty}>No icons match “${this.query}”</p>` : null}
        <div class=${classes.grid}>
          ${repeat(
            names,
            (name) => name,
            (name) => html`
              <div class=${classes.cell}>
                <ib-icon name=${name} size="lg"></ib-icon>
                <span class=${classes.name}>${name}</span>
              </div>
            `,
          )}
        </div>
      </div>
    `
  }
}

customElements.define("icon-gallery", IconGallery)
