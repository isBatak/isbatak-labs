import "@isbatak/lit-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { html } from "lit"

export const color = () => html`
  <span class=${classes.error}>
    <ib-icon name="warning" size="md"></ib-icon>
    Something went wrong
  </span>
`
