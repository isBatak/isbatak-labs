import type { Meta, StoryObj } from "@storybook/react-vite"
import { SplitterDemo } from "@isbatak/compositions/ds/react/splitter/usage"
import { SplitterVerticalDemo } from "@isbatak/compositions/ds/react/splitter/vertical"
import { SplitterMultiplePanelsDemo } from "@isbatak/compositions/ds/react/splitter/multiple-panels"
import { SplitterMinMaxSizeDemo } from "@isbatak/compositions/ds/react/splitter/min-max-size"
import { SplitterCollapsibleDemo } from "@isbatak/compositions/ds/react/splitter/collapsible"
import { SplitterNestedDemo } from "@isbatak/compositions/ds/react/splitter/nested"
import { SplitterControlledDemo } from "@isbatak/compositions/ds/react/splitter/controlled"
import { SplitterDisabledDemo } from "@isbatak/compositions/ds/react/splitter/disabled"

const meta = {
  title: "DS/Splitter",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SplitterDemo />,
}

export const Vertical: Story = {
  render: () => <SplitterVerticalDemo />,
}

export const MultiplePanels: Story = {
  render: () => <SplitterMultiplePanelsDemo />,
}

export const MinMaxSize: Story = {
  render: () => <SplitterMinMaxSizeDemo />,
}

export const Collapsible: Story = {
  render: () => <SplitterCollapsibleDemo />,
}

export const Nested: Story = {
  render: () => <SplitterNestedDemo />,
}

export const Controlled: Story = {
  render: () => <SplitterControlledDemo />,
}

export const Disabled: Story = {
  render: () => <SplitterDisabledDemo />,
}
