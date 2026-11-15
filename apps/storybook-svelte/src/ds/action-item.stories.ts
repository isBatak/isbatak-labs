import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ActionItemDemo from "@isbatak/compositions/ds/svelte/action-item/usage"
import ActionItemVariantsDemo from "@isbatak/compositions/ds/svelte/action-item/variants"
import ActionItemWithStartElementDemo from "@isbatak/compositions/ds/svelte/action-item/with-start-element"
import ActionItemWithDescriptionDemo from "@isbatak/compositions/ds/svelte/action-item/with-description"
import ActionItemWithControlDemo from "@isbatak/compositions/ds/svelte/action-item/with-control"
import ActionItemDisabledDemo from "@isbatak/compositions/ds/svelte/action-item/disabled"

const meta = {
  title: "DS/Action item",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ActionItemDemo> = {
  render: () => ({ Component: ActionItemDemo }),
}

export const Variants: StoryObj<typeof ActionItemVariantsDemo> = {
  render: () => ({ Component: ActionItemVariantsDemo }),
}

export const WithStartElement: StoryObj<typeof ActionItemWithStartElementDemo> = {
  render: () => ({ Component: ActionItemWithStartElementDemo }),
}

export const WithDescription: StoryObj<typeof ActionItemWithDescriptionDemo> = {
  render: () => ({ Component: ActionItemWithDescriptionDemo }),
}

export const WithControl: StoryObj<typeof ActionItemWithControlDemo> = {
  render: () => ({ Component: ActionItemWithControlDemo }),
}

export const Disabled: StoryObj<typeof ActionItemDisabledDemo> = {
  render: () => ({ Component: ActionItemDisabledDemo }),
}
