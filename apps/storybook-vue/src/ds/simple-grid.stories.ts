import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SimpleGridDemo from "@isbatak/compositions/ds/vue/simple-grid/usage"
import SimpleGridAutofitDemo from "@isbatak/compositions/ds/vue/simple-grid/autofit"
import SimpleGridColSpanDemo from "@isbatak/compositions/ds/vue/simple-grid/col-span"
import SimpleGridResponsiveColumnsDemo from "@isbatak/compositions/ds/vue/simple-grid/responsive-columns"
import SimpleGridRowAndColumnGapDemo from "@isbatak/compositions/ds/vue/simple-grid/row-and-column-gap"

const meta = {
  title: "DS/Simple grid",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SimpleGridDemo) }),
}

export const Autofit: Story = {
  render: () => ({ setup: () => () => h(SimpleGridAutofitDemo) }),
}

export const ColSpan: Story = {
  render: () => ({ setup: () => () => h(SimpleGridColSpanDemo) }),
}

export const ResponsiveColumns: Story = {
  render: () => ({ setup: () => () => h(SimpleGridResponsiveColumnsDemo) }),
}

export const RowAndColumnGap: Story = {
  render: () => ({ setup: () => () => h(SimpleGridRowAndColumnGapDemo) }),
}
