import "@isbatak/lit-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { html } from "lit"

export const fontSize = () => html`
  <div class=${classes.stack}>
    <span class=${classes.small}>Small text <ib-icon name="arrow-right"></ib-icon></span>
    <span>Body text <ib-icon name="arrow-right"></ib-icon></span>
    <span class=${classes.large}>Large text <ib-icon name="arrow-right"></ib-icon></span>
  </div>
`
