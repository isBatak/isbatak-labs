import "@isbatak/lit-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { html } from "lit"

export const sizes = () => html`
  <div class=${classes.row}>
    <ib-icon name="star" size="xs"></ib-icon>
    <ib-icon name="star" size="sm"></ib-icon>
    <ib-icon name="star" size="md"></ib-icon>
    <ib-icon name="star" size="lg"></ib-icon>
    <ib-icon name="star" size="xl"></ib-icon>
    <ib-icon name="star" size="2xl"></ib-icon>
  </div>
`
