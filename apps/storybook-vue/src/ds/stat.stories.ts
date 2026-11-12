import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import StatDemo from "@isbatak/compositions/ds/vue/stat/usage"
import StatSizesDemo from "@isbatak/compositions/ds/vue/stat/sizes"
import StatWithIndicatorDemo from "@isbatak/compositions/ds/vue/stat/with-indicator"
import StatWithTrendDemo from "@isbatak/compositions/ds/vue/stat/with-trend"
import StatWithValueUnitDemo from "@isbatak/compositions/ds/vue/stat/with-value-unit"
import StatWithGroupDemo from "@isbatak/compositions/ds/vue/stat/with-group"
import StatWithIconDemo from "@isbatak/compositions/ds/vue/stat/with-icon"
import StatCardDemo from "@isbatak/compositions/ds/vue/stat/card"

const meta = {
  title: "DS/Stat",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(StatDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(StatSizesDemo) }),
}

export const WithIndicator: Story = {
  render: () => ({ setup: () => () => h(StatWithIndicatorDemo) }),
}

export const WithTrend: Story = {
  render: () => ({ setup: () => () => h(StatWithTrendDemo) }),
}

export const WithValueUnit: Story = {
  render: () => ({ setup: () => () => h(StatWithValueUnitDemo) }),
}

export const WithGroup: Story = {
  render: () => ({ setup: () => () => h(StatWithGroupDemo) }),
}

export const WithIcon: Story = {
  render: () => ({ setup: () => () => h(StatWithIconDemo) }),
}

export const Card: Story = {
  render: () => ({ setup: () => () => h(StatCardDemo) }),
}
