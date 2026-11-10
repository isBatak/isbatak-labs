import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SplitterDemo from "@isbatak/compositions/ds/vue/splitter/usage"
import SplitterVerticalDemo from "@isbatak/compositions/ds/vue/splitter/vertical"
import SplitterMultiplePanelsDemo from "@isbatak/compositions/ds/vue/splitter/multiple-panels"
import SplitterMinMaxSizeDemo from "@isbatak/compositions/ds/vue/splitter/min-max-size"
import SplitterCollapsibleDemo from "@isbatak/compositions/ds/vue/splitter/collapsible"
import SplitterNestedDemo from "@isbatak/compositions/ds/vue/splitter/nested"
import SplitterControlledDemo from "@isbatak/compositions/ds/vue/splitter/controlled"
import SplitterDisabledDemo from "@isbatak/compositions/ds/vue/splitter/disabled"

const meta = {
  title: "DS/Splitter",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SplitterDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(SplitterVerticalDemo) }),
}

export const MultiplePanels: Story = {
  render: () => ({ setup: () => () => h(SplitterMultiplePanelsDemo) }),
}

export const MinMaxSize: Story = {
  render: () => ({ setup: () => () => h(SplitterMinMaxSizeDemo) }),
}

export const Collapsible: Story = {
  render: () => ({ setup: () => () => h(SplitterCollapsibleDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(SplitterNestedDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(SplitterControlledDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SplitterDisabledDemo) }),
}
