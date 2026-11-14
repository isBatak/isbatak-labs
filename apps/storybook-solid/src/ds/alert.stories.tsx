import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { AlertDemo } from "@isbatak/compositions/ds/solid/alert/usage"
import { AlertStatusDemo } from "@isbatak/compositions/ds/solid/alert/status"
import { AlertVariantsDemo } from "@isbatak/compositions/ds/solid/alert/variants"
import { AlertSizesDemo } from "@isbatak/compositions/ds/solid/alert/sizes"
import { AlertWithDescriptionDemo } from "@isbatak/compositions/ds/solid/alert/with-description"
import { AlertWithActionDemo } from "@isbatak/compositions/ds/solid/alert/with-action"

const meta = {
  title: "DS/Alert",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <AlertDemo />,
}

export const Status: Story = {
  render: () => <AlertStatusDemo />,
}

export const Variants: Story = {
  render: () => <AlertVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <AlertSizesDemo />,
}

export const WithDescription: Story = {
  render: () => <AlertWithDescriptionDemo />,
}

export const WithAction: Story = {
  render: () => <AlertWithActionDemo />,
}
