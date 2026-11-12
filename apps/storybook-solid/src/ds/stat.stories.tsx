import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { StatDemo } from "@isbatak/compositions/ds/solid/stat/usage"
import { StatSizesDemo } from "@isbatak/compositions/ds/solid/stat/sizes"
import { StatWithIndicatorDemo } from "@isbatak/compositions/ds/solid/stat/with-indicator"
import { StatWithTrendDemo } from "@isbatak/compositions/ds/solid/stat/with-trend"
import { StatWithValueUnitDemo } from "@isbatak/compositions/ds/solid/stat/with-value-unit"
import { StatWithGroupDemo } from "@isbatak/compositions/ds/solid/stat/with-group"
import { StatWithIconDemo } from "@isbatak/compositions/ds/solid/stat/with-icon"
import { StatCardDemo } from "@isbatak/compositions/ds/solid/stat/card"

const meta = {
  title: "DS/Stat",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <StatDemo />,
}

export const Sizes: Story = {
  render: () => <StatSizesDemo />,
}

export const WithIndicator: Story = {
  render: () => <StatWithIndicatorDemo />,
}

export const WithTrend: Story = {
  render: () => <StatWithTrendDemo />,
}

export const WithValueUnit: Story = {
  render: () => <StatWithValueUnitDemo />,
}

export const WithGroup: Story = {
  render: () => <StatWithGroupDemo />,
}

export const WithIcon: Story = {
  render: () => <StatWithIconDemo />,
}

export const Card: Story = {
  render: () => <StatCardDemo />,
}
