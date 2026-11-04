import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import GroupDemo from "@isbatak/compositions/ds/vue/group/usage"
import GroupGrowDemo from "@isbatak/compositions/ds/vue/group/grow"
import GroupSpacedDemo from "@isbatak/compositions/ds/vue/group/spaced"
import GroupVerticalDemo from "@isbatak/compositions/ds/vue/group/vertical"

const meta = {
  title: "DS/Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(GroupDemo) }),
}

export const Grow: Story = {
  render: () => ({ setup: () => () => h(GroupGrowDemo) }),
}

export const Spaced: Story = {
  render: () => ({ setup: () => () => h(GroupSpacedDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(GroupVerticalDemo) }),
}
