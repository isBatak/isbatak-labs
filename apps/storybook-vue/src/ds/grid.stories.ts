import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import GridDemo from "@isbatak/compositions/ds/vue/grid/usage"
import GridColSpanDemo from "@isbatak/compositions/ds/vue/grid/col-span"
import GridInlineDemo from "@isbatak/compositions/ds/vue/grid/inline"
import GridSpanningColumnsDemo from "@isbatak/compositions/ds/vue/grid/spanning-columns"
import GridTemplateAreasDemo from "@isbatak/compositions/ds/vue/grid/template-areas"

const meta = {
  title: "DS/Grid",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(GridDemo) }),
}

export const ColSpan: Story = {
  render: () => ({ setup: () => () => h(GridColSpanDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(GridInlineDemo) }),
}

export const SpanningColumns: Story = {
  render: () => ({ setup: () => () => h(GridSpanningColumnsDemo) }),
}

export const TemplateAreas: Story = {
  render: () => ({ setup: () => () => h(GridTemplateAreasDemo) }),
}
