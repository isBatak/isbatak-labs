import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ToggleGroupDemo from "@isbatak/compositions/ds/vue/toggle-group/usage"
import ToggleGroupMultipleDemo from "@isbatak/compositions/ds/vue/toggle-group/multiple"
import ToggleGroupControlledDemo from "@isbatak/compositions/ds/vue/toggle-group/controlled"
import ToggleGroupRootProviderDemo from "@isbatak/compositions/ds/vue/toggle-group/root-provider"
import ToggleGroupVariantsDemo from "@isbatak/compositions/ds/vue/toggle-group/variants"
import ToggleGroupSizesDemo from "@isbatak/compositions/ds/vue/toggle-group/sizes"
import ToggleGroupVerticalDemo from "@isbatak/compositions/ds/vue/toggle-group/vertical"
import ToggleGroupFittedDemo from "@isbatak/compositions/ds/vue/toggle-group/fitted"
import ToggleGroupWithTooltipDemo from "@isbatak/compositions/ds/vue/toggle-group/with-tooltip"

const meta = {
  title: "DS/Toggle group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupMultipleDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupControlledDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupRootProviderDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupSizesDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupVerticalDemo) }),
}

export const Fitted: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupFittedDemo) }),
}

export const WithTooltip: Story = {
  render: () => ({ setup: () => () => h(ToggleGroupWithTooltipDemo) }),
}
