import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AlertDemo from "@isbatak/compositions/ds/svelte/alert/usage"
import AlertStatusDemo from "@isbatak/compositions/ds/svelte/alert/status"
import AlertVariantsDemo from "@isbatak/compositions/ds/svelte/alert/variants"
import AlertSizesDemo from "@isbatak/compositions/ds/svelte/alert/sizes"
import AlertWithDescriptionDemo from "@isbatak/compositions/ds/svelte/alert/with-description"
import AlertWithActionDemo from "@isbatak/compositions/ds/svelte/alert/with-action"

const meta = {
  title: "DS/Alert",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AlertDemo> = {
  render: () => ({ Component: AlertDemo }),
}

export const Status: StoryObj<typeof AlertStatusDemo> = {
  render: () => ({ Component: AlertStatusDemo }),
}

export const Variants: StoryObj<typeof AlertVariantsDemo> = {
  render: () => ({ Component: AlertVariantsDemo }),
}

export const Sizes: StoryObj<typeof AlertSizesDemo> = {
  render: () => ({ Component: AlertSizesDemo }),
}

export const WithDescription: StoryObj<typeof AlertWithDescriptionDemo> = {
  render: () => ({ Component: AlertWithDescriptionDemo }),
}

export const WithAction: StoryObj<typeof AlertWithActionDemo> = {
  render: () => ({ Component: AlertWithActionDemo }),
}
