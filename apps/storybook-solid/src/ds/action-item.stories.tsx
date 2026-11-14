import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { ActionItemDemo } from "@isbatak/compositions/ds/solid/action-item/usage"
import { ActionItemVariantsDemo } from "@isbatak/compositions/ds/solid/action-item/variants"
import { ActionItemWithStartElementDemo } from "@isbatak/compositions/ds/solid/action-item/with-start-element"
import { ActionItemWithDescriptionDemo } from "@isbatak/compositions/ds/solid/action-item/with-description"
import { ActionItemWithControlDemo } from "@isbatak/compositions/ds/solid/action-item/with-control"
import { ActionItemDisabledDemo } from "@isbatak/compositions/ds/solid/action-item/disabled"

const meta = {
  title: "DS/Action item",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ActionItemDemo />,
}

export const Variants: Story = {
  render: () => <ActionItemVariantsDemo />,
}

export const WithStartElement: Story = {
  render: () => <ActionItemWithStartElementDemo />,
}

export const WithDescription: Story = {
  render: () => <ActionItemWithDescriptionDemo />,
}

export const WithControl: Story = {
  render: () => <ActionItemWithControlDemo />,
}

export const Disabled: Story = {
  render: () => <ActionItemDisabledDemo />,
}
