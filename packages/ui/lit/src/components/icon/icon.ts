import { type IconName, spriteUrl } from "@isbatak/icons"
import { icon, type IconVariant } from "@isbatak/panda-ds/recipes"
import { LitElement, html } from "lit"

export class IbIcon extends LitElement {
  static properties = {
    name: { reflect: true },
    size: { reflect: true },
  }

  declare name: IconName
  declare size: IconVariant["size"]

  protected createRenderRoot() {
    return this
  }

  protected render() {
    return html`<svg aria-hidden="true" data-name=${this.name} class=${icon({ size: this.size })}>
      <use href=${`${spriteUrl}#${this.name}`}></use>
    </svg>`
  }
}

if (!customElements.get("ib-icon")) customElements.define("ib-icon", IbIcon)

declare global {
  interface HTMLElementTagNameMap {
    "ib-icon": IbIcon
  }
}
